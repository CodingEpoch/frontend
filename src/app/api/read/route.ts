import { cookies } from "next/headers";
import fs from "fs";
import { PDFDocument } from 'pdf-lib';
require("dotenv").config();

const local = process.env.localhost;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const page = parseInt(searchParams.get("page") || "1", 10);
    
    const cookie = cookies();
    const token = cookie.get("token")?.value;
    const response = await fetch(`${local}/kindle/api/read/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      if (!fs.existsSync(data.data)) {
        return new Response("File not found", { status: 404 });
      }

      const fileBuffer = fs.readFileSync(data.data);
      const pdfDoc = await PDFDocument.load(fileBuffer);
      
      const totalPages = pdfDoc.getPageCount();

      if (page < 1 || page > totalPages) {
        return new Response("Invalid page number", { status: 400 });
      }

      const createDoc = await PDFDocument.create();
      const [copiedPage] = await createDoc.copyPages(pdfDoc, [page - 1]);
      createDoc.addPage(copiedPage);

      const pdfBytes = await createDoc.save();

      return new Response(pdfBytes, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `inline; filename="page_${page}.pdf"`,
          "X-Total-Pages": totalPages.toString(),
        },
      });
    } else {
      return new Response("Failed to fetch book data", { status: response.status });
    }
  } catch (error) {
    console.error(error);
    return new Response("An error occurred", { status: 500 });
  }
}