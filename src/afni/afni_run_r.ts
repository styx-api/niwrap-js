// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const AFNI_RUN_R_METADATA: Metadata = {
    id: "c25de8aaab9b4faa0067fa6c9d3361eb1f13f7bf.boutiques",
    name: "afni_run_R",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface AfniRunRParameters {
    "__STYXTYPE__": "afni_run_R";
    "r_script": InputPathType;
    "r_args": Array<string>;
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
        "afni_run_R": afni_run_r_cargs,
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
 * Output object returned when calling `afni_run_r(...)`.
 *
 * @interface
 */
interface AfniRunROutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function afni_run_r_params(
    r_script: InputPathType,
    r_args: Array<string>,
): AfniRunRParameters {
    /**
     * Build parameters.
    
     * @param r_script R script to be executed
     * @param r_args Arguments to be passed to the R script
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "afni_run_R" as const,
        "r_script": r_script,
        "r_args": r_args,
    };
    return params;
}


function afni_run_r_cargs(
    params: AfniRunRParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("afni_run_R");
    cargs.push(execution.inputFile((params["r_script"] ?? null)));
    cargs.push(...(params["r_args"] ?? null));
    return cargs;
}


function afni_run_r_outputs(
    params: AfniRunRParameters,
    execution: Execution,
): AfniRunROutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AfniRunROutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function afni_run_r_execute(
    params: AfniRunRParameters,
    execution: Execution,
): AfniRunROutputs {
    /**
     * Run an R script with the specified arguments.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AfniRunROutputs`).
     */
    params = execution.params(params)
    const cargs = afni_run_r_cargs(params, execution)
    const ret = afni_run_r_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function afni_run_r(
    r_script: InputPathType,
    r_args: Array<string>,
    runner: Runner | null = null,
): AfniRunROutputs {
    /**
     * Run an R script with the specified arguments.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param r_script R script to be executed
     * @param r_args Arguments to be passed to the R script
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AfniRunROutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(AFNI_RUN_R_METADATA);
    const params = afni_run_r_params(r_script, r_args)
    return afni_run_r_execute(params, execution);
}


export {
      AFNI_RUN_R_METADATA,
      AfniRunROutputs,
      AfniRunRParameters,
      afni_run_r,
      afni_run_r_params,
};
