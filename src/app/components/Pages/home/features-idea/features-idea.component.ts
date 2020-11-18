import { Component, OnInit } from '@angular/core';
import { faShoppingBasket, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features-idea',
  templateUrl: './features-idea.component.html',
  styleUrls: ['./features-idea.component.css']
})
export class FeaturesIdeaComponent implements OnInit {

  faUserCircle = faUserCircle;
  faShoppingBasket = faShoppingBasket;

  constructor() { }

  ngOnInit(): void {
  }

}
