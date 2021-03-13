import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpHomeComponent } from './mvp-home.component';

describe('MvpHomeComponent', () => {
  let component: MvpHomeComponent;
  let fixture: ComponentFixture<MvpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvpHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
