import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoFormComponent } from './foro-form.component';

describe('ForoFormComponent', () => {
  let component: ForoFormComponent;
  let fixture: ComponentFixture<ForoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
