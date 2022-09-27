import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContenidoTablaComponent } from './contenido-tabla.component';

describe('ContenidoTablaComponent', () => {
  let component: ContenidoTablaComponent;
  let fixture: ComponentFixture<ContenidoTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
