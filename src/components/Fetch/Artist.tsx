import React from "react";
import useGetArtistService from "./useGetArtistService";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Row,Col } from "react-bootstrap";
import { Song } from "../../types/types";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Artists: React.FC<{}> =() => {
const service = useGetArtistService();
const classes = useStyles();
console.log(service,"DATA")
return(
    <div>
        {service.status === 'loading' && <div>Loading...</div>}

      {
        service.data.map((data:Song) => {
            return <h1>{data.title}</h1>
})}
      {service.status === 'error' && (
        <div>The backend failed u</div>
      )}
      
    </div>
)
}
export default Artists