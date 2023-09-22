import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { User } from './user.model';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { AlertComponent } from '../shared/alert/alert.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true
  isLoading = false
  error: string = null
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective

  private closeSub: Subscription

  constructor(private authService: AuthService, private router: Router) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }

    let authObs: Observable<AuthResponseData>

    let { email, password } = form.value
    this.isLoading = true

    if (this.isLoginMode) {
      authObs = this.authService.loginUser(email, password)
    } else {
      authObs = this.authService.signupUser(email, password)
    }

    authObs.subscribe(response => {
      this.isLoading = false
      this.error = null
      this.router.navigate(['/recipes'])
    }, error => {
      this.error = error
      this.showErrorAlert(error)
      this.isLoading = false
    })

    form.reset()
  }

  onHandleError = () => {
    this.error = null
  }

  private showErrorAlert(message: string) {
    const hostViewContainerRef = this.alertHost.viewContainerRef
    hostViewContainerRef.clear()

    const componentRef = hostViewContainerRef.createComponent<AlertComponent>(AlertComponent);

    componentRef.instance.message = message
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe()
      hostViewContainerRef.clear()
    })
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe()
    }
  }
}
