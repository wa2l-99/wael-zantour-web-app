import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemResolutionComponent } from './problem-resolution.component';

describe('ProblemResolutionComponent', () => {
  let component: ProblemResolutionComponent;
  let fixture: ComponentFixture<ProblemResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemResolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
