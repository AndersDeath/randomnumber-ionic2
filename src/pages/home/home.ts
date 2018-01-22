import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LangService } from '../../services/lang.service';
import { mainPageTranslate } from '../../interfaces/main-page-translate.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LangService]
})
export class HomePage {
  min: number;
  max: number;
  randomNumber: number = 0;
  selectedLang: string;
  words: mainPageTranslate;
  constructor(public navCtrl: NavController, private lang: LangService) {
    this.selectedLang = 'ru'
    this.translate();
  }
  ngAfterViewInit() {
    this.cardToMiddle();
  }
  generate() {
    if (+this.max <= +this.min) {
      this.max = +this.min + 1;
    }
    if (this.max !== undefined && this.min !== undefined) {
      this.randomNumber = parseInt((Math.random() * (this.max - this.min) + this.min) + '')
    }
  }
  minValidator() {
    if (+this.min < 0) {
      this.min = 0;
    }
    this.maxValidator()
  }
  maxValidator() {
    if (+this.max <= +this.min) {
      this.max = +this.min + 1;
    }
  }
  langChange() {
    this.translate();
  }
  translate() {
    this.lang.setLang(this.selectedLang);
    let translate = this.lang.get('pages')['main'];
    this.words = {
      title: translate.title,
      russian: translate.russian,
      english: translate.english,
      min: translate.min,
      max: translate.max,
      generate: translate.generate
    }
  }
  cardToMiddle() {
    let card = document.querySelector('.main-card'),
      cardHeight = card.clientHeight,
      tabbarHeight = document.querySelector('.toolbar').clientHeight,
      bodyHeight = document.querySelector('body').clientHeight,
      contentHeight = bodyHeight - tabbarHeight;
    if (cardHeight < contentHeight) {
      card['style'].top = 0 + 'px';
      card['style'].top = (contentHeight - cardHeight) / 2.4 + 'px';
      card['style'].position = '';
      card['style'].position = 'absolute';
    } else {
      card['style'].marginTop = 'auto';
    }
  }
}
