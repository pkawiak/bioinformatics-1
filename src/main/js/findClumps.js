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

    for (i = 0; i <= genome.length - k; i++) {
        kMer = genome.substring(i, i + k);
        kMersInWindow.push(kMer);

        if (kMersInWindow.length > L) {
            outOfWindow = kMersInWindow.shift();
            kMerCounts[outOfWindow]--;
        }

        kMerCount = kMerCounts[kMer] || 0;
        kMerCount++;
        kMerCounts[kMer] = kMerCount;

        if (kMerCount >= t) {
            result[kMer] = true;
        }

    }

    return _.keys(result);
};