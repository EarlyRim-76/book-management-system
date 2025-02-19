import { Routes } from '@angular/router';
import { BookInventoryManagementComponent } from './features/book-inventory-management/book-inventory-management.component';
import { CustomerManagementComponent } from './features/customer-management/customer-management.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { OrderManagementComponent } from './features/order-management/order-management.component';
import { ReportingComponent } from './features/reporting/reporting.component';
import { ReviewSystemComponent } from './features/review-system/review-system.component';

export const routes: Routes = [
    {
        path:'',
        component: BookInventoryManagementComponent,
        title:'Book Management'
    },
    {
        path:'customer-management',
        component: CustomerManagementComponent,
        title:'Customer Management'
    },
    {
        path:'order-management',
        component: OrderManagementComponent,
        title:'Order Management'
    },
    {
        path:'reporting',
        component:ReportingComponent,
        title:'Reporting'
    },
    {
        path:'review-system',
        component:ReviewSystemComponent,
        title:'Review System'
    },
    {
        path:'**',
        component:NotFoundComponent,
        title:'404 Not found'
    }


];
