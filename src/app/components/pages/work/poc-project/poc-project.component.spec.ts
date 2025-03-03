import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocProjectComponent } from './poc-project.component';

describe('PocProjectComponent', () => {
  let component: PocProjectComponent;
  let fixture: ComponentFixture<PocProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PocProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
