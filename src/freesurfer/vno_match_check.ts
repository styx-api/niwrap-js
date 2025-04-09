// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VNO_MATCH_CHECK_METADATA: Metadata = {
    id: "f8067972f626da6ba2d1f49f4d099ebfb3bccb87.boutiques",
    name: "vno_match_check",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface VnoMatchCheckParameters {
    "__STYXTYPE__": "vno_match_check";
    "subjid": string;
    "debug": boolean;
    "right_hemi": boolean;
    "left_hemi": boolean;
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
        "vno_match_check": vno_match_check_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `vno_match_check(...)`.
 *
 * @interface
 */
interface VnoMatchCheckOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function vno_match_check_params(
    subjid: string,
    debug: boolean = false,
    right_hemi: boolean = false,
    left_hemi: boolean = false,
): VnoMatchCheckParameters {
    /**
     * Build parameters.
    
     * @param subjid Subject ID for which the vertex number check is performed
     * @param debug Prints progress text
     * @param right_hemi Checks only the right hemisphere
     * @param left_hemi Checks only the left hemisphere
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "vno_match_check" as const,
        "subjid": subjid,
        "debug": debug,
        "right_hemi": right_hemi,
        "left_hemi": left_hemi,
    };
    return params;
}


function vno_match_check_cargs(
    params: VnoMatchCheckParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("vno_match_check");
    cargs.push((params["subjid"] ?? null));
    if ((params["debug"] ?? null)) {
        cargs.push("debug");
    }
    if ((params["right_hemi"] ?? null)) {
        cargs.push("rh");
    }
    if ((params["left_hemi"] ?? null)) {
        cargs.push("lh");
    }
    return cargs;
}


function vno_match_check_outputs(
    params: VnoMatchCheckParameters,
    execution: Execution,
): VnoMatchCheckOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VnoMatchCheckOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function vno_match_check_execute(
    params: VnoMatchCheckParameters,
    execution: Execution,
): VnoMatchCheckOutputs {
    /**
     * Checks that all surfaces and surface data files for a subject have the same number of vertices.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VnoMatchCheckOutputs`).
     */
    params = execution.params(params)
    const cargs = vno_match_check_cargs(params, execution)
    const ret = vno_match_check_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function vno_match_check(
    subjid: string,
    debug: boolean = false,
    right_hemi: boolean = false,
    left_hemi: boolean = false,
    runner: Runner | null = null,
): VnoMatchCheckOutputs {
    /**
     * Checks that all surfaces and surface data files for a subject have the same number of vertices.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subjid Subject ID for which the vertex number check is performed
     * @param debug Prints progress text
     * @param right_hemi Checks only the right hemisphere
     * @param left_hemi Checks only the left hemisphere
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VnoMatchCheckOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VNO_MATCH_CHECK_METADATA);
    const params = vno_match_check_params(subjid, debug, right_hemi, left_hemi)
    return vno_match_check_execute(params, execution);
}


export {
      VNO_MATCH_CHECK_METADATA,
      VnoMatchCheckOutputs,
      VnoMatchCheckParameters,
      vno_match_check,
      vno_match_check_params,
};
