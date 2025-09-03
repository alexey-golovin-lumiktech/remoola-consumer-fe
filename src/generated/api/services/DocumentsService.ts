/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UploadDocumentDto } from '../models/UploadDocumentDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DocumentsService {
    /**
     * @returns any
     * @throws ApiError
     */
    public static documentsControllerList({
        clientId,
    }: {
        clientId: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/documents',
            query: {
                'clientId': clientId,
            },
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static documentsControllerUpload({
        requestBody,
    }: {
        requestBody: UploadDocumentDto,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/documents',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static documentsControllerPresign(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/documents/presign',
        });
    }
}
