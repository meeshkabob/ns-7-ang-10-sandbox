import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { isIOS, GestureEventData } from "@nativescript/core";
import { AbstractControl } from "@angular/forms";
import { IoReadOnlyTextFieldService } from "./io-read-only-text-field.service";

@Component({
    moduleId: module.id,
    selector: "io-read-only-text-field",
    templateUrl: "./io-read-only-text-field.component.html",
})
export class IoReadOnlyTextFieldComponent {
    @ViewChild("textField", { static: false }) textField!: ElementRef;

    @Input() set text(text: string) {
        this.viewModel.text = text;
    }

    @Input() set ngClassValue(ngClassValue: string) {
        this.viewModel.ngClass = ngClassValue;
    }

    @Input() control!: AbstractControl;

    @Input() name!: string;

    constructor(
        private ioReadOnlyTextFieldService: IoReadOnlyTextFieldService
    ) {}

    on = {
        loaded: (args) => {
            this.ioReadOnlyTextFieldService.onLoaded(args);
        },
        tap: (): void => {
            this.textField.nativeElement.dismissSoftInput();
        },
        focus: () => {
            this.textField.nativeElement.dismissSoftInput();
        },
    };

    viewModel = {
        text: null as string | null,
        ngClass: null as string | null,
        editable: isIOS,
    };

    // Expose public convenience method for use by parent components
    focus = () => {
        this.textField.nativeElement.focus();
        this.textField.nativeElement.dismissSoftInput();
    };
}
