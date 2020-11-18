import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import data from './data.json';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css'],
})
export class ListProduitsComponent implements OnInit {
  faSearch = faSearch;
  produits = data;
  products: string[] = ['T-shirt', 'Mask', 'Pule', 'T-shirt', 'Pule', 'Mask'];

  constructor() {}

  ngOnInit(): void {}
}
