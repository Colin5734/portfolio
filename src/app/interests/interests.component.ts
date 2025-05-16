import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AareguruService } from '../services/aareguru.service';
import { BitcoinPriceService } from '../services/bitcoin-price.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-interests',
  standalone: true,
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
  imports: [CommonModule, TranslateModule],
})
export class InterestsComponent implements OnInit {
  currentTemperature: number | null = null;
  bitcoinPrice: number | null = null;
  errorMessage: string = '';

  constructor(
    private aareguruService: AareguruService,
    private bitcoinService: BitcoinPriceService
  ) {}

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

    this.bitcoinService.getCurrentBitcoinPrice().subscribe({
      next: (price: number | null) => {
        this.bitcoinPrice = price;
      },
      error: (err) => {
        console.error('Fehler beim Abrufen des Bitcoin-Preises', err);
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
