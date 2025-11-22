import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPresentationComponent } from './general-presentation.component';

describe('GeneralPresentationComponent', () => {
  let component: GeneralPresentationComponent;
  let fixture: ComponentFixture<GeneralPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
