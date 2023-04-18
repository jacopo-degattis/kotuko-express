import request from 'supertest';
import dotenv from 'dotenv';
import app from '../src/main';
import http from 'http';
import GuardianService from '../src/services/guardian.service';

dotenv.config()

let server: http.Server;
let agent: request.SuperAgentTest;
const guardian = new GuardianService();

beforeEach((done) => {
  server = app.listen(4000, () => {
     agent = request.agent(server);
     done();
  });
});

afterEach((done) => {
  server && server.close(done);
});


describe('GET /lifeandstyle', () => {

  it('should return a RSS feed as XML', async () => {
    const res = await agent.get('/lifeandstyle').send();
    expect(res.statusCode).toBe(200);
  })

  it('should return 400 status code', async() => {
    const res = await agent.get('/-lifeandstyle').send();
    expect(res.statusCode).toBe(400);
  })

  it('should return 400 status code', async() => {
    const res = await agent.get('/lifeandstyle-').send();
    expect(res.statusCode).toBe(400);
  })

  it('should return 404 status code', async() => {
    const res = await agent.get('/life-style').send();
    expect(res.statusCode).toBe(404);
  })

  it('should return a list of news from The Guardian API', async () => {
    const res = await guardian.getSection('lifeandstyle');
    expect(res.status).toBe(200);
    expect(res.data.response).toHaveProperty('results');
    expect(res.data.response.results.length).toBeGreaterThan(0);
  })

})
