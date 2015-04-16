module.exports = function (text, pattern) {
    var count = 0;
    var textLength = text.length;
    var patternLength = pattern.length;
    var i;

    for (i = 0; i <= textLength - patternLength; i++) {
        if (text.substring(i, i + patternLength) === pattern) {
            count++;
        }
    }

    return count;
};