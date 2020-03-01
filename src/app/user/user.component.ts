import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  konj: number;

  constructor(private router: ActivatedRoute,
              private userService: UserService) {}

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      console.log(params);
      this.id = +params.id;
      this.konj = +params.konj;
    });
  }

  onActivatedLosije() {
    this.userService.EmitterLosije.emit(true);
  }

  onActivatedBolje() {
    this.userService.SubjectBolje.next(true);
  }
}
