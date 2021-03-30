import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userRead',
  templateUrl: './userRead.component.html',
  styleUrls: ['./userRead.component.css']
})
export class UserReadComponent implements OnInit {

  user: User = {
    id:'',
    email: '',
    login: '',
    nome: '',
    senha: ''
  }

  users: User[];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.read().subscribe((users) => {
      this.users = users
    })
  }

  deleteUser(): void{
    this.userService.delete(this.user).subscribe(() => {
      this.router.navigate(['/user'])
    })

  }

}
