import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ShoppingEditComponent,
        ShoppingListComponent,
    ],
    imports: [
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent },
        ]),
        SharedModule,
        FormsModule
    ],
    exports: [RouterModule]
})

export class ShoppingListModule { }