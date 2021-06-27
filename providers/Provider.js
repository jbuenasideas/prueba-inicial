/**
 * 
 */

const Model = require('../models/Model');

/**
 * Provider
 */
class Provider {

    /**
     * 
     */
    constructor() 
    {
        this.name = 'Provider';
        this.model = new Model();
    }

    /**
     * 
     */
    create(input) {
        return {name: this.name, method: 'create', data: this.model.create() };
    }

    /**
     * 
     */
    edit(input) {
        return {name: this.name, method: 'edit', data: this.model.edit()};
    }

    /**
     * 
     */
    put(input) {
        return {name: this.name, method: 'put', data: this.model.put()};
    }

    /**
     * 
     */
    patch(input) {
        return {name: this.name, method: 'patch', data: this.model.patch()};
    }

    /**
     * 
     */
    delete(input) {
        return {name: this.name, method: 'delete', data: this.model.delete() };
    }

    /**
     * 
     */
    list(input) {
        return {name: this.name, method: 'list', data: this.model.list() };
    }
}

module.exports = Provider;