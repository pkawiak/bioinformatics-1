var numberToPattern = require("./numberToPattern");
var distanceBetweenPatternAndStrings = require("./distanceBetweenPatternAndStrings");

module.exports = function (k, Dna) {
    var i;
    var distance = Number.MAX_VALUE;
    var median;

    for (i = 0; i < Math.pow(4, k) - 1; i++) {
        var pattern = numberToPattern(i, k);
        var newDistance = distanceBetweenPatternAndStrings(pattern, Dna);

        if (distance > newDistance) {
            distance = newDistance;
            median = pattern;
        }
    }

    return median;
};