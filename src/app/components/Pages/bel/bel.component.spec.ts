import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelComponent } from './bel.component';

describe('BelComponent', () => {
  let component: BelComponent;
  let fixture: ComponentFixture<BelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
