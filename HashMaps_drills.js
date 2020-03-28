const HashMap = require('./DSA-Hashmaps')
HashMap.MAX_LOAD_RATIO = 0.5
HashMap.SIZE_RATIO = 3


function main() {
    let lotr = new HashMap()


    lotr.set('Hobbit', 'Bilbo')
    lotr.set('Hobbit', 'Frodo')
    lotr.set('Wizard', 'Gandolf')
    lotr.set('Human', 'Aragorn')
    lotr.set('Elf', 'Legolas')
    lotr.set('Maiar', 'The Necromancer')
    lotr.set('Maiar', 'Sauron')
    lotr.set('RingBearer', 'Gollum')
    lotr.set('LadyOfLight', 'Galadriel')
    lotr.set('HalfElven', 'Arwen')
    lotr.set('Ent', 'Treebeard')

    console.log(lotr)
    console.log(lotr.get("Maiar"))
    console.log(lotr.get("Hobbit"))

    
    console.log(lotr._capacity)
}

main()


const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));

    

    //shows that the values are being overwritten because the same keys are being provided.
}

WhatDoesThisDo()


/* #3 Demonstrate Understanding of Hash Maps

    1) [ 22, 88, null, null, 4, 15, 28, 17, 59, 31, 10]

    2) [null, [28, 19, 10], 20, 12, null, 5, [15, 33], null, 17]

*/

function removeDuplicates(string) {
    const map = new Map();
    let newStr = '';
    string.split('').forEach(letter => {
        if (!map.has(letter)) {
            map.set(letter, '');
            newStr += letter;
        }
    });
    return newStr;
}

console.log(removeDuplicates("google all that you think can of"))

function palindrome(string) {
    const result = new Map();
    for (let i = 0; i < string.length; i++) {
        console.log(result);
        if (!result.delete(string[i])) { //if nothing to delete, add to map
            result.set(string[i], 1);
        }
    }
    console.log(result.size, result);
    if (result.size <= 1) {
        return true;
    } return false;
}

console.log(palindrome('acecarr')) // true;
console.log(palindrome('north')) // false;