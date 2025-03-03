import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationClientComponent } from './relation-client.component';

describe('RelationClientComponent', () => {
  let component: RelationClientComponent;
  let fixture: ComponentFixture<RelationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelationClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
