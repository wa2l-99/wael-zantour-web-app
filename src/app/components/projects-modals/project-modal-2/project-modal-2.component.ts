import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal-2',
  templateUrl: './project-modal-2.component.html',
  styleUrl: './project-modal-2.component.scss'
})
export class ProjectModal2Component {
  constructor(public activeModal: NgbActiveModal) {}

}
