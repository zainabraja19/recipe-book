import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription
  isAuthenticated = false

  constructor(private dsService: DataStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user
    })
  }

  onSaveData() {
    this.dsService.storeRecipes()
  }

  onFetchData() {
    this.dsService.fetchRecipes().subscribe()
  }

  onLogout() {
    this.authService.logoutUser()
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
}
