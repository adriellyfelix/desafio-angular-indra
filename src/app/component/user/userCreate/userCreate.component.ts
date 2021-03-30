import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userCreate',
  templateUrl: './userCreate.component.html',
  styleUrls: ['./userCreate.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    id: '',
    email: '',
    login: '',
    nome: '',
    senha: '',

  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.create(this.user).subscribe(()=>{
      this.router.navigate(['/user'])
    })
  }

  cancel(): void {
    this.router.navigate(['/user'])
  }


}
