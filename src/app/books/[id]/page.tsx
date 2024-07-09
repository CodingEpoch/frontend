import { fetchBookDetail } from "./api";
import BookDetailsMain from "@/components/Book/BookDetails/Main";
export default async function BookDetails({ params }) {
  const data = await fetchBookDetail(params.id);
  console.log(data)
  return <BookDetailsMain data={data}/>
}
