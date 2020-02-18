import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivatedLosije = false;
  private aktivnoLosije: Subscription;

  userActivatedBolje = false;
  private aktivnoBolje: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.aktivnoLosije = this.userService.activatedEmitterLosije.subscribe( didActivated => {
      this.userActivatedLosije = didActivated;
    });

    this.aktivnoBolje = this.userService.activatedEmitterBolje.subscribe(data => {
      this.userActivatedBolje = data;
    });

  }

  ngOnDestroy(): void {
    this.aktivnoLosije.unsubscribe();
    this.aktivnoBolje.unsubscribe();
  }


}
