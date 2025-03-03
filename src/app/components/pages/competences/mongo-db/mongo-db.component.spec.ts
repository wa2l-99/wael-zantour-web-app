import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDbComponent } from './mongo-db.component';

describe('MongoDbComponent', () => {
  let component: MongoDbComponent;
  let fixture: ComponentFixture<MongoDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MongoDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MongoDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
