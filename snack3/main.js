let strArray =[1, 2, 3, 4, 5, 6, 7]

let arraySection=document.getElementById('Array')
arraySection.innerHTML=strArray

let num1=prompt('Digita un numero da 1 a 7')

if(num1<1 || num1>7){
    alert('scrivere un numero compreso tra 1 e 7')
    throw new Error('numero errato')
    location.reload
}
let num2=prompt('Digita di nuovo un numero da 1 a 7 maggiore di quello di prima')

if(num2<1 || num2>7){
    alert('scrivere un numero compreso tra 1 e 7 maggiore di quello di prima')
    throw new Error('numero errato')
    location.reload
}
if(num1>num2){
    alert('il secondo numero deve essere maggiore del primo')
    throw new Error('numero errato')
}

console.log(num1, num2);

function between(array, a, b){
    times=b-a+1
    let newArray=[]
    for(let i=0; i<times; i++){
        newArray[i] = array[a-1+i];
    }
    return newArray
}
let newStrArray=between(strArray, num1, num2)
console.log(newStrArray);


let arraySection2=document.getElementById('Array2')
arraySection2.innerHTML=newStrArray