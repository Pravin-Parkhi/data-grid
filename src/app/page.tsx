"use client";

import { useState } from "react";
import DataGrid from "./components/DataGrid";
import { FILE_LIST } from "./mock-data/file-list";
import { File } from "./models/file";
import styles from "./page.module.css";

export default function Home() {
  const [fileList, setFileList] = useState<File[]>(FILE_LIST as File[])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <DataGrid data={fileList} />
      </main>
    </div>
  );
}
