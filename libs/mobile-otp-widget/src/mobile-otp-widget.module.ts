import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { MobileOtpWidgetComponent } from './mobile-otp-widget.component';

@NgModule({
  declarations: [MobileOtpWidgetComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { MobileOtpWidgetComponent }
    })
  ]
})
export class MobileOtpWidgetModule { }