import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PayComponent } from './pay/pay.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    PayComponent
  ],
  exports: [PayComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    MatStepperModule,
    MatButtonModule,
    MatRadioModule,
  ]
})
export class PaymentModule { }
