import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dislocated2Component } from './dislocated2.component';

describe('Dislocated2Component', () => {
  let component: Dislocated2Component;
  let fixture: ComponentFixture<Dislocated2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dislocated2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dislocated2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
