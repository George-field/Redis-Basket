/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export const Product = ({id, name, image, price, description, onBtnClick, btnText}) => {
    const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    });

    const classes = useStyles();
 
    return (
        
        <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image={image}
            title={name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Typography variant="h5" component="h2">
               {price}
            </Typography>
            <Button size="small" color="primary" onClick={() => {onBtnClick(
                {
                    id : id,
                    name: name,
                    image: image,
                    price: price,
                    description: description
                  }
            )}} >
                {btnText}
            </Button>
        </CardActions>
        </Card>
    );
}