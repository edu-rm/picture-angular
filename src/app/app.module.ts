import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModules } from "./app.routing.module";
import { PhotosModule } from "./photos/photos.module";
import { ErrorsModule } from "./errors/errors.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModules, PhotosModule, ErrorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
