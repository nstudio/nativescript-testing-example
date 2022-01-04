import { TestBed } from '@angular/core/testing';

import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should contain 22 items', () => {
    expect(service.getItems().length).toBe(22);
  });
  it('should return the correct item', () => {
    expect(service.getItem(10).name).toBe('Messi');
  })
});
