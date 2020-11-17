import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/Pages/home/home.component';
import {NgModule} from '@angular/core';
import {CcmComponent} from './components/Pages/ccm/ccm.component';
import {FaqComponent} from './components/Pages/faq/faq.component';
import {MediaComponent} from './components/Pages/media/media.component';
import {ProduitComponent} from './components/Pages/produit/produit.component';
import {BelComponent} from './components/Pages/bel/bel.component';
import {StartComponent} from './components/Pages/start/start.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'ccm', component: CcmComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'bel', component: BelComponent },
  { path: 'media', component: MediaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'start', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
