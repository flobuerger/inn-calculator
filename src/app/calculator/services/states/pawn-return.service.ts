import { Injectable } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { State } from "src/app/services/state/state-model.service";

export interface PawnReturnState {
    pawnReturns: { count: number, pawnAmount: number }[]
}

export interface PawnReturn {
    count: number;
    pawnAmount: number;
}

@Injectable({ providedIn: 'root' })
export class PawnReturnService extends State<PawnReturnState>{
    pawnReturns$: Observable<PawnReturn[]> = this.select((state) => state.pawnReturns).pipe(
        shareReplay({ refCount: true, bufferSize: 1 })
    );

    constructor() {
        super({ pawnReturns: [] })
    }

    addPawnReturn(pawnReturn: PawnReturn) {
        this.setState({ pawnReturns: [...this.state.pawnReturns, pawnReturn] });
    }

    removePawnReturn() {
        const returns = this.state.pawnReturns;
        console.log(returns);
        this.setState({ pawnReturns: returns.slice(0, -1) })
    }
}