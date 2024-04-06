import { Component } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-sibling-view',
  templateUrl: './sibling-view.component.html',
  styleUrls: ['./sibling-view.component.css']
})
export class SiblingViewComponent {

  public viewtodo:any={}

constructor(private _siblingService:SiblingService){
  _siblingService.getviewValue().subscribe(
    (data:any)=>{
      this.viewtodo=data
    }
  )
}

edit(data:any){
  
}

}
