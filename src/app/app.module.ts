import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// 动画模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 路由模块
import { RouterModule, Routes, Router } from '@angular/router';
import { appRoutes, examples } from './app.routes';
// 全局privider
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroComponent } from './intro/intro.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IntroComponent,
    SidebarItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    // RouterModule.forRoot(appRoutes, {useHash: true}),//hash 1
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },//hash 2
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
