import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProPersoProjectsComponent } from './pro-perso-projects.component';

describe('ProPersoProjectsComponent', () => {
  let component: ProPersoProjectsComponent;
  let fixture: ComponentFixture<ProPersoProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProPersoProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProPersoProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
