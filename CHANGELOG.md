# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.4]

## Added
- Add unit tests using Jest library
- Add `Dockerfile` and `docker-compose.yml` files
- Add caching system for 10 minutes using `memory-cache` 

## Changed
- Change `app.listen` location invocation to support new unit tests

## Fixed
- Fix `getSection` to support unit tests

## [1.0.3]

### Added
- Add `eslint` as default codebase linter
- Add regex to match guardin route parameter to be single word or words dash separated list
- Create methods to extract world from a sentence and to convert dates to the RSS support standard RFC-822
- Add `kotuko:wordleScore` inside each item of the rss feed

### Changed

### Fixed

## [1.0.2]

### Added
- Add 'winston' logging library to output debug, error and verbose logs in dedicated files inside 'logs' directory
- Add library to convert JSON to XML data
- Update 'guardian' controller to respond with a XML formatted RSS Feed
- Add logs in the application to report what's going on
- Update 'dev' script to use only `nodemon`

### Changed

### Fixed

## [1.0.1]

### Added
- Add axios as HTTP library
- Added guardian service to act as a wrapper for the Guardian API
- Added 'section' parameter to guardian routing.
- Added model to describe guardian sections' API response

### Fixed
- Fix .env file not loading globally using the `-r dotenv/config` value inside script

### Changed
- Improve guardian routing with try/catch to properly handle errors

## [1.0.0]

### Added

- Typescript & express/node types
- Script to build, launch and test program in local environment
- .env.template file with necessary environment variables