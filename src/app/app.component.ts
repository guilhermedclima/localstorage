import { AuthService } from './shared/auth.service';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Observable<boolean>;
  title = 'LocalStorage';
  constructor( public authService: AuthService ) {
    this.isLoggedIn = authService.isLoggedIn();
  }
}
