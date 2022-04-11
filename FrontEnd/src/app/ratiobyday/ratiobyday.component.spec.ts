import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatiobydayComponent } from './ratiobyday.component';

describe('RatiobydayComponent', () => {
  let component: RatiobydayComponent;
  let fixture: ComponentFixture<RatiobydayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatiobydayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatiobydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
