var expect = require("expect.js");

var numberToPattern = require("../../main/js/numberToPattern");

describe("Number to Pattern Spec", function () {

    var k;
    var index;

    it("should process short text", function () {
        //given
        index = 45;
        k = 4;

        //when
        //then
        expect(numberToPattern(index, k)).to.be("AGTC");
    });

    it("should process extra dataset", function () {
        //given
        index = 5353;
        k = 7;

        //when
        //then
        expect(numberToPattern(index, k)).to.be("CCATGGC");
    });


    it("should process data challenge", function () {
        //given
        index = 8327;
        k = 11;

        //when
        //then
        expect(numberToPattern(index, k)).to.be("AAAAGAAGACT");
    });
});