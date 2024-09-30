import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModal1Component } from '../projects-modals/project-modal-1/project-modal-1.component';
import { ProjectModal2Component } from '../projects-modals/project-modal-2/project-modal-2.component';
import { ProjectModal3Component } from '../projects-modals/project-modal-3/project-modal-3.component';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrl: './projects-home.component.scss',
})
export class ProjectsHomeComponent {
  constructor(
    private modalService: NgbModal // Injection de NgbModal
  ) {}

  openModal1() {
    this.modalService.open(ProjectModal1Component);
  }
  openModal2() {
    this.modalService.open(ProjectModal2Component);
  }
  openModal3() {
    this.modalService.open(ProjectModal3Component);
  }
}
