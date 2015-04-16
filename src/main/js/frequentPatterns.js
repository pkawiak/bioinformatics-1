var _ = require("lodash");

var patternCount = require("./patternCount");

module.exports = function (text, k) {
    var patternCounts = {};
    var maxCount = -1;
    var count;
    var i;
    var pattern;

    for (i = 0; i <= text.length - k; i++) {
        pattern = text.substring(i, i + k);
        if (_.isUndefined(patternCounts[pattern])) {
            count = patternCount(text, pattern);
            patternCounts[pattern] = {
                pattern: pattern,
                count: count
            };
            if (count > maxCount) {
                maxCount = count;
            }
        }
    }

    return _.pluck(_.filter(patternCounts, {count: maxCount}), "pattern");
};