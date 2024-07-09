import BookListMain from "@/components/Book/BookList/Main";
import { fetchGenre } from "./api";
import BookListLayout from "./listlayout";
import dynamic from "next/dynamic";
const DynamicBookListMain= dynamic(() => import('../../../components/Book/BookList/Main'), {
    ssr: true
})
export default async function BookListPage({ params }) {
  console.log(params, "BOOKLISTPAGE");
  const data = await fetchGenre(params.id);
  return (
    <BookListLayout>
      <DynamicBookListMain books={data} />
    </BookListLayout>
  );
}
