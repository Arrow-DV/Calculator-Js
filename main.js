let numbers = document.querySelectorAll('#num')
let ops = document.querySelectorAll('#op')
let label = document.getElementById('label')

let num1 = String()
let num2 = String()
let number_chosing = 0 ;


let operation = ''

let operations = {

    '+' : function sum(){
        return parseInt(num1) + parseInt(num2)

    },
    
    
    '-' : function subtraction(){
        return parseInt(num1) - parseInt(num2)
    },
    
    
    '*' : function multiplication(){
        return parseInt(num1) * parseInt(num2)
    }

    ,
    '/' : function division (){
        return parseInt(num1) / parseInt(num2)
    }
}

ops.forEach(op => op.addEventListener('click',()=>{
 
    if(op.innerHTML == '='){
        operations[operation] != NaN?label.innerHTML = operations[operation]():num1 = num2 = ''
        num1 = label.innerHTML;
        num2 = ''
    }
    else if(op.innerHTML == 'AC'){
        num1 = num2 = '' ; operation = '' ; label.innerHTML = '' ; number_chosing = 0;
    }
    else{
        operation = op.innerHTML;
        number_chosing = 1;
    }
}))

numbers.forEach(number => number.addEventListener('click',()=>{
    number_chosing == 0?num1 += number.innerHTML : number_chosing = 1
    number_chosing == 1?num2 += number.innerHTML : number_chosing = 0
    label.innerHTML = `${num1} ${operation} ${num2}`
}))
