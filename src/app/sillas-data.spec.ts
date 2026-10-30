import { TestBed } from '@angular/core/testing';
import { SillasData } from './sillas-data';

describe('SillasData', () => {
  let service: SillasData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SillasData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
