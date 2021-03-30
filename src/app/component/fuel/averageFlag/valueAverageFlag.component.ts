import { Component, OnInit } from '@angular/core';
import { Flag } from './flag.model';
import { FlagService } from './flag.service';

@Component({
  selector: 'app-averageFlag',
  templateUrl: './valueAverageFlag.component.html',
  styleUrls: ['./valueAverageFlag.component.css']
})
export class ValueAverageFlagComponent implements OnInit {

  flags: Flag[]

  constructor(private flagService: FlagService) { }

  ngOnInit(): void {
    this.flagService.read().subscribe((flags: any[]) => {
      this.flags = flags
    })
  }

}
