import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <main>
        <h1>Home page</h1>
        <Link href="/characterSheet">Character Sheet</Link>
      </main>
    </>
  );
}
