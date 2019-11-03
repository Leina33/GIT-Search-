import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearFormComponent } from './sear-form.component';

describe('SearFormComponent', () => {
  let component: SearFormComponent;
  let fixture: ComponentFixture<SearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
