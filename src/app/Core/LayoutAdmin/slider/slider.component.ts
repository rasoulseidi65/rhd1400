import {Component, OnInit} from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MessageService} from 'primeng/api';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [MessageService]
})
export class SliderComponent implements OnInit {
listslider:any[];
  public form: FormGroup;
  errorMessages = {
    tag: [
      {type: 'required', message: 'تگ اسلایدر را وارد کنید.'}
    ],
    imageurl: [
      {type: 'required', message: 'تصویر اسلایدر را وارد کنید.'}
    ]
  };

  constructor(private formBuilder: FormBuilder,
              public service: AdminService,
              public messageService: MessageService,
  ) {
  }

  ngOnInit(): void {
    this.createform();
    this.sliderget();
  }
  sliderget(){
    this.service.getSlider().subscribe((result) => {
      if (result['success'] === true){
        this.listslider = result['data'];
      }
    });
}
  deleteslider(id){
    this.service.deleteSlider(id).subscribe((result) => {
      if (result['success'] === true){
        this.messageService.add({severity: 'success', summary: ' تصویر مورد نظر با موفقیت حذف شد ', detail: 'حذف '});
        this.sliderget();
      }
    });
}
  createform(): void {
    this.form = this.formBuilder.group({
      title: new FormControl(
        null
      ),
      tag: new FormControl(
        null,

      ),
      imageurl: new FormControl(
        null,
        [
          Validators.required
        ]
      )
    });

  }

  submitForm(): void {
    this.service.postSlider(this.form.value).subscribe((response) => {
      if (response['success'] === true) {
        this.messageService.add({severity: 'success', summary: ' ثبت اطلاعات ', detail: response['data']});

      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response['data']});
      }
    });
  }

  imageUploader(event): void {
    const formData = new FormData();
    formData.append('image', event.files[0], event.files[0].name);
    this.service.uploadFiles(formData).subscribe((response) => {
      if (response['success'] === true) {
        this.form.controls.imageurl.setValue(response['imagePath']);
        this.messageService.add({
          severity: 'success',
          summary: ' آپلود تصویر اسلایدر ',
          detail: 'تصویر با موفقیت آپلود شد.'
        });
      } else {
        this.messageService.add({severity: 'error', summary: ' آپلود تصویر اسلایدر ', detail: response['data']});
      }
    });
  }
}
