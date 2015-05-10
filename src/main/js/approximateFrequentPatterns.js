var _ = require("lodash");

var approximatePatternMatches = require("./approximatePatternMatches");
var allPossibleKmers = require("./allPossibleKmers");
var reverseComplement = require("./reverseComplement");

module.exports = function (text, k, d, withReverse) {
    var patternCounts = {};
    var maxCount = -1;
    var count;
    var i;
    var pattern;
    var allKmers = allPossibleKmers(k);

    _.forEach(allKmers, function (kmer) {
        count = approximatePatternMatches(kmer, text, d).length;

        if (withReverse) {
            count += approximatePatternMatches(reverseComplement(kmer), text, d).length;
        }

        patternCounts[kmer] = {
            pattern: kmer,
            count: count
        };
        if (count > maxCount) {
            maxCount = count;
        }
    });
    var sorted = _.sortByOrder(_.filter(patternCounts, {count: maxCount}), ["pattern"], [false]);
    return _.pluck(sorted, "pattern");
};

