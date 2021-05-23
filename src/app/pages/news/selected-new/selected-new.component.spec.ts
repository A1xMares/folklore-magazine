import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedNewComponent } from './selected-new.component';

describe('SelectedNewComponent', () => {
  let component: SelectedNewComponent;
  let fixture: ComponentFixture<SelectedNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
