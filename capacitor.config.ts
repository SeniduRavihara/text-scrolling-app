import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'text-scrolling-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
