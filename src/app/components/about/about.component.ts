import { Component } from '@angular/core';
import { ABOUT_STATS } from '../../core/data/content.data';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly stats = ABOUT_STATS;
}
