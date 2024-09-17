import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const contents =
      this.el.nativeElement.querySelectorAll('.animated-slide-up');

    setTimeout(() => {
      contents.forEach((content: any) => {
        this.renderer.addClass(content, 'visible');
      });
    }, 100);
  }
}
