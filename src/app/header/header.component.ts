import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>()

  constructor(private dsService: DataStorageService) { }

  onSelect(feature: string) {
    this.featureSelected.emit(feature)
  }

  onSaveData() {
    this.dsService.storeRecipes()
  }

  onFetchData() {
    this.dsService.fetchRecipes().subscribe()
  }
}
