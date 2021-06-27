/**
 * 
 */

const Repository = require('../stores/Repository');

class Model {

    /**
     * 
     */
    constructor() {
        this.name = 'Model';
        this.repository = new Repository();
    }


    /**
     * 
     */
    create(input) {
        return {name: this.name, method: 'create', data: this.repository.save(input)};
    }

    /**
     * 
     */
    edit(input) {
        return {name: this.name, method: 'edit', data: this.repository.save(input)};
    }

    /**
     * 
     */
    put(input) {
        return {name: this.name, method: 'put', data: this.repository.save(input)};
    }

    /**
     * 
     */
    patch(input) {
        return {name: this.name, method: 'patch', data: this.repository.save(input)};
    }

    /**
     * 
     */
    delete(input) {
        return {name: this.name, method: 'delete', data: this.repository.delete(input)};
    }

    /**
     * 
     */
    list(input) {
        return {name: this.name, method: 'list', data: this.repository.list()};
    }

}

module.exports = Model;