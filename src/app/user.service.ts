import { Injectable, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})

export class UserService {
  // primjer sa EventEmitter
  EmitterLosije = new EventEmitter<boolean>();

  // primjer sa Subject to koristi preporuka
  SubjectBolje = new Subject<boolean>();
}
