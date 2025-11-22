import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptabiliteComponent } from './adaptabilite.component';

describe('AdaptabiliteComponent', () => {
  let component: AdaptabiliteComponent;
  let fixture: ComponentFixture<AdaptabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdaptabiliteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdaptabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
