import { Routes } from '@angular/router';
import { DistrictListComponent } from './page/district-list/district-list.component';
import { HomeComponent } from './page/home/home.component';
import { DistrictsComponent } from './page/districts/districts.component';
import { AuthComponent } from './page/auth/auth.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { SignUpComponent } from './page/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent
    },
    {
        path:"district-list",component:DistrictListComponent
    },
    {
        path:"districts/:id",component:DistrictsComponent
    }, 
    {
        path:"auth",component:AuthComponent
    },
    {
        path:"sign-up",component:SignUpComponent
    },
    {
        path:"**",component:NotfoundComponent
    }
];
