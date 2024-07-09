import Image from "next/image";
import { fetchBooks } from "./book";
import BookListItem from "./Item";
import styles from "./Main.module.css";
import Link from "next/link";
export default async function BookListMain({books}) {
  return (
    <section className={styles.section}>
      <section className={styles.bookSection}>
        {books.map((value) => (
          <BookListItem data={value} />
        ))}
      </section>
    </section>
  );
}
