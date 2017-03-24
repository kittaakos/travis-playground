import { expect } from "chai";
import { Foo } from "./foo";

const testMe = new Foo();

let undefinedArg: string;

describe("Foo", function () {

    describe("#append()", () => {
        it("should gracefully handle undefined", () => {
            expect(testMe.append(undefinedArg)).to.be.equal("undefined-foo");
        });
    });

    describe("#equals()", () => {
        it("should append to the inpuit argument", () => {
            expect(testMe.append("bar")).to.be.equal("bar-foo");
        });
    });

});
