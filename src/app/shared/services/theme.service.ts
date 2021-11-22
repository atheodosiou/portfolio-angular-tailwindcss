import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  public toggleTheme(): void {
    const classList = document.getElementsByTagName('body').item(0)?.classList;
    classList ? classList.toggle('dark') : null;
    classList ? classList.toggle('bg-dark') : null;
  }
}
