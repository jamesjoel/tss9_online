import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  student;
  msg;

  newStudent = {
    name : "",
    age : null,
    address : "",
    city : "",
    fee : null
  }
  
  constructor(private _stu : StudentService){
    this._stu.getStudent().subscribe((result)=>{
      this.student = result;
    })
  }
  

  ngOnInit() {
    
  }

    add(){
      this._stu.saveStudent(this.newStudent).subscribe((result)=>{
        if(result._id)
        {
          this.msg="Data Saved Successfuly";
          this.student.push(result);
        }
        else
        {
          this.msg="Somthing went wrong !";

        }
      })
    }

}
