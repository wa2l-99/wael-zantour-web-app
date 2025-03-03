import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgiliteComponent } from './agilite.component';

describe('AgiliteComponent', () => {
  let component: AgiliteComponent;
  let fixture: ComponentFixture<AgiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgiliteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
