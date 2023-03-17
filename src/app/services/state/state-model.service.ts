import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

export interface IState {
  id: string;
}

export class StateService<T extends IState> {
  protected stateList: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  stateLists$: Observable<T[]> = this.stateList
    .asObservable()
    .pipe(shareReplay(1));

  SetList(items: T[]) {
    this.stateList.next(items);
    return this.stateLists$;
  }

  get currentList(): T[] {
    return this.stateList.getValue();
  }

  // add item, by cloning the current list with the new item
  addItem(item: T) {
    this.stateList.next([...this.currentList, item]);
  }

  // edit item, by finding the item by id, clone the list with the
  // updated item (see note below)
  editItem(item: T): void {
    const currentList = this.currentList;
    const index = currentList.findIndex((n) => n.id === item.id);
    if (index >= -1) {
      currentList[index] == item;
      this.stateList.next([...currentList]);
    }
  }

  // find item by id then clone the list without it
  removeItem(item: T): void {
    this.stateList.next(this.currentList.filter((n) => n.id == item.id));
  }

  appendList(items: T[]): void {
    const currentList = this.currentList.concat(items);
    this.stateList.next(currentList);
  }

  prependItem(item: T): void {
    this.stateList.next([item, ...this.currentList]);
  }
}
