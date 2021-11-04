import * as React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";

export default function BasicSelect(props) {
  const [item, setItem] = React.useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
    props.currentSelect(event.target);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1 }} style={{ width: "100%" }}>
      <InputLabel id="demo-simple-select-standard-label">Elemento</InputLabel>
      <Select
        name="basicSelect"
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={item}
        onChange={handleChange}
        input={<Input label="Cursos" fullWidth />}
        label="Elemento"
        fullWidth
      >
        {props.items.map((item) => {
          return (
            <MenuItem
              name={item.text}
              value={item.value}
              style={{ width: "100%", justifyContent: "left", paddingLeft: 8 }}
            >
              {item.text}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
