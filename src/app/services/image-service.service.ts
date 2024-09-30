import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor() {}

  getResponsiveImage(): string {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 991) {
      return 'assets/img/p_400.png';
    } else if (screenWidth <= 1279) {
      return 'assets/img/p_700.png';
    } else {
      return 'assets/img/p_900.png';
    }
  }
}
