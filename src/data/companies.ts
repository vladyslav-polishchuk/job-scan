import type { Company, Job } from './types';

export const companies: Company[] = [
  {
    name: 'Microsoft',
    jobsFetchUrl:
      'https://gcsservices.careers.microsoft.com/search/api/v1/search?lc=Poland&p=Software%20Engineering&l=en_us&pg=1&pgSz=20&o=Relevance&flt=true',
    getJobsFromResponse: (response: any): Job[] => {
      const { operationResult } = response;
      const { result } = operationResult;
      const { jobs } = result;

      // console.log(jobs);

      return jobs.map((job: Record<string, unknown>) => {
        const props = job.properties as Record<string, unknown>;

        return {
          id: job.jobId,
          title: job.title,
          description: props.description ?? '',
          date: job.postingDate,
          location: props.primaryLocation,
          company: 'Microsoft',
        };
      });
    },
  },
];
