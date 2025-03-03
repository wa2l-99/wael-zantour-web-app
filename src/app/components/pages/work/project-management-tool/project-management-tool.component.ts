import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-management-tool',
  templateUrl: './project-management-tool.component.html',
  styleUrl: './project-management-tool.component.scss',
})
export class ProjectManagementToolComponent {
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
