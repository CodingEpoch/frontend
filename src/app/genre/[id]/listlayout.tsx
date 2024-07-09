import Image from "next/image";
import Link from "next/link";
import styles from './Layout.module.css'
export default function BookListLayout({ children }) {
  return (
    <section>
      <nav className={styles.nav}>
        <Link href={"/filterGenre"}>
          <Image className={styles.image} src={"/filter.svg"} width={50} height={50} alt="filter" />
        </Link>
        <Link href={`/notes/all/`}>
          <Image className={styles.image} src={"/note.svg"} width={50} height={50} alt="notes" />
        </Link>
        <Link href={`/library/`}>
          <Image className={styles.image} src={"/library.svg"} width={50} height={50} alt="library" />
        </Link>
      </nav>
      <main>{children}</main>
    </section>
  );
}
