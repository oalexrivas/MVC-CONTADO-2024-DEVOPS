import { TranslationWidth } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbDateStruct, NgbDatepickerI18n, NgbModule } from '@ng-bootstrap/ng-bootstrap';

const SPANISH_I18N_VALUES = {
  weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'],
  months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
};

@Component({
  standalone: true,
  imports: [
    NgbModule
  ],
  selector: 'app-custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.css'],
  providers: [{ provide: NgbDatepickerI18n, useClass: CustomDatepickerComponent }]
})

export class CustomDatepickerComponent extends NgbDatepickerI18n {
  @Input() date: NgbDateStruct | undefined;
  @Input() public displayMonths: number = 1;
  @Input() public navigation: string = 'arrows';
  @Input() public outsideDays: string = 'visible';
  @Input() public disabled: any = false;

  getWeekdayShortName(weekday: number): string {
    return SPANISH_I18N_VALUES.weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return SPANISH_I18N_VALUES.months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }  
  getWeekdayLabel(weekday: number, width?: TranslationWidth | undefined): string {
    return SPANISH_I18N_VALUES.weekdays[weekday - 1];
  }
  getDayAriaLabel(date: NgbDateStruct): string {
    return "day";
  }
}