class ClickerElement {
    private _element: HTMLElement
    private _listeners: { [prop: string]: (o: any, n: any) => any }

    constructor(element: HTMLElement) {
        this._element = element
    }

    get element() {
        return this._element
    }

    set element(n: typeof this._element) {
        const o = this._element

        this._element = n

        this._listeners.element?.call(this, o, this._element)
    }

    get text(): string {
        return this._element.textContent
    }

    set text(n: typeof this._element.textContent) {
        const o = this._element.textContent

        this._element.textContent = n

        this._listeners.text?.call(this, o, this._element.textContent)
    }

    get value(): string {
        return this._element.value
    }

    set value(n: typeof this._element.value) {
        const o = this._element.value

        this._element.value = n

        this._listeners.value?.call(this, o, this._element.value)
    }

    get html(): string {
        return this._element.outerHTML
    }

    set html(n: typeof this._element.outerHTML) {
        const o = this._element.outerHTML

        this._element.outerHTML = n

        this._listeners.text?.call(this, o, this._element.outerHTML)
    }

    public addChangeListener(prop: string, callbackfn: (o: any, n: any) => any): void {
        this._listeners[prop] = callbackfn
    }

    get children(): HTMLCollection {
        return this._element.children
    }

    get parent(): HTMLElement {
        return this._element.parentElement
    }

    public css(prop: string, val?: string): string | void {
        if (val) {
            const o = this._element.style[prop]

            this._element.style[prop] = val

            this._listeners.css?.call(this, o, this._element.style[prop])

            return
        }

        this._element.style[prop]
    }
}