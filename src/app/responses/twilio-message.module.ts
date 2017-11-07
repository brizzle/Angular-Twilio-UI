import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { TwilioMessagesComponent } from "./twilio-messages.component";
import { TwilioMessageService } from "./twilio-message.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { 
                path: 'twiliomessages',
                component: TwilioMessagesComponent
            }
        ])
    ],
    declarations: [
        TwilioMessagesComponent
    ],
    providers: [
        TwilioMessageService
    ]
})
export class TwilioMessageModule { }