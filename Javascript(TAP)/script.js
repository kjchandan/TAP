'use strict';
//for Prinitng statements
console.log("Hello world");
//popup->alert.
//-----------------------------------------------------------------------------------------------

/* Variables->3(let,var,const)
1)let->1)It is from older version,2)Redeclare a variable possible,3)Undefined(Hoisting->variable declared , but not assigned a value)possible,adds itself to window object,4)It is Function scope.
2)var->1)It came from es6, 2)Not possible to redeclare varible,3) Hoisting not possible,Doest add to window object,4)It is Block scope
3)const->if used cant change the value again*/

/*Datatypes:
String Datatype(double quotes)*/ 
var firstname="chandan";
console.log(firstname);
console.log(typeof firstname);

//number Dataype
var age=22;
console.log(age);
console.log(typeof age);

//Boolean Datatype
var Itis=true;
console.log(Itis);
console.log(typeof Itis);

//undefined Dataype
var phonenumber;
console.log(phonenumber);

//null Dataype
var firstname1="chandan";
var middlename = null;
var lastname = " K J";
console.log(firstname + " " +middlename +" " +lastname);

//Weakly programming language? 
var name="chandan";
name=20;
console.log(name);

//Find the type of Datatype->(typeof) 
var fname="chandan";
console.log(typeof fname);
console.log(typeof (fname));

//Find whether Array or object
console.log(Array.isArray(fname));//false
//-----------------------------------------------------------------------------

console.log("Hello World"); // Prints the data normally on to the console 
console.debug("Debugging in progress"); //Prints the text in blue color 
console.warn("This is a warning..."); // Prints the message in Yellow color 
console.error ("This is an error"); //Prints the message in red color 
console.info("This is just an Information"); //Exactly same as that of log 



//------------------------------------------------------------------------------------
//Object creation
//1st Approach
var person = {
    name : "chandan", age : 21,
    height : 5.11,
    gender : "male",
    qualificaton : "BE",
    //Function creation
    dance: function() {
        console.log("chandan is dancing.....!!")
    }
}
console.log(person);
person.dance();

//Objects are mutable(Can change the values).
var second_person = person;
    second_person.age = 24;

    console.log(person);

/*2nd Approach
var person = new Object();
person.name = "chandan",
person.age = 22,
person.height = 5.11,
person['gender']= "male"
person['qualificaton'] = "BE",
console.log(person); */

/*Access or Retrieve only the keys 
var c = Object.keys(person);
console.log(c);
*/

/*Access or Retrieve only the values 
var c = Object.values(person);
console.log(c);
*/



//------------------------------------------
//Day 3:NaN
console.log(100/"c")
//print banana without using n
console.log('ba'+(10/'c')+'a');


//--------------------------------------------------------------------------------------------
//String
var str = "chandan";
//String concatenation
var firstname = "chandan"
var lastname = "k j"
console.log(firstname +" "+lastname);
//Find length of string
console.log(firstname.length)
//Escape characters
console.log('It\'s my computer')
console.log("My name is \"chandan\"")
console.log('This character \\ is a bacslash')
//Compare two strings
var str1 = "chandan"
var str2 = "kj"
var str3 = new String("chandan")
console.log(str1 == str2);
console.log(str1 == str3);
console.log(str1 === str3);

//charAt()->From a string, extract a specific character.
var str="HELLO WORLD"
console.log(str.charAt(2));
console.log(str.replace("H","O"));
//We cant replace and access string like below
console.log(str[2])
//str[0]="p";

//toLowerCase()->All characters will be converted to lowercase..
console.log(str.toLowerCase());
//toUpperCase()->ALL CHARACTERS WILL BE CONVERTED TO UPPERCASE.
console.log(str.toUpperCase());

//Slice()->Extract substring from string
var str="HELLO WORLD"
console.log(str.slice(2));//Sarts from 2nd index and includes 2nd index.
console.log(str.slice(-2));//Ignores index at -2 and print after all characters. 
console.log(str.slice(2,5));//Prints 2nd index and ignores 5th index.

//replace()->Replace a particular string with newb string.
console.log(str.replace("HELLO","Hii"));
var str="HELLO HELLO WORLD"
console.log(str.replaceAll("HELLO","Hii"));

//Trim()->Remove white spaces
var str="                   HELLO WORLD";
console.log(str);
console.log(str.trim());

//Concat()->
var str1="Hello"
var str2="World"
console.log(str1+" "+str2);
console.log(str1+" ".concat(str2));

//substr()->start index, length from the start string
var str="HELLO WORLD"
console.log(str.substr(2,4))




//-----------------------------------------------------------------------------------------------------

//Array
//1st approach(Array declaration)
var arr =[1,"sachin",true,{},'c',[10,"chandan"]];
console.log(arr);
/*2nd approach(Array declaration)
var arr= new Array(1,2,3,4,5)
console.log(arr);*/

//Access array
console.log(arr[5]);
console.log(arr[5][1]);
//Size of an array
console.log(arr.length);//6


//Array methods
//1)push() method->Push any data to array
var arr=[]
arr.push(10)
arr.push("chandan")
arr.push(true)
arr.push(null)
arr.push("chandan")
console.log(arr);

//2)pop() method->delete any data from an array
arr.pop()
arr.pop()
console.log(arr);

//3)Unshift() method->Push the data to the begining of the array
arr.unshift("1")
console.log(arr);

//4)shift() method->delete the data form the beginng og the array
arr.shift("1")
console.log(arr);

//5)indexOf() method->FInd the index of the data, If not found output=-1.
console.log(arr);
console.log(arr.indexOf(10))
console.log(arr.indexOf("chandan"));
console.log(arr.indexOf(2));//It is not found soo output=-1.

//6)join() method-> Joins all the elemets inside the array and return string as output.
console.log(arr.join("-"))

//7)includes()->if element found true or else false, return true of false.
console.log(arr.includes("chandan"));

//8)reverse()-> reverse the array
console.log(arr.reverse());

//9)slice()->(start,end)Extract the data form the index we pass.
var arr=[1,"chandan","ise","cricket",true]
console.log("original_array",arr);
var slicedarr=arr.slice(2)
console.log("sliced_array",slicedarr);
//After slicing,original array will not be altered.
console.log("original_array unaltered",arr);

//10)splice()->(start,length,add)->In original array, spliced elemts will not be present.
/*start-start_index
length-Delete the elements from the start string length(consider the length).
add-add the elements*/
//Splice can even add and remove the elements.
console.log("original_arr",arr)
var sliced_arr=arr.splice(1,3)
console.log("spliced_array",sliced_arr)
console.log(arr);
//After splicing(Remove), Spliced elements will not be present in original array.
console.log("original_array after splicing",arr)
//By splice, (ADD)We can even add after the start_index..
var arr=[1,2,3,4,5,6]
console.log(arr);
arr.splice(2,0,'a','b','c');


//11)Remove the element at the specific position(Use indexOf and splice).
var arr=[1,2,3,4,5,6,7,8,9]
console.log(arr);
console.log(arr.splice(arr.indexOf(3),1))
console.log(arr);

//12) toString()
let arr2=[1,2,3]
console.log(arr2.toString())


//13) sort()

let arr3=[1,2,4,3,8,6,10,11,20];
 console.log(
     arr3.sort(
         (a,b)=>a-b//ascending order for only numbers
         )
     );
//sorting of alphabets
 let arr4=["jan","feb","march"]
 console.log(arr4.sort());



//14)Filter()->Creates new array containing the elements that pass a certain condition from the original array 

const numbers = [1, 2, 3, 4, 5];
const evenNumbers= numbers.filter((num,index,arr) =>{
     return num%2==0;
 });
 console.log(evenNumbers); 
 console.log(numbers); 

//15) Map()->Creates a new array and perform modifications.

const twice= numbers.map((num,index, arr)=>{
          return num*2;
 });
  console.log(twice);

//16)Reduce()->Reduce it to single value.
const sum= numbers.reduce((acc, num, index, arr)=>{

    console.log(`acc: ${acc} num:${num}  index:${index}  arr:${arr}`);

    return acc+num;

})
console.log(sum);


//------------------------------------------

//Iterating over array
let arr1=[1,2,3,4,"chandan"]
console.log(arr1);
//for loop
//forof Loop-> Access the element of array.
for(let elements of arr1){
    console.log(arr1);
}
//forin Loop-> Gives the indexes of elements in array
for(let index in arr1){
    console.log(arr1);
}
//forEach loop
arr1.forEach(function(element,index,arr){
    console.log(`Element:${element},Index:${index},ar:${arr}`);
})

//-----------------------------------------------------------------------------------
//Rest operator->Accessing array elements(passing parameter values) through ...numbers.
function restFun(...numbers){
    for(let i = 0;i<numbers.length;i++){
        console.log(numbers[i]);
    }
}
    restFun(1,2,3)
    restFun(1,2)
    restFun(1,2,3,4)

//Spred operator->Passes the value of an array to the function with the spred operator
function greeting(message,username){
    console.log(`${message}!!!! ${username}`);
}

let msg=['hello','chandan']
greeting(...msg);
//--------------------------------------------------------------------------------------------------------------------

//Array destructing->Javascript expression which unpack values from array into distinct variables.
var arr=[10,20,30,40,50,60]
//Old Approach
/*var num1 = arr[0];
var num2 = arr[1];
var num3 = arr[2];
var num4= arr[3];
var num5 = arr[4];
var num6 = arr[5];*/
//New approach
var[num1, num2, num3, num4, num5] =arr
console.log("Array destructing=> "+num1 +" " +num2+" " +num3+" "+num4+" "+num5)

//rest paramter->While destructing, we can unpack and assign the remaining part of the elements to another varibale using the rest parameter.
var[num1, num2, ...rest] =arr
console.log("rest parameter->",rest)

//---------------------------------------
//Object destructuring->
var student = {
    firstname:"chandan",
    lastname :"kj",
    age : 21
}
/*Old Approach
    var fname=student.firstname;
    var lname=student.lastname;*/
//New Approach
var{firstname, lastname, ...rest} = student;
    console.log("Object desturcting-> "+firstname+" "+lastname);
    //rest parameter
    console.log(rest)



















