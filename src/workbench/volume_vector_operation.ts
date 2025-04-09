// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_VECTOR_OPERATION_METADATA: Metadata = {
    id: "b6b698dbe706997398cf5bc45a651fc0a7b907d5.boutiques",
    name: "volume-vector-operation",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeVectorOperationParameters {
    "__STYXTYPE__": "volume-vector-operation";
    "vectors_a": InputPathType;
    "vectors_b": InputPathType;
    "operation": string;
    "volume_out": string;
    "opt_normalize_a": boolean;
    "opt_normalize_b": boolean;
    "opt_normalize_output": boolean;
    "opt_magnitude": boolean;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "volume-vector-operation": volume_vector_operation_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "volume-vector-operation": volume_vector_operation_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `volume_vector_operation(...)`.
 *
 * @interface
 */
interface VolumeVectorOperationOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output file
     */
    volume_out: OutputPathType;
}


function volume_vector_operation_params(
    vectors_a: InputPathType,
    vectors_b: InputPathType,
    operation: string,
    volume_out: string,
    opt_normalize_a: boolean = false,
    opt_normalize_b: boolean = false,
    opt_normalize_output: boolean = false,
    opt_magnitude: boolean = false,
): VolumeVectorOperationParameters {
    /**
     * Build parameters.
    
     * @param vectors_a first vector input file
     * @param vectors_b second vector input file
     * @param operation what vector operation to do
     * @param volume_out the output file
     * @param opt_normalize_a normalize vectors of first input
     * @param opt_normalize_b normalize vectors of second input
     * @param opt_normalize_output normalize output vectors (not valid for dot product)
     * @param opt_magnitude output the magnitude of the result (not valid for dot product)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-vector-operation" as const,
        "vectors_a": vectors_a,
        "vectors_b": vectors_b,
        "operation": operation,
        "volume_out": volume_out,
        "opt_normalize_a": opt_normalize_a,
        "opt_normalize_b": opt_normalize_b,
        "opt_normalize_output": opt_normalize_output,
        "opt_magnitude": opt_magnitude,
    };
    return params;
}


function volume_vector_operation_cargs(
    params: VolumeVectorOperationParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-volume-vector-operation");
    cargs.push(execution.inputFile((params["vectors_a"] ?? null)));
    cargs.push(execution.inputFile((params["vectors_b"] ?? null)));
    cargs.push((params["operation"] ?? null));
    cargs.push((params["volume_out"] ?? null));
    if ((params["opt_normalize_a"] ?? null)) {
        cargs.push("-normalize-a");
    }
    if ((params["opt_normalize_b"] ?? null)) {
        cargs.push("-normalize-b");
    }
    if ((params["opt_normalize_output"] ?? null)) {
        cargs.push("-normalize-output");
    }
    if ((params["opt_magnitude"] ?? null)) {
        cargs.push("-magnitude");
    }
    return cargs;
}


function volume_vector_operation_outputs(
    params: VolumeVectorOperationParameters,
    execution: Execution,
): VolumeVectorOperationOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeVectorOperationOutputs = {
        root: execution.outputFile("."),
        volume_out: execution.outputFile([(params["volume_out"] ?? null)].join('')),
    };
    return ret;
}


function volume_vector_operation_execute(
    params: VolumeVectorOperationParameters,
    execution: Execution,
): VolumeVectorOperationOutputs {
    /**
     * Do a vector operation on volume files.
     * 
     * Does a vector operation on two volume files (that must have a multiple of 3 subvolumes).  Either of the inputs may have multiple vectors (more than 3 subvolumes), but not both (at least one must have exactly 3 subvolumes).  The -magnitude and -normalize-output options may not be specified together, or with the DOT operation.  The <operation> parameter must be one of the following:
     * 
     * DOT
     * CROSS
     * ADD
     * SUBTRACT.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VolumeVectorOperationOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_vector_operation_cargs(params, execution)
    const ret = volume_vector_operation_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_vector_operation(
    vectors_a: InputPathType,
    vectors_b: InputPathType,
    operation: string,
    volume_out: string,
    opt_normalize_a: boolean = false,
    opt_normalize_b: boolean = false,
    opt_normalize_output: boolean = false,
    opt_magnitude: boolean = false,
    runner: Runner | null = null,
): VolumeVectorOperationOutputs {
    /**
     * Do a vector operation on volume files.
     * 
     * Does a vector operation on two volume files (that must have a multiple of 3 subvolumes).  Either of the inputs may have multiple vectors (more than 3 subvolumes), but not both (at least one must have exactly 3 subvolumes).  The -magnitude and -normalize-output options may not be specified together, or with the DOT operation.  The <operation> parameter must be one of the following:
     * 
     * DOT
     * CROSS
     * ADD
     * SUBTRACT.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param vectors_a first vector input file
     * @param vectors_b second vector input file
     * @param operation what vector operation to do
     * @param volume_out the output file
     * @param opt_normalize_a normalize vectors of first input
     * @param opt_normalize_b normalize vectors of second input
     * @param opt_normalize_output normalize output vectors (not valid for dot product)
     * @param opt_magnitude output the magnitude of the result (not valid for dot product)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeVectorOperationOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_VECTOR_OPERATION_METADATA);
    const params = volume_vector_operation_params(vectors_a, vectors_b, operation, volume_out, opt_normalize_a, opt_normalize_b, opt_normalize_output, opt_magnitude)
    return volume_vector_operation_execute(params, execution);
}


export {
      VOLUME_VECTOR_OPERATION_METADATA,
      VolumeVectorOperationOutputs,
      VolumeVectorOperationParameters,
      volume_vector_operation,
      volume_vector_operation_params,
};
