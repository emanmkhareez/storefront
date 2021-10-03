import React from 'react'
import { Navbar, Container} from 'react-bootstrap';



function Footer() {
   

    return (
        <div>
            <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{ marginLeft:'37%', fontSize:'15px', color: 'GrayText'}}>CopyRights &copy;Eman_Mkhareez 2021</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
           
        </div>
    )
}

export default Footer;