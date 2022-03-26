import React from "react";
import { Card } from "react-bootstrap";


class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    console.log(this.props.movies);
    return (

      this.props.movies.map((item,idx) => (
        <Card key={idx}>
          <Card.Body>
           {item.pic ?  <Card.Img src = {`https://image.tmdb.org/t/p/w500/${item.pic}`}/> : ''}
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {item.description}
            </Card.Text>
            <Card.Text>
              Released: {item.release}
            </Card.Text>
            <Card.Text>
              Popularity: {item.popularity}
            </Card.Text>
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card>
    )))
  };
};

export default Movie;
