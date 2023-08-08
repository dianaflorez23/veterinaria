import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMascotasComponent } from './actualizar-mascotas.component';

describe('ActualizarMascotasComponent', () => {
  let component: ActualizarMascotasComponent;
  let fixture: ComponentFixture<ActualizarMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
