class Square{
    size = 0;
    constructor(size) {
        this.size = size;
    }
    get(){
        console.log(`Square size: ${this.size}x${this.size}`);
    }
    set(size){
        this.size = size;
    }
}

module.exports = Square