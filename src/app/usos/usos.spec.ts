import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Usos } from './usos';

describe('Usos', () => {
  let component: Usos;
  let fixture: ComponentFixture<Usos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usos],
    }).compileComponents();

    fixture = TestBed.createComponent(Usos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
