//Dont forget to make comments!
​
// GROUP 1 
​
const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json';//varible for URL tp base URL
const key = 'b2e02612e179494c9f1f57577b582a0a';//Varable for key  to key
let url; //  URL not definded
​
const searchTerm = document.querySelector('.search');//varible for serch for HTML doc
const startDate = document.querySelector('.start-date');//varibale for class .start-date  from HTML doc
const endDate = document.querySelector('.end-date');//varible for clases .end date fpr HTML
const searchForm = document.querySelector('form'); // varible for class .form from HTML
const submitBtn = document.querySelector('.submit');//varibae for class .submit for HTML
const nextBtn = document.querySelector('.next');//varible for class .next
const previousBtn = document.querySelector('.prev');//varible for class .pev
const nav = document.querySelector('nav');//varablie for nav tag from HTML
const section = document.querySelector('section');//varible for section tag from HTML
​
nav.style.display = 'none'; //set nav tag from HTML to have no style elements 
​
let pageNumber = 0;//set variable  pageNumber to 0
// console.log('PageNumber:', pageNumber);
​
searchForm.addEventListener('submit', fetchResults);// adding event listner waiting for form to be submitted
nextBtn.addEventListener('click', nextPage);//add event to butten for a click
previousBtn.addEventListener('click', previousPage);// add event to buttin for click
​
function fetchResults(e) {//function declared for as fetchResults ith parameter as e
  // console.log(e);//showing display for e on console event 
  e.preventDefault();//stop page from reloading by default
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;//url being declared our inside function 
  console.log('URL:', url);//consoled url info declared in line above
​
  if (startDate.value !== '') {//check to see state date is not blank/ listed 
    console.log(startDate.value)//if it is stateded then log oin console 
    url += '&begin_date=' + startDate.value;//if start date added it to the url
  }
​
  if (endDate.value !== '') {//check if there is an end date listed 
    console.log(endDate.value)//if blank log curent end date 
    url += '&end_date=' + endDate.value;//if end date added it to the url
  }
​
  // GROUP 2
​
  fetch(url)// fetching url declared earlier in evenet function 
    .then(function (result) {//.then is retruning the promise of result 
      console.log(result)//loging result 
      return result.json();//retruning result in form of json
    })
    .then(function (json) {//retruning promise of the json 
      console.log(json);//cloging json data in console
      displayResults(json);// desplaying json data as new variable with pararmeter of json 
    })
}
​
function displayResults(json) {//new function for varabile with paaramenter json
  // console.log('Display Results', json);
  // console.log(json.response.docs);
​
  while (section.firstChild) {//the while loop will clear out any articles before new search results are added.
    section.removeChild(section.firstChild);//clear the first child which is the search resilt 
  }
​
  let articles = json.response.docs;//declating artical to json.response.doc 
  // console.log(articles);
​
  if (articles.length === 0) {
    console.log('No results');
  } else {
    for (let i = 0; i < articles.length; i++) {
      // console.log(i);
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');
​
      let current = articles[i];
      console.log('Current:', current);
​
      link.href = current.web_url;
      link.textContent = current.headline.main;
​
      para.textContent = 'Keywords: ';
​
      // GROUP 3
​
      for (let j = 0; j < current.keywords.length; j++) {
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para.appendChild(span);
      }
​
      if (current.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }
​
      clearfix.setAttribute('class', 'clearfix');
​
      article.appendChild(heading);
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
​
  if (articles.length === 10) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}
​
function nextPage(e) {
  // console.log('Next button clicked');
  pageNumber++;
  fetchResults(e);
  console.log('Page Number:', pageNumber);
}
​
function previousPage(e) {
  // console.log('Previous button clicked');
  if (pageNumber > 0) {
    pageNumber--;
    fetchResults(e);
  } else {
    return;
  }
  fetchResults(e);
  console.log('Page:', pageNumber);
}
Collapse









Message #instructorcode


Slack is trying to connect. 
