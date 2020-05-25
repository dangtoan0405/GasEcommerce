import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.modules';
import { ShareModule } from '../share/share.module';
import { DashboardComponent } from '../common-app/dashboard/dashboard.component';
import { DashboardAdsenseComponent } from './dashboard-adsense/dashboard-adsense.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, DashboardAdsenseComponent],
  imports: [CommonModule, DashboardRoutingModule, ShareModule],
})
export class DashboardModule {}
