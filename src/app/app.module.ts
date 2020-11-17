import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/Pages/home/home.component';
import { CcmComponent } from './components/Pages/ccm/ccm.component';
import { ProduitComponent } from './components/Pages/produit/produit.component';
import { BelComponent } from './components/Pages/bel/bel.component';
import { MediaComponent } from './components/Pages/media/media.component';
import { FaqComponent } from './components/Pages/faq/faq.component';
import { StartComponent } from './components/Pages/start/start.component';
import {AppRoutingModule} from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainIdeaComponent } from './components/Pages/home/main-idea/main-idea.component';
import { FeaturesIdeaComponent } from './components/Pages/home/features-idea/features-idea.component';
import { VideoIdeaComponent } from './components/Pages/home/video-idea/video-idea.component';
import { PreviewProductComponent } from './components/Pages/home/preview-product/preview-product.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CcmComponent,
    ProduitComponent,
    BelComponent,
    MediaComponent,
    FaqComponent,
    StartComponent,
    MainIdeaComponent,
    FeaturesIdeaComponent,
    VideoIdeaComponent,
    PreviewProductComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
