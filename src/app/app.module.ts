import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ColorBlockComponent} from './features/color-block/color-block.component';
import {ValueGeneratorComponent} from './features/value-generator/value-generator.component';
import {HueGeneratorComponent} from './features/hue-generator/hue-generator.component';
import {routing} from "./routes/app-routes";
import { MenuComponent } from './features/menu/menu.component';
import { HueGroupComponent } from './features/hue-group/hue-group.component';

@NgModule({
              declarations: [
                  AppComponent,
                  ColorBlockComponent,
                  ValueGeneratorComponent,
                  HueGeneratorComponent,
                  MenuComponent,
                  HueGroupComponent
              ],
              imports     : [
                  BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing
              ],
              providers   : [],
              bootstrap   : [AppComponent],
              schemas     : [CUSTOM_ELEMENTS_SCHEMA]
          })
export class AppModule {
}
