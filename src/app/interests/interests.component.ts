import { Component, OnInit } from '@angular/core';
import { AareguruService } from '../services/aareguru.service';

@Component({
  selector: 'app-interests',
  standalone: true,
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent implements OnInit {
  currentTemperature: number | null = null;
  errorMessage: string = '';

  constructor(private aareguruService: AareguruService) {}

  ngOnInit(): void {
    this.aareguruService.getCurrentTemperature().subscribe({
      next: (data: number) => {
        this.currentTemperature = data;
      },
      error: (err) => {
        console.error('Fehler beim Abrufen der Temperatur', err);
        this.errorMessage = 'Daten konnten nicht geladen werden.';
      },
    });
  }

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
