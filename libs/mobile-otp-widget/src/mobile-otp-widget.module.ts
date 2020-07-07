import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { MobileOtpWidgetComponent } from './mobile-otp-widget.component';

import { ModalModule } from '@backbase/foundation-ang/ui';
import { InputPhoneModule } from '@backbase/foundation-ang/ui';
import { ButtonModule } from '@backbase/foundation-ang/ui';

@NgModule({
  declarations: [MobileOtpWidgetComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BackbaseCoreModule.withConfig({
      classMap: { MobileOtpWidgetComponent }
    })
  ]
})
export class MobileOtpWidgetModule { }
