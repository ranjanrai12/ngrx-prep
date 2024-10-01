import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { CardComponent } from './card/card.component';
import { StorageService } from './storage.service';
import {
  Observable,
  concatMap,
  debounceTime,
  exhaustMap,
  filter,
  from,
  map,
  mergeMap,
  of,
  shareReplay,
  switchMap,
  tap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experiemental-logger.service';
import { APP_CONFIG_TOKEN, IAppConfigToken } from './config.token';

const appConfig: IAppConfigToken = {
  isLoggerExperimental: true,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: LoggerService,
      useFactory: (config: IAppConfigToken) => {
        return config.isLoggerExperimental ? new ExperimentalLoggerService() : new LoggerService();
      },
      deps: [APP_CONFIG_TOKEN],
    },
  ],
  // providers: [{ provide: LoggerService, useClass: ExperimentalLoggerService }],
})
export class AppComponent implements OnInit {
  title = 'ngrx';
  @ViewChild('cardRef') cardRef!: TemplateRef<any>;
  private vc = inject(ViewContainerRef);
  private readonly http = inject(HttpClient);
  private loggerService = inject(LoggerService);
  items: any[] = [1, 2];
  condition = false;
  dynamicLink!: any;
  constructor(@Inject(APP_CONFIG_TOKEN) private appConfig: IAppConfigToken, private readonly render: Renderer2) {}

  ngOnInit(): void {
    // this.rxjsHandler();
    console.log(this.appConfig.isLoggerExperimental);
    this.loggerService.log();
  }

  loadCardComponent() {
    this.vc.clear();
    const cardInstance = this.vc.createComponent(CardComponent);
    cardInstance.setInput('parentValue', 'test');
    cardInstance.setInput('parentValue', 'test1');
  }

  updateLogger() {
    // this.loggerService.loggerState.set('updated logger state');
    // this.loggerService.loggerState.update((value: string) => {
    //   return `${value} update state signal`;
    // });
  }
  // observable$ = of(1, 2, 3);
  observable$ = from([1, 2, 3]);

  getTodo(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').pipe(shareReplay(1));
  }

  rxjsHandler() {
    // this.observable$
    //   .pipe(
    //     map((item) => item * 2),
    //     filter((item) => item % 2 === 0),
    //   )
    //   .subscribe({
    //     next: (value: number) => {
    //       console.log(value);
    //     },
    //   });

    // this.observable$
    //   .pipe(
    //     // debounceTime(300),
    //     tap((res) => console.log('source', res)),
    //     concatMap((res) => this.http.get('https://jsonplaceholder.typicode.com/comments?postId=1')),
    //   )
    //   .subscribe({
    //     next: (value) => {
    //       console.log(value);
    //     },
    //   });

    this.getTodo().subscribe({
      next: (value) => {
        console.log(value);
      },
    });
    this.getTodo().subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }

  onChange() {
    const link = this.render.createElement('link');
    link.href = 'assets/style1.scss'; // path of scss
    link.rel = 'stylesheet';
    this.render.appendChild(document.head, link);
    this.dynamicLink = link;
  }

  revertStyle() {
    if (this.dynamicLink) {
      this.render.removeChild(document.head, this.dynamicLink);
      this.dynamicLink = null;
    }
  }
}
