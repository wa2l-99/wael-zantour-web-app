import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  // Méthode pour calculer la largeur en fonction de la valeur de chaque barre
  getProgressWidth(value: number): string {
    return `${value}%`; // Retourne la largeur en pourcentage en fonction de la valeur
  }
}
