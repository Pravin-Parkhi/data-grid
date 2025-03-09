"use client";

import DataGrid from "./components/DataGrid";
import { FILE_LIST } from "./mock-data/file-list";
import { File } from "./models/file";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <DataGrid data={FILE_LIST as File[]} />
      </main>
    </div>
  );
}
