import { Component, OnInit } from "@angular/core";
import { isIOS, Application } from "@nativescript/core";
import { Cognito } from "nativescript-cognito";
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService) {}

    ngOnInit(): void {
        const cognito = new Cognito("Your user pool id", "your client id");
        console.log("> instantiated cognito");
        this.items = this.itemService.getItems();
        // console.log(
        //     "> using global variable android and UIKeyboardWillChangeFrameNotification"
        // );
        if (!isIOS) {
            console.log("> na, is not iOS");
            const rect = new android.graphics.Rect();
        }

        if (isIOS) {
            console.log("> yo, this is iOS");
            Application.ios.addNotificationObserver(
                UIKeyboardWillChangeFrameNotification,
                (notification) => {
                    console.log("> inside notification observer", notification);
                }
            );
        }
    }
}
