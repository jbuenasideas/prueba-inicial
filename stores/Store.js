/**
 * 
 */

class Store {

    /**
     * 
     */
    constructor() {
        this.name = 'Store';
    }

    /**
     * 
     */
    save(input) {
        return {name: this.name, method: 'save'};
    }

    /**
     * 
     */
    list(){
        return {name: this.name, method: 'list'};
    }

    /**
     * 
     */
    delete() {
        return {name: this.name, method: 'delete'}
    }
}

module.exports = Store;