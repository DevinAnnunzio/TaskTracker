import React from 'react';
import PropTypes from 'prop-types';

//Since it is a component it will not always have the same click

const Button = ({color, text, myClick}) => {
    // function onMakeIt(){
    //     console.log("CLICKED")
    // }
  return(
    <button onClick={myClick} style={{backgroundColor: color}} className='btn'>{text}</button>
    // <button onClick={onMakeIt} style={{backgroundColor: color}} className='btn'>{text}</button>

  );
};

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    myClick: PropTypes.func
}
export default Button;
