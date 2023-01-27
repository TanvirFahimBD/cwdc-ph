import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useUser } from "../../contexts/ProductProvider";
import { Button } from "react-bootstrap";

const Header = () => {
  const { user, setUser, logOut, loading, setLoading } = useUser();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="fw-bold text-primary">
          <Link to="/" className=" text-decoration-none">
            TOP NEWS
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {!user.uid && <Nav.Link>Login</Nav.Link>}
            {user.uid && (
              <>
                <Nav.Link className="mt-2">
                  {user.displayName ? user.displayName : " Profile"}
                </Nav.Link>
                {user.displayName && (
                  <img
                    className=""
                    src={user.displayName ? user.displayName : ""}
                    alt=""
                  />
                )}
                <Button onClick={handleLogOut}>Logout</Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
