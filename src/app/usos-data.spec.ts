import { TestBed } from '@angular/core/testing';
import { UsosData } from './usos-data';

describe('UsosData', () => {
  let service: UsosData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsosData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
