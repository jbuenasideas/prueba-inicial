/**
 * 
 */

class EventProvider {

    __TAG__ = 'EventProvider';
    

    /**
     * 
     */
    constructor() {
        this.name = 'EventProvider';
        console.log( this.__TAG__, ":: [constructor]");
    }

    /**
     * 
     */
    send(message) {

        console.log( this.__TAG__, ":: [send]");
    }
}

module.exports = EventProvider;