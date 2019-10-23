import React from 'react';

import {
    Card, CardText, Cardbody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const FunctionalComponentDemo =  () =>{
    return(
        <Container className="main">
            <Row className="mainDiv">
            <h1> Functional Component</h1>
            <p>Functional component aethe primary tool in React</p>
            <dl>
                <dt>Can use state</dt>
                <dd>With in 'useState' hook, functional component can now both reder a display to the page and update the information to be shown.</dd>
                <dt>No 'this' keyword</dt>
                <dd>Older class components use 'this', functional components have no 'this' object.</dd>
                <dt>Can be effectd</dt>
                <dd> With the' useEffect' hook, functional component</dd>
                <dt>return()</dt>
                <dd>Must retrun a single element.</dd>
            </dl>
            <h1>Functional Syntax versus Arrow Function</h1>
        </Row>
        </Container>
        
    );
};

export default FunctionalComponentDemo;