import Image from "next/image";
import { retrieveDetails } from "./book";
import styles from "./Item.module.css";
import Link from "next/link";
export default async function BookListItem({ data }: any) {
  return (
    <article className={styles.article}>
      <input type="hidden" name={data.id} />
      <div>
        <Image
          className={styles.image}
          alt="Cover image"
          height={250}
          width={200}
          src={`/pdfimages/${data.coverFileName}`}
        />
      </div>
      <div>
        <div className={styles.headerContainer}>
          <h3>{data.title}</h3>
        </div>
        <div className={styles.headerContainer}>
          <h4>{data.author}</h4>
        </div>
        <div className={styles.headerContainer}>
          <h4>{data.ratingAverage.toFixed(2)}</h4>
        </div>
        <div className={styles.headerContainer}>
          <h4>{data.publishYear}</h4>
        </div>
        <div className={styles.headerContainer}>
          <Link href={`/books/${data.id}`}>
            <button className={styles.button}>
              Details
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
