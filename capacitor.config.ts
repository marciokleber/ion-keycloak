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
    androidHostname: 'com.android.app.ion',
    androidScheme: 'http',
    hostname: 'com.android.app.ion',
    cleartext:true
  }
};

export default config;
