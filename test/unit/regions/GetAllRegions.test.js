"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllRegions = void 0;
const chai_1 = require("chai");
describe("GetAllRegions Unit Test", () => {
    let instance;
    beforeEach(() => {
        instance = new GetAllRegions;
    });
    describe("constructor()", () => {
        describe("Given a new instance is created", () => {
            it("It should return a valid instance", () => {
                chai_1.expect(instance).to.be.an.instanceOf(GetAllRegions);
            });
        });
    });
});
class GetAllRegions {
    constructor() {
    }
    get() {
        throw new Error("Method not implemented.");
    }
}
exports.GetAllRegions = GetAllRegions;
//# sourceMappingURL=GetAllRegions.test.js.map