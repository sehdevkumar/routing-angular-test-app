import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from 'src/app/shared/users';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) { }
  
  user:any = []

  ngOnInit(): void {
      this.activateRoute.params.subscribe(param=>{
           this.user = users.filter((item:any)=>{
             
              return item.id===+param.id
             
           })[0]
      })

      // this.activateRoute.queryParams.subscribe(query=>{
      //    console.log(query)
      // })
  }

}
