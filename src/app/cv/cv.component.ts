import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  description: string;
  type: 'Berufserfahrung' | 'Ausbildung';
}

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: 'Kaufmann EFZ',
      date: '2014 - 2017',
      description: 'WKS Bern',
      type: 'Ausbildung',
    },
    {
      id: 2,
      title: 'Berufsmatur Typ Wirtschaft',
      date: '2018 - 2019',
      description: 'WKS Bern',
      type: 'Ausbildung',
    },
    {
      id: 3,
      title: 'Sachbearbeiter',
      date: '04.2020 - 08.2020',
      description: 'Eidg. Steuerverwaltung',
      type: 'Berufserfahrung',
    },
    {
      id: 4,
      title: 'Administrativer Assistent',
      date: '10.2020 - 07.2024',
      description: 'Bundesamt für Gesundheit',
      type: 'Berufserfahrung',
    },
    {
      id: 5,
      title: 'BSc Wirtschaftsinformatik',
      date: '2022 - 2026',
      description: 'Berner Fachhochschule',
      type: 'Ausbildung',
    },
    {
      id: 6,
      title: 'Praktikum IT Security',
      date: '08.2024 - heute',
      description: 'Steuerverwaltung Kt. Bern',
      type: 'Berufserfahrung',
    },
  ];
}
