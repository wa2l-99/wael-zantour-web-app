import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { ProjectsHomeComponent } from './components/projects-home/projects-home.component';
import { ProjectModal1Component } from './components/projects-modals/project-modal-1/project-modal-1.component';
import { ProjectModal2Component } from './components/projects-modals/project-modal-2/project-modal-2.component';
import { ProjectModal3Component } from './components/projects-modals/project-modal-3/project-modal-3.component';
import { SkillSetComponent } from './components/skill-set/skill-set.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent, ProjectsHomeComponent, ProjectModal1Component, ProjectModal2Component, ProjectModal3Component, SkillSetComponent],
  imports: [BrowserModule, AppRoutingModule, NgClickOutsideDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
