import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './component/billing/billing.component';
import { GateLogsComponent } from './component/gate-logs/gate-logs.component';
import { GuardTouringComponent } from './component/guard-touring/guard-touring.component';
import { HelpersManagementComponent } from './component/helpers-management/helpers-management.component';
import { MaintenancePaymentsComponent } from './component/maintenance-payments/maintenance-payments.component';
import { ParkingReportsComponent } from './component/parking-reports/parking-reports.component';
import { PassManagementComponent } from './component/pass-management/pass-management.component';
import { PollsComponent } from './component/polls/polls.component';
import { ReportsComponent } from './component/reports/reports.component';
import { ResidentsComponent } from './component/residents/residents.component';
import { ServiceProvidersComponent } from './component/service-providers/service-providers.component';
import { ServiceTicketsComponent } from './component/service-tickets/service-tickets.component';
import { SubscriptionsComponent } from './component/subscriptions/subscriptions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   {path: '', redirectTo:'dashboard', pathMatch: 'full'},
   {path: 'login', component: LoginComponent },
   {path: 'dashboard', component: DashboardComponent},
   {path: 'guard-touring', component: GuardTouringComponent},
   {path: 'residents', component: ResidentsComponent},
   {path: 'billing', component: BillingComponent},
   {path: 'gate-logs', component: GateLogsComponent},
   {path: 'heplers-managment', component: HelpersManagementComponent},
   {path: 'maintenance-payment', component: MaintenancePaymentsComponent},
   {path: 'pass-managment', component: PassManagementComponent},
   {path: 'service-providers', component: ServiceProvidersComponent},
   {path: 'service-tickets', component: ServiceTicketsComponent},
   {path: 'subscriptions', component: SubscriptionsComponent},
   {path: 'poll', component: PollsComponent},
   {path: 'reports', component: ReportsComponent},
   {path: 'parking-reports', component: ParkingReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
