import { Component } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private oauthService: OAuthService) {
    this.configureOAuth();
  }

  private configureOAuth() {
    const authConfig: AuthConfig = {
      issuer: "http://10.42.0.1:8080/realms/master",
      redirectUri: "http://10.42.0.33:8100",
      clientId: 'example-ionic-app',
      responseType: 'code',
      scope: 'openid profile email offline_access',
      revocationEndpoint: "http://10.42.0.1:8080/realms/master/protocol/openid-connect/revoke",
      showDebugInformation: true,
      requireHttps: false
    };

    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
