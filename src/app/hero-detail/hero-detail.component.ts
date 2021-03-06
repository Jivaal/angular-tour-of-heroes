import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit 
{
  @Input() hero? : Hero;

  constructor(  
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  public ngOnInit() : void { this.getHero(); }

  public getHero() : void 
  {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.heroService.getHero(id)
                       .subscribe(hero => this.hero = hero);
  }

  public save(): void 
  {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  public goBack() : void 
  {
    this.location.back();
  }
}
