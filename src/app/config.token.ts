import { InjectionToken } from '@angular/core';

export interface IAppConfigToken {
  isLoggerExperimental: boolean;
}

export const APP_CONFIG_TOKEN = new InjectionToken<IAppConfigToken>('app.config', {
  providedIn: 'root',
  factory: () => ({ isLoggerExperimental: true }),
});
