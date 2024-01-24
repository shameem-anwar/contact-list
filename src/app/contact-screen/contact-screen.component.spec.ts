import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactScreenComponent } from './contact-screen.component';

describe('ContactScreenComponent', () => {
  let component: ContactScreenComponent;
  let fixture: ComponentFixture<ContactScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactScreenComponent]
    });
    fixture = TestBed.createComponent(ContactScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
