var _ = require("lodash");
var neighbors = require("./neighbors");
var approximatePatternMatches = require("./approximatePatternMatches");

module.exports = function (k, d, dnaStrings) {

    var patterns = {};

    _.forEach(dnaStrings, function (dnaString) {
        var i;
        var dnaLength = dnaString.length;
        for (i = 0; i <= dnaLength - k; i++) {
            var kmer = dnaString.substring(i, i + k);
            var neighborhood = neighbors(kmer, d);
            _.forEach(neighborhood, function (neighbor) {
                if (_.every(dnaStrings, function (dnaString) {
                        return approximatePatternMatches(neighbor, dnaString, d).length > 0;
                    })) {
                    patterns[neighbor] = neighbor;
                }
            });

        }
    });

    return _.sortBy(_.keys(patterns));
};