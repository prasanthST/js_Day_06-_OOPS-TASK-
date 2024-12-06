// Task 1
class Movie{
    constructor(title, studio, rating ){
        this.title = title
        this.studio = studio;
        this.rating = rating;

    }
}
const myMovie = new Movie ("Inception", "Warner Bros.", "PG-13")

console.log(myMovie);

// b)  The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movies {
    constructor(title , studio , rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating 
    }
}
const movieWithOutRating = new Movies ("The Dark Knight", "Legendary Pictures")
const movieWithRating = new Movie ("Inception", "Warner Bros.", "PG-13")
console.log(movieWithOutRating);
console.log(movieWithRating);

//c 

class Moviess{
    constructor(title , rating){
        this.title = title;
        this.rating = rating;
    }
}
const movieobj =[
    new Moviess ("Inception", "8.8"),
    new Moviess ("The Dark Knight", "PG"),
    new Moviess ("Interstellar", "7.4"),
    new Moviess ("The Matrix", "4.7"),
    new Moviess ("Deadpool", "8.8"),
    new Moviess ("Avenger", "PG"),
    new Moviess ("Hulk", "PG"),
    new Moviess ("Venom", "9.8"),
]

function getPG(movieobj){
    const PGmovies = []
    for(let movie of movieobj){
        if(movie.rating === "PG"){
            PGmovies.push(movie)
        }
    }
    return PGmovies
}
const movieWithPgRating = getPG(movieobj)
console.log(movieWithPgRating);

class movi {
    constructor(title , studio , rating){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const ratingPG13 = new movi ("Casino Royale" , "Eon Productions" , "PG­13")
console.log(ratingPG13);

// task 2

class Circle {
    constructor(radius, color ){
        this._radius = radius;
        this._color = color;
    }
    get radius() {
        return this.radius
      }
      set radius(n){
        return this._radius = n
      }
      get color(){
        return this._color
      }
      set color(newcolor){
        return this._color = newcolor 
      }
      get toString(){
        return `Circle : [Radius =${this._radius} , Color= ${this._color}]`
      }
      get area(){
        return Math.PI*Math.pow(this._radius,2)
    }
    get circumference(){
        return 2*Math.PI*this._radius
    }

}

let circleObj = new Circle ( 1.0 , "red")
//get Radius
console.log(circleObj._radius);
//Set Radius
circleObj._radius = 3.5
console.log(circleObj._radius);
//get color
console.log(circleObj._color);
//set color
circleObj._color = "Orange"
console.log(circleObj._color);
//toString
console.log(circleObj.toString);
//Area
console.log(circleObj.area);
// circumference
console.log(circleObj.circumference);

//Task 3

class Person {
    constructor(Name , Age , Email , Contact , Role ){
        this.Name = Name ;
        this.Age = Age;
        this.Email = Email;
        this.Contact = Contact;
        this.Role = Role;
    }
}
const person = new Person ( "Name" , 27 , "casinoprasanth@gmail.com" , 9876512347 , "FSD" )
console.log(person);

//Task 4 

class UberPriceCalculator {
    constructor(distance) {
        this.perKmRate = 30;
        this.distance = distance;
    }

    calculateFare() {
        return this.distance * this.perKmRate;
    }
}

// Example usage:
const distance = 6; 
const calculator = new UberPriceCalculator(distance);
const fare = calculator.calculateFare();
console.log("Total Cost :", fare, "Rs");
