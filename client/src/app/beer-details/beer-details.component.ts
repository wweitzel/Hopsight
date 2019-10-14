import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer.model';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss'],
})
export class BeerDetailsComponent implements OnInit {

  beer: Beer;

  constructor(public router: Router,
              public menu: MenuController) { }

  ngOnInit() {
    this.beer = this.router.getCurrentNavigation().extras.state.beer;
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }

}
