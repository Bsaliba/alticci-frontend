import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AlticciService } from '../services/alticci.service';

@Component({
  selector: 'app-alticci',
  templateUrl: './alticci.component.html',
  styleUrls: ['./alticci.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService],
})
export class AlticciComponent {
  form = new FormGroup({
    sequenceNumber: new FormControl('', [
      Validators.required,
      Validators.min(0),
    ]),
  });

  sending: boolean = false;
  showResult: boolean = false;

  currentNumber: number = 0;
  currentResult: number = 0;

  constructor(
    private alticciService: AlticciService,
    private messageService: MessageService
  ) {}

  onSubmit() {
    if (this.form.valid) {
      this.sending = true;
      const n = +this.form.value.sequenceNumber!;
      this.alticciService
        .getAlticciSequence(n)
        .subscribe({
          next: (data) => {
            this.currentNumber = n;
            this.currentResult = data.number;
            this.showResult = true;
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Failed to get alticci sequence',
            });
          },
        })
        .add(() => {
          this.sending = false;
        });
    }
  }
}
