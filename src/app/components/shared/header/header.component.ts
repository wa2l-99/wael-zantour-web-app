import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public sidebarOpen: boolean = false;
  public currentSection = 'home';

  constructor() {}

  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  onClickedOutside(e: Event) {
    if (this.sidebarOpen) this.sidebarOpen = false;
  }
}
