import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavigationComponent } from './top-navigation.component';
import { provideRouter } from '@angular/router';

describe('TopNavigationComponent', () => {
  let component: TopNavigationComponent;
  let fixture: ComponentFixture<TopNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavigationComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
