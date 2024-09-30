import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal-1',
  templateUrl: './project-modal-1.component.html',
  styleUrl: './project-modal-1.component.scss',
})
export class ProjectModal1Component {
  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  redirectToProject() {
    this.router.navigate(['/work/medHeadPOC-project']);
    this.activeModal.dismiss();
  }
}
