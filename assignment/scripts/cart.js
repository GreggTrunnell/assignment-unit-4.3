console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket=[];

function addItem(item){
    basket.push(item);
    return true;
}
addItem('butter');
addItem('milk');
addItem('apples');
console.log('The basket has ' + basket + ' in it');
console.log(basket);

function listItems(){
    for (let i = 0; i < basket.length; i++)
        console.log(basket[i]);
    }

function empty(basket){
    for (let i = 0; i < basket.length; i++)
        basket.shift[i];
}





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
