// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FS_RUN_FROM_MCR_METADATA: Metadata = {
    id: "912dbf3151af651160bde9f39e645669c7bf7dcb.boutiques",
    name: "fs_run_from_mcr",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FsRunFromMcrParameters {
    "__STYXTYPE__": "fs_run_from_mcr";
    "name"?: string | null | undefined;
    "command"?: string | null | undefined;
    "zeroth_flag": boolean;
    "empty_env_flag": boolean;
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
        "fs_run_from_mcr": fs_run_from_mcr_cargs,
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
 * Output object returned when calling `fs_run_from_mcr(...)`.
 *
 * @interface
 */
interface FsRunFromMcrOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fs_run_from_mcr_params(
    name: string | null = null,
    command: string | null = null,
    zeroth_flag: boolean = false,
    empty_env_flag: boolean = false,
): FsRunFromMcrParameters {
    /**
     * Build parameters.
    
     * @param name Pass NAME as the zeroth argument to COMMAND
     * @param command The command to execute
     * @param zeroth_flag Place a dash in the zeroth argument to COMMAND
     * @param empty_env_flag Execute COMMAND with an empty environment
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fs_run_from_mcr" as const,
        "zeroth_flag": zeroth_flag,
        "empty_env_flag": empty_env_flag,
    };
    if (name !== null) {
        params["name"] = name;
    }
    if (command !== null) {
        params["command"] = command;
    }
    return params;
}


function fs_run_from_mcr_cargs(
    params: FsRunFromMcrParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fs_run_from_mcr");
    if ((params["name"] ?? null) !== null) {
        cargs.push(
            "-a",
            (params["name"] ?? null)
        );
    }
    if ((params["command"] ?? null) !== null) {
        cargs.push((params["command"] ?? null));
    }
    if ((params["zeroth_flag"] ?? null)) {
        cargs.push("-l");
    }
    if ((params["empty_env_flag"] ?? null)) {
        cargs.push("-c");
    }
    return cargs;
}


function fs_run_from_mcr_outputs(
    params: FsRunFromMcrParameters,
    execution: Execution,
): FsRunFromMcrOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FsRunFromMcrOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fs_run_from_mcr_execute(
    params: FsRunFromMcrParameters,
    execution: Execution,
): FsRunFromMcrOutputs {
    /**
     * Replace the shell with the given command.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FsRunFromMcrOutputs`).
     */
    params = execution.params(params)
    const cargs = fs_run_from_mcr_cargs(params, execution)
    const ret = fs_run_from_mcr_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fs_run_from_mcr(
    name: string | null = null,
    command: string | null = null,
    zeroth_flag: boolean = false,
    empty_env_flag: boolean = false,
    runner: Runner | null = null,
): FsRunFromMcrOutputs {
    /**
     * Replace the shell with the given command.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param name Pass NAME as the zeroth argument to COMMAND
     * @param command The command to execute
     * @param zeroth_flag Place a dash in the zeroth argument to COMMAND
     * @param empty_env_flag Execute COMMAND with an empty environment
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FsRunFromMcrOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FS_RUN_FROM_MCR_METADATA);
    const params = fs_run_from_mcr_params(name, command, zeroth_flag, empty_env_flag)
    return fs_run_from_mcr_execute(params, execution);
}


export {
      FS_RUN_FROM_MCR_METADATA,
      FsRunFromMcrOutputs,
      FsRunFromMcrParameters,
      fs_run_from_mcr,
      fs_run_from_mcr_params,
};
