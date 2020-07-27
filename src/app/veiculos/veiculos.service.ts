import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

import {Observable} from 'rxjs'
import {catchError} from 'rxjs/operators'

import {Veiculo} from './veiculo'
import {ErrorResponse, HandleError} from '../http-error-handler-service'

@Injectable()
export class VeiculosService {
    private handleError: HandleError

    constructor(private http: HttpClient, httpErrorHandler: ErrorResponse){
        this.handleError = httpErrorHandler.createHandleError('VeiculosService')
    }

    getVeiculos(): Observable<Veiculo[]> {
        return this.http
            .get<Veiculo[]>('api/veiculos')
            .pipe(catchError(this.handleError('getVeiculos', [])))
    }

    addVeiculo(veiculo: Veiculo): Observable<Veiculo> {
        return this.http
            .post<Veiculo>('api/veiculo', veiculo)
            .pipe(catchError(this.handleError('addVeiculo', veiculo)))
    }

    deleteVeiculo(id: number): Observable<{}> {
        const url = `api/veiculo/${id}`
        return this.http
            .delete(url)
            .pipe(catchError(this.handleError('deleteVeiculo')))
    }

    updateVeiculo(veiculo: Veiculo): Observable<Veiculo> {
        return this.http
            .put<Veiculo>('api/veiculo/${veiculo.id}', veiculo)
            .pipe(catchError(this.handleError('updateVeiculo', veiculo)))
    }

}