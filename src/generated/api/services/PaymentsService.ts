/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StartPaymentDto } from '../models/StartPaymentDto';
import type { UpdatePaymentStatusDto } from '../models/UpdatePaymentStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentsService {
    /**
     * @returns any
     * @throws ApiError
     */
    public static paymentsControllerList({
        clientId,
    }: {
        clientId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/payments',
            query: {
                'clientId': clientId,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static paymentsControllerStart({
        requestBody,
    }: {
        requestBody: StartPaymentDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payments',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static paymentsControllerPatch({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdatePaymentStatusDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/payments/{id}/status',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
