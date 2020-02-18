import { Injectable, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})

export class UserService {
  // primjer sa EventEmitter
  activatedEmitterLosije = new EventEmitter<boolean>();

  // primjer sa Subject to koristi preporuka
  activatedEmitterBolje = new Subject<boolean>();
}
