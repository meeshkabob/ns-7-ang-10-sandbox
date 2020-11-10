import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { IoReadOnlyTextFieldService } from "./io-read-only-text-field/io-read-only-text-field.service";
import { IoReadOnlyTextFieldComponent } from "./io-read-only-text-field/io-read-only-text-field.component";

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        IoReadOnlyTextFieldComponent,
    ],
    providers: [IoReadOnlyTextFieldService],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
