/* global NSObject */
/* global UITextFieldDelegate */
declare var java: any;

@NativeClass()
export default class IoReadOnlyTextFieldDelegateImpl
    extends java.lang.Object
    implements UITextFieldDelegate {
    textFieldDidBeginEditing?(textField: UITextField): void {
        throw new Error("Method not implemented.");
    }
    textFieldDidChangeSelection?(textField: UITextField): void {
        throw new Error("Method not implemented.");
    }
    textFieldDidEndEditing?(textField: UITextField): void {
        throw new Error("Method not implemented.");
    }
    textFieldDidEndEditingReason?(
        textField: UITextField,
        reason: UITextFieldDidEndEditingReason
    ): void {
        throw new Error("Method not implemented.");
    }
    textFieldShouldBeginEditing?(textField: UITextField): boolean {
        throw new Error("Method not implemented.");
    }
    textFieldShouldClear?(textField: UITextField): boolean {
        throw new Error("Method not implemented.");
    }
    textFieldShouldEndEditing?(textField: UITextField): boolean {
        throw new Error("Method not implemented.");
    }
    textFieldShouldReturn?(textField: UITextField): boolean {
        throw new Error("Method not implemented.");
    }
    debugDescription?: string;
    description: string;
    hash: number;
    isProxy: boolean;
    superclass: typeof NSObject;
    class(): typeof NSObject {
        throw new Error("Method not implemented.");
    }
    conformsToProtocol(aProtocol: any): boolean {
        throw new Error("Method not implemented.");
    }
    isEqual(object: any): boolean {
        throw new Error("Method not implemented.");
    }
    isKindOfClass(aClass: typeof NSObject): boolean {
        throw new Error("Method not implemented.");
    }
    isMemberOfClass(aClass: typeof NSObject): boolean {
        throw new Error("Method not implemented.");
    }
    performSelector(aSelector: string) {
        throw new Error("Method not implemented.");
    }
    performSelectorWithObject(aSelector: string, object: any) {
        throw new Error("Method not implemented.");
    }
    performSelectorWithObjectWithObject(
        aSelector: string,
        object1: any,
        object2: any
    ) {
        throw new Error("Method not implemented.");
    }
    respondsToSelector(aSelector: string): boolean {
        throw new Error("Method not implemented.");
    }
    retainCount(): number {
        throw new Error("Method not implemented.");
    }
    self(): NSObjectProtocol {
        throw new Error("Method not implemented.");
    }
    public static ObjCProtocols = [UITextFieldDelegate];

    static new(): IoReadOnlyTextFieldDelegateImpl {
        return super.new() as IoReadOnlyTextFieldDelegateImpl;
    }

    public textFieldShouldChangeCharactersInRangeReplacementString(): boolean {
        return false;
    }
}
