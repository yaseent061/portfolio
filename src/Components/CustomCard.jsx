import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Animation from './Animation';
import { Col, Row } from 'react-bootstrap';


const  CustomCard=({title,anime})=> {
  return (
    <Col xs={5} className="shadow m-5 d-flex flex-column justify-content-center">
    <h1 className="text-center white">{title}</h1> 
    <Animation animationData={anime}/>
    <Button className="w-100">Info</Button>
    </Col>
  );
}

export default CustomCard;