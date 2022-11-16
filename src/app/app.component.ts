import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Thais Sampaio';

  userData = {
    email: 'thaisSampaio@gmail.com',
    role: 'Admin',
  }

  title = 'curso-angular';
}
