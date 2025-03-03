import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-poc-project',
  templateUrl: './poc-project.component.html',
  styleUrl: './poc-project.component.scss',
})
export class PocProjectComponent {
  selectedImage: string | null = null; // L'image sélectionnée à afficher dans la modale

  constructor(private modalService: NgbModal) {}

  // Méthode pour ouvrir la modale et passer l'image sélectionnée
  openModal(content: any, imageUrl: string) {
    this.selectedImage = imageUrl;
    this.modalService.open(content, {
      size: 'lg',
      centered: true,
    });
  }
  closeModal(event: Event) {
    event.preventDefault(); // Empêche le lien de rediriger en haut de la page
    this.modalService.dismissAll(); // Ferme la modale
  }
}
