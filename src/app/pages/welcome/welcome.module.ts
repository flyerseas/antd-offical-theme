import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [WelcomeRoutingModule, NgZorroAntdModule, FormsModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
