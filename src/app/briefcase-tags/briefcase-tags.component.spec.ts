import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefcaseTagsComponent } from './briefcase-tags.component';

describe('BriefcaseTagsComponent', () => {
  let component: BriefcaseTagsComponent;
  let fixture: ComponentFixture<BriefcaseTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefcaseTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefcaseTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
