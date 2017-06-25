import * as Http from "http";
import { IExecutorContainer } from "../Containers";
import { IHttpHeader } from "./IHttpHeader";
import { IUrlQuery } from "./IUrlQuery";
import { IHttpParam } from "./IHttpParam";
import { IResponse } from "./IResponse";

/**
 * A HTTP request.
 * 
 * @export
 * @interface IRequest
 */
export interface IRequest {
    /**
     * Meta data of request.
     * 
     * @type {Web.IncomingMessage}
     * @memberOf IRequest
     */
    meta: Http.IncomingMessage;
    /**
     * Header information of request.
     * 
     * @type {IHttpHeader}
     * @memberOf IRequest
     */
    header: IHttpHeader;
    /**
     * Url query information of request.
     * 
     * @type {IUrlQuery}
     * @memberOf IRequest
     */
    query: IUrlQuery;
    /**
     * Url of request, only include the path.
     * 
     * @type {string}
     * @memberOf IRequest
     */
    url: string;
    /**
     * Method of HTTP request, 'GET', 'POST' or other something.
     * 
     * @type {string}
     * @memberOf IRequest
     */
    method: string;
    /**
     * Param of HTTP, router url param, body parser result can be stored here.
     * 
     * @type {IHttpParam}
     * @memberOf IRequest
     */
    param: IHttpParam;

    /**
     * Executors which have handled this request, it is very useful for debug.
     * 
     * @type {Config.IExecutorConfig[]}
     * @memberOf IRequest
     */
    traceStack: IExecutorContainer[];

    /**
     * Copy a request, but the copy of this request will not include meta information.
     * 
     * @returns {IRequest} 
     * 
     * @memberOf IRequest
     */
    fork(): IRequest;
    /**
     * Convert this request to a response.
     * 
     * @returns {IResponse} 
     * 
     * @memberOf IRequest
     */
    respond(): IResponse;
}