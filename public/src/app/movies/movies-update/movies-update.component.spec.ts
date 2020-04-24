import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesUpdateComponent } from './movies-update.component';

describe('MoviesUpdateComponent', () => {
  let component: MoviesUpdateComponent;
  let fixture: ComponentFixture<MoviesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
