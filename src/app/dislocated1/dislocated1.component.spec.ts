import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dislocated1Component } from './dislocated1.component';

describe('Dislocated1Component', () => {
  let component: Dislocated1Component;
  let fixture: ComponentFixture<Dislocated1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dislocated1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dislocated1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
