import { Component, OnInit } from '@angular/core';
import { AbbreviationService } from './abbreviation.service'
import { Abbreviation } from './abbreviation.model'

@Component({
  selector: 'app-abbreviation',
  templateUrl:'./abbreviation.component.html',
  styleUrls: ['./abbreviation.component.css']

})
export class AbbreviationComponent implements OnInit {

  parameter: string;

  public actualPage = 1;

  abbreviations: Abbreviation[];

  constructor(private abbreviationService: AbbreviationService) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.abbreviationService.readByAbbreviation(this.parameter).subscribe((abbreviations) => {
      this.abbreviations = abbreviations;
    })
  }
}
