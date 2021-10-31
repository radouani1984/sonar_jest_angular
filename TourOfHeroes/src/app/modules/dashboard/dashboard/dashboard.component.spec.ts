import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HEROES } from '@data/db';
import { Hero } from '@models/Hero';
import { get, getAll } from '@shared/JestHelperFunctions';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DashboardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has heroes populated', () => {
    fixture.detectChanges();
    expect(component.topHeroes).toEqual(HEROES.slice(5));
  });

  it('should render heroes', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const displyed_title: string[] = getAll(
      fixture.debugElement,
      'hero-item'
    ).map((t) => t.nativeElement.textContent);

    expect(displyed_title.length).toEqual(5);
  });

  it('should rander heros names', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const displyed_title = getAll(fixture.debugElement, 'hero-item').map(
      (t) => t.nativeElement?.textContent
    );
    expect(displyed_title).toEqual(HEROES.slice(5).map((t) => t.name));
  });
});
