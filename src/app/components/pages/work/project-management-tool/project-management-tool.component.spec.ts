import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementToolComponent } from './project-management-tool.component';

describe('ProjectManagementToolComponent', () => {
  let component: ProjectManagementToolComponent;
  let fixture: ComponentFixture<ProjectManagementToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectManagementToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectManagementToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
