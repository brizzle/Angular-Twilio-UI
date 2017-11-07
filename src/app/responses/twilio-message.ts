export interface ITwilioMessage {
    accountSid: string;
    apiVersion: string;
    body: string;
    from: string;
    fromCity: string;
    fromCountry: string;
    fromState: string;
    fromZip: string;
    messageSid: string;
    numMedia: string;
    numSegments: string;
    smsMessageSid: string;
    smsSid: string;
    smsStatus: string;
    to: string;
    toCity: string;
    toCountry: string;
    toState: string;
    toZip: string;
}