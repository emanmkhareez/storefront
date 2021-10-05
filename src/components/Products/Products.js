import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getItems, changeBasketItems, addItemsToCart } from '../../store/actions/action';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        maxHeight: 400,

    },
    media: {
        height: 200,
    },
});

function Products(props) {
    const classes = useStyles();

    function handleAdding(element) {
        props.addItemsToCart(element);
        props.changeBasketItems(element);
        props.getItems(props.category.name);
    }

    return (
        <>
            {props.products.activeProducts.map(element => {
                return <Card className={classes.root} style={{ display: 'inline-block', marginLeft: '9%', height: '5%', width: '40%', marginTop: '3%', marginBottom: '3%' }}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={`https://source.unsplash.com/random?${element.name}`}
                            title={element.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {element.name} - ${element.price}
                            </Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                {element.description}
                            </Typography> */}
                            <Typography variant="body2" color="textPrimary" component="h3" >
                                Items In Stock: ({element.inStock})
                            </Typography>
                            <Typography variant="body2" color="textPrimary" component="h3" >
                                Items In Stock: ({element.basketCount})
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => { handleAdding(element) }}>
                            <AddShoppingCartIcon></AddShoppingCartIcon>
                            Add To Cart
                        </Button>
                    </CardActions>
                </Card>
            })}

        </>
    )
}
function mapStateToProps(state) {
    return {
        category: state.categories.activeCategory,
        products: state.products,
        cartProducts: state.cart
    };
}
const mapDispatchToProps = {
    getItems,
    addItemsToCart,
    changeBasketItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)