var _ = require("lodash");

var complements = {
    "A": "T",
    "G": "C",
    "T": "A",
    "C": "G"
};

module.exports = function (pattern) {
    return _.map(pattern.split(""), function (nucleotide) {
        return complements[nucleotide]
    }).reverse().join("");
};