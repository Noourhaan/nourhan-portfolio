import { Component, Input, signal } from '@angular/core';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;

  /** Falls back to the placeholder if a screenshot fails to load. */
  readonly imgFailed = signal(false);
}
