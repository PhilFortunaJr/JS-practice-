var glorp = function(someNumber) {
    return someNumber * 5 - 3;
};
var result1 = glorp(10);
console.log(result1);
var result2 = 2 * (glorp(5) + 10); console.log(result2);
var result3 = glorp(1 + 2); console.log(result3);
var result4 = glorp(glorp(1)); console.log(result4);
