// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function ageToAbilities(num){
    if (num <= 15){
    return 'You can\'t drive.';    
    }else if (num === 16 || num === 17){
        return 'You can drive but not vote.';
    }else if (num <= 24){
        return 'You can vote but not rent a car.';
    }else if (num >= 25){
        return 'You can do pretty much anything.';
    }
}

function oddIndices(arr){
    newArr = [];
    for (i = 0; i < arr.length; i++){
        if (i % 2 !== 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function numOddValues(arr){
    let output = 0;
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            output++;
        }
    }
    return output;
}


function averageStringLength(arr){
    if(arr.length === 0){
        return 0; 
    }
    let sum = 0;
    for (i = 0; i < arr.length; i++){
        sum += arr[i].length;
    }
    return sum/arr.length;
}


function firstPunctuationIndex(str){
    for (i = 0; i < str.length; i++){
        if (str[i] === "."){
            return str.indexOf(".");
        }else if (str[i] === "?"){
            return str.indexOf("?");
        }else if (str[i] === "!"){
            return str.indexOf("!");
        }
    }
    return -1;
}


function getPlace(scoreArray, score){
    scoreArray.push(score)
        let rank = ''
    scoreArray = scoreArray.sort(function(a, b){
        return a - b;
    });
    scoreArray = scoreArray.reverse()
        const index = (scoreArray.indexOf(score) + 1).toString()
    if(index.endsWith('1') || index === '1'){
        rank = index + 'st'
    }else if(index.endsWith('2')){
        rank = index + 'nd'
    }else if(index.endsWith('3')){
        rank = index + 'rd'
    }else{
        rank = index + 'th'
    }
        return rank + ' place'
}


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace
};
