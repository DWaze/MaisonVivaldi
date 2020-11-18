import { Component, OnInit } from '@angular/core';
import { faInstagram, faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
