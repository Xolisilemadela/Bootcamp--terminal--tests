import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('Test my isWeekday function' , function(){
    it("It should return True if day passed in a function is a weekday" , function(){
        assert.equal(true, isWeekday('Monday'));
    });

    it("It should return False if day passed in a function is not a weekday" , function(){
        assert.equal(false, isWeekday('Saturday'));
    });

});