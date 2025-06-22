import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  user = {
    name: 'User',
    avatarUrl: 'assets/user-placeholder.svg' // Add this image to your assets
  };

}
