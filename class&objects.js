//javascriots supports functional and oops

/*
Class
1) a blue print of your objects (house blue print)
house is not build yet. so it is blueprint only. it is not real
house 

2) wont exist in real time 
3) template for creating objects

class will contains variables (features), methods (behaviour)

object is an instance of class
object is created  by using class
exist in realtime


class syntax:

class <class name>{
 
 //variables 
 methods }

*/
class student{
    //variables. while declaring variables we do not use let
    // for intializing we use constructor

    //The constructor initializes a new object instance 
    // when you create it with the new keyword

    //For example, when you write new student('ravi', 'Bangalore'), 
    // the constructor takes those values and saves them as this.name = 'ravi' and 
    // this.address = 'Bangalore'. Without a constructor, your object would not 
    // receive its initial information.

    //there are two types constructore
//1) default constructor
//2) userdefined constructor

    name;
    address;

    constructor(name,address){
        this.name = name;
        this.address = address;

    }
    
    // method
    goesToScholl (schollname){
        console.log('goes to scholl:'+schollname)
    }
} 

//creating an object ----- new classname()
// we can create the multiple objects by using class blue print
//we create a object to call the method

let student1 = new student('ravi', 'Bengalore');//That line of code creates 
//a new object instance from your student class. In programming,
// this process is called instantiation

/*let student1: Declares a variable named student1 to store the new object
 you are building.   new: A required JavaScript keyword that tells the 
 computer to create a fresh, unique instance of the class.  
 student: The name of the class blueprint you are using. 
 ('ravi', 'Bengalore'): The arguments you pass into the class constructor. 
  'ravi' is assigned to this.name, and 'Bengalore' is assigned to this.address 
  inside that specific object.

*/

console.log(student1.name)
console.log(student1.address)

// You are calling the goesToScholl method on the student1 object

student1.goesToScholl ('karnataka university')


let student2 = new student('Sham', 'Hyderabad');
console.log(student2.name)
console.log(student2.address)
student1.goesToScholl('Geetham')



