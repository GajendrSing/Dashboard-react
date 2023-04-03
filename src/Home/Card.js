import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
// import {useState} from "react";
// import ReadMore from './ReadMore';

function GroupExample() {

    // const [ title, setTitle ] = useState({
    //     photo: "", nat: "", tech: ""}
    // )
    // console.log(title, "tt")
    // const handleClick = () => {

    // }

  return (
    <CardGroup className="container">
      <Card className="mx-2">
        <Card.Img variant="top" src="https://www.digitaldeployment.com/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg" />
        <Card.Body>
          <Card.Title>Technology</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Link className="text-decoration-none fw-bold" to='/ReadMore/Technology' > Read More</Link>
        </Card.Footer>
      </Card>
      <Card className="mx-2">
        <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/green-planet-your-hands-save-earth-environment-concept-green-planet-your-hands-environment-concept-116939326.jpg" />
        <Card.Body>
          <Card.Title>Nature</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link className="text-decoration-none fw-bold" to='/ReadMore/Nature'> Read More</Link>
        </Card.Footer>
      </Card>
      <Card className="mx-2">
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <Card.Body>
          <Card.Title>Photography</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Link className="text-decoration-none fw-bold" to='/ReadMore/Photography'> Read More</Link>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;