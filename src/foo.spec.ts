import { expect } from "chai";
import { Foo } from "./foo";

const testMe = new Foo();

let undefinedArg: string;

describe("Foo", () => {

    describe("#append(string)", () => {
        it("should gracefully handle undefined argument", () => {
            expect(testMe.append(undefinedArg)).to.be.equal("undefined-foo");
        });
    });

    describe("#append(string)", () => {
        it("should append to the input argument and return with it", () => {
            expect(testMe.append("bar")).to.be.not.equal("bar-foo");
        });
    });

});
