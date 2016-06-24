import { Component } from '@angular/core';
import { LinkListComponent } from '../app/link-list/link-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LinkListComponent]
})
export class AppComponent {
  title = 'app works!';
}
