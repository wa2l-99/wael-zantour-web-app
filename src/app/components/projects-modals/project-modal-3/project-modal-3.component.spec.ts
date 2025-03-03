import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModal3Component } from './project-modal-3.component';

describe('ProjectModal3Component', () => {
  let component: ProjectModal3Component;
  let fixture: ComponentFixture<ProjectModal3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectModal3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectModal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
