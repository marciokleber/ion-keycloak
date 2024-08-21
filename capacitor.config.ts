import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ion-keycloak',
  webDir: 'www',
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: true
  },
  server:{
    cleartext:true
  }
};

export default config;
