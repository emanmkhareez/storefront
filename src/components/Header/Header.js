import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

// import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
// import { MenuIcon } from '@material-ui/icons/Menu'
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles({
//     root: {
//         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//         border: 0,
//         borderRadius: 3,
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//     },
// });

function Header(props) {
    // const classes = useStyles();

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Haneen's Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">
                            <HomeIcon></HomeIcon>
                            Home
                        </Nav.Link>
                    </Nav>
                    <Button color="secondary" onClick={() => { props.show() }}>
                        <ShoppingCartIcon></ShoppingCartIcon>
                        CART({props.cart.length})</Button>
                </Container>
            </Navbar>
            {/* <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                </Toolbar>
            </AppBar> */}
        </div>
    )
}

function mapStateToProps(state) {
    return { cart: state.cart };
}

export default connect(mapStateToProps)(Header);