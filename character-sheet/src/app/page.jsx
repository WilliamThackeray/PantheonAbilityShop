import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <main>
        <h1>Home page</h1>
        <Link href="/dashboard">Character Sheet</Link>
      </main>
      <footer></footer>
    </div>
  );
}
