import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-main-idea',
  templateUrl: './main-idea.component.html',
  styleUrls: ['./main-idea.component.css']
})
export class MainIdeaComponent implements OnInit {

  introLogo: string;

  constructor() {
    this.introLogo = environment.images_urls.intro_img;
  }

  ngOnInit(): void {
  }

}
