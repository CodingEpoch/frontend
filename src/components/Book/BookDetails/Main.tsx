import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "./Main.module.css";
import Link from "next/link";
import reuse from "../../../app/reusable.module.css";
const DynamicLibraryButton = dynamic(() => import("./LibraryButton"), {
  ssr: false,
});
export default function BookDetailsMain({ data }) {
  return (
    <section className={styles.section}>
      <article>
        <Link href={`/genre/${data.genre}`}>
          <Image src={"/left-arrow.svg"} alt="go back" height={50} width={50} />
        </Link>
      </article>
      <article className={styles.article}>
        <div>
          <Image
            src={`/pdfimages/${data.coverFileName}`}
            alt="Cover Image"
            height={250}
            width={200}
          />
        </div>
        <div className={styles.headerContainer}>
          <h3>{data.title}</h3>
        </div>
        <div className={styles.headerContainer}>
          <h4>By {data.author}</h4>
        </div>
        <div className={styles.headerContainer}>
          <h4>{data.ratingAverage.toFixed(2)} Stars</h4>
        </div>
        <Link href={`/read/${data.id}`} className={styles.buttonContainer}>
          <button className={reuse.buttonReverse}>Read</button>
        </Link>
        <div className={styles.buttonContainer}>
          <DynamicLibraryButton id={data.id} exists={data.inLibrary} />
        </div>
      </article>
      <article className={styles.article}>
        <div className={styles.headerContainer}>
          <h4>You rated this {data.userRating} stars</h4>
        </div>
        <div className={styles.buttonContainer}>
          <Link href={`/notes/book/${data.id}`} className={reuse.link}>
            <button className={`${reuse.buttonStandard}`}>Notes</button>
          </Link>
        </div>
      </article>
    </section>
  );
}
