import { Component } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import {Router} from "@angular/router";
import {Platform} from "@ionic/angular";
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Verifica se o usuário já está logado
      if (!this.authService.accessToken) {
        console.log('Nenhum token de acesso encontrado, iniciando login...');
        this.authService.login();
      } else {
        console.log('Usuário já autenticado, carregando aplicação...');
        // Se o usuário já está autenticado, redireciona para a página principal
        this.router.navigate(['/home']);
      }

      // Configura para monitorar o redirecionamento de login e tratar o retorno ao app
      this.authService.oauthServiceInstance.events.subscribe(event => {
        if (event.type === 'token_received') {
          console.log('Token recebido após login, redirecionando...');
          this.router.navigate(['/home']);
        }
      });
    });
  }
}
