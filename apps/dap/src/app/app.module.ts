import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { MobileOtpWidgetModule } from '@dap/mobile-otp-widget';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BackbaseCoreModule,
    BackbaseCoreModule.forRoot({
        features: {
            THEME_V2: true
        }
    }),
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    MobileOtpWidgetModule
  ],
  providers: [...environment.mockProviders || []],
  bootstrap: [AppComponent]
})
export class AppModule { }
