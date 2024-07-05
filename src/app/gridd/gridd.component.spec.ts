import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriddComponent } from './gridd.component';

describe('GriddComponent', () => {
  let component: GriddComponent;
  let fixture: ComponentFixture<GriddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GriddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GriddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
