import styles from './HomePageContainer.module.css';
import JobsContainer from './JobsContainer';

export default async function HomePageContainer() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Display BigTech jobs for location:&nbsp;
          <code className={styles.code}>Krakow</code>
        </p>
        <div></div>
      </div>

      <JobsContainer />
    </main>
  );
}
