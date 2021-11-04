import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Stack from "@mui/material/Stack";
import * as XLSX from "xlsx";

const Input = styled("input")({
  display: "none",
});

export default function UploadFile() {
  //States
  const [file_, setFile] = useState(null);

  // Funciones
  const upload = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  useEffect(() => {
    if (file_) {
      let fileRender = new FileReader();
      fileRender.onload = (e) => {
        let data = e.target.result;
        let workbook = XLSX.read(data, { type: "binary" });
        console.log("eee", workbook);
        workbook.SheetNames.forEach((name) => {
          let sheetJson = XLSX.utils.sheet_to_json(workbook.Sheets[name]);
          console.log(sheetJson);
        });
      };
      fileRender.readAsBinaryString(file_);
    }
  }, [file_]);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="icon-button-file">
        <Input
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          id="icon-button-file"
          type="file"
          onChange={upload}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <UploadFileIcon />
        </IconButton>
      </label>
    </Stack>
  );
}
