// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const OPTSEQ2_METADATA: Metadata = {
    id: "7c0799dd0a1ffd018ca41b11e7c2ba518f9578e8.boutiques",
    name: "optseq2",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Optseq2Parameters {
    "__STYXTYPE__": "optseq2";
    "ntp": number;
    "tr": number;
    "tprescan": number;
    "psdwin": Array<number>;
    "event"?: Array<string> | null | undefined;
    "repvar"?: string | null | undefined;
    "polyfit"?: number | null | undefined;
    "tnullmin"?: number | null | undefined;
    "tnullmax"?: number | null | undefined;
    "nsearch"?: number | null | undefined;
    "tsearch"?: number | null | undefined;
    "first_order_cb"?: number | null | undefined;
    "ar1"?: number | null | undefined;
    "penalize"?: Array<number> | null | undefined;
    "evc"?: Array<number> | null | undefined;
    "cmtx"?: InputPathType | null | undefined;
    "cost"?: string | null | undefined;
    "sumdelays": boolean;
    "seed"?: number | null | undefined;
    "nkeep"?: number | null | undefined;
    "outstem"?: string | null | undefined;
    "mtxstem"?: string | null | undefined;
    "cmtxfile"?: string | null | undefined;
    "summaryfile"?: string | null | undefined;
    "logfile"?: string | null | undefined;
    "pctupdate"?: number | null | undefined;
    "sviterfile"?: string | null | undefined;
    "instem"?: string | null | undefined;
    "input_schedule"?: Array<string> | null | undefined;
    "nosearch": boolean;
    "help": boolean;
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
        "optseq2": optseq2_cargs,
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
        "optseq2": optseq2_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `optseq2(...)`.
 *
 * @interface
 */
interface Optseq2Outputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output schedules
     */
    output_schedules: OutputPathType | null;
    /**
     * Output FIR design matrices
     */
    output_design_matrices: OutputPathType | null;
    /**
     * Output contrast matrix
     */
    output_contrast_matrix: OutputPathType | null;
    /**
     * Output search summary
     */
    output_summary: OutputPathType | null;
    /**
     * Output log file
     */
    output_log: OutputPathType | null;
    /**
     * Output per-iteration information
     */
    output_sviter: OutputPathType | null;
}


function optseq2_params(
    ntp: number,
    tr: number,
    tprescan: number,
    psdwin: Array<number>,
    event: Array<string> | null = null,
    repvar: string | null = null,
    polyfit: number | null = null,
    tnullmin: number | null = null,
    tnullmax: number | null = null,
    nsearch: number | null = null,
    tsearch: number | null = null,
    first_order_cb: number | null = null,
    ar1: number | null = null,
    penalize: Array<number> | null = null,
    evc: Array<number> | null = null,
    cmtx: InputPathType | null = null,
    cost: string | null = null,
    sumdelays: boolean = false,
    seed: number | null = null,
    nkeep: number | null = null,
    outstem: string | null = null,
    mtxstem: string | null = null,
    cmtxfile: string | null = null,
    summaryfile: string | null = null,
    logfile: string | null = null,
    pctupdate: number | null = null,
    sviterfile: string | null = null,
    instem: string | null = null,
    input_schedule: Array<string> | null = null,
    nosearch: boolean = false,
    help: boolean = false,
    version: boolean = false,
): Optseq2Parameters {
    /**
     * Build parameters.
    
     * @param ntp Number of time points to be acquired during the scan.
     * @param tr Temporal resolution of acquisition in seconds.
     * @param tprescan Start events t seconds before first acquisition.
     * @param psdwin Post-stimulus window specifications: minimum PSD, maximum PSD, and optional dPSD.
     * @param event Event type specification with label, duration, and number of repetitions.
     * @param repvar Allow number of repetitions of event types to vary by percentage, optionally per event.
     * @param polyfit Add polynomial regressors as nuisance variables of specified order.
     * @param tnullmin Minimum duration of null time between stimuli in seconds.
     * @param tnullmax Maximum duration of null time between stimuli in seconds.
     * @param nsearch Search over a specified number of iterations for schedules.
     * @param tsearch Search for schedules over a specified number of hours.
     * @param first_order_cb Pre-optimize first order counter-balancing.
     * @param ar1 Optimize assuming whitening with AR1 parameter
     * @param penalize Penalize for presentations being too close with parameters alpha, T, and dtmin.
     * @param evc Contrast of event types with weights.
     * @param cmtx Load contrast from ASCII matrix file.
     * @param cost Specify cost function and its parameters.
     * @param sumdelays Sum delays when forming contrast matrix.
     * @param seed Initialize random number generator with seed value.
     * @param nkeep Number of best schedules to keep.
     * @param outstem Output stem for saved schedules.
     * @param mtxstem Output stem for saved design matrices.
     * @param cmtxfile File for saving contrast matrix.
     * @param summaryfile File for saving search summary.
     * @param logfile File for saving log information.
     * @param pctupdate Percentage interval after which progress is logged.
     * @param sviterfile File to save information from each iteration.
     * @param instem Initialize with input schedules that match instem-RRR.par.
     * @param input_schedule Input schedule files.
     * @param nosearch Do not perform search for optimal schedules.
     * @param help Print help page.
     * @param version Print version string.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "optseq2" as const,
        "ntp": ntp,
        "tr": tr,
        "tprescan": tprescan,
        "psdwin": psdwin,
        "sumdelays": sumdelays,
        "nosearch": nosearch,
        "help": help,
        "version": version,
    };
    if (event !== null) {
        params["event"] = event;
    }
    if (repvar !== null) {
        params["repvar"] = repvar;
    }
    if (polyfit !== null) {
        params["polyfit"] = polyfit;
    }
    if (tnullmin !== null) {
        params["tnullmin"] = tnullmin;
    }
    if (tnullmax !== null) {
        params["tnullmax"] = tnullmax;
    }
    if (nsearch !== null) {
        params["nsearch"] = nsearch;
    }
    if (tsearch !== null) {
        params["tsearch"] = tsearch;
    }
    if (first_order_cb !== null) {
        params["first_order_cb"] = first_order_cb;
    }
    if (ar1 !== null) {
        params["ar1"] = ar1;
    }
    if (penalize !== null) {
        params["penalize"] = penalize;
    }
    if (evc !== null) {
        params["evc"] = evc;
    }
    if (cmtx !== null) {
        params["cmtx"] = cmtx;
    }
    if (cost !== null) {
        params["cost"] = cost;
    }
    if (seed !== null) {
        params["seed"] = seed;
    }
    if (nkeep !== null) {
        params["nkeep"] = nkeep;
    }
    if (outstem !== null) {
        params["outstem"] = outstem;
    }
    if (mtxstem !== null) {
        params["mtxstem"] = mtxstem;
    }
    if (cmtxfile !== null) {
        params["cmtxfile"] = cmtxfile;
    }
    if (summaryfile !== null) {
        params["summaryfile"] = summaryfile;
    }
    if (logfile !== null) {
        params["logfile"] = logfile;
    }
    if (pctupdate !== null) {
        params["pctupdate"] = pctupdate;
    }
    if (sviterfile !== null) {
        params["sviterfile"] = sviterfile;
    }
    if (instem !== null) {
        params["instem"] = instem;
    }
    if (input_schedule !== null) {
        params["input_schedule"] = input_schedule;
    }
    return params;
}


function optseq2_cargs(
    params: Optseq2Parameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("optseq2");
    cargs.push(
        "--ntp",
        String((params["ntp"] ?? null))
    );
    cargs.push(
        "--tr",
        String((params["tr"] ?? null))
    );
    cargs.push(
        "--tprescan",
        String((params["tprescan"] ?? null))
    );
    cargs.push(
        "--psdwin",
        ...(params["psdwin"] ?? null).map(String)
    );
    if ((params["event"] ?? null) !== null) {
        cargs.push(
            "--ev",
            ...(params["event"] ?? null)
        );
    }
    if ((params["repvar"] ?? null) !== null) {
        cargs.push(
            "--repvar",
            (params["repvar"] ?? null)
        );
    }
    if ((params["polyfit"] ?? null) !== null) {
        cargs.push(
            "--polyfit",
            String((params["polyfit"] ?? null))
        );
    }
    if ((params["tnullmin"] ?? null) !== null) {
        cargs.push(
            "--tnullmin",
            String((params["tnullmin"] ?? null))
        );
    }
    if ((params["tnullmax"] ?? null) !== null) {
        cargs.push(
            "--tnullmax",
            String((params["tnullmax"] ?? null))
        );
    }
    if ((params["nsearch"] ?? null) !== null) {
        cargs.push(
            "--nsearch",
            String((params["nsearch"] ?? null))
        );
    }
    if ((params["tsearch"] ?? null) !== null) {
        cargs.push(
            "--tsearch",
            String((params["tsearch"] ?? null))
        );
    }
    if ((params["first_order_cb"] ?? null) !== null) {
        cargs.push(
            "--focb",
            String((params["first_order_cb"] ?? null))
        );
    }
    if ((params["ar1"] ?? null) !== null) {
        cargs.push(
            "--ar1",
            String((params["ar1"] ?? null))
        );
    }
    if ((params["penalize"] ?? null) !== null) {
        cargs.push(
            "--pen",
            ...(params["penalize"] ?? null).map(String)
        );
    }
    if ((params["evc"] ?? null) !== null) {
        cargs.push(
            "--evc",
            ...(params["evc"] ?? null).map(String)
        );
    }
    if ((params["cmtx"] ?? null) !== null) {
        cargs.push(
            "--C",
            execution.inputFile((params["cmtx"] ?? null))
        );
    }
    if ((params["cost"] ?? null) !== null) {
        cargs.push(
            "--cost",
            (params["cost"] ?? null)
        );
    }
    if ((params["sumdelays"] ?? null)) {
        cargs.push("--sumdelays");
    }
    if ((params["seed"] ?? null) !== null) {
        cargs.push(
            "--seed",
            String((params["seed"] ?? null))
        );
    }
    if ((params["nkeep"] ?? null) !== null) {
        cargs.push(
            "--nkeep",
            String((params["nkeep"] ?? null))
        );
    }
    if ((params["outstem"] ?? null) !== null) {
        cargs.push(
            "--o",
            (params["outstem"] ?? null)
        );
    }
    if ((params["mtxstem"] ?? null) !== null) {
        cargs.push(
            "--mtx",
            (params["mtxstem"] ?? null)
        );
    }
    if ((params["cmtxfile"] ?? null) !== null) {
        cargs.push(
            "--cmtx",
            (params["cmtxfile"] ?? null)
        );
    }
    if ((params["summaryfile"] ?? null) !== null) {
        cargs.push(
            "--sum",
            (params["summaryfile"] ?? null)
        );
    }
    if ((params["logfile"] ?? null) !== null) {
        cargs.push(
            "--log",
            (params["logfile"] ?? null)
        );
    }
    if ((params["pctupdate"] ?? null) !== null) {
        cargs.push(
            "--pctupdate",
            String((params["pctupdate"] ?? null))
        );
    }
    if ((params["sviterfile"] ?? null) !== null) {
        cargs.push(
            "--sviter",
            (params["sviterfile"] ?? null)
        );
    }
    if ((params["instem"] ?? null) !== null) {
        cargs.push(
            "--i",
            (params["instem"] ?? null)
        );
    }
    if ((params["input_schedule"] ?? null) !== null) {
        cargs.push(
            "--in",
            ...(params["input_schedule"] ?? null)
        );
    }
    if ((params["nosearch"] ?? null)) {
        cargs.push("--nosearch");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    return cargs;
}


function optseq2_outputs(
    params: Optseq2Parameters,
    execution: Execution,
): Optseq2Outputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Optseq2Outputs = {
        root: execution.outputFile("."),
        output_schedules: ((params["outstem"] ?? null) !== null) ? execution.outputFile([(params["outstem"] ?? null), "-RRR.par"].join('')) : null,
        output_design_matrices: ((params["mtxstem"] ?? null) !== null) ? execution.outputFile([(params["mtxstem"] ?? null), "_RRR.mat"].join('')) : null,
        output_contrast_matrix: ((params["cmtxfile"] ?? null) !== null) ? execution.outputFile([(params["cmtxfile"] ?? null)].join('')) : null,
        output_summary: ((params["summaryfile"] ?? null) !== null) ? execution.outputFile([(params["summaryfile"] ?? null)].join('')) : null,
        output_log: ((params["logfile"] ?? null) !== null) ? execution.outputFile([(params["logfile"] ?? null)].join('')) : null,
        output_sviter: ((params["sviterfile"] ?? null) !== null) ? execution.outputFile([(params["sviterfile"] ?? null)].join('')) : null,
    };
    return ret;
}


function optseq2_execute(
    params: Optseq2Parameters,
    execution: Execution,
): Optseq2Outputs {
    /**
     * Optseq2 is a tool for automatically scheduling events for rapid-presentation event-related (RPER) fMRI experiments.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Optseq2Outputs`).
     */
    params = execution.params(params)
    const cargs = optseq2_cargs(params, execution)
    const ret = optseq2_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function optseq2(
    ntp: number,
    tr: number,
    tprescan: number,
    psdwin: Array<number>,
    event: Array<string> | null = null,
    repvar: string | null = null,
    polyfit: number | null = null,
    tnullmin: number | null = null,
    tnullmax: number | null = null,
    nsearch: number | null = null,
    tsearch: number | null = null,
    first_order_cb: number | null = null,
    ar1: number | null = null,
    penalize: Array<number> | null = null,
    evc: Array<number> | null = null,
    cmtx: InputPathType | null = null,
    cost: string | null = null,
    sumdelays: boolean = false,
    seed: number | null = null,
    nkeep: number | null = null,
    outstem: string | null = null,
    mtxstem: string | null = null,
    cmtxfile: string | null = null,
    summaryfile: string | null = null,
    logfile: string | null = null,
    pctupdate: number | null = null,
    sviterfile: string | null = null,
    instem: string | null = null,
    input_schedule: Array<string> | null = null,
    nosearch: boolean = false,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): Optseq2Outputs {
    /**
     * Optseq2 is a tool for automatically scheduling events for rapid-presentation event-related (RPER) fMRI experiments.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param ntp Number of time points to be acquired during the scan.
     * @param tr Temporal resolution of acquisition in seconds.
     * @param tprescan Start events t seconds before first acquisition.
     * @param psdwin Post-stimulus window specifications: minimum PSD, maximum PSD, and optional dPSD.
     * @param event Event type specification with label, duration, and number of repetitions.
     * @param repvar Allow number of repetitions of event types to vary by percentage, optionally per event.
     * @param polyfit Add polynomial regressors as nuisance variables of specified order.
     * @param tnullmin Minimum duration of null time between stimuli in seconds.
     * @param tnullmax Maximum duration of null time between stimuli in seconds.
     * @param nsearch Search over a specified number of iterations for schedules.
     * @param tsearch Search for schedules over a specified number of hours.
     * @param first_order_cb Pre-optimize first order counter-balancing.
     * @param ar1 Optimize assuming whitening with AR1 parameter
     * @param penalize Penalize for presentations being too close with parameters alpha, T, and dtmin.
     * @param evc Contrast of event types with weights.
     * @param cmtx Load contrast from ASCII matrix file.
     * @param cost Specify cost function and its parameters.
     * @param sumdelays Sum delays when forming contrast matrix.
     * @param seed Initialize random number generator with seed value.
     * @param nkeep Number of best schedules to keep.
     * @param outstem Output stem for saved schedules.
     * @param mtxstem Output stem for saved design matrices.
     * @param cmtxfile File for saving contrast matrix.
     * @param summaryfile File for saving search summary.
     * @param logfile File for saving log information.
     * @param pctupdate Percentage interval after which progress is logged.
     * @param sviterfile File to save information from each iteration.
     * @param instem Initialize with input schedules that match instem-RRR.par.
     * @param input_schedule Input schedule files.
     * @param nosearch Do not perform search for optimal schedules.
     * @param help Print help page.
     * @param version Print version string.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Optseq2Outputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(OPTSEQ2_METADATA);
    const params = optseq2_params(ntp, tr, tprescan, psdwin, event, repvar, polyfit, tnullmin, tnullmax, nsearch, tsearch, first_order_cb, ar1, penalize, evc, cmtx, cost, sumdelays, seed, nkeep, outstem, mtxstem, cmtxfile, summaryfile, logfile, pctupdate, sviterfile, instem, input_schedule, nosearch, help, version)
    return optseq2_execute(params, execution);
}


export {
      OPTSEQ2_METADATA,
      Optseq2Outputs,
      Optseq2Parameters,
      optseq2,
      optseq2_params,
};
