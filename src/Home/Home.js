import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UncontrolledExample from './Slider';
import GroupExample from './Card';

function BasicExample() {
  return (
   <>
    <Navbar bg="secondary"   expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-white fw-bold'>DeSiTeK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border border-white' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='text-white fw-bold'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white fw-bold'>Gallary</Nav.Link>
            <Nav.Link href="#link" className='text-white fw-bold' to="">About</Nav.Link>
            <Nav.Link href="#link" className='text-white fw-bold'>Contact</Nav.Link>
            {/* <NavDropdown title="More" className='' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    <UncontrolledExample/>
    <h1 className='my-4'>Our Jurney</h1>
    <GroupExample />
   </>
  );
}

export default BasicExample;