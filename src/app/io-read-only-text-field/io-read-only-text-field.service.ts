import { Injectable } from "@angular/core";
import IoReadOnlyTextFieldDelegateImpl from "../delegates/io-read-only-text-field/IoReadOnlyTextFieldDelegateImpl";
import { BaseIoReadOnlyTextFieldService } from "./base-io-read-only-text-field.service";

/* global UIColor */

@Injectable()
export class IoReadOnlyTextFieldService
    implements BaseIoReadOnlyTextFieldService {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    onLoaded(args: any): void {
        const textField = args.object;
        const iosTextView = textField.ios;
        const delegate = IoReadOnlyTextFieldDelegateImpl.new();
        textField._delegate = delegate;
        iosTextView.tintColor = UIColor.clearColor;
    }
}
