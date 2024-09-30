import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  activeTab: any = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Abonnement aux changements de fragment dans l'URL
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        this.handleFragmentChange(fragment);
        this.scrollToFragment(fragment);
      }
    });
  }

  // Fonction pour activer l'onglet basé sur le fragment
  handleFragmentChange(fragment: string) {
    switch (fragment) {
      case 'education':
        this.activeTab = 0;
        break;
      case 'experience':
        this.activeTab = 1; // Activer "Expérience professionnelle"
        break;
      case 'skills':
        this.activeTab = 2; // Activer "Compétences"
        break;
      default:
        this.activeTab = 0; // Onglet par défaut si fragment inconnu
    }
  }

  // Utiliser window.scrollTo pour forcer le défilement exact au début de la section
  scrollToFragment(fragment: string) {
    setTimeout(() => {
      const element = document.getElementById(fragment);
      if (element) {
        const yOffset = -150;
        const yPosition =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    }, 10); // Attendre 500ms pour s'assurer que le DOM est prêt
  }
}
