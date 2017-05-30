import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "../app.component";
import {HueGeneratorComponent} from "../features/hue-generator/hue-generator.component";
import {ValueGeneratorComponent} from "../features/value-generator/value-generator.component";
import {MenuComponent} from "../features/menu/menu.component";



const APP_ROUTES: Routes = [
    {path: '', component: MenuComponent},
    {path: 'hue', component: HueGeneratorComponent},
    {path: 'value', component: ValueGeneratorComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);