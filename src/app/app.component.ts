import { Component } from '@angular/core';
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
    MeComponent,
    CvComponent,
    InterestsComponent,
    HomepageComponent,
    ContactComponent,
  ],
})
export class AppComponent {
  title = 'MeinePortfolioSeite';
}
