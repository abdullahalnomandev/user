import { Switch } from "@mui/material";
import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar
} from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className="mx-3">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className=" my-2 my-lg-0" style={{ marginLeft: "40%" }}>
              <h6>Filter by:</h6>
              <div className="ps-2">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                /> {" "}
                <label for="html" style={{cursor:'pointer'}}> Male </label> {" "}
                <input type="radio" id="css" name="fav_language" value="CSS" /> {" "}
                <label for="css" style={{cursor:'pointer'}}> Female </label>{" "}
      
                <input
                  type="radio"
                  id="javascript"
                  name="fav_language"
                  value="JavaScript"
                />{" "}
                 <label for="javascript" style={{cursor:'pointer'}}> All</label>

              </div>
            </Nav>
          </Navbar.Collapse>
          <div>
            <Switch />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
