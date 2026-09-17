import { Component } from '@angular/core';
import { portfolioConfig } from '../../core/config/portfolio.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly name = portfolioConfig.name;
  readonly year = new Date().getFullYear();
}
