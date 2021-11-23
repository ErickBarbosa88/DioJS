//let array = ['string', 1, true, ['array1'], ['array2'], //['array3'], ['array4']]
//console.log(array)

// forEach

//array.forEach(function(item, index){console.log(item, index)})

// push

//array.push('novo item')
//console.log(array)

//array.pop();
//console.log(array)

//array.shift()
//console.log(array)

//array.unshift('novo item')
//console.log(array)

//

//console.log(array.indexOf('string'))


//apaga de 0-3
//array.splice(0, 3);
//console.log(array)

//let novoarray = array.slice(0, 3)
//console.log(novoarray)

let object = {
  string: 'teste', number: 1, boolean: true, array: ['teste'], objetoInterno: {
    objetoInterno: 'objeto interno'
  }
}
console.log(object.objetoInterno)

var string = object.string
console.log(string)

var arrayInterno = object.array;
console.log(arrayInterno)

var { string, boolean, objetoInterno } = object;
console.log(string, boolean, objetoInterno)