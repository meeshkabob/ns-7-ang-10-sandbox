import { Injectable } from '@angular/core';
import { BaseIoReadOnlyTextFieldService } from './base-io-read-only-text-field.service';

@Injectable()
export class IoReadOnlyTextFieldService
  implements BaseIoReadOnlyTextFieldService {
  // eslint-disable-next-line
  public onLoaded(_args: any) {} // underscored name to suppressed unused variable error
}
