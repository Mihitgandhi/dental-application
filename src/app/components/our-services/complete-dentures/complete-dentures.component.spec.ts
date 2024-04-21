import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteDenturesComponent } from './complete-dentures.component';

describe('CompleteDenturesComponent', () => {
  let component: CompleteDenturesComponent;
  let fixture: ComponentFixture<CompleteDenturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompleteDenturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteDenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
