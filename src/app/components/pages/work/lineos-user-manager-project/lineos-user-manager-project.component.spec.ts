import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineosUserManagerProjectComponent } from './lineos-user-manager-project.component';

describe('LineosUserManagerProjectComponent', () => {
  let component: LineosUserManagerProjectComponent;
  let fixture: ComponentFixture<LineosUserManagerProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineosUserManagerProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineosUserManagerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
