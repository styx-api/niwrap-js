// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LONG_CREATE_ORIG_METADATA: Metadata = {
    id: "90b8f21bd10e8814ce52ca803641ec5d4e3eb057.boutiques",
    name: "long_create_orig",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface LongCreateOrigParameters {
    "__STYXTYPE__": "long_create_orig";
    "base_id": string;
    "tp_id"?: string | null | undefined;
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
        "long_create_orig": long_create_orig_cargs,
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
        "long_create_orig": long_create_orig_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `long_create_orig(...)`.
 *
 * @interface
 */
interface LongCreateOrigOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output directory for processed time point data. Defaults to the specified path.
     */
    output_directory: OutputPathType;
}


function long_create_orig_params(
    base_id: string,
    tp_id: string | null = null,
): LongCreateOrigParameters {
    /**
     * Build parameters.
    
     * @param base_id Base ID to be utilized in the process.
     * @param tp_id Time point ID. If omitted, operates on all time points in base.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "long_create_orig" as const,
        "base_id": base_id,
    };
    if (tp_id !== null) {
        params["tp_id"] = tp_id;
    }
    return params;
}


function long_create_orig_cargs(
    params: LongCreateOrigParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("long_create_orig");
    cargs.push((params["base_id"] ?? null));
    if ((params["tp_id"] ?? null) !== null) {
        cargs.push((params["tp_id"] ?? null));
    }
    return cargs;
}


function long_create_orig_outputs(
    params: LongCreateOrigParameters,
    execution: Execution,
): LongCreateOrigOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LongCreateOrigOutputs = {
        root: execution.outputFile("."),
        output_directory: execution.outputFile(["<SUBJECTS_DIR>/<base-id>/longtp/<tp-id>"].join('')),
    };
    return ret;
}


function long_create_orig_execute(
    params: LongCreateOrigParameters,
    execution: Execution,
): LongCreateOrigOutputs {
    /**
     * Maps, conforms and averages (motioncorrect) raw inputs from cross-sectional directory to base space in Freesurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LongCreateOrigOutputs`).
     */
    params = execution.params(params)
    const cargs = long_create_orig_cargs(params, execution)
    const ret = long_create_orig_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function long_create_orig(
    base_id: string,
    tp_id: string | null = null,
    runner: Runner | null = null,
): LongCreateOrigOutputs {
    /**
     * Maps, conforms and averages (motioncorrect) raw inputs from cross-sectional directory to base space in Freesurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param base_id Base ID to be utilized in the process.
     * @param tp_id Time point ID. If omitted, operates on all time points in base.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LongCreateOrigOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LONG_CREATE_ORIG_METADATA);
    const params = long_create_orig_params(base_id, tp_id)
    return long_create_orig_execute(params, execution);
}


export {
      LONG_CREATE_ORIG_METADATA,
      LongCreateOrigOutputs,
      LongCreateOrigParameters,
      long_create_orig,
      long_create_orig_params,
};
