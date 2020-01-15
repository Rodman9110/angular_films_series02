import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmActorFormComponent } from './film-actor-form.component';

describe('FilmActorFormComponent', () => {
  let component: FilmActorFormComponent;
  let fixture: ComponentFixture<FilmActorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmActorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmActorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
