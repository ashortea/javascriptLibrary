/*What is an API
    -API stands for Application Program Interface

    -in basic terms, API's allow applictations to coomunticate with one another
    -the API is not the data base or the server, it is the code that allows us to asses point(s) to the server
    -those access pionts com in the form of an endpoint, whicg directs use to different sets of data we can access

    Asynchronous Programming

    -Asynchronous Programming allows our code to contiue to run while w arewaiting on a rsponse from the API
    or outside data source. Once we completeed fetching or retrieveing or data,
    it the presents the data without having to wait on other processe or code.

*/
// let x = 10;
// console.log(x);

const baseURL = 'https://api.spacexdata.com/v2/rockets';//giveing api url a varialbe 
const searchForm = document.querySelector('form'); // declaring variable of for refering form in HTML Document 
const spaceShip = document.querySelector('ul');// declaring variable that refers to ul in HTML Document

searchForm.addEventListener('sumbit', fetchSpace);// add evenet waiting form form to be sumbitted 

function fetchSpace(event) {//creating a function for event
    //console.log(event)
    event.preventDefault();//stop page from reloading
    fetch(baseURL)//fetch statrtthe process of fetching a resource from a network and a fetch return a promise.
//     //That promise is fulfilled or resolve oce the response fetch is available
    .then(data => {
        // console.log(data)
        return data.json();

        // fetch(baseURL) - same as other fetch
        // .then(data => data.json())
        // .then(json => displayRockets(json))



    })
    .then(json => {
        // console.log('promise result:', json);

        displayRockets(json);// a call back function is a function that is excuted after another function has fiished 
        //executing. iN this case our callback function is displayRockets and it is waiting on our fuction  and all of its promimises 
        //to be resolved befor called and passed data 

    })
//     .catch(err =>{
//         console.log(err);
//     })
 }
function displayRockets(json) {
    console.log('result:', json);
    let rockets = json.forEach(rocket => {
        let r = document.createElement('li');
        let desc = document.createElement('li');
            r.innerText = rocket.name;
            desc.innerText = rocket.decription

        spaceShip.appendChild(r);
        spaceShip.appendChild(desc);
    })
}