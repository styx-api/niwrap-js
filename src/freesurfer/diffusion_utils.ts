// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DIFFUSION_UTILS_METADATA: Metadata = {
    id: "644c1194ddc618947bb21fc39f90ede191a80b94.boutiques",
    name: "diffusionUtils",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface DiffusionUtilsParameters {
    "__STYXTYPE__": "diffusionUtils";
    "dummy_flag": boolean;
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
        "diffusionUtils": diffusion_utils_cargs,
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
 * Output object returned when calling `diffusion_utils(...)`.
 *
 * @interface
 */
interface DiffusionUtilsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function diffusion_utils_params(
    dummy_flag: boolean = false,
): DiffusionUtilsParameters {
    /**
     * Build parameters.
    
     * @param dummy_flag Dummy input as no valid help information is provided due to missing module.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "diffusionUtils" as const,
        "dummy_flag": dummy_flag,
    };
    return params;
}


function diffusion_utils_cargs(
    params: DiffusionUtilsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("diffusionUtils");
    if ((params["dummy_flag"] ?? null)) {
        cargs.push("--dummy");
    }
    return cargs;
}


function diffusion_utils_outputs(
    params: DiffusionUtilsParameters,
    execution: Execution,
): DiffusionUtilsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DiffusionUtilsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function diffusion_utils_execute(
    params: DiffusionUtilsParameters,
    execution: Execution,
): DiffusionUtilsOutputs {
    /**
     * A utility related to diffusion data, potentially using the DIPY library.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DiffusionUtilsOutputs`).
     */
    params = execution.params(params)
    const cargs = diffusion_utils_cargs(params, execution)
    const ret = diffusion_utils_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function diffusion_utils(
    dummy_flag: boolean = false,
    runner: Runner | null = null,
): DiffusionUtilsOutputs {
    /**
     * A utility related to diffusion data, potentially using the DIPY library.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param dummy_flag Dummy input as no valid help information is provided due to missing module.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DiffusionUtilsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DIFFUSION_UTILS_METADATA);
    const params = diffusion_utils_params(dummy_flag)
    return diffusion_utils_execute(params, execution);
}


export {
      DIFFUSION_UTILS_METADATA,
      DiffusionUtilsOutputs,
      DiffusionUtilsParameters,
      diffusion_utils,
      diffusion_utils_params,
};
