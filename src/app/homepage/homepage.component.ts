import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- HIER IMPORTIEREN
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule, // <--- HIER HINZUFÜGEN
    TranslateModule,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit, OnDestroy {
  countdownText: string = '';
  isCountdownFinished: boolean = false;

  private intervalId: any;
  private targetDate = new Date('2026-07-31T00:00:00').getTime();
  private ngUnsubscribe = new Subject<void>();

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.updateCountdownDisplay();

    this.intervalId = setInterval(() => {
      this.updateCountdownDisplay();
    }, 1000);

    this.translate.onLangChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.updateCountdownDisplay();
      });
  }

  updateCountdownDisplay(): void {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance <= 0) {
      this.isCountdownFinished = true;
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      return;
    }

    this.isCountdownFinished = false;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.countdownText = this.translate.instant(
      'homepage.social.countdownFormat',
      {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      }
    );
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
