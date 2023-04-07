

// Write a function that accepts an array of strings and console.logs each element using a for loop.
let names = ["Maureen","Diana","Wendy","Ben"];

function myName(names){
  
    for(let i=0;i<names.length;i++){
        console.log(names[i]);
    };
    
 }
 
 myName(names)
 
 
 


// Write a function that accepts an array of numbers and uses the forEach() method to console.log each 
// number multiplied by 2.

let number =[1,3,5,7,8,9,90];
function numbers(number){
    let result =[]
    number.forEach(function(item){
      result.push(item*2) 
   })
   console.log(result)
}
numbers(number)

// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 
// and the last two added by 5. Console the array with the new values
let arrayNumber=[3,67,8,7,8,4,3,7];

let num = [34,5,7,23,89,23,90,100];
function nunber(num){
    let empty = [];
    for(let i =0; i<num.length; i++){
        if(i<4){
           empty.push(num[i]*8)
        }
        else if(i>=num.length-2){
          empty.push(num[i]+5)
        }

    }
    console.log(empty)

}
nunber(num);


// Write a function that takes in the following array and use a while loop to iterate and break when the item 
// is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
function arrNumber(arrNum){
    let n =0;
    while(n<arrNum.length){
        console.log(arrNum[n])
        if(n===4){
            break;
        }
       n ++;
    }
}
arrNumber(arrNum)


// Write a function that takes in a an array of strings and use a continue statement when the 
// item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
function arrfruits(fruits){
    for(let f =0;f<fruits.length;f++){
        if(f===2){
            continue;
           
        }
         console.log(fruits[f])
            

        
    }

}
arrfruits(fruits)