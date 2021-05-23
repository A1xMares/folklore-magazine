import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedNewCardComponent } from './feed-new-card.component';

describe('FeedNewCardComponent', () => {
  let component: FeedNewCardComponent;
  let fixture: ComponentFixture<FeedNewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedNewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
