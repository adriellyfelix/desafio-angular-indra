import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-userCrud',
  templateUrl: './userCrud.component.html',
  styleUrls: ['./userCrud.component.css']
})
export class UserCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  templateToUserCreate(): void{
    this.router.navigate(['/userCreate'])
  }

}
