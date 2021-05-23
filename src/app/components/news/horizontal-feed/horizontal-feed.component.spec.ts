import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalFeedComponent } from './horizontal-feed.component';

describe('HorizontalFeedComponent', () => {
  let component: HorizontalFeedComponent;
  let fixture: ComponentFixture<HorizontalFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
