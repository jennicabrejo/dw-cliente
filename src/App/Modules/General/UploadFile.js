import React, { useState, useEffect } from "react";
import { styled } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Stack from "@mui/material/Stack";
import Tooltip from "@material-ui/core/Tooltip";
import * as XLSX from "xlsx";

const Input = styled("input")({
  display: "none",
});

export default function UploadFile(props) {
  //States
  const [file_, setFile] = useState(null);
  const [json, setJson] = useState([]);

  // Funciones
  const upload = (e) => {
    if (e.target.files?.length) {
      const file = e.target?.files[0];
      setFile(file);
      e.target.value = null;
    } else {
      console.log("Err: ", e.target);
    }
  };

  useEffect(() => {
    if (file_) {
      let fileRender = new FileReader();
      fileRender.onload = (e) => {
        let data = e.target.result;
        let workbook = XLSX.read(data, { type: "binary" });
        workbook.SheetNames.forEach((name) => {
          let sheetJson = XLSX.utils.sheet_to_json(workbook.Sheets[name]);
          setJson(sheetJson);
        });
      };
      fileRender.readAsBinaryString(file_);
    }
    // eslint-disable-next-line
  }, [file_]);

  useEffect(() => {
    if (json.length) {
      props.jsonResult(json);
    }
    // eslint-disable-next-line
  }, [json]);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="icon-button-file">
        <Input
          key={"inputfilexlsx"}
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          id="icon-button-file"
          type="file"
          onChange={upload}
        />
        <Tooltip title="Cargar XLSX">
          <IconButton
            key={"ibutonupload"}
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <UploadFileIcon />
          </IconButton>
        </Tooltip>
      </label>
    </Stack>
  );
}
