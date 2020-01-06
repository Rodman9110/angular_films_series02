import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailboxRoutingModule } from './mailbox-routing.module';
import { MailboxComponent } from './mailbox.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MailboxFormComponent } from './mailbox-form/mailbox-form.component';


@NgModule({
  declarations: [MailboxComponent, MailboxFormComponent],
  imports: [
    CommonModule,
    MailboxRoutingModule,
    SharedModule,
    RouterModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [MailboxFormComponent]
})
export class MailboxModule { }
