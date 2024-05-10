import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  public search$: Observable<string> = this.searchSubject.asObservable();

  constructor() {}

  setSearch(search: string): void {
    this.searchSubject.next(search);
  }
}
