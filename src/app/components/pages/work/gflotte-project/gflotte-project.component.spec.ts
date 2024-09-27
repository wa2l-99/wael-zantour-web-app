import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GflotteProjectComponent } from './gflotte-project.component';

describe('GflotteProjectComponent', () => {
  let component: GflotteProjectComponent;
  let fixture: ComponentFixture<GflotteProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GflotteProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GflotteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
