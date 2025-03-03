import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetsionProjetComponent } from './getsion-projet.component';

describe('GetsionProjetComponent', () => {
  let component: GetsionProjetComponent;
  let fixture: ComponentFixture<GetsionProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetsionProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetsionProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
