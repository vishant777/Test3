import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
class SliderImage extends PureComponent {

    render() {

// console.log(Object.entries(this.props.data.properties).map((valu,keY) => this.props.data.properties[keY])) 
 
        return(
            <>
            <button 
            style={{margin: '0 50%', border: '1px solid black', borderRadius: '12px'}} 
            onClick={() => this.props.imagesToShowOnScreen(4)}>Show Image</button><br/>
            <div className="ParentDiv">
                { this.props.data.clicked ? Object.entries(this.props.data.properties).map((val,keY) => {
                if (this.props.data.properties[keY].currentElement) 
                return (
                    <div className="Main" key={keY}>
                        <div className="ImgDiv">
                            <img src={this.props.data.properties[keY].src} alt='icon'/>
                        </div>
                        <div className="Base">
                            {this.props.data.properties[keY].name}
                        </div>
                    </div>
                    )
                    else {
                        return null
                    } 
                }) : null}
            </div>

        </>
        )
    }
}

export default SliderImage;

SliderImage.defaultProps = {
    properties: []
  };

SliderImage.propTypes = {
    properties: PropTypes.array.isRequired
}

