import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public translationService : TranslateService
    ) { 
    translationService.addLangs(['en', 'fr']);
    translationService.setDefaultLang('fr');

  }

  ngOnInit() {
  }

  onClickSubmit(formData) {
    console.log(formData);
    // const browserLang = this.translationService.getBrowserLang();
    // console.log(browserLang);
    this.translationService.use(formData.language.match(/en|fr/) ? formData.language : 'en');
 }

}
