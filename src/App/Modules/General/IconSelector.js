import React from "react";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import GroupIcon from "@mui/icons-material/Group";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ErrorIcon from "@mui/icons-material/Error";

export const IconType = ({icon, propsIcon}) => {
  switch (icon) {
    case "DeleteIcon":
      return <DeleteIcon {...propsIcon} />;
    case "ModeEditIcon":
      return <ModeEditIcon {...propsIcon} />;
    case "FactCheck":
      return <FactCheckIcon {...propsIcon}/>;
    default:
      return <ErrorIcon />;
  }
};

const IconSelector = (props) => {
  switch (props.icono) {
    case "Sesion":
      return <AccountCircleIcon />;
    case "Cursos":
      return <LocalLibraryIcon />;
    case "Notas":
      return <FactCheckIcon />;
    case "Alumnos":
      return <FormatListBulletedIcon />;
    case "Cargar Notas":
      return <UploadFileIcon />;
    case "Cargar Alumnos":
      return <UploadFileIcon />;
    case "Compañeros":
      return <GroupIcon />;
    default:
      return <ErrorIcon />;
  }
};

export default IconSelector;
