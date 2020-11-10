/* global NSObject */
/* global UITextFieldDelegate */

@NativeClass()
class IoReadOnlyTextFieldDelegateImpl
    extends NSObject
    implements UITextFieldDelegate {
    public static ObjCProtocols = [UITextFieldDelegate];

    static new(): IoReadOnlyTextFieldDelegateImpl {
        return super.new() as IoReadOnlyTextFieldDelegateImpl;
    }

    public textFieldShouldChangeCharactersInRangeReplacementString(): boolean {
        return false;
    }
}

export default IoReadOnlyTextFieldDelegateImpl;
