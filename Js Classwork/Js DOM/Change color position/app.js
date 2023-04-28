const square = document.querySelectorAll('.square')
console.log(square);

square.forEach((elem, index) =>{
     console.log(index)
     if(elem.innerText % 2 == 0){
          elem.style.backgroundColor = 'blue'
     }else{
          elem.style.backgroundColor = 'black'
     }
})