import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoutfoundComponent } from './noutfound.component';

describe('NoutfoundComponent', () => {
  let component: NoutfoundComponent;
  let fixture: ComponentFixture<NoutfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoutfoundComponent]
    });
    fixture = TestBed.createComponent(NoutfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
