import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
  login(): void {
    localStorage.setItem('token', 'JWT');
    this.isLoginSubject.next(true);
  }
  logout(): void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }
  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }
}
