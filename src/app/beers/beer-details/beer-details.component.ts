import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Beer} from "../../shared/models/beer";
import {BeersService} from "../../shared/services/beers.service";

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit{
  beer!: Beer

  constructor(private route: ActivatedRoute,
              private beerService: BeersService,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const beerId = params.get('id');
      if (beerId) {
        this.beerService.getById(beerId).subscribe(beer => {
          this.beer = beer
        })
      }
    });
  }

  onDelete(id: string) {
    this.beerService.deleteById(id).subscribe((res) => {
      this.router.navigate(['/beers'])
    })
  }

  onEdit(id: string) {
    this.router.navigate(['/add-beer', id])
  }
}
