import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal-3',
  templateUrl: './project-modal-3.component.html',
  styleUrl: './project-modal-3.component.scss',
})
export class ProjectModal3Component {
  constructor(public activeModal: NgbActiveModal) {}
}
