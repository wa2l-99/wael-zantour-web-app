import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal-2',
  templateUrl: './project-modal-2.component.html',
  styleUrl: './project-modal-2.component.scss',
})
export class ProjectModal2Component {
  constructor(public activeModal: NgbActiveModal, private router: Router) {}
  redirectToProject() {
    this.router.navigate(['/work/canvas2d-project']);
    this.activeModal.dismiss();
  }
}
