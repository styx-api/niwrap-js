// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LONG_SUBMIT_JOBS_METADATA: Metadata = {
    id: "73a46d90ad07cf1b262590059e8ca43cc4fde840.boutiques",
    name: "long_submit_jobs",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface LongSubmitJobsParameters {
    "__STYXTYPE__": "long_submit_jobs";
    "qdec": InputPathType;
    "cdir": string;
    "bdir"?: string | null | undefined;
    "ldir"?: string | null | undefined;
    "scriptsdir"?: string | null | undefined;
    "cross": boolean;
    "base": boolean;
    "long": boolean;
    "cflags"?: string | null | undefined;
    "bflags"?: string | null | undefined;
    "lflags"?: string | null | undefined;
    "affine": boolean;
    "force": boolean;
    "simulate": boolean;
    "simfiles": boolean;
    "check": boolean;
    "pause"?: number | null | undefined;
    "max"?: number | null | undefined;
    "queue"?: string | null | undefined;
    "cmem"?: number | null | undefined;
    "bmem"?: number | null | undefined;
    "lmem"?: number | null | undefined;
    "cnodes"?: number | null | undefined;
    "bnodes"?: number | null | undefined;
    "lnodes"?: number | null | undefined;
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
        "long_submit_jobs": long_submit_jobs_cargs,
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
 * Output object returned when calling `long_submit_jobs(...)`.
 *
 * @interface
 */
interface LongSubmitJobsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function long_submit_jobs_params(
    qdec: InputPathType,
    cdir: string,
    bdir: string | null = null,
    ldir: string | null = null,
    scriptsdir: string | null = null,
    cross: boolean = false,
    base: boolean = false,
    long: boolean = false,
    cflags: string | null = null,
    bflags: string | null = null,
    lflags: string | null = null,
    affine: boolean = false,
    force: boolean = false,
    simulate: boolean = false,
    simfiles: boolean = false,
    check: boolean = false,
    pause: number | null = null,
    max: number | null = null,
    queue: string | null = null,
    cmem: number | null = null,
    bmem: number | null = null,
    lmem: number | null = null,
    cnodes: number | null = null,
    bnodes: number | null = null,
    lnodes: number | null = null,
): LongSubmitJobsParameters {
    /**
     * Build parameters.
    
     * @param qdec QDEC table file specifying the subjects and time points.
     * @param cdir Directory for cross-sectional subjects (inherited by base and long).
     * @param bdir Directory for base runs (default: inherit from cross).
     * @param ldir Directory for longitudinal runs (default: inherit from base).
     * @param scriptsdir Location to save submitted scripts (default: <cdir,bdir,ldir>/scripts_submitted).
     * @param cross Process cross-sectional streams.
     * @param base Process base streams.
     * @param long Process longitudinal streams.
     * @param cflags Manual flags for cross processing (e.g., '-all -cw256').
     * @param bflags Manual flags for base processing (default: '-all').
     * @param lflags Manual flags for long processing (default: '-all').
     * @param affine Use affine registration for base.
     * @param force Force reprocessing of jobs even if marked as done.
     * @param simulate Simulate submission only, without executing.
     * @param simfiles Simulate command file creation only, without executing.
     * @param check Check if all longitudinal processing is complete.
     * @param pause Pause duration (in seconds) between submissions (default: 13).
     * @param max Maximum number of jobs per user (default: 100).
     * @param queue Queue to submit jobs.
     * @param cmem RAM (in GB) requested for cross (default: 7).
     * @param bmem RAM (in GB) requested for base (default: 7).
     * @param lmem RAM (in GB) requested for long (default: 7).
     * @param cnodes Number of nodes for cross runs (default: 1).
     * @param bnodes Number of nodes for base runs (default: 1).
     * @param lnodes Number of nodes for long runs (default: 1).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "long_submit_jobs" as const,
        "qdec": qdec,
        "cdir": cdir,
        "cross": cross,
        "base": base,
        "long": long,
        "affine": affine,
        "force": force,
        "simulate": simulate,
        "simfiles": simfiles,
        "check": check,
    };
    if (bdir !== null) {
        params["bdir"] = bdir;
    }
    if (ldir !== null) {
        params["ldir"] = ldir;
    }
    if (scriptsdir !== null) {
        params["scriptsdir"] = scriptsdir;
    }
    if (cflags !== null) {
        params["cflags"] = cflags;
    }
    if (bflags !== null) {
        params["bflags"] = bflags;
    }
    if (lflags !== null) {
        params["lflags"] = lflags;
    }
    if (pause !== null) {
        params["pause"] = pause;
    }
    if (max !== null) {
        params["max"] = max;
    }
    if (queue !== null) {
        params["queue"] = queue;
    }
    if (cmem !== null) {
        params["cmem"] = cmem;
    }
    if (bmem !== null) {
        params["bmem"] = bmem;
    }
    if (lmem !== null) {
        params["lmem"] = lmem;
    }
    if (cnodes !== null) {
        params["cnodes"] = cnodes;
    }
    if (bnodes !== null) {
        params["bnodes"] = bnodes;
    }
    if (lnodes !== null) {
        params["lnodes"] = lnodes;
    }
    return params;
}


function long_submit_jobs_cargs(
    params: LongSubmitJobsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("long_submit_jobs");
    cargs.push(
        "--qdec",
        execution.inputFile((params["qdec"] ?? null))
    );
    cargs.push(
        "--cdir",
        (params["cdir"] ?? null)
    );
    if ((params["bdir"] ?? null) !== null) {
        cargs.push(
            "--bdir",
            (params["bdir"] ?? null)
        );
    }
    if ((params["ldir"] ?? null) !== null) {
        cargs.push(
            "--ldir",
            (params["ldir"] ?? null)
        );
    }
    if ((params["scriptsdir"] ?? null) !== null) {
        cargs.push(
            "--scriptsdir",
            (params["scriptsdir"] ?? null)
        );
    }
    if ((params["cross"] ?? null)) {
        cargs.push("--cross");
    }
    if ((params["base"] ?? null)) {
        cargs.push("--base");
    }
    if ((params["long"] ?? null)) {
        cargs.push("--long");
    }
    if ((params["cflags"] ?? null) !== null) {
        cargs.push(
            "--cflags",
            (params["cflags"] ?? null)
        );
    }
    if ((params["bflags"] ?? null) !== null) {
        cargs.push(
            "--bflags",
            (params["bflags"] ?? null)
        );
    }
    if ((params["lflags"] ?? null) !== null) {
        cargs.push(
            "--lflags",
            (params["lflags"] ?? null)
        );
    }
    if ((params["affine"] ?? null)) {
        cargs.push("--affine");
    }
    if ((params["force"] ?? null)) {
        cargs.push("--force");
    }
    if ((params["simulate"] ?? null)) {
        cargs.push("--simulate");
    }
    if ((params["simfiles"] ?? null)) {
        cargs.push("--simfiles");
    }
    if ((params["check"] ?? null)) {
        cargs.push("--check");
    }
    if ((params["pause"] ?? null) !== null) {
        cargs.push(
            "--pause",
            String((params["pause"] ?? null))
        );
    }
    if ((params["max"] ?? null) !== null) {
        cargs.push(
            "--max",
            String((params["max"] ?? null))
        );
    }
    if ((params["queue"] ?? null) !== null) {
        cargs.push(
            "--queue",
            (params["queue"] ?? null)
        );
    }
    if ((params["cmem"] ?? null) !== null) {
        cargs.push(
            "--cmem",
            String((params["cmem"] ?? null))
        );
    }
    if ((params["bmem"] ?? null) !== null) {
        cargs.push(
            "--bmem",
            String((params["bmem"] ?? null))
        );
    }
    if ((params["lmem"] ?? null) !== null) {
        cargs.push(
            "--lmem",
            String((params["lmem"] ?? null))
        );
    }
    if ((params["cnodes"] ?? null) !== null) {
        cargs.push(
            "--cnodes",
            String((params["cnodes"] ?? null))
        );
    }
    if ((params["bnodes"] ?? null) !== null) {
        cargs.push(
            "--bnodes",
            String((params["bnodes"] ?? null))
        );
    }
    if ((params["lnodes"] ?? null) !== null) {
        cargs.push(
            "--lnodes",
            String((params["lnodes"] ?? null))
        );
    }
    return cargs;
}


function long_submit_jobs_outputs(
    params: LongSubmitJobsParameters,
    execution: Execution,
): LongSubmitJobsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LongSubmitJobsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function long_submit_jobs_execute(
    params: LongSubmitJobsParameters,
    execution: Execution,
): LongSubmitJobsOutputs {
    /**
     * Submits longitudinal processing jobs to the NMR cluster (seychelles or launchpad).
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LongSubmitJobsOutputs`).
     */
    params = execution.params(params)
    const cargs = long_submit_jobs_cargs(params, execution)
    const ret = long_submit_jobs_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function long_submit_jobs(
    qdec: InputPathType,
    cdir: string,
    bdir: string | null = null,
    ldir: string | null = null,
    scriptsdir: string | null = null,
    cross: boolean = false,
    base: boolean = false,
    long: boolean = false,
    cflags: string | null = null,
    bflags: string | null = null,
    lflags: string | null = null,
    affine: boolean = false,
    force: boolean = false,
    simulate: boolean = false,
    simfiles: boolean = false,
    check: boolean = false,
    pause: number | null = null,
    max: number | null = null,
    queue: string | null = null,
    cmem: number | null = null,
    bmem: number | null = null,
    lmem: number | null = null,
    cnodes: number | null = null,
    bnodes: number | null = null,
    lnodes: number | null = null,
    runner: Runner | null = null,
): LongSubmitJobsOutputs {
    /**
     * Submits longitudinal processing jobs to the NMR cluster (seychelles or launchpad).
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param qdec QDEC table file specifying the subjects and time points.
     * @param cdir Directory for cross-sectional subjects (inherited by base and long).
     * @param bdir Directory for base runs (default: inherit from cross).
     * @param ldir Directory for longitudinal runs (default: inherit from base).
     * @param scriptsdir Location to save submitted scripts (default: <cdir,bdir,ldir>/scripts_submitted).
     * @param cross Process cross-sectional streams.
     * @param base Process base streams.
     * @param long Process longitudinal streams.
     * @param cflags Manual flags for cross processing (e.g., '-all -cw256').
     * @param bflags Manual flags for base processing (default: '-all').
     * @param lflags Manual flags for long processing (default: '-all').
     * @param affine Use affine registration for base.
     * @param force Force reprocessing of jobs even if marked as done.
     * @param simulate Simulate submission only, without executing.
     * @param simfiles Simulate command file creation only, without executing.
     * @param check Check if all longitudinal processing is complete.
     * @param pause Pause duration (in seconds) between submissions (default: 13).
     * @param max Maximum number of jobs per user (default: 100).
     * @param queue Queue to submit jobs.
     * @param cmem RAM (in GB) requested for cross (default: 7).
     * @param bmem RAM (in GB) requested for base (default: 7).
     * @param lmem RAM (in GB) requested for long (default: 7).
     * @param cnodes Number of nodes for cross runs (default: 1).
     * @param bnodes Number of nodes for base runs (default: 1).
     * @param lnodes Number of nodes for long runs (default: 1).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LongSubmitJobsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LONG_SUBMIT_JOBS_METADATA);
    const params = long_submit_jobs_params(qdec, cdir, bdir, ldir, scriptsdir, cross, base, long, cflags, bflags, lflags, affine, force, simulate, simfiles, check, pause, max, queue, cmem, bmem, lmem, cnodes, bnodes, lnodes)
    return long_submit_jobs_execute(params, execution);
}


export {
      LONG_SUBMIT_JOBS_METADATA,
      LongSubmitJobsOutputs,
      LongSubmitJobsParameters,
      long_submit_jobs,
      long_submit_jobs_params,
};
