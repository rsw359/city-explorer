import React from "react";
import { Card } from "react-bootstrap";


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    console.log('weathercard',this.props.weatherData);
    return(
      <Card className='Card'  style={{ width: '50vh' }}>
    
    <Card.Body>       
      
      <Card.Text>
      Today's Weather: {this.props.weatherData[0].description}
      Today's Date:    {this.props.weatherData[0].date}
      </Card.Text>
      
    </Card.Body>
  </Card>
    )
  }
};

export default Weather