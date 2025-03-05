// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TRAC_PREPROC_METADATA: Metadata = {
    id: "5854dffca5b99ca0a5c033e626a1874da235aa39.boutiques",
    name: "trac-preproc",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface TracPreprocParameters {
    "__STYXTYPE__": "trac-preproc";
    "dmrirc_file": InputPathType;
    "log_file"?: string | null | undefined;
    "nolog": boolean;
    "cmd_file"?: string | null | undefined;
    "nocmd": boolean;
    "no_isrunning": boolean;
    "umask"?: string | null | undefined;
    "group_id"?: string | null | undefined;
    "allow_core_dump": boolean;
    "debug": boolean;
    "dontrun": boolean;
    "version": boolean;
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
        "trac-preproc": trac_preproc_cargs,
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
 * Output object returned when calling `trac_preproc(...)`.
 *
 * @interface
 */
interface TracPreprocOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function trac_preproc_params(
    dmrirc_file: InputPathType,
    log_file: string | null = null,
    nolog: boolean = false,
    cmd_file: string | null = null,
    nocmd: boolean = false,
    no_isrunning: boolean = false,
    umask: string | null = null,
    group_id: string | null = null,
    allow_core_dump: boolean = false,
    debug: boolean = false,
    dontrun: boolean = false,
    version: boolean = false,
): TracPreprocParameters {
    /**
     * Build parameters.
    
     * @param dmrirc_file dmrirc file (see dmrirc.example)
     * @param log_file Log file; default is trac-all.log in the same dir as dmrirc
     * @param nolog Do not save a log file
     * @param cmd_file Cmd file; default is trac-all.cmd in the same dir as dmrirc
     * @param nocmd Do not save a cmd file
     * @param no_isrunning Do not check whether this subject is currently being processed
     * @param umask Set unix file permission mask (default 002)
     * @param group_id Check that current group is alpha groupid
     * @param allow_core_dump Set coredump limit to unlimited
     * @param debug Generate much more output
     * @param dontrun Do everything but execute each command
     * @param version Print version of this script and exit
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "trac-preproc" as const,
        "dmrirc_file": dmrirc_file,
        "nolog": nolog,
        "nocmd": nocmd,
        "no_isrunning": no_isrunning,
        "allow_core_dump": allow_core_dump,
        "debug": debug,
        "dontrun": dontrun,
        "version": version,
    };
    if (log_file !== null) {
        params["log_file"] = log_file;
    }
    if (cmd_file !== null) {
        params["cmd_file"] = cmd_file;
    }
    if (umask !== null) {
        params["umask"] = umask;
    }
    if (group_id !== null) {
        params["group_id"] = group_id;
    }
    return params;
}


function trac_preproc_cargs(
    params: TracPreprocParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("trac-preproc");
    cargs.push(
        "-c",
        execution.inputFile((params["dmrirc_file"] ?? null))
    );
    if ((params["log_file"] ?? null) !== null) {
        cargs.push(
            "-log",
            (params["log_file"] ?? null)
        );
    }
    if ((params["nolog"] ?? null)) {
        cargs.push("-nolog");
    }
    if ((params["cmd_file"] ?? null) !== null) {
        cargs.push(
            "-cmd",
            (params["cmd_file"] ?? null)
        );
    }
    if ((params["nocmd"] ?? null)) {
        cargs.push("-nocmd");
    }
    if ((params["no_isrunning"] ?? null)) {
        cargs.push("-no-isrunning");
    }
    if ((params["umask"] ?? null) !== null) {
        cargs.push(
            "-umask",
            (params["umask"] ?? null)
        );
    }
    if ((params["group_id"] ?? null) !== null) {
        cargs.push(
            "-grp",
            (params["group_id"] ?? null)
        );
    }
    if ((params["allow_core_dump"] ?? null)) {
        cargs.push("-allowcoredump");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["dontrun"] ?? null)) {
        cargs.push("-dontrun");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    return cargs;
}


function trac_preproc_outputs(
    params: TracPreprocParameters,
    execution: Execution,
): TracPreprocOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TracPreprocOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function trac_preproc_execute(
    params: TracPreprocParameters,
    execution: Execution,
): TracPreprocOutputs {
    /**
     * Tractography pre-processing for a single subject.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TracPreprocOutputs`).
     */
    params = execution.params(params)
    const cargs = trac_preproc_cargs(params, execution)
    const ret = trac_preproc_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function trac_preproc(
    dmrirc_file: InputPathType,
    log_file: string | null = null,
    nolog: boolean = false,
    cmd_file: string | null = null,
    nocmd: boolean = false,
    no_isrunning: boolean = false,
    umask: string | null = null,
    group_id: string | null = null,
    allow_core_dump: boolean = false,
    debug: boolean = false,
    dontrun: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): TracPreprocOutputs {
    /**
     * Tractography pre-processing for a single subject.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param dmrirc_file dmrirc file (see dmrirc.example)
     * @param log_file Log file; default is trac-all.log in the same dir as dmrirc
     * @param nolog Do not save a log file
     * @param cmd_file Cmd file; default is trac-all.cmd in the same dir as dmrirc
     * @param nocmd Do not save a cmd file
     * @param no_isrunning Do not check whether this subject is currently being processed
     * @param umask Set unix file permission mask (default 002)
     * @param group_id Check that current group is alpha groupid
     * @param allow_core_dump Set coredump limit to unlimited
     * @param debug Generate much more output
     * @param dontrun Do everything but execute each command
     * @param version Print version of this script and exit
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TracPreprocOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TRAC_PREPROC_METADATA);
    const params = trac_preproc_params(dmrirc_file, log_file, nolog, cmd_file, nocmd, no_isrunning, umask, group_id, allow_core_dump, debug, dontrun, version)
    return trac_preproc_execute(params, execution);
}


export {
      TRAC_PREPROC_METADATA,
      TracPreprocOutputs,
      TracPreprocParameters,
      trac_preproc,
      trac_preproc_params,
};
