import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatiobydateComponent } from './ratiobydate.component';

describe('RatiobydateComponent', () => {
  let component: RatiobydateComponent;
  let fixture: ComponentFixture<RatiobydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatiobydateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatiobydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
