var _ = require("lodash");

module.exports = function (genome) {
    var count = 0;
    var result = _.map(genome.split(""), function (nucleotide) {
        if (nucleotide === "G") {
            count++;
        } else if (nucleotide === "C") {
            count--;
        }
        return count;
    });
    result.unshift(0);
    return result;
};