import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFeedComponent } from './section-feed.component';

describe('SectionFeedComponent', () => {
  let component: SectionFeedComponent;
  let fixture: ComponentFixture<SectionFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
