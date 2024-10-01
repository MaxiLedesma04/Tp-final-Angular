import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPageComponent } from './tabla-page.component';

describe('TablaPageComponent', () => {
  let component: TablaPageComponent;
  let fixture: ComponentFixture<TablaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
