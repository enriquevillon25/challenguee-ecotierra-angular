import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { clienteComponent } from './cliente.component';

describe('UsersComponent', () => {
  let component: clienteComponent;
  let fixture: ComponentFixture<clienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ clienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(clienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
