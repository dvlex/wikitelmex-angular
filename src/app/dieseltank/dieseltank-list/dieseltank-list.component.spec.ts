import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieseltankListComponent } from './dieseltank-list.component';

describe('DieseltankListComponent', () => {
  let component: DieseltankListComponent;
  let fixture: ComponentFixture<DieseltankListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DieseltankListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieseltankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
