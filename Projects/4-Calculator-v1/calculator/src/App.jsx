import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <input className={styles.display} type="text" />
      <div className={styles.buttonsContainer}>
        <button className={styles.button}>C</button>
        <button className={styles.button}>C1</button>
        <button className={styles.button}>C2</button>
        <button className={styles.button}>C3</button>
        <button className={styles.button}>C4</button>
      </div>
    </div>
  );
}

export default App;
