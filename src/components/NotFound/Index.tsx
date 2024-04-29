import styles from './NotFoundBlock.module.scss';

export default function NotFoundBlock() {
  return (
    <div>
      <h1 className={styles.root}>
        <span>😞</span>
        <br />
        Not found
      </h1>
    </div>
  );
}
