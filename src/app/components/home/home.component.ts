import { Component, HostListener, OnInit } from '@angular/core';
import { ImageService } from '../../services/image-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public imageUrl: string = '';

  heroWrapperStyles = {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  };

  imageStyles = {
    opacity: '1', // Initial opacity à 100%
  };

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageUrl = this.imageService.getResponsiveImage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.imageUrl = this.imageService.getResponsiveImage();
  }

  // Écouter l'événement de défilement
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight; // La hauteur où la transformation doit être complète

    // Calculer la progression du défilement (entre 0 et 1)
    const scrollProgress = Math.min(scrollY / maxScroll, 1);

    // Mettre à jour les styles de manière progressive
    this.heroWrapperStyles = {
      width: `${80 + 20 * scrollProgress}%`, // Largeur de 80% à 100%
      backgroundColor: `rgba(10, 10, 10, ${scrollProgress})`, // Fond de transparent à noir
    };

      // Mettre à jour l'opacité de l'image en fonction du défilement
      this.imageStyles = {
        opacity: `${1 - 0.99 * scrollProgress}`, // Opacité va de 1 à 0.3
      }
  }
}
