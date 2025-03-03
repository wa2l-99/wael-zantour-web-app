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
  NgbCarousel,
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
import { LineosUserManagerProjectComponent } from './components/pages/work/lineos-user-manager-project/lineos-user-manager-project.component';
import { JavaComponent } from './components/pages/competences/java/java.component';
import { SpringBootComponent } from './components/pages/competences/spring-boot/spring-boot.component';
import { DotNetComponent } from './components/pages/competences/dot-net/dot-net.component';
import { PhpComponent } from './components/pages/competences/php/php.component';
import { JavaScriptComponent } from './components/pages/competences/java-script/java-script.component';
import { AngularComponent } from './components/pages/competences/angular/angular.component';
import { ReactComponent } from './components/pages/competences/react/react.component';
import { FigmaComponent } from './components/pages/competences/figma/figma.component';
import { GitComponent } from './components/pages/competences/git/git.component';
import { DockerComponent } from './components/pages/competences/docker/docker.component';
import { ScrumComponent } from './components/pages/competences/scrum/scrum.component';
import { SqlComponent } from './components/pages/competences/sql/sql.component';
import { PostgresqlComponent } from './components/pages/competences/postgresql/postgresql.component';
import { MysqlComponent } from './components/pages/competences/mysql/mysql.component';
import { AgiliteComponent } from './components/pages/competences/agilite/agilite.component';
import { RelationClientComponent } from './components/pages/competences/relation-client/relation-client.component';
import { GetsionProjetComponent } from './components/pages/competences/getsion-projet/getsion-projet.component';
import { ProblemResolutionComponent } from './components/pages/competences/problem-resolution/problem-resolution.component';
import { MongoDbComponent } from './components/pages/competences/mongo-db/mongo-db.component';
import { CypressComponent } from './components/pages/competences/cypress/cypress.component';
import { PostmanComponent } from './components/pages/competences/postman/postman.component';
import { ProjectManagementToolComponent } from './components/pages/work/project-management-tool/project-management-tool.component';

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
    LineosUserManagerProjectComponent,
    JavaComponent,
    SpringBootComponent,
    DotNetComponent,
    PhpComponent,
    JavaScriptComponent,
    AngularComponent,
    ReactComponent,
    FigmaComponent,
    GitComponent,
    DockerComponent,
    ScrumComponent,
    SqlComponent,
    PostgresqlComponent,
    MysqlComponent,
    AgiliteComponent,
    RelationClientComponent,
    GetsionProjetComponent,
    ProblemResolutionComponent,
    MongoDbComponent,
    CypressComponent,
    PostmanComponent,
    ProjectManagementToolComponent,
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
