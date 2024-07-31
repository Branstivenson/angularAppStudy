import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCardTasksComponent } from './p-card-tasks.component';

describe('PCardTasksComponent', () => {
  let component: PCardTasksComponent;
  let fixture: ComponentFixture<PCardTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCardTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PCardTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
