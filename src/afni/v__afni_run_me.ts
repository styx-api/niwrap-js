// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__AFNI_RUN_ME_METADATA: Metadata = {
    id: "759b988e9e66475876e7186709f05a39cd909fce.boutiques",
    name: "@afni.run.me",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VAfniRunMeParameters {
    "__STYXTYPE__": "@afni.run.me";
    "go": boolean;
    "curl": boolean;
    "help": boolean;
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
        "@afni.run.me": v__afni_run_me_cargs,
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
 * Output object returned when calling `v__afni_run_me(...)`.
 *
 * @interface
 */
interface VAfniRunMeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v__afni_run_me_params(
    go: boolean = false,
    curl: boolean = false,
    help: boolean = false,
): VAfniRunMeParameters {
    /**
     * Build parameters.
    
     * @param go Execute the work
     * @param curl Default to curl instead of wget
     * @param help Show help message
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@afni.run.me" as const,
        "go": go,
        "curl": curl,
        "help": help,
    };
    return params;
}


function v__afni_run_me_cargs(
    params: VAfniRunMeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@afni.run.me");
    if ((params["go"] ?? null)) {
        cargs.push("-go");
    }
    if ((params["curl"] ?? null)) {
        cargs.push("-curl");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    return cargs;
}


function v__afni_run_me_outputs(
    params: VAfniRunMeParameters,
    execution: Execution,
): VAfniRunMeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VAfniRunMeOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v__afni_run_me_execute(
    params: VAfniRunMeParameters,
    execution: Execution,
): VAfniRunMeOutputs {
    /**
     * A tool to execute a specific command.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VAfniRunMeOutputs`).
     */
    params = execution.params(params)
    const cargs = v__afni_run_me_cargs(params, execution)
    const ret = v__afni_run_me_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__afni_run_me(
    go: boolean = false,
    curl: boolean = false,
    help: boolean = false,
    runner: Runner | null = null,
): VAfniRunMeOutputs {
    /**
     * A tool to execute a specific command.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param go Execute the work
     * @param curl Default to curl instead of wget
     * @param help Show help message
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VAfniRunMeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__AFNI_RUN_ME_METADATA);
    const params = v__afni_run_me_params(go, curl, help)
    return v__afni_run_me_execute(params, execution);
}


export {
      VAfniRunMeOutputs,
      VAfniRunMeParameters,
      V__AFNI_RUN_ME_METADATA,
      v__afni_run_me,
      v__afni_run_me_params,
};
