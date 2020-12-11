import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class PreloadSelectedModules implements PreloadingStrategy {
  preload(route: Route, load: any): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}

