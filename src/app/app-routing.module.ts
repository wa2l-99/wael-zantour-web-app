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
import { LineosUserManagerProjectComponent } from './components/pages/work/lineos-user-manager-project/lineos-user-manager-project.component';
import { ProjectManagementToolComponent } from './components/pages/work/project-management-tool/project-management-tool.component';
import { SpringBootComponent } from './components/pages/competences/spring-boot/spring-boot.component';
import { AgiliteComponent } from './components/pages/competences/agilite/agilite.component';
import { AngularComponent } from './components/pages/competences/angular/angular.component';
import { CypressComponent } from './components/pages/competences/cypress/cypress.component';
import { DockerComponent } from './components/pages/competences/docker/docker.component';
import { DotNetComponent } from './components/pages/competences/dot-net/dot-net.component';
import { FigmaComponent } from './components/pages/competences/figma/figma.component';
import { GetsionProjetComponent } from './components/pages/competences/getsion-projet/getsion-projet.component';
import { GitComponent } from './components/pages/competences/git/git.component';
import { JavaComponent } from './components/pages/competences/java/java.component';
import { JavaScriptComponent } from './components/pages/competences/java-script/java-script.component';
import { MongoDbComponent } from './components/pages/competences/mongo-db/mongo-db.component';
import { MysqlComponent } from './components/pages/competences/mysql/mysql.component';
import { PhpComponent } from './components/pages/competences/php/php.component';
import { PostgresqlComponent } from './components/pages/competences/postgresql/postgresql.component';
import { PostmanComponent } from './components/pages/competences/postman/postman.component';
import { ProblemResolutionComponent } from './components/pages/competences/problem-resolution/problem-resolution.component';
import { RelationClientComponent } from './components/pages/competences/relation-client/relation-client.component';
import { ScrumComponent } from './components/pages/competences/scrum/scrum.component';
import { JunitComponent } from './components/pages/competences/junit/junit.component';
import { CollaborationEquipeComponent } from './components/pages/competences/collaboration-equipe/collaboration-equipe.component';
import { GestionTempsComponent } from './components/pages/competences/gestion-temps/gestion-temps.component';
import { AdaptabiliteComponent } from './components/pages/competences/adaptabilite/adaptabilite.component';
import { BackgroundComponent } from './components/pages/background/background.component';
import { MySkillsComponent } from './components/pages/my-skills/my-skills.component';
import { ReactComponent } from './components/pages/competences/react/react.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutMe', component: AboutMeComponent },
  { path: 'work', component: MainWorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'skills', component: MySkillsComponent },
  { path: 'education&experience', component: BackgroundComponent },
  { path: 'work/canvas2d-project', component: Canvas2DProjectComponent },
  { path: 'work/medHeadPOC-project', component: PocProjectComponent },
  { path: 'work/gFlotte-project', component: GflotteProjectComponent },
  {
    path: 'work/lineosUserManager-project',
    component: LineosUserManagerProjectComponent,
  },
  {
    path: 'work/project-management-tool',
    component: ProjectManagementToolComponent,
  },
  {
    path: 'spring-boot',
    component: SpringBootComponent,
  },
  {
    path: 'agilite',
    component: AgiliteComponent,
  },
  {
    path: 'angular',
    component: AngularComponent,
  },
  {
    path: 'cypress',
    component: CypressComponent,
  },
  {
    path: 'docker',
    component: DockerComponent,
  },
  {
    path: 'dot-net',
    component: DotNetComponent,
  },
  {
    path: 'figma',
    component: FigmaComponent,
  },
  {
    path: 'getsion-projet',
    component: GetsionProjetComponent,
  },
  {
    path: 'git',
    component: GitComponent,
  },
  {
    path: 'java',
    component: JavaComponent,
  },
  {
    path: 'javaScript',
    component: JavaScriptComponent,
  },
  {
    path: 'mongoDB',
    component: MongoDbComponent,
  },
  {
    path: 'mySql',
    component: MysqlComponent,
  },
  {
    path: 'php',
    component: PhpComponent,
  },
  {
    path: 'postgreSql',
    component: PostgresqlComponent,
  },
  {
    path: 'postman',
    component: PostmanComponent,
  },
  {
    path: 'problem-resolution',
    component: ProblemResolutionComponent,
  },
  {
    path: 'react',
    component: ReactComponent,
  },
  {
    path: 'relation-client',
    component: RelationClientComponent,
  },
  {
    path: 'junit',
    component: JunitComponent,
  },
  {
    path: 'scrum',
    component: ScrumComponent,
  },
  {
    path: 'collaboration-equipe',
    component: CollaborationEquipeComponent,
  },
  {
    path: 'gestion-temps',
    component: GestionTempsComponent,
  },
  {
    path: 'adaptabilite',
    component: AdaptabiliteComponent,
  },
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
