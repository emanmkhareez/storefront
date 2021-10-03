import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';



function Header(props) {


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">
                            <HomeIcon></HomeIcon>
                            Home
                        </Nav.Link>
                    </Nav>
                    <Button color="secondary" >
                        <ShoppingCartIcon></ShoppingCartIcon>
                        CART</Button>
                </Container>
            </Navbar>
           
        </div>
    )
}

// function mapStateToProps(state) {
//     return { cart: state.cart };
// }

// export default connect(mapStateToProps)(Header);
export default  Header
