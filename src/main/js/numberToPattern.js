var numberToPattern = function (index, k) {
    if (k === 1) {
        return numberToSymbol(index);
    }
    var prefixIndex = parseInt(index / 4);
    var r = index % 4;
    return numberToPattern(prefixIndex, k - 1) + numberToSymbol(r);
};

module.exports = numberToPattern;

var numbersToSymbols = {
    0: "A",
    1: "C",
    2: "G",
    3: "T"
};

function numberToSymbol(index) {
    return numbersToSymbols[index];
}