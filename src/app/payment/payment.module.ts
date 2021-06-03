import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PayComponent } from './pay/pay.component';


@NgModule({
  declarations: [
    PayComponent
  ],
  exports: [PayComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
