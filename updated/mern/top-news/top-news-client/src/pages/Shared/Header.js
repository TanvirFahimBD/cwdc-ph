import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useUser } from "../../contexts/AuthProvider";
import { Button } from "react-bootstrap";

const Header = () => {
  const { user, setUser, logOut } = useUser();

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
            {!user.uid && (
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            )}
            {user.uid && (
              <>
                <Link to="/profile" className="m-2 text-decoration-none">
                  {user.displayName ? user.displayName : " Profile"}
                </Link>
                {user.displayName && (
                  <img
                    className=""
                    src={user.displayName ? user.displayName : ""}
                    alt=""
                  />
                )}
                <Link to="/login">
                  <Button onClick={handleLogOut}>Logout</Button>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
