console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket=[];

function addItem(item){
    basket.push(item);
    return true;
}//end of addItem

console.log(`Basket is ${basket}`);
console.log('Added apples ', addItem('apples'));
console.log(`Basket now has ${basket.join(' and ')} in it.`);
console.log('Added milk',addItem('milk'))
console.log(`I added another item so now I should have ${basket.join(' and ')} in it.`)

function currentBasket(){
console.log(`My basket has ${basket.join(' and ')} in it.`);
 }//GT Practice function. Doesn't console the way I want for everything.

addItem('fruit');
currentBasket();

function listItems(){
    for (let items = 0; items < basket.length; items++)
        console.log(basket[items]);
}//end of listItems

listItems();

function empty(){
    basket.splice(0,basket.length);
    return true;
}//end of empty

console.log('Is this basket empty?', empty());

// addItem('bread');
 addItem('soda');
currentBasket();
listItems();

addItem('eggs');
addItem('yogurt');
addItem('bacon')
//addItem('juice');
currentBasket();
listItems();


const maxItems=5;

function isFull(){
    if (basket.length >=5)
        return true;
    else (basket.length < 5) 
        return false;
}//end isFull

console.log(isFull());

function addItem(item){
    if (isFull())
    return false;
    else basket.push(item);
    return true};
//end addItem update

console.log(addItem('pizza'));


console.log(addItem('peanuts'));
currentBasket();
listItems();


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
