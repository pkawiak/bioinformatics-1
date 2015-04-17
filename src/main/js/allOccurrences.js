module.exports = function (pattern, genome) {
    var occurrence = genome.indexOf(pattern, 0);
    var result = [];

    while (occurrence != -1) {
        result.push(occurrence);
        occurrence = genome.indexOf(pattern, occurrence + 1);
    }

    return result;
};