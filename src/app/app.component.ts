import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

import { MeComponent } from './me/me.component';
import { CvComponent } from './cv/cv.component';
import { InterestsComponent } from './interests/interests.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    TranslateModule,
    MeComponent,
    CvComponent,
    InterestsComponent,
    HomepageComponent,
    ContactComponent,
  ],
})
export class AppComponent {
  title = 'MeinePortfolioSeite';

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'de';
    translate.setDefaultLang(savedLang);
    translate.use(savedLang);
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
