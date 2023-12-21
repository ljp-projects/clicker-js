class ClickerElement {
    private _element: HTMLElement

    constructor(element: HTMLElement) {
        this._element = element
    }

    get element() {
        return this._element
    }

    get text(): string {
        return this._element.textContent
    }

    set text(n: typeof this._element.textContent) {
        this._element.textContent = n
    }

    get value(): string {
        return this._element.value
    }

    set text(n: typeof this._element.value) {
        this._element.value = n
    }

    get html(): string {
        return this._element.outerHTML
    }

    public css(prop: string, val?: string): string | void {
        return val ? this._element.style[prop] = val : this._element.style[prop]
    }

    set text(n: typeof this._element.outerHTML) {
        this._element.outerHTML = n
    }

    set element(n: typeof this._element) {
        this._element = n
    }
}