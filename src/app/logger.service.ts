import { Injectable } from '@angular/core';
import { ExperimentalLoggerService } from './experiemental-logger.service';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log() {
    console.log('Logger service');
  }
}
