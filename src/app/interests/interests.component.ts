import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css',
})
export class InterestsComponent {
  scrollToContact() {
    const element = document.getElementById('quiz');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
