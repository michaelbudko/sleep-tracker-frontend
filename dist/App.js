"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const components_1 = require("./components");
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(components_1.Sleep, null)));
}
exports.default = App;
//# sourceMappingURL=App.js.map