import React from "react";
import { Card } from "react-bootstrap";

class Locard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    let cardMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=10`
    return(
      <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Img src={cardMap}/>
        
      
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