import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kuwada.thebroker',
  appName: 'THE BROKER',
  webDir: 'www',
  backgroundColor: '#071018',
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    backgroundColor: '#071018'
  },
  android: {
    backgroundColor: '#071018',
    allowMixedContent: false
  }
};

export default config;
