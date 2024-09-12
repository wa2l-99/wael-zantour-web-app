import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal-1',
  templateUrl: './project-modal-1.component.html',
  styleUrl: './project-modal-1.component.scss',
})
export class ProjectModal1Component {
  constructor(public activeModal: NgbActiveModal) {}
}
