import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Récupérer l'élément avec la classe 'animated-slide-up'
    const contents =
      this.el.nativeElement.querySelectorAll('.animated-slide-up');

    // Utiliser un délai pour bien s'assurer que l'animation se déclenche
    setTimeout(() => {
      contents.forEach((content: any) => {
        this.renderer.addClass(content, 'visible');
      });
    }, 100); // Attendre 100ms avant de déclencher l'animation
  }
}
