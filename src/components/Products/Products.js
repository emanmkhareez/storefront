import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { changeItem } from '../../Redux/products/ProductAction';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        maxHeight: 400,

    },
    media: {
        height: 200,
    },
});
function Product(props) {
    const classes = useStyles()
    return (
        <>
        {/* render the data from redux state after converte the state to props */}
            {props.products.activeProducts.map(element => {
                return <Card className={classes.root} style={{ display: 'inline-block', marginLeft: '25%', height: '5%', width: '40%', marginTop: '3%' }}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={element.image}
                            title={element.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {element.name} - ${element.price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {element.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            })}
        </>
    )
}
//these step to get hold of the redux state and 
//how do we dispatch an action from within react components

//1-the state from redux store is mapped to our commponent props 
const MapStateToProps = state => ({
    products: state.products

})
//2-this Object to dispatch the action creator from react
const mapDispatchToProps = {
    changeItem,

}
//3- connect method--> to connect these tow function with our react commponent


export default connect(MapStateToProps, mapDispatchToProps)(Product)