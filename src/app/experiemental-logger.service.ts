import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService {
  log() {
    console.log('Experimental logger service');
  }
}
