import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Box1Component } from './box1/box1.component';
import { Box2Component } from './box2/box2.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HelpComponent } from './pages/help/help.component';
import { ServiceComponent } from './pages/service/service.component';
import { InfoBoxComponent } from './shared/info-box/info-box.component';
import { MiniInfoComponent } from './shared/mini-info/mini-info.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ParentBoxComponent } from './shared/parent-box/parent-box.component';
import { ChildBoxComponent } from './shared/child-box/child-box.component';
import { ParentComponent } from './shared/parent/parent.component';
import { ChildComponent } from './shared/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Box1Component,
    Box2Component,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    ServiceComponent,
    InfoBoxComponent,
    MiniInfoComponent,
    TermsComponent,
    ParentBoxComponent,
    ChildBoxComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
