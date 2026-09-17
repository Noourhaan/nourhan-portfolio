import { Component } from '@angular/core';
import { APPROACH_STEPS } from '../../core/data/content.data';

@Component({
  selector: 'app-approach',
  standalone: true,
  templateUrl: './approach.component.html',
  styleUrl: './approach.component.scss',
})
export class ApproachComponent {
  readonly steps = APPROACH_STEPS;
}
