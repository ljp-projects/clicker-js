type Store<K, V> = {
    setItem: (key: K, val: V) => void
    getItem: (key: K) => V | undefined
    removeItem: (key: K) => V | undefined
    clear: () => void
    data: Map<string, string>
}

class DataStore implements Store<string, string> {
    public data: Map<string, string> = new Map<string, string> ()

    public getItem(key: string): string | undefined {
        return this.data.get(key)
    }

    public setItem(key: string, value: string): void {
        this.data.set(key, value)
    }

    public removeItem(key: string): string | undefined {
        const o = this.getItem(key)

        this.data.delete(key)

        return o
    }

    public clear(): void {
        this.data = new Map<string, string> ()
    }
}

class DataInterface {
    private store: Store<string, string> | Storage

    constructor(store: Store<string, string> | Storage) {
        this.store = store
    }

    public set(k: string, v: string): void {
        this.store.setItem(k, v)
    }

    public get(k: string, t?: (value: string) => void): any {
        return (t || String)(this.store.getItem(k) || "")
    }

    public at(i: number): string | null | undefined {
        if (Math.abs(i) > this.store.data.size) {
            return null
        } else if (i < 0) {
            return this.store.getItem((Array.from(this.store.data.keys())[this.store.data.size - Math.abs(i)]) as string)
        } else if (i >= 0) {
            return this.store.getItem((Array.from(this.store.data.keys())[i - 1]) as string)
        }

        return null
    }

    public key(i: number): string | null | undefined {
        if (Math.abs(i) > this.store.data.size) {
            return null
        } else if (i < 0) {
            return (Array.from(this.store.data.keys())[this.store.data.size - Math.abs(i)]) as string
        } else if (i >= 0) {
            return (Array.from(this.store.data.keys())[i - 1]) as string
        }

        return null
    }

    public entry(i: number): (string | null | undefined)[] | null | undefined {
        if (Math.abs(i) > this.store.data.size) {
            return null
        } else if (i < 0) {
            return [this.key(i), this.at(i)]
        } else if (i >= 0) {
            return [this.key(i), this.at(i)]
        }

        return null
    }

    public entries(): ((string | null | undefined)[] | null | undefined)[] {
        const a: ((string | null | undefined)[] | null | undefined)[] = []

        for (let i = 1; i < this.store.data.size + 1; i++) {
            a.push(this.entry(i))
        }

        return a
    }

    public keys(): (string | null | undefined)[] | null | undefined {
        const a: (string | null | undefined)[] | null | undefined = []

        for (let i = 1; i < this.store.data.size + 1; i++) {
            a.push(this.key(i))
        }

        return a
    }

    public values(): (string | null | undefined)[] | null | undefined {
        const a: (string | null | undefined)[] | null | undefined = []

        for (let i = 1; i < this.store.data.size + 1; i++) {
            a.push(this.at(i))
        }

        return a
    }
}