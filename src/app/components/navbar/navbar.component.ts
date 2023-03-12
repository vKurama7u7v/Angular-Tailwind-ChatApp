import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen: boolean = false;

  onSetShowNavbar = () =>{
    this.isOpen = !this.isOpen;
  }
}
