import { Component } from '@angular/core';
import { HERO_TECH } from '../../core/data/content.data';
import { contactLinks } from '../../core/config/portfolio.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly tech = HERO_TECH;
  readonly contactHref = contactLinks.emailHref;
}
