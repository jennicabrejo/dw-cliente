import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from '@mui/icons-material/Send';
import Tooltip from "@material-ui/core/Tooltip";
import UploadFile from "./UploadFile";

export default function TableHeader(props) {
  return (
    <Toolbar>
      <Box display="flex" flexGrow={1}>
        <Typography variant="h6" id="tableTitle" component="div">
          {props.title || ""}
        </Typography>
      </Box>

      {props.upload && (
        <UploadFile jsonResult={(json) => props.setRows(json)} />
      )}
      {props.send && (
        <Tooltip title="Subir notas">
          <IconButton onClick={() => props.sendAction()}>
              <SendIcon/>
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
