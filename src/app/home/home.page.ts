import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Verifica se o usuário já está autenticado
    if (!this.authService.accessToken) {
      this.authService.login();
    }
  }

  logout() {
    this.authService.logout();
  }
}
