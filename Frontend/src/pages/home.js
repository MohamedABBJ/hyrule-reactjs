"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var navbar_1 = require("../components/navbar/navbar");
var useRequestOne_1 = require("../components/hooks/useRequestOne");
var HomePage = function () {
    var _a = (0, useRequestOne_1.useRequestOne)(), dataObtained = _a.dataObtained, setInputValue = _a.setInputValue;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(navbar_1.default, { props: 'top' })));
};
/*

*/
exports.default = HomePage;
