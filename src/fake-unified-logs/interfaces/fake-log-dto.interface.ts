export interface FakeLogDto {
  applicationType: 'Processes' | 'Services' | 'Interfaces';
  domain: string;
  content: {
    inputPayload: string;
    payload: string;
    context: {
      elpased: number;
      isError: '0' | '1';
      eCode: string;
      eDescription: string;
      nCode: string;
      nDescription: string;
      businessKeyGroups: [object] | '';
    };
  };
  requestMethod: 'GET' | 'POST' | 'PUT';
  rawRequestUri: string;
}
