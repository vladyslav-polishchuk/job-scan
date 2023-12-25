export interface Company {
  name: string;
  jobsFetchUrl: string;
}

export interface Job {
  id: string;
  company: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export const companies = [
  {
    name: 'Microsoft',
    jobsFetchUrl:
      'https://gcsservices.careers.microsoft.com/search/api/v1/search?lc=Poland&p=Software%20Engineering&l=en_us&pg=1&pgSz=20&o=Relevance&flt=true',
    getJobsFromResponse: (response: any): Job[] => {
      const { operationResult } = response;
      const { result } = operationResult;
      const { jobs } = result;

      return jobs;
    },
  },
];
