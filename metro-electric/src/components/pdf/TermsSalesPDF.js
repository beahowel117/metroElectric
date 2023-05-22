import React, { useState } from "react";
import pdf from "../../pdf/TermsSales.pdf";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Box } from "@mui/material";

function TermsSalesPDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  console.log({ numPages });
  return (
    <Box display='flex' justifyContent='center'>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages)).map((page, idx) => (
          <Page pageNumber={idx + 1} scale='1.5' />
        ))}
      </Document>
    </Box>
  );
}

export default TermsSalesPDF;
