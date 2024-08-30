import assert from "assert";
import regCheck from "../regCheck.js";

describe('Test my regCheck function' , function(){
    it("It should return True when vehicle regNo end string matches end reg location" , function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });

    it("It should return False when vehicle regNo end string not match end reg location " , function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
    });

});