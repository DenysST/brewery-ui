import {Component, OnInit} from '@angular/core';
import {Beer} from "../../shared/models/beer";
import {BeersService} from "../../shared/services/beers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'beers-component',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit{
  beers: Beer[] = []

  constructor(
    private beersService: BeersService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.beersService.getBeersList().subscribe(response => {
      response.content ? this.beers = response.content : []
    })
  }

  navigateToAddBeer() {
    this.router.navigate(['/add-beer'])
  }
}
