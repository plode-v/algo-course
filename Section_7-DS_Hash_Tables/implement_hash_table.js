class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i=0; i<key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return (hash);
    }
    
    set(key, value){
        let address= this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key,value])
        return(this.data);
    }

    get(key) {
        let address= this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket.length) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    console.log(currentBucket[i][1]);
                }
            }
        }
        return undefined
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        console.log(keysArray);
    }

    // This keys() is to prevend any hash collisions

    keys2() {
        if (!this.data.length) {
            return undefined
        }
        let result = [];
        // Loop throughall the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // but also loop through all the potential collisions
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0]);
                    }
                } else {
                    result.push(this.data[i][0]);
                }
            }
        }
        console.log(result)
    }
}

const myHashTable = new HashTable(50);
(myHashTable.set("grapes", 10000));
(myHashTable.set("apple", 10))
myHashTable.set("orange", 50)
myHashTable.get("grapes")
myHashTable.keys();
myHashTable.keys2()

// console.log(myHashTable["grape"])