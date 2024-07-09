'use client'
import { useState } from "react"
import { Document, Page } from "react-pdf"
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
export default function ReadBookViewer({pdf, setNumPages, page}){

    function onLoad({page}){
        setNumPages(page)
    }

    return(
        <section>
            <Document file={pdf} onLoadSuccess={onLoad} >
                <Page pageNumber={page} />
            </Document>
        </section>
    )
}