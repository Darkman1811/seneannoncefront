import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAnnonceComponent } from './delete-annonce.component';

describe('DeleteAnnonceComponent', () => {
  let component: DeleteAnnonceComponent;
  let fixture: ComponentFixture<DeleteAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAnnonceComponent]
    });
    fixture = TestBed.createComponent(DeleteAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
