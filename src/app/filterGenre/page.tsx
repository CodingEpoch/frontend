import Link from "next/link";
import { fetchGenre } from "./api";

import reuse from "../../app/reusable.module.css";
export default async function FilterGenre() {
  const data = await fetchGenre();

  return (
    <section className={reuse.page}>
      <article>
        <div className={reuse.pageHeader}>
          <h1>Select Genre</h1>
        </div>
      </article>
      <article>
        {data.map((value) => (
          <div className={`${reuse.itemContainer} ${reuse.mainBC}`}>
            <Link href={`/genre/${value.genre}`}>
              <h4>{value.genre}</h4>
            </Link>
          </div>
        ))}
      </article>
    </section>
  );
}
