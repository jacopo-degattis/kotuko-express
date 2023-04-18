
export interface IGuardianSection {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    edition: IEdition;
    results: Array<ISectionResult>
  }
}

export interface ISection {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  editions: Array<IEdition>;
}

export interface IEdition extends ISection {
  code: string;
}

export interface ISectionResult {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}