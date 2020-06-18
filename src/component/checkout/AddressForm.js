import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
import SexRadioButton from './SexRadioButton';
import AgeSelect from './AgeSelect';
import FamillySelect from './FamillySelect';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        정보 입력
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="이름"
            fullWidth
            autoComplete="길동"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="성"
            fullWidth
            autoComplete="홍"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SexRadioButton
            required
            id="sex"
            name="sex"
            label="주인공 성별"
            fullWidth
            autoComplete=""
          />
        </Grid>
        <Grid item xs={12}>
          <AgeSelect
            id="age1"
            name="age1"
            label="주인공 나이"
          />
        </Grid>
        
        <img src="https://ryan-form-app.firebaseapp.com/static/media/ryan_info_writtenby.5fe62721.jpg" width="100%" alt=""></img>
        <Grid item xs={12}>
          <TextField
            required
            id="author1"
            name="author1"
            label="글·사진에 들어갈 이름"
            fullWidth
            autoComplete="김태희 정지훈"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="toyName1"
            name="toyName1"
            label="첫번째 장난감 or 반려동물 이름 (제목에 들어가요)"
            fullWidth
            autoComplete=""
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="toyName2"
            name="toyName2"
            label="두번째 장난감 or 반려동물 이름"
            fullWidth
            autoComplete=""
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            id="toyName3"
            name="toyName3"
            label="세번째 장난감 or 반려동물 이름"
            fullWidth
            autoComplete=""
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            id="toyName4"
            name="toyName4"
            label="네번째 장난감 or 반려동물 이름"
            fullWidth
            autoComplete=""
          />
        </Grid>

        <img src="https://ryan-form-app.firebaseapp.com/static/media/ryan_info_family.ae5a1694.jpg" width="100%" alt=""></img>
        <Grid item xs={12}>
          <FamillySelect
            id="familly1"
            name="familly1"
            label="1번에 들어갈 가족"
          />
        </Grid>
        <Grid item xs={12}>
          <FamillySelect
            id="familly2"
            name="familly2"
            label="2번에 들어갈 가족"
          />
        </Grid>
        <Grid item xs={12}>
          <FamillySelect
            id="familly3"
            name="familly3"
            label="3번에 들어갈 가족"
          />
        </Grid>
        <Grid item xs={12}>
          <FamillySelect
            id="familly4"
            name="familly4"
            label="4번에 들어갈 가족"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}