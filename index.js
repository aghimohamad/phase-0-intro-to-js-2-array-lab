// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"] ;
//append
function destructivelyAppendCat(name) {
    cats.push(name)
}

//prepend
function destructivelyPrependCat(name) {
    cats.unshift(name)
}

//removelast
function destructivelyRemoveLastCat(){
    cats.pop()
}

//removeFirst
function destructivelyRemoveFirstCat(){
    cats.shift()
}

//append
function appendCat(name){
    return [...cats, name]

}

//prepend
function  prependCat(name){
    return [name, ...cats]

}

//removelast 
function removeLastCat(){
    return   cats.slice(0,2)
}

//removefirst
function removeFirstCat() {
    return cats.slice(1)
}
