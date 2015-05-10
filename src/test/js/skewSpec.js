var expect = require("expect.js");

var skew = require("../../main/js/skew");

describe("Skew Spec", function () {

    var genome;

    it("should process short text", function () {
        //given
        genome = "CATGGGCATCGGCCATACGCC";

        //when
        //then
        expect(skew(genome).join(" ")).to.be("0 -1 -1 -1 0 1 2 1 1 1 0 1 2 1 0 0 0 0 -1 0 -1 -2");
    });

});