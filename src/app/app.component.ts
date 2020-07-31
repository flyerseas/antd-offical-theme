import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  theme = 'compact';
  layoutTheme = 'light';

  constructor() {
    this.initTheme();
  }

  initTheme() {
    let theme = localStorage.getItem('theme');
    if (!theme) {
      theme = this.theme;
    }
    this.setTheme(theme);
  }

  setTheme(theme: string) {
    const themeLink = document.getElementById('theme');
    if (themeLink) {
      const themeFile = `assets/themes/style.${theme}.css`;
      themeLink.setAttribute('href', themeFile);
    } else {
      const style = document.createElement('link');
      style.type = 'text/css';
      style.rel = 'stylesheet';
      style.id = 'theme';
      style.href = `assets/themes/style.${theme}.css`;
      document.body.append(style);
    }
    localStorage.setItem(`theme`, theme);
    this.theme = theme;
    this.layoutTheme = theme === 'dark' ? 'dark' : 'light';
  }

}
