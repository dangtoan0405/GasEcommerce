import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share.module';
import { UtilsService } from './utility/utils.service';
import { NavBarComponent } from './common-app/nav-bar/nav-bar.component';
import { FooterComponent } from './common-app/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    FlexLayoutModule,
  ],
  providers: [UtilsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
