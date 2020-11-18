import { Component, OnInit } from '@angular/core';
import {
  faShoppingCart,
  faUserCircle,
  faDollarSign,
  faCheck,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faUserCircle = faUserCircle;
  faDollarSign = faDollarSign;
  faCheck = faCheck;
  faEdit = faEdit;

  constructor() {}

  ngOnInit(): void {}
}
