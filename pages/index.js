import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { FileUploader } from '../components/FileUploader';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { Preview } from '../components/Preview';

function Home() {
  const [files, setFiles] = useState([]);
  const onSuccess = (savedFiles) => {
    setFiles(savedFiles)
  };

  return (
    <div className={styles.container}>
      <FileUploader
        onSuccess={onSuccess}
      />
      <Preview files={files} />
      <ToastContainer />
    </div>
  )
}

export default Home;