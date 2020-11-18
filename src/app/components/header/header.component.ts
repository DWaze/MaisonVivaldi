import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import { faUserCircle, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imageLogo: string;

  faUserCircle = faUserCircle;
  faShoppingBasket = faShoppingBasket;
  panier = 2;
  constructor() {
    this.panier = 2;
    this.imageLogo = environment.images_urls.header_logo;
  }

  ngOnInit(): void {
  }
}
