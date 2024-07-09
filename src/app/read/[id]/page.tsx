import PDFViewer from "@/components/Book/ReadBook/ReadBook";
import dynamic from "next/dynamic";
const DynamicPDFViewer = dynamic(() => import('../../../components/Book/ReadBook/ReadBook'),{
    ssr: false
})
export default function ReadBook({ params }: { params: { id: string } }) {
  return <DynamicPDFViewer bookId={params.id} />;
}