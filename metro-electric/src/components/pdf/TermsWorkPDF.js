import React, { useState } from "react";
import pdf from "../../pdf/TermsWork.pdf";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Box } from "@mui/material";

function TermsWorkPDF() {
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
          <Box mt='15px'>
            <Page pageNumber={idx + 1} width='95%' height='auto'>
              <span style={{ color: "dark grey" }}>{`- Page ${
                idx + 1
              } of ${numPages}`}</span>
            </Page>
          </Box>
        ))}
      </Document>
    </Box>
  );
}

export default TermsWorkPDF;
