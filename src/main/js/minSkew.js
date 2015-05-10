var _ = require("lodash");

var skew = require("./skew");

module.exports = function (genome) {

    var sk = skew(genome);
    var min = _.min(sk);
    var result = [];

    _.forEach(sk, function (skewValue, index) {
        if (skewValue === min) {
            result.push(index)
        }
    });

    return result;

};