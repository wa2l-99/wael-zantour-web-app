import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModal2Component } from './project-modal-2.component';

describe('ProjectModal2Component', () => {
  let component: ProjectModal2Component;
  let fixture: ComponentFixture<ProjectModal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectModal2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
