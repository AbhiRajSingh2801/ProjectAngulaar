import { Component, OnInit } from '@angular/core';
import { Namespace } from '../../models/namespace';
import {NamespaceService} from '../../models/namespace.service';

@Component({
  selector: 'app-namespace',
  templateUrl: './namespace.component.html',
  styleUrls: ['./namespace.component.css']
})
export class NamespaceComponent implements OnInit {

  public nmsps: any;
  selectednmsps: any;


  constructor(private namespaceservice:NamespaceService) {

  }
  async fetchData()
{
   
  

}
  async ngOnInit() {
    
    let data = await this.namespaceservice.getData().then((response)=>{
    this.nmsps = response["namespaces"]
   
    })
  }
   

  

  async onselectNamespace(nmsp: any) {
    //
    let data = await this.namespaceservice.getServices(nmsp.name,nmsp.hash)
    this.selectednmsps = data;
  }

}


