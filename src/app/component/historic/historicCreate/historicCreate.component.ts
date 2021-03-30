import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Historic } from '../historic.model';
import { HistoricService } from '../historic.service';

@Component({
  selector: 'app-historicCreate',
  templateUrl: './historicCreate.component.html',
  styleUrls: ['./historicCreate.component.css']
})
export class HistoricCreateComponent implements OnInit {

  historic: Historic = {
    id: 0,
    combustivel: '',
    data: '',
    preco: 0.00

  }

  constructor(private historicService: HistoricService, private router: Router) { }

  ngOnInit(): void {
  }

  historicCreate(): void {
    this.historicService.create(this.historic).subscribe(() => {
      this.router.navigate(['/historic'])
    })
  }

  cancel(): void {
    this.router.navigate(['/historic'])
  }
}
