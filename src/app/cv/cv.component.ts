import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

export interface TimelineItemTranslated {
  id: number;
  titleKey: string;
  date: string;
  dateRaw?: string;
  isCurrent?: boolean;
  descriptionKey: string;
  typeKey: string;
}

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  timelineItems: TimelineItemTranslated[] = [
    {
      id: 1,
      titleKey: 'cv.timeline.item1.title',
      date: '2014 - 2017',
      descriptionKey: 'cv.timeline.item1.description',
      typeKey: 'cv.timeline.types.education',
    },
    {
      id: 2,
      titleKey: 'cv.timeline.item2.title',
      date: '2018 - 2019',
      descriptionKey: 'cv.timeline.item2.description',
      typeKey: 'cv.timeline.types.education',
    },
    {
      id: 3,
      titleKey: 'cv.timeline.item3.title',
      date: '04.2020 - 08.2020',
      descriptionKey: 'cv.timeline.item3.description',
      typeKey: 'cv.timeline.types.workExperience',
    },
    {
      id: 4,
      titleKey: 'cv.timeline.item4.title',
      date: '10.2020 - 07.2024',
      descriptionKey: 'cv.timeline.item4.description',
      typeKey: 'cv.timeline.types.workExperience',
    },
    {
      id: 5,
      titleKey: 'cv.timeline.item5.title',
      date: '2022 - 2026',
      descriptionKey: 'cv.timeline.item5.description',
      typeKey: 'cv.timeline.types.education',
    },
    {
      id: 6,
      titleKey: 'cv.timeline.item6.title',
      date: '08.2024 - ',
      dateRaw: '08.2024',
      isCurrent: true,
      descriptionKey: 'cv.timeline.item6.description',
      typeKey: 'cv.timeline.types.workExperience',
    },
  ];

  isTypeWorkExperience(itemTypeKey: string): boolean {
    return itemTypeKey === 'cv.timeline.types.workExperience';
  }

  isTypeEducation(itemTypeKey: string): boolean {
    return itemTypeKey === 'cv.timeline.types.education';
  }
}
