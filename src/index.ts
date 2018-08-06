import { en } from "./lang/en";
import { ILang } from "psdetch-core";
import util from "util";
const langs: ILang[] = [en];
let curLang: ILang = en;
export function lang(key: keyof ILang["dict"], ...args: any[]): string {
  return util.format(curLang.dict[key], ...args);
}
export function setCurLang(_lang: ILang) {
  curLang = _lang;
}

export function getLangs(): ILang[] {
  return langs;
}

export function getCurLang(): ILang {
  return curLang;
}

