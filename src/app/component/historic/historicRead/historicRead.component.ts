import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Historic } from '../historic.model';
import { HistoricService } from '../historic.service';

@Component({
  selector: 'app-historicRead',
  templateUrl: './historicRead.component.html',
  styleUrls: ['./historicRead.component.css']
})
export class HistoricReadComponent implements OnInit {

  historic: Historic = {
    id: 0,
    combustivel: '',
    data:'',
    preco: 0
  }

  historics: Historic[]

  constructor(private historicService: HistoricService, private router: Router ) { }

  ngOnInit(): void {
    this.historicService.read().subscribe((historics)=>{
      this.historics = historics
    })
  }

  deleteHistoric(): void{
    this.historicService.delete(this.historic).subscribe(() => {
      this.router.navigate(['/historic'])
    })

  }

}
