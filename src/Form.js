'use-strict'
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Locard from './Locard'
import './form.css'
import ErrorModal from './Error'
const API_KEY = process.env.REACT_APP_LOCATIONIQ_API_KEY;


class Explorer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      location: {},
      errMessage: '',
      modalDataState: false,
    }
  }


  openModal = () => {
    console.log('before', this.state)
    this.setState({
      modalDataState: true,

    });
  }

  hideModal = () => {
    this.setState({
      modalDataState: false,
    });
  }

  handleChange = (e) => {
    this.setState({
      location: e.target.value
    });
    console.log(this.state.location);
  }

  getLoc = async (event) => {
    event.preventDefault()
    try {
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.location}&format=json`);
      console.log(cityData)
      this.setState({ data: cityData.data[0] });
    } catch (e) {
      console.error(e);
      this.setState({
        errMessage: e.message
      })
      
      this.openModal();
      console.log(this.state.errMessage);///state is being set!
      // this.openModal();

    }
  };

  render() {
    return (
      <>
        <Form>
          <Form.Label>
            City Explorer!
          </Form.Label>

          <Form.Control className='input'
            id='input'
            onChange={this.handleChange}
            type='text'
            placeholder='Enter City' >
          </Form.Control>

          <Button variant="primary" type="submit" onClick={this.getLoc}>
            Explore!
          </Button>
        </Form>
        {this.state.data.display_name ? (
          <Locard
            city={this.state.data.display_name}
            lat={this.state.data.lat}
            lon={this.state.data.lon}
          />) : null}

        <ErrorModal
          modalDataState={this.state.modalDataState}
          hideModal={this.hideModal}
          errorCode={this.state.errMessage}//trying to pass err code
        />

      </>

    )
  }
}

export default Explorer;