"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var en_1 = require("./lang/en");
var util_1 = __importDefault(require("util"));
var langs = [en_1.en];
var curLang = en_1.en;
function lang(key) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return util_1.default.format.apply(util_1.default, [curLang.dict[key]].concat(args));
}
exports.lang = lang;
function setCurLang(_lang) {
    curLang = _lang;
}
exports.setCurLang = setCurLang;
function getLangs() {
    return langs;
}
exports.getLangs = getLangs;
function getCurLang() {
    return curLang;
}
exports.getCurLang = getCurLang;
//# sourceMappingURL=/Users/kxiang/work/projects/psdetch/v3-new/psdetch-i18n/src/index.js.map