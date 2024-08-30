import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('Test my countRegNumbers function' , function(){
    it("It should return 3 if the number of regNums in a string is equal to 3" , function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });

    it("It should return 1 if the number of regNums in a string is equal to 1" , function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });

});