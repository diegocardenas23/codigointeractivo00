import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe( params =>{
      if(params["id"] !=null){
        console.log('llego con el parametro id:  ' + params["id"]);
      }
    })
  }

}
//holaaaaa
