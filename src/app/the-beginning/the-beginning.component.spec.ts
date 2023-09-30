import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBeginningComponent } from './the-beginning.component';

describe('TheBeginningComponent', () => {
  let component: TheBeginningComponent;
  let fixture: ComponentFixture<TheBeginningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheBeginningComponent]
    });
    fixture = TestBed.createComponent(TheBeginningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
