export interface Company {
  name: string;
  jobsFetchUrl: string;
  getJobsFromResponse: (response: any) => Job[];
}

export interface Job {
  id: string;
  company: string;
  title: string;
  date: string;
  location: string;
  description: string;
}
