import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GrowlType } from '../../models/growl.model';
import { EmailService } from '../../services/email.service';
import { GrowlService } from '../../services/growl.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  sendingMessage: boolean = false;

  constructor(private fb: FormBuilder, private emailService: EmailService, private growlService: GrowlService) {
    this.contactForm = this.createForm();
  }

  ngOnInit() {
  }


  private createForm(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  sendMessage() {
    this.sendingMessage = true;
    this.emailService.sendEmail({
      from_name: `${this.contactForm.get('firstName')?.value} ${this.contactForm.get('lastName')?.value}`,
      from_email: `${this.contactForm.get('email')?.value}`,
      message: `${this.contactForm.get('message')?.value}`,
    }).then(res => {
      this.sendingMessage = false;
      this.growlService.show({
        type: GrowlType.SUCCESS,
        message: 'Thank you for reaching out! I will be back as soon as possible 😊'
      });
      this.contactForm.reset();
    }).catch(e => {
      this.sendingMessage = false;
      this.growlService.show({
        type: GrowlType.DANGER,
        message: 'Something went wrong 😔! Please try again later or send me an email at anastasios.theodosiou@gmail.com'
      });
      console.error(e);
    });
  }
}
