export interface FakeLogDto {
  applicationType: 'Process' | 'Service' | 'Interface';
  domain: string;
  content: {
    inputPayload: string;
    payload: string;
    context: {
      elapsed: number;
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
