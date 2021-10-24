import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GrowlType } from '../../models/growl.model';
import { GrowlService } from '../../services/growl.service';

@Component({
  selector: 'growl',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss']
})
export class GrowlComponent implements OnInit, OnDestroy {

  private subs: Subscription;
  message: string = "";
  type: GrowlType | null = null;

  private timeouts: any;

  constructor(private growlService: GrowlService) {
    this.subs = this.growlService.onMessage.subscribe(data => {
      if (data && data.message.length > 0) {
        this.message = data.message;
        this.type = data.type;
        if (data.type === GrowlType.SUCCESS) {
          this.timeouts = setTimeout(() => {
            this.message = "";
          }, 3000);
        }
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.message = "";
    this.type = null;
    clearTimeout(this.timeouts);
    this.subs.unsubscribe();
  }
}
