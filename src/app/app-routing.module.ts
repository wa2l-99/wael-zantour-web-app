import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { MainWorkComponent } from './components/pages/work/main-work/main-work.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { Canvas2DProjectComponent } from './components/pages/work/canvas2-d-project/canvas2-d-project.component';
import { ViewportScroller } from '@angular/common';
import { PocProjectComponent } from './components/pages/work/poc-project/poc-project.component';
import { GflotteProjectComponent } from './components/pages/work/gflotte-project/gflotte-project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'work', component: MainWorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'work/canvas2d-project', component: Canvas2DProjectComponent },
  { path: 'work/medHeadPOC-project', component: PocProjectComponent },
  { path: 'work/gFlotte-project', component: GflotteProjectComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled', // Restaurer toujours la position du défilement en haut
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(scroller: ViewportScroller) {
    // Restaure la position du défilement à 0, 0 pour chaque navigation
    scroller.scrollToPosition([0, 0]);
  }
}
