import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModal1Component } from './project-modal-1.component';

describe('ProjectModal1Component', () => {
  let component: ProjectModal1Component;
  let fixture: ComponentFixture<ProjectModal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectModal1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectModal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
