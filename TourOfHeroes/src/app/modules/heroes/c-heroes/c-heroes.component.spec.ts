import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HEROES } from '@data/db';
import { Hero } from '@models/Hero';
import { get, getAll } from '@shared/JestHelperFunctions';
import { CHeroesComponent } from './c-heroes.component';

describe('CHeroesComponent', () => {
  let component: CHeroesComponent;
  let fixture: ComponentFixture<CHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CHeroesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill heroes attribute with HEROES array', () => {
    const c = new CHeroesComponent();
    expect(c.heroes).toEqual(HEROES);
  });

  it('should has heroes populated', () => {
    fixture.detectChanges();
    expect(component.heroes[0]).toEqual(HEROES[0]);
  });

  it('should render heroes', () => {
    const fixture = TestBed.createComponent(CHeroesComponent);
    fixture.detectChanges();
    const displyed_title: string[] = getAll(
      fixture.debugElement,
      'hero-item'
    ).map((t) => t.nativeElement.textContent);

    expect(displyed_title.length).toEqual(HEROES.length);
  });

  it('should rander heros names and id', () => {
    const fixture = TestBed.createComponent(CHeroesComponent);
    fixture.detectChanges();
    const displyed_title = getAll(fixture.debugElement, 'hero-item').map(
      (t) => {
        const heroId = get(t, 'hero-id');
        const heroName = get(t, 'hero-name');

        return {
          id: +heroId.nativeElement.textContent,
          name: heroName.nativeElement.textContent,
        } as Hero;
      }
    );

    expect(displyed_title).toEqual(HEROES);
  });
});
