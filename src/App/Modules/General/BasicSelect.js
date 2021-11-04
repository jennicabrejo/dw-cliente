import * as React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

export default function BasicSelect() {
  const [item, setItem] = React.useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1 }} style={{ width: "100%" }}>
      <InputLabel id="demo-simple-select-standard-label">Elemento</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={item}
        onChange={handleChange}
        input={<Input label="Cursos" fullWidth />}
        label="Elemento"
        fullWidth
      >
        <MenuItem
          value={10}
          style={{ width: "100%", justifyContent: "left", paddingLeft: 8 }}
        >
          Ten
        </MenuItem>
      </Select>
    </FormControl>
  );
}
