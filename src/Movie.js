import React from "react";
import { Card } from "react-bootstrap";


class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    // console.log(this.props.movies);
    return(
      <Card className='Card'  style={{ width: '50vh' }}>
    
    <Card.Body>       
      <Card.Img src = {`https://image.tmdb.org/t/p/w500/${this.props.movies[0].pic}`} />
      <Card.Text>
      Movie Filmed Here:  {this.props.movies[0].title}     
      </Card.Text>
      <Card.Text>
       {this.props.movies[1].title}      
      </Card.Text>
      <Card.Text>
       {this.props.movies[2].title}      
      </Card.Text>
      
    </Card.Body>
  </Card>
    )
  }
  
};

export default Movie