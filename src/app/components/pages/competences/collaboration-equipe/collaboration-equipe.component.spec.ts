import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationEquipeComponent } from './collaboration-equipe.component';

describe('CollaborationEquipeComponent', () => {
  let component: CollaborationEquipeComponent;
  let fixture: ComponentFixture<CollaborationEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollaborationEquipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
