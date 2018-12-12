import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppImports, AppComponent, AppDeclarations, AppProviders } from './app.module-generated';
import { RolesService } from './roles.service';
import { StatusService } from './status.service';

@NgModule({
  declarations: [
      ...AppDeclarations
  ],
  imports: [
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : [],
    ...AppImports
  ],
  providers: [
      ...AppProviders,
      RolesService,
      StatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
