import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
})
export class MeComponent {}
