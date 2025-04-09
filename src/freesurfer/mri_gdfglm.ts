// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_GDFGLM_METADATA: Metadata = {
    id: "dafcf252ee11d371e4e1d7050ccaf3d1ecfa51d0.boutiques",
    name: "mri_gdfglm",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriGdfglmParameters {
    "__STYXTYPE__": "mri_gdfglm";
    "inputs"?: string | null | undefined;
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
        "mri_gdfglm": mri_gdfglm_cargs,
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
        "mri_gdfglm": mri_gdfglm_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_gdfglm(...)`.
 *
 * @interface
 */
interface MriGdfglmOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output information is not available because the command has been removed.
     */
    outputs: OutputPathType;
}


function mri_gdfglm_params(
    inputs: string | null = null,
): MriGdfglmParameters {
    /**
     * Build parameters.
    
     * @param inputs Input parameters are not available because the command has been removed.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_gdfglm" as const,
    };
    if (inputs !== null) {
        params["inputs"] = inputs;
    }
    return params;
}


function mri_gdfglm_cargs(
    params: MriGdfglmParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_gdfglm");
    if ((params["inputs"] ?? null) !== null) {
        cargs.push((params["inputs"] ?? null));
    }
    return cargs;
}


function mri_gdfglm_outputs(
    params: MriGdfglmParameters,
    execution: Execution,
): MriGdfglmOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriGdfglmOutputs = {
        root: execution.outputFile("."),
        outputs: execution.outputFile(["[OUTPUT]"].join('')),
    };
    return ret;
}


function mri_gdfglm_execute(
    params: MriGdfglmParameters,
    execution: Execution,
): MriGdfglmOutputs {
    /**
     * The mri_gdfglm command has been removed from the current version of FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriGdfglmOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_gdfglm_cargs(params, execution)
    const ret = mri_gdfglm_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_gdfglm(
    inputs: string | null = null,
    runner: Runner | null = null,
): MriGdfglmOutputs {
    /**
     * The mri_gdfglm command has been removed from the current version of FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param inputs Input parameters are not available because the command has been removed.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriGdfglmOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_GDFGLM_METADATA);
    const params = mri_gdfglm_params(inputs)
    return mri_gdfglm_execute(params, execution);
}


export {
      MRI_GDFGLM_METADATA,
      MriGdfglmOutputs,
      MriGdfglmParameters,
      mri_gdfglm,
      mri_gdfglm_params,
};
