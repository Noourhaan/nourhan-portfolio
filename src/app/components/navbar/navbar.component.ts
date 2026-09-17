import {
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { NAV_LINKS } from '../../core/data/content.data';
import { portfolioConfig, contactLinks } from '../../core/config/portfolio.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  readonly links = NAV_LINKS;
  readonly logo = portfolioConfig.logo;
  readonly contactHref = contactLinks.emailHref;

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly activeId = signal<string>('');

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    this.onScroll();
    this.observeSections();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  private observeSections(): void {
    const ids = this.links.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!('IntersectionObserver' in window) || sections.length === 0) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeId.set(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((section) => this.observer!.observe(section));
  }
}
