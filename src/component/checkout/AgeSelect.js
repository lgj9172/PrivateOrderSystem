import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(200),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [id, name, label] = [props.id, props.name, props.label];
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl} fullWidth>
        <InputLabel id={"label"}>{label}</InputLabel>
        <Select
          labelId="label"
          id={id}
          name={name}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>선택</em>
          </MenuItem>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"6"}>6</MenuItem>
          <MenuItem value={"7"}>7</MenuItem>
          <MenuItem value={"8"}>8+</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
    </div>
  );
}