import { Component, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  constructor(private renderer: Renderer2) {}

  changePopoverColor(color: string) {
    setTimeout(() => {
      const popoverElement = document.querySelector(`.popover-header`);
      if (popoverElement) {
        this.renderer.setStyle(popoverElement, 'color', color);
      }
    }, 5);
  }
}
