// @generated by protobuf-ts 2.8.2
// @generated from protobuf file "generation.proto" (package "gooseai", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { GenerationService } from "./generation";
import type { ChainRequest } from "./generation";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Answer } from "./generation";
import type { Request } from "./generation";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 *
 * gRPC services
 *
 *
 * @generated from protobuf service gooseai.GenerationService
 */
export interface IGenerationServiceClient {
    /**
     * @generated from protobuf rpc: Generate(gooseai.Request) returns (stream gooseai.Answer);
     */
    generate(input: Request, options?: RpcOptions): ServerStreamingCall<Request, Answer>;
    /**
     * @generated from protobuf rpc: ChainGenerate(gooseai.ChainRequest) returns (stream gooseai.Answer);
     */
    chainGenerate(input: ChainRequest, options?: RpcOptions): ServerStreamingCall<ChainRequest, Answer>;
}
/**
 *
 * gRPC services
 *
 *
 * @generated from protobuf service gooseai.GenerationService
 */
export class GenerationServiceClient implements IGenerationServiceClient, ServiceInfo {
    typeName = GenerationService.typeName;
    methods = GenerationService.methods;
    options = GenerationService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Generate(gooseai.Request) returns (stream gooseai.Answer);
     */
    generate(input: Request, options?: RpcOptions): ServerStreamingCall<Request, Answer> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<Request, Answer>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ChainGenerate(gooseai.ChainRequest) returns (stream gooseai.Answer);
     */
    chainGenerate(input: ChainRequest, options?: RpcOptions): ServerStreamingCall<ChainRequest, Answer> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ChainRequest, Answer>("serverStreaming", this._transport, method, opt, input);
    }
}
