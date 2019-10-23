import React, {useState} from 'react';// import react
import NytResults from './NytResults';// import Results

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';// variable for NYT appi
const key = 'b2e02612e179494c9f1f57577b582a0a';//variable for key

const NytApp = () => {  //function called NtyApp for useStates
 const [ search, setSearch ] = useState('');// empty initial string useState for search 
 const [ startDate, setStartDate ] = useState('');//empty initial string useState for start Date
 const [ endDate, setEndDate ] = useState('');//empty initial string useState for  for end date
 const [ pageNumber, setPageNumber ] = useState(0);//0 initial useState for pageNumber 
 const [ results, setResults ] = useState([]); //empty initial array useState for  results 

 const fetchResults = () => {//fuction called fetchResults inside the NytApp to set urls 
 let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;// set variable of url to structure out url with baseUrl , key, pageNumber and search
 url = startDate ? url + `&begin_date=${startDate}` : url;//ternary: if start date is enter the add to url
 url = endDate ? url + `&end_date=${endDate}` : url;//ternary:if end date is enter the add to url

 fetch(url)//fetching url for results 
   .then(res => res.json())//url to json
   .then(data => setResults(data.response.docs))//then results will be add to usestate from setResults
   .catch(err => console.log(err));//if error log in console
 };// end fetchResults function 

 const handleSubmit = (event) => {// function called hanleSubmit with petmeter  for event 
   event.preventDefault();//prevent defaul refresh of page
   setPageNumber(0);//chage pange number
   fetchResults();//invokes fetchResults function 
 };

 const changePageNumber = (event, direction) => {// fuction for change page number
   event.preventDefault();//prevent defaul refresh of page
   if(direction === 'down') {// if statment for if diract is down
     if(pageNumber > 0) {// if pagenumber is greater then 0
       setPageNumber(pageNumber - 1);//set page number and snnt to useState
         fetchResults();// invoke fetchResults function 
       }
     }

 if(direction === 'up') {//if direction is up 
   setPageNumber(pageNumber + 1);// set page number and send it to useState
   fetchResults();// invoke function fetchRelts
   }
 };//end changePageNumber function 

 
 return (//returning info for NytApp variable 
   <div className="main"> 
     <div className="mainDiv">
        <form onSubmit={(e) => handleSubmit(e)}> {/**create form and with form is sumit will listen for event  */}
         <span>Enter a single search term (required) : </span> {/**Span for text */}
         <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />{/**input text for serach and sending to useSate and upateing useState */}
         <br />
         <span>Enter a start date: </span> {/**span text */}
         <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStartDate(e.target.value)} /> {/**input text for start date and sending to useSate and upateing useState */}
         <br />
         <span>Enter an end date: </span>
         <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value)} />{/**input text for end date and sending to useSate and upateing useState */}
         <br />
         <button className="submit">Submit search</button> {/**sumit button */}
       </form> 
     {
       results.length > 0 ? <NytResults results={ results } changePageNumber={ changePageNumber } /> : null
     }
     </div>
   </div>
  );
};

export default NytApp; // export NytApp function 