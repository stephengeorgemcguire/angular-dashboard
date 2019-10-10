import { Routes } from '@angular/router';
import { SectionSalesComponent } from './app/Sections/section-sales/section-sales.component';
import { SectionHealthComponent } from './app/Sections/section-health/section-health.component';
import { SectionOrdersComponent } from './app/Sections/section-orders/section-orders.component';

export const appRoutes: Routes = [
    { path: 'sales', component: SectionSalesComponent },
    { path: 'health', component: SectionHealthComponent },
    { path: 'orders', component: SectionOrdersComponent },

    { path: '', redirectTo: '/sales', pathMatch: 'full' }
];