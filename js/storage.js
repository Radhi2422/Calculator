import { CONFIG } from "./config.js";

class Storage {

    save(history){

        localStorage.setItem(

            CONFIG.STORAGE_KEY,

            JSON.stringify(history)

        );

    }

    load(){

        const history=

        JSON.parse(

            localStorage.getItem(

                CONFIG.STORAGE_KEY

            )

        );

        return history || [];

    }

    clear(){

        localStorage.removeItem(

            CONFIG.STORAGE_KEY

        );

    }

}

export default Storage;