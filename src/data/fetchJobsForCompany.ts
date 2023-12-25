import type { Job } from './types';

export const fetchJobsForCompany = async (company: any) => {
  const response = await fetch(company.jobsFetchUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();

  return company.getJobsFromResponse(json) as Job[];
};
