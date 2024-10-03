import styles from "../page.module.css";

import CharacterInfo from "../../components/CharacterInfo";
import CharacterStats from "../../components/CharacterStats";

export default function CharacterSheet() {
  return (
    <>
      <h1>Character Sheet</h1>
      <div className={styles.sheetGridContainer}>
        <div className={styles.leftPane}>
          <CharacterInfo />
        </div>
        <div className={styles.rightPane}>
          <CharacterStats />
        </div>
      </div>
    </>
  );
}
