import styles from './Job.module.css';
import type { Job } from '@/data/types';

interface JobPros {
  job: Job;
}

export default function Job(props: JobPros) {
  const { job } = props;
  const date = new Date(job.date).toDateString();

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h2>{job.title}</h2>
        <span>{job.company}</span>
      </div>

      <span>{date}</span>
      <span>{job.location}</span>
      {/* <div dangerouslySetInnerHTML={{ __html: job.description }}></div> */}
    </div>
  );
}
