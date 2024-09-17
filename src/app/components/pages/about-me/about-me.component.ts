import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements AfterViewInit {
  active = 1;

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
