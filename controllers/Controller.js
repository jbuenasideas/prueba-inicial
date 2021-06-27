const Provider = require('../providers/Provider');

/**
 * Controller
 */
class Controller {

    constructor()
    {
        this.name = 'Controller';
        this.provider = new Provider();
    }

    /**
     * List
     */
    list( req, res ) {

        console.log("req:", req);
        return res.status(200)
            .json( {
                name: this.name, 
                body: "list",
                data: this.provider.list()
            } );
    }

    /**
     * new
     */
    new( req, res ) {

        console.log("req:", req);
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