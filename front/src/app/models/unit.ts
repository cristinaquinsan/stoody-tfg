import { WordI } from "./word";

export interface UnitI {
    unitname: string,
    username: number,
    language: string,
    words: Array<WordI>
}
