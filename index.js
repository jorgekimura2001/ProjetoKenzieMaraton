function positions(firstPlace, secondPlace, lastPlace){
    let array = [firstPlace, secondPlace, lastPlace]
    if(array[1] == 'Daniel'){
        console.log('1º colocado - ' + array[1])
        console.log('2º colocado - ' + array[0]) 
        console.log('3º colocado - ' + array[2])
    }else if (array[2] == 'Daniel'){
        console.log('1º colocado - ' + array[0])
        console.log('2º colocado - ' + array[2]) 
        console.log('3º colocado - ' + array[1])
    }else{
        console.log('1º colocado - ' + array[0]) 
        console.log('2º colocado - ' + array[1]) 
        console.log('3º colocado - ' + array[2])
    }
} 
positions('Manoel', 'Rafael', 'Daniel')

// Se o Daniel está em 3 lugar ele vai para 2
// Se o Daniel está em 2 lugar ele vai para 1
// Se secondPlace == 'Daniel' 
    //console.log('1º lugar - ' + secondPlace ...)
// Se lastPlace == 'Daniel'
    //console.log('1º lugar - ' + lastPlace ...)
