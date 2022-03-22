import React from "react";
import { Card } from "react-bootstrap";

class Locard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };  

  render() {
    return(
      <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>{this.props.city}</Card.Title>
      <Card.Text>
      Latitude: {this.props.lat}
      </Card.Text>

      <Card.Text>
      Longitude:{this.props.lon}
      </Card.Text>
      
    </Card.Body>
  </Card>
    )
  }
};

export default Locard