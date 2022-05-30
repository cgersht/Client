import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material';
import { MainModule } from './main/main.module'; 
import { environment } from 'src/environments/environment';
import { GetOptionsService, ConfigurationService } from 'services'; 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MainModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initOptions, deps: [GetOptionsService], multi: true},
    {provide: APP_INITIALIZER, useFactory: initConfig, deps: [ConfigurationService], multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initOptions(getOptionsService: GetOptionsService) {
  return (_ => getOptionsService.initService(environment.options, environment.imgesPath));
  }

  export function initConfig(configurationService: ConfigurationService) {
    return (_ => configurationService.initConfiguration(environment.configPath));
    }
  
