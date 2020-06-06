import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandaDetalleComponent } from './banda-detalle.component';

describe('BandaDetalleComponent', () => {
  let component: BandaDetalleComponent;
  let fixture: ComponentFixture<BandaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
