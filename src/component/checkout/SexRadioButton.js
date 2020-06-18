import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function SexRadioButton(props) {
    const [id, name, label] = [props.id, props.name, props.label];
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup row aria-label="position" id={id} name={name} defaultValue="top">
            {/* <FormControlLabel
                value="top"
                control={<Radio color="primary" />}
                label="Top"
                labelPlacement="top"
            />
            <FormControlLabel
                value="start"
                control={<Radio color="primary" />}
                label="Start"
                labelPlacement="start"
            />
            <FormControlLabel
                value="bottom"
                control={<Radio color="primary" />}
                label="Bottom"
                labelPlacement="bottom"
            /> */}
            <FormControlLabel value="boy" control={<Radio color="primary" />} label="남자" />
            <FormControlLabel value="girl" control={<Radio color="primary" />} label="여자" />
            </RadioGroup>
        </FormControl>
    );
}