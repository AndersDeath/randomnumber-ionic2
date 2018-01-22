import { Injectable } from '@angular/core';
@Injectable()
export class LangService {
    private default = 'ru';
    private langObj = {
        ru: {
            pages: {
                main: {
                    title: "Случайное число",
                    russian: "Русский",
                    english: "Английский",
                    min: "Мин",
                    max: "Макс",
                    generate: "Сгенерировать"
                }
            }
        },
        en: {
            pages: {
                main: {
                    title: "Random number",
                    russian: "Russian",
                    english: "English",
                    min: "Min",
                    max: "Max",
                    generate: "Generate"
                }
            }
        }
    };
    constructor() {

    }
    setLang(lang: string) {
        this.default = lang;
    }
    get(section) {
        return this.langObj[this.default][section];
    }

}