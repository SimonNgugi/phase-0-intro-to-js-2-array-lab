// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(){
    appendCat = [...cats,"Broom"]
    cats;
    return appendCat;
}

function prependCat(){
    prependCat = ["Arnold",...cats]
    cats;
    return prependCat;
}

function removeLastCat(){
    removeLastCat = cats.slice(0, cats.length -1)
    return removeLastCat;
}

function removeFirstCat(){
    removeFirstCat = cats.slice(1)
    return removeFirstCat;
}