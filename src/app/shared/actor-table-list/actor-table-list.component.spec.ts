import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorTableListComponent } from './actor-table-list.component';

describe('ActorTableListComponent', () => {
  let component: ActorTableListComponent;
  let fixture: ComponentFixture<ActorTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
