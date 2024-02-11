const array: Array<number> = [1, 2, 3, 4]
const stringArray: string[] = ['a', 'b', 'c', 'd']

console.log(array)
//console.log(stringArray.length)

array.push(5)
console.log(array)

array.pop()
console.log(array)

const buscaNum = array.find(num => num === 4)
console.log(buscaNum)

const buscaNum1 = array.find(num => num > 2)
console.log(buscaNum1)

const buscaNum2 = array.find(num => num > 5)
console.log(buscaNum2)

array.forEach(numero => console.log(numero))

array.forEach(numero => {
    if(numero > 2 && numero % 2 === 0) {
        console.log(numero * 2)
    }
})

// map pode ser usado com funções assíncronas
array.map(numero => console.log(numero))

array.map(numero => {
    if(numero > 2 && numero % 2 === 0) {
        console.log(numero * 2)
    }
})