import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canvas2DProjectComponent } from './canvas2-d-project.component';

describe('Canvas2DProjectComponent', () => {
  let component: Canvas2DProjectComponent;
  let fixture: ComponentFixture<Canvas2DProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Canvas2DProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Canvas2DProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
