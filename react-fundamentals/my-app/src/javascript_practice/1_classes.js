//ES6 JS Classes
class User{
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    //Methods 2 
    status(){
        console.log('Current status: '+ this.type);
    }
}

//Instance of the class/new object
var anonDude = new User("Anonymous dude");
//we can now use the instance and the .operator
//to access the 2 methods 
anonDude.greet();
anonDude.status();

//another instance of the class
var anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

//Another instanace of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status();