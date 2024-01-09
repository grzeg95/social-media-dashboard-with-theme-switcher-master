import {ChangeDetectionStrategy, Component, forwardRef, HostListener, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'app-switch'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {

  private static _id = 1;
  id = 'app-switch-id-' + SwitchComponent._id++;
  checked!: boolean;
  isDisabled!: boolean;

  public regOnChange = (_: any) => {
  };

  public regOnTouched = () => {
  };

  registerOnChange(fn: any): void {
    this.regOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.regOnTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.checked = obj;
  }

  onChanged($event: Event | boolean) {

    if (typeof $event === 'boolean') {
      this.regOnChange($event);
      this.writeValue($event);
      return;
    }

    this.regOnChange(($event.target as HTMLInputElement).checked);
    this.writeValue(($event.target as HTMLInputElement).checked);
  }
}
