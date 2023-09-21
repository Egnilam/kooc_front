import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateFormComponent } from './user-update-form.component';

describe('UserUpdateFormComponent', () => {
  let component: UserUpdateFormComponent;
  let fixture: ComponentFixture<UserUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserUpdateFormComponent]
    });
    fixture = TestBed.createComponent(UserUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});