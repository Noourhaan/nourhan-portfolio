import { Component } from '@angular/core';
import { EXPERIENCE_ITEMS } from '../../core/data/content.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly items = EXPERIENCE_ITEMS;
}
