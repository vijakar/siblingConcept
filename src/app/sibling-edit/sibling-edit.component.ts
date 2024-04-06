import { Component } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-sibling-edit',
  templateUrl: './sibling-edit.component.html',
  styleUrls: ['./sibling-edit.component.css']
})
export class SiblingEditComponent {

public todos:any=[]

constructor(private _siblingService:SiblingService){
  _siblingService.getValue().subscribe(
    (data:any)=>{
      this.todos = data;
    }
  )
}

view(todo:any){
this._siblingService.viewSetValue(todo)

}

edit(todo:any){
  this._siblingService.editSetValue(todo)
  
  }

  delete(i:any){
    this.todos.splice(i,1)
    }

}
