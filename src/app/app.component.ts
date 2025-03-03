import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public fixedHeader: boolean = false;
  private windowScroll$: Subscription = Subscription.EMPTY;
  loader = true;

  constructor() {}

  ngOnInit() {
    this.windowScroll$ = fromEvent(window, 'scroll')
      .pipe(throttleTime(30))
      .subscribe(() => this.onScroll());

    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  ngOnDestroy() {
    this.windowScroll$.unsubscribe();
  }

  onScroll() {
    //code to fix header on scroll
    if (
      document.documentElement.scrollTop >= 25 ||
      document.body.scrollTop >= 25
    ) {
      this.fixedHeader = true;
    } else {
      this.fixedHeader = false;
    }
  }
}
