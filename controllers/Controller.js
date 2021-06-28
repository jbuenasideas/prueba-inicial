const Provider = require('../providers/Provider');
const EventProvider = require('../events/EventProvider');
const ErrorProvider = require('../providers/ErrorProvider');
const {ReasonPhrases,StatusCodes} = require('http-status-codes');
/**
 * Controller
 */
class Controller {

    /**
     * 
     */
    statusCode = null;

    /**
     * 
     */
    response = {};

    /**
     * 
     */
    constructor()
    {
        this.name = 'Controller';
        this.provider = new Provider();

        /**
         * ErrorProvider: maneja los errores
         */
        this.errorProvider = new ErrorProvider();

        /**
         * TODO: el EventProvider tiene que ser de tipo correcto
         * o auto configurarse
         */
        this.eventProvider = new EventProvider();
    }

    /**
     * List
     */
    list( req, res ) {

        try {

            this.statusCode = StatusCodes.OK;

            this.response = {
                name: this.name, 
                body: "list",
                data: this.provider.list()
            }

        } catch (error) {
            
            

            this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
            this.response = {
                name: this.name, 
                body: "list",
                data: ReasonPhrases.INTERNAL_SERVER_ERROR
            }

        } finally {

            return res.status( this.statusCode ).json( this.response );
        }
        
    }

    /**
     * new
     */
    new( req, res ) {

        this.eventProvider.send("mensaje");        

        return res.status(200)
            .json( {
                name: this.name, 
                body: "new",
                data: this.provider.create()
            } );
    }

    /**
     * Put
     */
    put( req, res ) {

        this.eventProvider.send("mensaje");

        console.log("req:", req);
        return res.status(200)
            .json( {
                name: this.name, 
                body: "put",
                data: this.provider.put()
            } );
    }


    /**
     * Patch
     */
    patch( req, res ) {

        this.eventProvider.send("mensaje");

        console.log("req:", req);
        return res.status(200)
            .json( {
                name: this.name, 
                body: "patch",
                data: this.provider.patch()
            } );
    }


    /**
     * Delete
     */
    delete( req, res ) {

        this.eventProvider.send("mensaje");

        console.log("req:", req);
        return res.status(200)
            .json( {
                name: this.name, 
                body: "delete",
                data: this.provider.delete()
            } );
    }
}

module.exports = Controller;