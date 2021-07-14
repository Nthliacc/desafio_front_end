import React, { useState } from "react";
import {
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  TextField,
} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Help } from "./styles";

export default function ElementField({ field }) {
  const [category, setCategory] = useState([]);
  const [rating, setRating] = useState([1, 2, 3, 4, 5]);
  const [stateCheck, setStateCheck] = useState(0);

  const type = field.type;

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeCheck = (event) => {
    const valueNumber = Number(event.target.value);

    setStateCheck(valueNumber);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  if (type === "textfield") {
    return (
      <TextField label={field.label} type="text" helperText={field.helpBlock} />
    );
  }
  if (type === "datefield") {
    return (
      <TextField
        label="Data de lançamento"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
  }
  if (type === "checkboxfield") {
    return (
      <FormControl>
        <InputLabel >{field.label}</InputLabel>
        <Select
          multiple
          value={category}
          onChange={handleChange}
          input={<Input/>}
          renderValue={(selected) => (
            <div>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {field.options.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
        <Help>{field.helpBlock}</Help>
      </FormControl>
    );
  }
  if (type === "urlfield") {
    return (
      <TextField label={field.label} type="url" helperText={field.helpBlock} />
    );
  }
  if (type === "ratingfield") {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{field.label}</FormLabel>
        <FormGroup row>
          {rating.map((rat) => (
            <FormControlLabel
              control={
                <Checkbox
                  icon={<StarBorderIcon />}
                  checkedIcon={<StarIcon />}
                  checked={stateCheck >= rat ? true : false}
                  onChange={handleChangeCheck}
                  value={rat}
                  color="primary"
                />
              }
            />
          ))}
        </FormGroup>
        <FormHelperText>{field.helpBlock}</FormHelperText>
      </FormControl>
    );
  }
}
