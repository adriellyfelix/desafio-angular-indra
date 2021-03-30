import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userUpdate',
  templateUrl: './userUpdate.component.html',
  styleUrls: ['./userUpdate.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User = {
    id: '',
    email: '',
    login: '',
    nome: '',
    senha: ''
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    this.userService.readById(id).subscribe((user) => {
      this.user = user
    });
  }


  userUpdate(): void {
    this.userService.update(this.user).subscribe(() => {
      this.router.navigate(['/user'])
    })
  }

  cancel(): void {
    this.router.navigate(['/user'])
  }

}
