import React from 'react'
import {Navbar,Container,Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          
          <nav >
            <Link to="/" className=" text-sm font-normal text-white no-underline "> Home &nbsp;</Link> 
            <Link to="/aboutus" className=" text-sm font-normal text-white no-underline" >About Us &nbsp;</Link>
            <Link to="/n" className=" text-sm font-normal text-white no-underline">New Student &nbsp;</Link>
            
            </nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
        </Container>
      </Navbar>
  )
}

export default Header