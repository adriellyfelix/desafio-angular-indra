import { Component, OnInit } from '@angular/core'
import { Provider } from './provider.model'
import { ProviderService } from './provider.service'

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  public actualPage = 1;

  providers: Provider[]

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.read().subscribe((providers)=> {
      this.providers = providers
    })
  }

}
