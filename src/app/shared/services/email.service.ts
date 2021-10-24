import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    emailjs.init(environment.emailjsUserId);
  }

  public sendEmail(templateParams: Record<string, unknown>) {
    return emailjs.send(environment.emailjsServiceId, environment.emailjsTemplateId, templateParams);
  }
}
