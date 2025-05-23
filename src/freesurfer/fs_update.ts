// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FS_UPDATE_METADATA: Metadata = {
    id: "7559054caea5811a27d56eadbc3ee13035050ade.boutiques",
    name: "fs_update",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FsUpdateParameters {
    "__STYXTYPE__": "fs_update";
    "update_path"?: string | null | undefined;
    "help_short": boolean;
    "help_medium": boolean;
    "help_long": boolean;
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
        "fs_update": fs_update_cargs,
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
 * Output object returned when calling `fs_update(...)`.
 *
 * @interface
 */
interface FsUpdateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fs_update_params(
    update_path: string | null = null,
    help_short: boolean = false,
    help_medium: boolean = false,
    help_long: boolean = false,
): FsUpdateParameters {
    /**
     * Build parameters.
    
     * @param update_path Path to specific files or directories to update, copied recursively
     * @param help_short Show help
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fs_update" as const,
        "help_short": help_short,
        "help_medium": help_medium,
        "help_long": help_long,
    };
    if (update_path !== null) {
        params["update_path"] = update_path;
    }
    return params;
}


function fs_update_cargs(
    params: FsUpdateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fs_update");
    if ((params["update_path"] ?? null) !== null) {
        cargs.push((params["update_path"] ?? null));
    }
    if ((params["help_short"] ?? null)) {
        cargs.push("-h");
    }
    if ((params["help_medium"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["help_long"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function fs_update_outputs(
    params: FsUpdateParameters,
    execution: Execution,
): FsUpdateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FsUpdateOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fs_update_execute(
    params: FsUpdateParameters,
    execution: Execution,
): FsUpdateOutputs {
    /**
     * Utility to update the FreeSurfer installation.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FsUpdateOutputs`).
     */
    params = execution.params(params)
    const cargs = fs_update_cargs(params, execution)
    const ret = fs_update_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fs_update(
    update_path: string | null = null,
    help_short: boolean = false,
    help_medium: boolean = false,
    help_long: boolean = false,
    runner: Runner | null = null,
): FsUpdateOutputs {
    /**
     * Utility to update the FreeSurfer installation.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param update_path Path to specific files or directories to update, copied recursively
     * @param help_short Show help
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FsUpdateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FS_UPDATE_METADATA);
    const params = fs_update_params(update_path, help_short, help_medium, help_long)
    return fs_update_execute(params, execution);
}


export {
      FS_UPDATE_METADATA,
      FsUpdateOutputs,
      FsUpdateParameters,
      fs_update,
      fs_update_params,
};
