import { ModuleWithProviders, NgModule } from "@angular/core";
import { AppModule } from "./app.module";

@NgModule({})
export class IdentitySharedModule{
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}