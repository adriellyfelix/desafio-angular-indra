import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userDelete',
  templateUrl: './userDelete.component.html',
  styleUrls: ['./userDelete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

}
