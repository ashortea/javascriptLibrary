import React, {useState} from 'react';

const State = () => {

        const [text, setText] = useState('initial value');
        const[likeNum, setLikeNum]= useState(0);
        const [textColor, setTextColor] = useState('blue')
    return(
        <div className="main">
            <div className="mainDiv">
                <ul>
                    <dt>useState is Unique to Functional Components</dt>
                    <dd>Class Components have a separte means of using and changing state.</dd>
                    <dt>useState uses Array Destructing</dt>
                    <dd>useState provides a state varaible and setState function </dd>
                    <dt>Is a Hook</dt>
                    <dd>useState is a hook baked into React</dd>
                    <dt>Triggers Re-render</dt>
                    <dd>Like with props changes, changing the state of a compont re- renders the whole component</dd>
                <input value={text} onChange ={e=>setText(e.target.value)}/><br/>
                <img style={{width: '100px', height: '100px'}} src= "https://en.wikipedia.org/wiki/File:Facebook_like_thumb.png" onClick={e => setLikeNum(likeNum+1)}/>
                <span>{likeNum}</span>
                <p style= {{color: textColor}} onMouseEnter={e => setTextColor('red')} onMouseLeave = {e => setTextColor('blue')} >This text shuld be able to change colors</p>
                </ul>
                
            

            </div>

        </div>
    )
}
export default State;