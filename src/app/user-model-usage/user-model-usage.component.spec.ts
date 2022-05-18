import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModelUsageComponent } from './user-model-usage.component';

describe('UserModelUsageComponent', () => {
  let component: UserModelUsageComponent;
  let fixture: ComponentFixture<UserModelUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserModelUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModelUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
