// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSREALPATH_METADATA: Metadata = {
    id: "72d52c391bbfeb21a2f969aa0469ec4c8267957d.boutiques",
    name: "fsrealpath",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FsrealpathParameters {
    "__STYXTYPE__": "fsrealpath";
    "path": string;
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
        "fsrealpath": fsrealpath_cargs,
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
 * Output object returned when calling `fsrealpath(...)`.
 *
 * @interface
 */
interface FsrealpathOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fsrealpath_params(
    path: string,
    help: boolean = false,
): FsrealpathParameters {
    /**
     * Build parameters.
    
     * @param path The path to resolve
     * @param help Show this help message and exit
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsrealpath" as const,
        "path": path,
        "help": help,
    };
    return params;
}


function fsrealpath_cargs(
    params: FsrealpathParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsrealpath");
    cargs.push((params["path"] ?? null));
    if ((params["help"] ?? null)) {
        cargs.push("-h");
    }
    return cargs;
}


function fsrealpath_outputs(
    params: FsrealpathParameters,
    execution: Execution,
): FsrealpathOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FsrealpathOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fsrealpath_execute(
    params: FsrealpathParameters,
    execution: Execution,
): FsrealpathOutputs {
    /**
     * Resolve symbolic links in a path.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FsrealpathOutputs`).
     */
    params = execution.params(params)
    const cargs = fsrealpath_cargs(params, execution)
    const ret = fsrealpath_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsrealpath(
    path: string,
    help: boolean = false,
    runner: Runner | null = null,
): FsrealpathOutputs {
    /**
     * Resolve symbolic links in a path.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param path The path to resolve
     * @param help Show this help message and exit
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FsrealpathOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSREALPATH_METADATA);
    const params = fsrealpath_params(path, help)
    return fsrealpath_execute(params, execution);
}


export {
      FSREALPATH_METADATA,
      FsrealpathOutputs,
      FsrealpathParameters,
      fsrealpath,
      fsrealpath_params,
};
