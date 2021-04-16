import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

//import AmenitiesSection
import AmenitiesSection from './components/AmenitiesSection.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    //set a starting state so things will render
    //this.state =
  }

  // //as soon as the component mounts, call the getAmenities function
  // componentDidMount() {
  //   console.log('Mounted');
  //   // this.getAmenities();
  // }


  //function that will send a GET request for the propID data and populate the state
  getAmenities() {
    //get the url of the webpage
    const url = window.location.href;
    console.log('URL', url);
    //get the propertyID from this url
    let propID = url.split('/')[3];
    //send GET to /photos/${propID}
    axios.get(`/amenities/${propID}`)
      .then((result) => {
        console.log('FETCH RESULT', result.data);
        // this.setState({
        //   amenities: result.data
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  }



  render() {
    return (
      <div className='main'>
        Ayo
        <AmenitiesSection />
      </div>
    );
  }

}


ReactDOM.render(<App />, document.getElementById('Amenities'));