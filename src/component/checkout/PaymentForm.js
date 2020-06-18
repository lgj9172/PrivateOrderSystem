import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PictureChangeDeleteButton from './PictureChangeDeleteButton';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Grid style={{height: "100"}}>
        <Typography variant="h6">
          이미지 업로드
        </Typography>
      </Grid>
      <PictureChangeDeleteButton/>
    </React.Fragment>
  );
}