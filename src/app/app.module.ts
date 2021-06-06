import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModules } from "./app.routing.module";
import { PhotosModule } from "./photos/photos.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModules, PhotosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
