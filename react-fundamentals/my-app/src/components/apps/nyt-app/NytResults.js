import React from 'react';// import from react 

const NytResults = (props) => { //  fuction called NytResuts 
  return (// return function 
    <div>
      <div>
        { props.results.map(result => { //send props from results 
          return (
            <div key={result._id}> {/**use key to access result info  */}
            <h2>{result.headline.main}</h2> {/**taking pain headline from results and to h2 tag */}
            {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''} {/**ternary to display a large image if two image are in results  */}
            <p>
              {result.snippet} {/**add snippet */}
              <br />
              {result.keywords.length > 0 ? ' Keywords: ' : ''} {/**ternary to check for Keyword if there are keyword to display it  */}
            </p>
            <ul>
              {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)} {/**maping keywords from api   */}
            </ul>
            <a href={result.web_url}><button>Read It</button></a> {/**make link to url of artical */}
          </div>
          )
        })}
          <div>
           <button onClick={(e) => props.changePageNumber(e, 'down')}>Previous 10</button> {/**event to change page number to find last results   */}
            <button onClick={(e) => props.changePageNumber(e, 'up')}>Next 10</button> {/**event to change page number to find next results   */}
          </div>
      </div>
    </div>
  )
}

export default NytResults; //export NytResults