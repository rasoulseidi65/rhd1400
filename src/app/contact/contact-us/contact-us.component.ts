import { Component, OnInit } from '@angular/core';
import {MessageService, SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'], providers: [MessageService]
})
export class ContactUsComponent implements OnInit {
  userform: FormGroup;

  submitted: boolean;

  subject: SelectItem[];

  description: string;
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'mobile': new FormControl('', Validators.compose([Validators.required,Validators.maxLength(11),Validators.minLength(11)])),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.email])),
      'text': new FormControl('', Validators.required),
      'subject': new FormControl('', Validators.required)
    });
    this.subject = [];
    this.subject.push({label:'خرید دوره', value:'خرید دوره'});
    this.subject.push({label:'مقاله', value:'مقاله'});


  }
  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }
}
