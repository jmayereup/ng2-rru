import { Component, OnInit } from '@angular/core'; 
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';


@Component({
  moduleId: module.id,
  selector: 'app-link-list',
  templateUrl: 'link-list.component.html',
  styleUrls: ['link-list.component.css']
})
export class LinkListComponent implements OnInit {

  links: FirebaseListObservable <any[]>;
  units: FirebaseListObservable <any[]>;
  linksSorted: Observable <any[]>;
  unitsSorted: FirebaseListObservable <any[]>;
  unitSubject: Subject<any>;
  cls: string;
  unit: number;
  // sortByProperty: functionasfa;

  constructor(af: AngularFire) {

    this.unitSubject = new Subject();
    this.links = af.database.list('/links', {
      query: {
        orderByChild: 'unit',
      }
    });
    this.units = af.database.list('/units', {
      query: {
        orderByChild: 'unit',
        // equalTo: this.clsSubject
      }
    });
  }
  filterBy(unit, cls) {
    this.unitSubject.next(unit);
    this.cls = cls;
    this.unit = unit;
    console.log(unit);
  }

  ngOnInit() {
    // console.log(this.units);
    this.cls = 'English 1';
    this.unit =.5;
    this.filterBy(this.unit, this.cls);


  }

  }
  