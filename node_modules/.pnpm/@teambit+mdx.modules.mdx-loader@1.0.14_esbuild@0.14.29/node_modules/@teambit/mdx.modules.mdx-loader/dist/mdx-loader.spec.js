"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const webpack_fixture_1 = require("./fixtures/webpack-fixture");
describe('MDX Loader', () => {
    describe('simple.mdx', () => {
        let module;
        // @ts-ignore conflict between mocha and jest
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            module = yield (0, webpack_fixture_1.bundleFixture)('simple.mdx');
        }), 15000);
        it('should compile the markdown and return a component', () => {
            (0, chai_1.expect)(module.source).to.include('function MDXContent');
            // @ts-ignore conflict between mocha and jest
        }, 15000);
        it('should not include metadata at all', () => {
            (0, chai_1.expect)(module.source).to.not.include('My Component');
            (0, chai_1.expect)(module.source).to.not.include(`['first', 'component']`);
            // @ts-ignore conflict between mocha and jest
        }, 15000);
    });
});
//# sourceMappingURL=mdx-loader.spec.js.map