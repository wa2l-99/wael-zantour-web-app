import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-canvas2-d-project',
  templateUrl: './canvas2-d-project.component.html',
  styleUrl: './canvas2-d-project.component.scss',
})
export class Canvas2DProjectComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;

  images: string[] = [
    '/assets/img/canelle.png',
    '/assets/img/interaction.gif',
    '/assets/img/paint.png',
    '/assets/img/gradiant.png',
    '/assets/img/courbe.gif',
  ];
  images2: string[] = [
    '/assets/img/canvas2dSite/acceuil.png',
    '/assets/img/canvas2dSite/auth-canvas.png',
    '/assets/img/canvas2dSite/signIn.png',
    '/assets/img/canvas2dSite/exo.png',
    '/assets/img/canvas2dSite/dExo.png',
    '/assets/img/canvas2dSite/exer.png',
    '/assets/img/canvas2dSite/feedback.png',
  ];
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows;
    config.showNavigationIndicators;
  }
}
