import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { ProjectsHomeComponent } from './components/projects-home/projects-home.component';
import { ProjectModal1Component } from './components/projects-modals/project-modal-1/project-modal-1.component';
import { ProjectModal2Component } from './components/projects-modals/project-modal-2/project-modal-2.component';
import { ProjectModal3Component } from './components/projects-modals/project-modal-3/project-modal-3.component';
import { SkillSetComponent } from './components/skill-set/skill-set.component';
import { AboutMeComponent } from './components/pages/about-me/about-me.component';
import { IMAGE_CONFIG } from '@angular/common';
import {
  NgbModule,
  NgbNavModule,
  NgbPopoverModule,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LanguageComponent } from './components/language/language.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { MainWorkComponent } from './components/pages/work/main-work/main-work.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Canvas2DProjectComponent } from './components/pages/work/canvas2-d-project/canvas2-d-project.component';
import { PocProjectComponent } from './components/pages/work/poc-project/poc-project.component';
import { GflotteProjectComponent } from './components/pages/work/gflotte-project/gflotte-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsHomeComponent,
    ProjectModal1Component,
    ProjectModal2Component,
    ProjectModal3Component,
    SkillSetComponent,
    AboutMeComponent,
    SkillsComponent,
    EducationComponent,
    InterestsComponent,
    ExperienceComponent,
    LanguageComponent,
    ScrollTopComponent,
    MainWorkComponent,
    ContactComponent,
    Canvas2DProjectComponent,
    PocProjectComponent,
    GflotteProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgClickOutsideDirective,
    NgbProgressbarModule,
    NgbModule,
    NgbNavModule,
    NgbPopoverModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
