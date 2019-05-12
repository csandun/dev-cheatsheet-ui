import { Routes } from "@angular/router";
import { LandingComponent } from "../landing/landing.component";
import { CheatHomeComponent } from "./cheat-home/cheat-home.component";
import { CheatSheetComponent } from "./cheat-sheet/cheat-sheet.component";

export const cheatsheetsRoutes: Routes= [
    {
        path:'',
        component: CheatHomeComponent
    },
    {
        path:':id',
        component: CheatSheetComponent
    },
    

]