/**
 * 
 */
const EventProvider = require('../events/EventProvider');


class ErrorProvider {

    __TAG__ = "ErrorProvider";


    /**
     * 
     */
    constructor() {

        this.name = 'ErrorProvider';

        /**
         * TODO: el EventProvider tiene que ser de tipo correcto
         * o auto configurarse
         */
        this.eventProvider = new EventProvider();
    }

    /**
     * 
     */
    send(input) {

        // TODO: deberia poder enviar objetos
        this.eventProvider.send("mensaje");

        console.log(this.__TAG__, ": send");
    }
}

module.exports = ErrorProvider;