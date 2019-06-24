import React from 'react';
import './App.css';
import data from './data/data'
import SliderImage from './Containers/SlideImage/SliderImage';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    properties: data.Images,
    clicked: false
  };



  imagesToShowOnScreenHandler = (num) => {
    
    this.setState(state => {
      
      let newArr = state.properties
        newArr.map((val,key) => {
          if (key < num) {
            return state.properties[key].currentElement = true
          }
          else {
            return state.properties[key].currentElement = false
          }
        
      })
      return {
        properties: newArr,
        clicked: true
      };
    });
  };

  
  nextProperty = () => {
    this.setState(state => {
      
      let newArr = state.properties
        newArr.map((val,key) => {
          if (state.properties[key].currentElement) {
            return state.properties[key].currentElement = false
          }
          else {
            return state.properties[key].currentElement = true
          }
        
      })
      return {
        properties: newArr,
        clicked: true
      };
    });
  }

  prevProperty = () => {
    this.setState(state => {
      
      let newArr = state.properties
        newArr.map((val,key) => {
          if (!state.properties[key].currentElement) {
            return state.properties[key].currentElement = true
          }
          else {
            return state.properties[key].currentElement = false
          }
        
      })
      return {
        properties: newArr,
        clicked: true
      };
    });
  }

  render(){
    return (
      <>      
        <button 
          onClick={() => this.prevProperty()} 
          disabled={!this.state.clicked}
          className="previous round">&#8250;</button>
        <button 
          onClick={() => this.nextProperty()} 
          disabled={!this.state.clicked}
          className="next round">&#8249;</button>
<br/>
        <SliderImage data={this.state} imagesToShowOnScreen={this.imagesToShowOnScreenHandler}/>
      
      </>
      
    );
  }
}

export default App;

App.propTypes = {
  imagesToShowOnScreen: PropTypes.number.isRequired
}

App.defaultProps = {
  imagesToShowOnScreen: 0
};