// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CHECK_RECONS_SH_METADATA: Metadata = {
    id: "52142d2a907acd3a0d9631fc56bcb011b2c8e9af.boutiques",
    name: "check_recons.sh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface CheckReconsShParameters {
    "__STYXTYPE__": "check_recons.sh";
    "subject_directory"?: string | null | undefined;
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
        "check_recons.sh": check_recons_sh_cargs,
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
 * Output object returned when calling `check_recons_sh(...)`.
 *
 * @interface
 */
interface CheckReconsShOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function check_recons_sh_params(
    subject_directory: string | null = null,
): CheckReconsShParameters {
    /**
     * Build parameters.
    
     * @param subject_directory Directory where subjects are being processed. If not specified, uses SUBJECTS_DIR.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "check_recons.sh" as const,
    };
    if (subject_directory !== null) {
        params["subject_directory"] = subject_directory;
    }
    return params;
}


function check_recons_sh_cargs(
    params: CheckReconsShParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("check_recons.sh");
    if ((params["subject_directory"] ?? null) !== null) {
        cargs.push((params["subject_directory"] ?? null));
    }
    return cargs;
}


function check_recons_sh_outputs(
    params: CheckReconsShParameters,
    execution: Execution,
): CheckReconsShOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CheckReconsShOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function check_recons_sh_execute(
    params: CheckReconsShParameters,
    execution: Execution,
): CheckReconsShOutputs {
    /**
     * Checks the status of subjects being processed by recon-all in the SUBJECTS_DIR or a specified directory.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CheckReconsShOutputs`).
     */
    params = execution.params(params)
    const cargs = check_recons_sh_cargs(params, execution)
    const ret = check_recons_sh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function check_recons_sh(
    subject_directory: string | null = null,
    runner: Runner | null = null,
): CheckReconsShOutputs {
    /**
     * Checks the status of subjects being processed by recon-all in the SUBJECTS_DIR or a specified directory.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_directory Directory where subjects are being processed. If not specified, uses SUBJECTS_DIR.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CheckReconsShOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CHECK_RECONS_SH_METADATA);
    const params = check_recons_sh_params(subject_directory)
    return check_recons_sh_execute(params, execution);
}


export {
      CHECK_RECONS_SH_METADATA,
      CheckReconsShOutputs,
      CheckReconsShParameters,
      check_recons_sh,
      check_recons_sh_params,
};
