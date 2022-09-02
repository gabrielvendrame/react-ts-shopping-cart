import { Button, Container, Nav, Navbar as NavbarBs, NavLink } from "react-bootstrap"
import { FaShoppingCart } from 'react-icons/all';

export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                <Button
                    style={{width: "3rem", height: "3rem", margin: "0 auto"}}
                    variant="outline-primary"
                    className="rounded-circle"
                >
                    <FaShoppingCart/>
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                         style={{
                             color: "white",
                             width: "1.5rem",
                             height: "1.5rem",
                             position: "absolute",
                             bottom: 0,
                             right: 0,
                             transform: "translate(25%,25%)"
                         }}></div>
                </Button>
            </Container>
        </NavbarBs>
    )
}
