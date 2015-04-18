var _ = require("lodash");

//All distinct k-mers forming (L, t)-clumps in Genome.
module.exports = function (genome, k, L, t) {
    var i;
    var kMer;
    var kMersInWindow = [];
    var kMerCounts = {};
    var kMerCount;
    var outOfWindow;
    var result = {};
    var windowSize = L - k;
    var length = genome.length - k;

    for (i = 0; i <= length; i++) {
        kMer = genome.substr(i, k);

        kMersInWindow.push(kMer);


        if (kMersInWindow.length > windowSize) {
            outOfWindow = kMersInWindow.shift();
            kMerCounts[outOfWindow]--;
        }

        if (!result[kMer]) {
            kMerCount = kMerCounts[kMer] || 0;
            kMerCount++;
            kMerCounts[kMer] = kMerCount;

            if (kMerCount >= t) {
                result[kMer] = true;
            }
        }
    }

    return _.keys(result);
};