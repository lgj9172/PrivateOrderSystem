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
  const [familly, setFamilly] = React.useState('');

  const handleChange = (event) => {
    setFamilly(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl} fullWidth>
        <InputLabel id={"label"}>{label}</InputLabel>
        <Select
          labelId="label"
          id={id}
          name={name}
          value={familly}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>선택</em>
          </MenuItem>
          <MenuItem value={"엄마"}>엄마</MenuItem>
          <MenuItem value={"아빠"}>아빠</MenuItem>
          <MenuItem value={"할머니"}>할머니</MenuItem>
          <MenuItem value={"할아버지"}>할아버지</MenuItem>
          <MenuItem value={"외할머니"}>외할머니</MenuItem>
          <MenuItem value={"외할아버지"}>외할아버지</MenuItem>
          <MenuItem value={"남동생"}>남동생</MenuItem>
          <MenuItem value={"여동생"}>여동생</MenuItem>
          <MenuItem value={"형"}>형</MenuItem>
          <MenuItem value={"오빠"}>오빠</MenuItem>
          <MenuItem value={"누나"}>누나</MenuItem>
          <MenuItem value={"언니"}>언니</MenuItem>
          <MenuItem value={"이모"}>이모</MenuItem>
          <MenuItem value={"이모부"}>이모부</MenuItem>
          <MenuItem value={"삼촌"}>삼촌</MenuItem>
          <MenuItem value={"외숙모"}>외숙모</MenuItem>
          <MenuItem value={"고모"}>고모</MenuItem>
          <MenuItem value={"고모부"}>고모부</MenuItem>
          <MenuItem value={"작은아빠"}>작은아빠</MenuItem>
          <MenuItem value={"작은엄마"}>작은엄마</MenuItem>
          <MenuItem value={"큰아빠"}>큰아빠</MenuItem>
          <MenuItem value={"큰엄마"}>큰엄마</MenuItem>
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
    </div>
  );
}