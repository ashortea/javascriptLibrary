import React from 'react';

const JSXRules = () => {
    return(
        <div className="fmain">
            <div className="fmainDiv">
                <h1 className="section-title">JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not. It's acually closer to Javascript</dd>
                    <dt>"React elements"</dt>
                    <dd>These are used to construct and update DOM</dd>
                    <dt>Not required</dt>
                    <dd>You can write vanilla JS, but most sane people use JSX</dd>
                </dl>
                <hr/>
            </div>
        </div>
    );
}

export default JSXRules;