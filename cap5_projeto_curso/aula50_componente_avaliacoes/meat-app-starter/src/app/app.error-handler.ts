import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/throw'



export class ErrorHandler {

    static handlerError(error: Response | any) {

        let errorMessage: string;

        if (error instanceof Response) {

            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText} tente novamente`;

        }
        else {

            errorMessage = error.toString();
        }

        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}