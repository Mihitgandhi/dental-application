import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownAndBridgesComponent } from './crown.component';

describe('CrownAndBridgesComponent', () => {
  let component: CrownAndBridgesComponent;
  let fixture: ComponentFixture<CrownAndBridgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrownAndBridgesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrownAndBridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
