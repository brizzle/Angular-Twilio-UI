import { Component, OnInit, Input } from '@angular/core';

import { ITwilioMessage } from './twilio-message';
import { TwilioMessageService } from './twilio-message.service';

@Component({
    selector: 'app-twilio-messages',
    templateUrl: './twilio-messages.component.html'
})
export class TwilioMessagesComponent implements OnInit {
    pageTitle: string = "Twilio Messages";
    twilioMessages: ITwilioMessage[];
    errorMessage: string;

    constructor(private _twilioMessageService: TwilioMessageService) { }

    ngOnInit(): void {
        this._twilioMessageService.getTwilioMessages()
        .subscribe(twilioMessages => {
          this.twilioMessages = twilioMessages;
        },
      error => this.errorMessage = <any>error);
    }
}