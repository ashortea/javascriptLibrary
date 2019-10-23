import React, {useState} from 'react';

const PropsDemo = () => {
    const [color, setColor] =useState('white');
    const[backgroundColor, setBackgroundColor] =useState('purple')
    const [borderRadius, setBorderRadius]= useState('5px');
    const [borderStyle, setBorderStyle] =useState('dashed')
    const [display, setDisplay]= useState('inline-block');
    const [width, setWidth]= useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    return(
    <div className ="main">
        <div className="mainDiv">
            <FunctionalComponent string = "will this display?" />
            <FunctionalComponent string = "Props are pretty cool right" />
            <FunctionalComponent string = "You can send data from component..." />
            <FunctionalComponent string = "...to another!" />

            {/* <FunctionalComponent string = "Color Toggle" function={toggleColor} />
            <FunctionalComponent string = "Background Color Toggle" function={toggleBackgroundColor}/>
            <FunctionalComponent string = "Border Radius Toggle" function={toggleBorderRadius} />
            <FunctionalComponent string = "Border Style Toggle" function= {toggleBorderStyle} /> */}

        </div>
    </div>
    )
}

const FunctionalComponent = (props) => {

    return(
        <div>
            <p>{props.string}</p>
        </div>
    )
}

// const toggleBackgroundColor = () => {
//     backgroundColor === 'purple'  ? setBackgroundColor('black'): setBackgroundColor('purple');
    
// };
// const toggleBorderRadius =() =>{
//     borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
// }
// const toggleBorderStyle =() => {
//     borderStyle === 'dashed' ? setBorderStyle
    
// };

export default PropsDemo;