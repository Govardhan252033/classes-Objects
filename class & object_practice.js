/*
Q1. Create a class named Book. Write a constructor that 
accepts title and author parameters. Assign these values 
using the this keyword. Create two different book objects 
and print their properties using console.log.
*/

class book {
    //variables
    title;
    author;
    constructor(title, author){
        this.title = title
        this.author = author
    }
    //method
    // method is not required for this question
}

// this above class used as blueprint to create object
//we craete the objects to store real data and class
//functions for individual items

// create a object 
let firstdraft = new book('data science for chemist','Govardhan')
// 'new' keyword creates a unique instance class named book
// inside this class, we have argumemts 
//these arguments "data science for chemist", "govardhan" 
//are assigned to this.tile, and this. author respectively 

console.log(firstdraft.title)
console.log(firstdraft.author)

// we can reuse the above class blueprint to create multiple 
//objects

let seconddraft = new book('AI for Chemistes', "Reddy")
console.log(seconddraft.title)
console.log(seconddraft.author)



/*
Q2. 
Can I use a class to store the name, level, and salary for ten company employees?

Is a class the right tool to manage details for a group of ten employees?

How do I write a class to organize employee records containing names, levels, and salaries?

*/

class EmpList{
    name;
    level;
    salary;
    constructor(name,level,salary){
        this.name = name;
        this.level = level;
        this.salary = salary;

    }
    //method-- i am writing 'display ()' method

    display(){
        console.log(this.name, this.level,this.salary)
    }

}

//class blueprint is ready. so create a object -- a unique instance class
//will be created with 'new' keyword

let  Emp1 = new EmpList('reddy','I', '$5000 for month')
console.log(Emp1.name);
console.log(Emp1.level);
console.log(Emp1.salary);

// now i can reuse the class blue print to store the all remaining employess

let  Emp2 = new EmpList('vihaan','I', '$4500 for month')
let  Emp3 = new EmpList('veekshi','I', '$4000 for month')
let  Emp4 = new EmpList('aruna','I', '$4500 for month')
let  Emp5 = new EmpList('goV','II', '$6500 for month')
let  Emp6 = new EmpList('SUBBU','II', '$6000 for month')
let  Emp7 = new EmpList('Venu','II', '$6000 for month')
let  Emp8 = new EmpList('LAXMI','II', '$7000 for month')
let  Emp9 = new EmpList('KEVIN','I', '$4000 for month')
let  Emp10 = new EmpList('Nidhi','I', '$3500 for month')
let  Emp11 = new EmpList('Sreethan','I', '$2500 for month')

console.log(Emp2.name);
console.log(Emp2.level);
console.log(Emp2.salary);

// if we wnat to print, each emp takes 3 lines of codde
//in this case use 'display ()' method
//syntax: objectname.display() 

Emp2.display();
Emp3.display();
Emp4.display();
Emp5.display();
Emp6.display();
Emp7.display();
Emp8.display();
Emp9.display();
Emp10.display();
Emp11.display();

/* if you run your code right now, JavaScript will throw an error 
on Emp2.display(). You wrote the method call at the bottom, 
but you have not written the display() method inside your EmpList class yet.

Add the method inside your class block so the objects know how to execute it

*/







/*
Q.3
Create a class named Rectangle. Write a constructor that accepts width and height
parameters. Add a method named calculateArea that multiplies width and height, 
then prints the total area. Create an object from this class and call your method.

*/

class Rectangle{
    //variables
    width;
    height;
    // write a constructor that accepts width and height
    constructor(width, height){
        this.width = width;
        this.height = height;
      
    }
    // method 
    calculatearea(width,height){
        let area = this.width * this.height // store the multiplication
        //in the area variable-- multiplication is the task here
        console.log('total area:', area) // how u wnat to print

    } 
}
// class rectangle blue print is ready now 

let RectArea = new Rectangle (50, 125)

// now we call method 
// <object name.method name ()>
RectArea.calculatearea();




// claculalate various width and height 

let RectArea1 = new Rectangle(22, 125)
let RectArea2 = new Rectangle(10, 77)
let RectArea3 = new Rectangle(55, 255)
let RectArea4 = new Rectangle(28, 177)
let RectArea5 = new Rectangle(23, 542)

// now call the method

RectArea1.calculatearea();
RectArea2.calculatearea();
RectArea3.calculatearea();
RectArea4.calculatearea();
RectArea5.calculatearea();





/*Q3
Create a class named Employee. Write a constructor that accepts name and salary
parameters. Add a method named giveRaise that takes a bonus amount, adds 
it to the current salary, and prints the updated total. Create an employee 
object and test your method.

*/

class Employee{
    //variables
    name;
    salary;
    constructor(name, salary){
        this.name = name
        this.salary = salary
    }

    //method 
    //method that takes a bonusAmount as a parameter
    //pass this bonusAmount when u call the method
    //when we call the method, we can assign different bonus Amount 
    // tot the employees  
    
    giveRaise (bonusAmount){
        let total = this.salary + bonusAmount

        console.log(`${this.name} updated salary is${total}`)

     /*
     Yes, you can also declare the bonus amount directly inside the method block.

      giveRaise (){
       let bonusAmount = 2000
       let total = this.salary +bonusAmount
       console.log ("updated total:",total)

       if we declare the bonus amount in method block, every employee get same
       bonus which is 2000  
      
      }
   
     */

    }
}

// creat a object 

let Employee1 = new Employee('pinnelli', 4500)

//now call the method, and pass the bonusAmount here  

Employee1.giveRaise(2000);



// Save more employee details with bonus 


let Employee2 = new Employee('amma', 5000)
Employee2.giveRaise(2500);

let Employee3 = new Employee('aruna', 6000)
Employee3.giveRaise(3200);

let Employee4 = new Employee('Gottam', 3500)
Employee2.giveRaise(1750);



// now the output showing this format <updated total , 7500>

//now, how to get the output with name and updated total  

/* giveRaise (bonusAmount){
        let total = this.salary + bonusAmount

        console.log(`${this.name}'s updated salary is ${total}`)
        */

