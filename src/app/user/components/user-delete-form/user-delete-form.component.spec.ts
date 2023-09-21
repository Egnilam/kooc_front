import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeleteFormComponent } from './user-delete-form.component';

describe('UserDeleteFormComponent', () => {
  let component: UserDeleteFormComponent;
  let fixture: ComponentFixture<UserDeleteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserDeleteFormComponent]
    });
    fixture = TestBed.createComponent(UserDeleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
