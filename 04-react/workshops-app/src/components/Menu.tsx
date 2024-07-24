import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../slices/theme";

import "./Menu.css";

const Menu = () => {
    const dispatch = useDispatch();

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand to="/" as={NavLink}>
                    Workshops App
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink}>
                            Home
                        </Nav.Link>
                        <Nav.Link to="/workshops" as={NavLink}>
                            List of workshops
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            href="#"
                            onClick={() => dispatch(toggleTheme())}
                        >
                            Change theme
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
