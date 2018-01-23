import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { MatSidenav, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, NavigationEnd } from '@angular/router';
import { build, Email, QueryModel, QueryItem, Window } from '@caiu/core';
import { HttpActions } from '@caiu/http';
import { routeNameSelector, urlSelector } from '@caiu/router';
import {
  Store,
  SmartComponent,
  Observable,
  contentHeightSelector,
  contentWidthSelector,
  sidenavOpenedSelector,
  windowSelector,
  SidenavActions
} from '@caiu/store';
import { Subscription } from 'rxjs/Subscription';

import { CurrentUserActions } from '../actions';

@Component({
  selector: 'dfs-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent extends SmartComponent implements OnInit {

  @Input() query: QueryItem[] = [];
  @ViewChild('scroller') scroller: ElementRef;
  @ViewChild(MatSidenav) sidenav;
  contentHeight$: Observable<number>;
  routeName$: Observable<string>;
  sidenavOpened = true;
  sidenavOpened$: Observable<boolean>;
  url = '';
  url$: Observable<string>;
  window: Window = new Window();
  window$: Observable<Window>;

  constructor(
    public store: Store<any>,
    private router: Router
  ) {
    super(store);
    this.contentHeight$ = contentHeightSelector(this.store);
    this.routeName$ = routeNameSelector(this.store);
    this.sidenavOpened$ = sidenavOpenedSelector(this.store);
    this.url$ = urlSelector(this.store);
    this.window$ = windowSelector(this.store);
  }

  get routeChanges(): Subscription {
    return this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd && this.scroller && this.scroller.nativeElement && this.scroller.nativeElement.scrollTop) {
        this.scroller.nativeElement.scrollTop = 0;
      }
    });
  }

  get sidenavOpenedChanges(): Subscription {
    return this.sidenavOpened$.subscribe(x => {
      this.sidenavOpened = x;
    });
  }

  get urlChanges(): Subscription {
    return this.url$.subscribe(url => {
      this.url = url;
    });
  }

  get windowChanges(): Subscription {
    return this.window$.subscribe(w => {
      this.window = w;
    });
  }

  get windowWidth(): number {
    return this.window.windowWidth;
  }

  get windowWidthSmall(): boolean {
    return this.window.windowWidthSmall;
  }

  ngOnInit() {
    this.subscribe([this.routeChanges, this.urlChanges, this.windowChanges]);
  }

  logout() {
    this.dispatch(CurrentUserActions.logout());
  }

  toggleSidebar() {
    this.dispatch(SidenavActions.toggle());
  }

}
