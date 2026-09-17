import { Component } from '@angular/core';
import { contactLinks, portfolioConfig } from '../../core/config/portfolio.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly emailHref = contactLinks.emailHref;
  readonly emailLabel = portfolioConfig.email;
  readonly githubHref = contactLinks.githubHref;
  readonly linkedinHref = contactLinks.linkedinHref;
}
