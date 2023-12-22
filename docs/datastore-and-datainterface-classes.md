# 📦 DataStore & DataInterface Classes

These 2 classes provide easy interaction with stored data. Let's start with the DataStore class.



### The DataStore Class

The DataStore class implements a type, which looks like this.

```typescript
type Store<K, V> = {
    setItem: (key: K, val: V) => void
    getItem: (key: K) => V | undefined
    removeItem: (key: K) => V | undefined
    clear: () => void
}
```

For the type params, `string, string` is provided. This means that keys & values are strings. So now the type would look like this.

```typescript
type Store = {
    setItem: (key: string, val: string) => void
    getItem: (key: string) => string | undefined
    removeItem: (key: string) => string | undefined
    clear: () => void
}
```

The setItem method sets an item. The getItem method gets an item and returns its value. The removeItem method removes an item. The clear method clears all items. But there is a higher level of abstraction. This is why it doesnt have a built in 'data' or similar property. The type isn't meant to be used on it's own.

The DataStore class implements the Store\<string, string> type. This means that is has all of those functions and an actual data property, but it is readonly. It behaves like a clone of sessionStorage, but data doesn't persist between sessions.

But there still is a higher level of abstraction.

### The DataInterface Class

The DataInterface class is the highest level of abstraction provided for storing data. Its constructor takes a `Store<string, string> | Storage` type. When you have declared the class and provided a value of the required type, you will immediately notice that names of methods are simpler.&#x20;
