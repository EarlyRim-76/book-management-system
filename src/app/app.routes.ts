import { Routes } from '@angular/router';
import { BookInventoryManagementComponent } from './features/admin-management/book-inventory-management/book-inventory-management.component';
import { CustomerManagementComponent } from './features/admin-management/customer-management/customer-management.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { OrderManagementComponent } from './features/admin-management/order-management/order-management.component';
import { ReportingComponent } from './features/admin-management/reporting/reporting.component';
import { ReviewSystemComponent } from './features/admin-management/review-system/review-system.component';
import { AccountComponent } from './features/book/account/account.component';
import { BookOrderComponent } from './features/book/book-order/book-order.component';
import { BookProductComponent } from './features/book/book-product/book-product.component';

export const routes: Routes = [
    {
        path:'',
        component: BookInventoryManagementComponent,
        title:'Book Management'
    },
    {
        path:'account',
        component: AccountComponent,
        title:'Account'
    },
    {
        path:'order',
        component: BookOrderComponent,
        title:'Orders'
    },
    {
        path:'product',
        component: BookProductComponent,
        title:'Products'
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
