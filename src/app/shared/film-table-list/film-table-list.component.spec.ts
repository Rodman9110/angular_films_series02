import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTableListComponent } from './film-table-list.component';

describe('FilmTableListComponent', () => {
  let component: FilmTableListComponent;
  let fixture: ComponentFixture<FilmTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
