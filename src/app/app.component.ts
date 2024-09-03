import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; 
import { filter } from 'rxjs/operators';

// Marks the ScreenTheme service as injectable, meaning it can be provided and used by other components
@Injectable({
  providedIn: 'root', // This service is provided at the root level, making it available application-wide
})
export class ScreenTheme {
  private darkMode = false; // Private variable to track the current theme mode (dark or light)

  // Getter method to check if dark mode is active
  isDarkMode(): boolean {
    return this.darkMode;
  }

  // Setter method to enable or disable dark mode
  setDarkMode(isDarkMode: boolean): void {
    this.darkMode = isDarkMode; // Update the dark mode status
    if (isDarkMode) {
      document.body.classList.add('dark-theme'); // Add the dark-theme class to the body element
    } else {
      document.body.classList.remove('dark-theme'); // Remove the dark-theme class from the body element
    }
  }
}


@Component({
  selector: 'app-root', 
  standalone: true, 
  imports: [
    CommonModule,         
    RouterOutlet,       
    MatSlideToggleModule,
    FormsModule,          
    MatIconModule,        
    RouterLink            
  ],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']  
})
export class AppComponent implements OnInit { // The main application component
  isDark!: boolean; // Property to hold the current theme status (dark or light)

  // Constructor injects the ScreenTheme service and Router service
  constructor(private screenTheme: ScreenTheme, private router: Router) {
    this.isDark = this.screenTheme.isDarkMode(); // Initialize the isDark property based on the current theme
  }

  // Lifecycle hook that runs after the component is initialized
  ngOnInit(): void {
    // Subscribe to router events to listen for navigation changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd)) // Filter events to only react to NavigationEnd events
      .subscribe(() => {
        this.collapseNavbar(); // Collapse the navbar after each navigation
      });
  }

  // Method to collapse the navbar if it is currently expanded
  collapseNavbar(): void {
    if (typeof document !== 'undefined'){
      const navbarCollapse = document.querySelector('.navbar-collapse'); // Select the navbar element
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show'); // Remove the 'show' class to collapse the navbar
      }
    }
    
  }

  // Method to toggle the theme between dark and light modes
  onClickOnTheme(): void {
    this.isDark = !this.isDark; // Toggle the isDark property
    this.screenTheme.setDarkMode(this.isDark); // Apply the selected theme
  }
}
