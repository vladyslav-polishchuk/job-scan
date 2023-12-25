import styles from './JobsContainer.module.css';
import { fetchJobsForCompany } from '@/data/fetchJobsForCompany';
import { companies } from '@/data/companies';
import Job from './Job';

export default async function JobsContainer() {
  const jobs = (await Promise.all(companies.map(fetchJobsForCompany))).flat();

  return (
    <div className={styles.jobs}>
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}
