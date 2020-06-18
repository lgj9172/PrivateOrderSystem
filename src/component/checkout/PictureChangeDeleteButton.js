import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    hidden: {
        display: 'none'
    },
}));

export default function OutlinedButtons() {
    const classes = useStyles();
    const [fileName, setFileName] = React.useState(""); // 파일 이름
    const [imgBase64, setImgBase64] = React.useState(""); // 파일 base64
    const [imgFile, setImgFile] = React.useState(null);	// 파일	바이너리
    const [pictureSrc, setPictureSrc] = React.useState("https://ryan-form-app.firebaseapp.com/static/media/ryan_photo_child01.0fb407ea.jpg");
    const handleDeleteClick = () => {
        setFileName("");
        setPictureSrc("https://ryan-form-app.firebaseapp.com/static/media/ryan_photo_child01.0fb407ea.jpg");
    };
    const sendPicture = () => {
        // const url = '/api/customers';
        // const formData = new FormData();
        // formData.append('image', file);

        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // }
        // return post(url, formData, config)
    };
    const handleFileChange = (e) => {
        let reader = new FileReader();
        reader.onloadend = () => { // 읽어서 모두 버퍼에 저장된다면
          const base64 = reader.result; // 읽은 결과를
          if (base64) {
            setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
            setPictureSrc(base64.toString());
          }
        };
        if (e.target.files[0]) { // 가장 첫번째 파일에 대해서
          reader.readAsDataURL(e.target.files[0]); // 읽어서 버퍼에 저장
          setImgFile(e.target.files[0]); // 파일 상태 업데이트
        }
    };
    return (
    <React.Fragment>
        <Grid container>
            <Grid item xs={12}>
                <Typography subtitle={1}>
                    주인공 사진
                </Typography>
            </Grid>
            <Grid item xs={12} style={{textAlign: "center", backgroundColor:"rgba(237, 237, 237, 1)", height: 300}}>
                <img id="cover1_img" src={pictureSrc} style={{height: 300}}/>
            </Grid>
            <Grid container item xs={12} justify="center" alignItems="center">
                <div className={classes.root}>
                    <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={imgFile} value={fileName} onChange={handleFileChange} />  
                    <label htmlFor="raised-button-file">
                        <Button variant="outlined" component="span" name="file">
                            {fileName === ''? '추가' : '변경'}
                        </Button>
                    </label>
                    <Button variant="outlined" onClick={handleDeleteClick}>삭제</Button>
                </div>  
            </Grid>
        </Grid>
    </React.Fragment>
  );
}