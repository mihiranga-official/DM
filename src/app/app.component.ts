import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; 

@Injectable({
  providedIn: 'root',
})
export class ScreenTheme {
  private darkMode = false;

  isDarkMode(): boolean {
    return this.darkMode;
  }

  setDarkMode(isDarkMode: boolean): void {
    this.darkMode = isDarkMode;
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule, FormsModule,MatIconModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  isDark!: boolean;
  constructor(private screenTheme: ScreenTheme) {
    this.isDark = this.screenTheme.isDarkMode();
  }

  ngOnInit(): void {}

  onClickOnTheme(): void {
    this.isDark = !this.isDark;
    this.screenTheme.setDarkMode(this.isDark);
  }
}
