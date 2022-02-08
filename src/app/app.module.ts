import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'iframes', component: HelloComponent }];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent],
  entryComponents: [HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
