import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  name = 'yc';

  changeTheme(){
    // document.head.get
  }
}
