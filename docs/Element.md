# ClickerElement and ClickerElementList Classes

The `ClickerElement` class defined in `src/Element.ts` is essentially a sort of wrapper for the `HTMLElement` class, with extra features included.

The `ClickerElementList` class defined in `src/ElementList.ts` is a version of the `ClickerElement` class with support for multiple elements.

## ClickerElement -- Properties

The `ClickerElement` class has the following properties.

* `element: HTMLElement`
* `text: string` (textContent)
* `value: string` (value)
* `html: string` (outerHTML)

It also has the following methods.

* `public css(prop: string, val: string): void | string`

### Examples

#### Getting & Setting Text

```typescript
const element = new ClickerElement(document.getElementById("your-id-here"))

console.log(element.text)

element.text = "Hello, World!"

console.log(element.text)
```

#### Getting & Setting HTML

```typescript
const element: ClickerElement = new ClickerElement(document.getElementById("your-id-here"))

console.log(element.html)

element.html = "<p>Hello, World!</p>"

console.log(element.html)
```

#### Getting & Setting Value

```typescript
const element: ClickerElement = new ClickerElement(document.getElementById("your-id-here"))

console.log(element.value)

element.value = "Hello, World!"

console.log(element.value)
```

#### Getting & Setting CSS

```typescript
const element: ClickerElement = new ClickerElement(document.getElementById("your-id-here"))

console.log(element.css("color"))

element.css("color", "#efefef")

console.log(element.css("color"))
```
