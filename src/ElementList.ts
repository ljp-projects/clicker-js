class ClickerElementList {
    private _elements: HTMLElement[]

    constructor(elements: HTMLElement[]) {
        this._elements = elements
    }

    public at(i: number): HTMLElement {
        if (i < 0) {
            return this._elements[this._elements.length - Math.abs(i)]
        }

        return this._elements[i]
    }

    get elements() {
        return this._elements
    }

    set elements(n: typeof this._elements) {
        this._elements = n
    }
}