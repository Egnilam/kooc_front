import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdatePasswordFormComponent } from './user-update-password-form.component';

describe('UserUpdatePasswordFormComponent', () => {
  let component: UserUpdatePasswordFormComponent;
  let fixture: ComponentFixture<UserUpdatePasswordFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserUpdatePasswordFormComponent]
    });
    fixture = TestBed.createComponent(UserUpdatePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
