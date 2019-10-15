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

//Extends
class trailUser extends User {
    trialEnding(){
        console.log('Your trail will be ending soon, '+ this.name+ '.'+'Would you like to join our program?' );

    }
}
//Instance of the class/new object
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//Instance of the TrailUser class
var trialUser = new TrailUser("Paul");
trailUser.greet();
trailUser.trialEnding();
trailUser.status();
