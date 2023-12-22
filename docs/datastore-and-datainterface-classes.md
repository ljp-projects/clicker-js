# 📦 DataStore & DataInterface Classes

These 2 classes provide easy interaction with stored data. Let's start with the DataStore class.



### The DataStore Class

The DataStore class implements Storage, therefore inheriting all of the methods that localStorage and sessionStorage have.

The setItem method sets an item. The getItem method gets an item and returns its value. The removeItem method removes an item. The clear method clears all items. The length property returns the number of entries. The key method returns the nth key.

But there still is a higher level of abstraction.

### The DataInterface Class

The DataInterface class is the highest level of abstraction provided for storing data. Its constructor takes a `Store<string, string> | Storage` type. When you have declared the class and provided a value of the required type, you will immediately notice that names of methods are simpler.



It has 6 methods, get, set, entries, keys, values, key and at. `get` retrieves an entry from the provided store. `set` adds an entry to the provided store. `at` returns the value of the nth entry. `key` returns the key of the nth entry. `entry` returns the nth entry. `entries` returns every entry. `keys` returns every key. `values` returns every value.

<details>

<summary>DataInterface Method Types</summary>

`get: (key: string) => string | null | undefined`

`set: (key: string, val: string) => void`

`at: (index: number) => string | null | undefined`

`key: (index: number) => string | null | undefined`

`keys: () => (string | null | undefined)[] | null | undefined`

`values: () => (string | null | undefined)[] | null | undefined`

`entries: () => ((string | null | undefined)[] | null | undefined)[]`

</details>

