import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProList } from './pro-list';

describe('ProList', () => {
  let component: ProList;
  let fixture: ComponentFixture<ProList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
