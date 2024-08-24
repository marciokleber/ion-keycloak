import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";
import {Capacitor} from "@capacitor/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService) {
    console.log(window.location.origin)
    console.log(` capacitor:\n${Capacitor.getPlatform()}`)
    this.configure();
  }

  private configure() {
    const authConfig: AuthConfig = {
      issuer: 'http://10.42.0.1:8080/realms/master',
      redirectUri: window.location.origin,
      clientId: 'example-ionic-app',
      responseType: 'code',
      scope: 'openid profile email offline_access',
      showDebugInformation: true,
      strictDiscoveryDocumentValidation: false,
      disablePKCE: false,
      requireHttps: false
    };

    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login() {
    this.oauthService.initCodeFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get identityClaims() {
    return this.oauthService.getIdentityClaims();
  }

  public get accessToken() {
    return this.oauthService.getAccessToken();
  }
  public get oauthServiceInstance() {
    return this.oauthService;
  }
}
