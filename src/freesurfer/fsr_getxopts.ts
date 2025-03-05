// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSR_GETXOPTS_METADATA: Metadata = {
    id: "224fcae72cefe1195f88d86eb1986d98d2293a58.boutiques",
    name: "fsr-getxopts",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FsrGetxoptsParameters {
    "__STYXTYPE__": "fsr-getxopts";
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
        "fsr-getxopts": fsr_getxopts_cargs,
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
 * Output object returned when calling `fsr_getxopts(...)`.
 *
 * @interface
 */
interface FsrGetxoptsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fsr_getxopts_params(
    help: boolean = false,
): FsrGetxoptsParameters {
    /**
     * Build parameters.
    
     * @param help Display the help message and exit
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsr-getxopts" as const,
        "help": help,
    };
    return params;
}


function fsr_getxopts_cargs(
    params: FsrGetxoptsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsr-getxopts");
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function fsr_getxopts_outputs(
    params: FsrGetxoptsParameters,
    execution: Execution,
): FsrGetxoptsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FsrGetxoptsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fsr_getxopts_execute(
    params: FsrGetxoptsParameters,
    execution: Execution,
): FsrGetxoptsOutputs {
    /**
     * Tool to retrieve extended options for a specific context or configuration.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FsrGetxoptsOutputs`).
     */
    params = execution.params(params)
    const cargs = fsr_getxopts_cargs(params, execution)
    const ret = fsr_getxopts_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsr_getxopts(
    help: boolean = false,
    runner: Runner | null = null,
): FsrGetxoptsOutputs {
    /**
     * Tool to retrieve extended options for a specific context or configuration.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param help Display the help message and exit
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FsrGetxoptsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSR_GETXOPTS_METADATA);
    const params = fsr_getxopts_params(help)
    return fsr_getxopts_execute(params, execution);
}


export {
      FSR_GETXOPTS_METADATA,
      FsrGetxoptsOutputs,
      FsrGetxoptsParameters,
      fsr_getxopts,
      fsr_getxopts_params,
};
