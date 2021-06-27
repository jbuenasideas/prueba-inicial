/**
 * Repository
 * 
 * Interactua con base de dato en memoria y store.
 * 
 */

const Store = require('./Store');

/**
 * 
 */
class Repository {

    /**
     * 
     */
    constructor() {
        this.name = 'Repository';
        this.store = new Store();
    }

    /**
     * 
     */
    save(input) {
        return {name: this.name, method: 'save', data: this.store.save(input)};
    }

    /**
     * 
     */
    list() {
        return {name: this.name, method: 'list', data: this.store.list()}
    }

    /**
     * 
     */
    delete() {
        return {name: this.name, method: 'delete', data: this.store.delete()}
    }
}

module.exports = Repository;