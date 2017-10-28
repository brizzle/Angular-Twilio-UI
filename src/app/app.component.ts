import { Component } from '@angular/core';
import { PurchasedNumberService } from './purchased-numbers/purchased-numbers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ PurchasedNumberService ]
})
export class AppComponent {
  title = 'Brocks app';
}
