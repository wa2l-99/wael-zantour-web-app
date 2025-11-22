import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunitComponent } from './junit.component';

describe('JunitComponent', () => {
  let component: JunitComponent;
  let fixture: ComponentFixture<JunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JunitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
