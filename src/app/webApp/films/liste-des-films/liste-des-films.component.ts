import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { FilmsService } from '../films.service';
import { Subscription } from 'rxjs';
import { Films } from '../films';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-des-films',
  templateUrl: './liste-des-films.component.html',
  styleUrls: ['./liste-des-films.component.scss']
})
export class ListeDesFilmsComponent implements OnInit, OnDestroy {
  public stateFilms: Films[];
  stateSubscription: Subscription = new Subscription;

  constructor(private _filmsService: FilmsService) {  
    this.stateFilms = [];
  }

  ngOnInit(): void {
    console.log('filmsservice reuslt: ', this._filmsService.getFilms());
    
    this.stateSubscription = this._filmsService.getFilms()
    .subscribe((films) => {
      this.stateFilms = films;
    })
  }

  ngOnDestroy(): void {
    if (this.stateSubscription)
      this.stateSubscription.unsubscribe();
    //window.alert('Comp DESTROY')
  }
}
