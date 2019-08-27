import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './service/load-screen.service';
import { LoaderState } from './service/loader';

@Component({
  selector: 'app-load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.scss']
})
export class LoadScreenComponent implements OnInit {

  show = Array<any>();
  private subscription: Subscription;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {

        if (state.show) {
          this.show.push(state.show);
        } else {
          this.show.pop();
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
