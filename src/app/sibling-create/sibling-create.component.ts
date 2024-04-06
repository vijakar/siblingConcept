import { Component } from '@angular/core';
import { SiblingService } from '../sibling.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sibling-create',
  templateUrl: './sibling-create.component.html',
  styleUrls: ['./sibling-create.component.css']
})
export class SiblingCreateComponent {

  public text:string='';
  public time:string='';

public dataForm:FormGroup=new FormGroup(
  {text:new FormControl(),
    time:new FormControl()
  }
)

constructor(private _siblingService:SiblingService){
  _siblingService.getEditValue().subscribe(
    (data:any)=>{
      this.dataForm.patchValue(data)
    }
  )
}

create(){
this._siblingService.setValue(this.dataForm.value)
}

reset(){
this.text=''
this.time=''
}

}
