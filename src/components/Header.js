import React from 'react';
import Button from './Button';


const Header = ({title, onAdd, showAdd}) => {
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color = {showAdd ? 'Red' : 'Green'} text = {showAdd ? 'Close' : 'Add'} myClick = {onAdd}/>
        </header>
    );
};

//To handle default props passed in
Header.defaultProps = {
    title: 'DEFAULT STUFF',
}


export default Header;

//----------------------------------------------------------------------------
//TAKING AND USING PROPS
//Can take in props and declare them this way as well
// const Header = (props) => {
//     return (
//         <header>
//             <h1>{props.title}</h1>
//         </header>
//     );
// };

//Prop types for better code
//type impt for import PropTypes from 'prop-types'; at the top

//----------------------------------------------------------------------------
//PROP TYPES TO REQUIRE FROM PROP
//It will still render if given a number but will give a warning in the console.
//can also chain .isRequired
//So title: PropTypes.string.isRequired,
// Header.propTypes = {
//     title: PropTypes.string,
// }

//----------------------------------------------------------------------------
//STYLING USUALLY THROUGH THE CSS FILE BUT CAN DO INSIDE THE ELEMENTS
//DYNAMIC STYLING IS LIKE BELOW
//<p style={{color: 'red', backgroundColor: 'black'}}>Hello</p>

//OPTION 2 - create a const and apss it in like above, but only use single braces like this {headingStyle}
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }

