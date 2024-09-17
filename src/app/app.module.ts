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
import { NgbNavModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { InterestsComponent } from './components/interests/interests.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { LanguageComponent } from './components/language/language.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { MainWorkComponent } from './components/pages/work/main-work/main-work.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgClickOutsideDirective,
    NgbProgressbarModule,
    NgbNavModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
    ContactService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
