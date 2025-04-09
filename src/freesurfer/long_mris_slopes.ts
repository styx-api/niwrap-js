// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LONG_MRIS_SLOPES_METADATA: Metadata = {
    id: "903e6a1c3ac8764aca75012352e745ee5613437e.boutiques",
    name: "long_mris_slopes",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface LongMrisSlopesParameters {
    "__STYXTYPE__": "long_mris_slopes";
    "qdec": InputPathType;
    "meas": string;
    "hemi": string;
    "sd": string;
    "do_avg": boolean;
    "do_rate": boolean;
    "do_pc1fit": boolean;
    "do_pc1": boolean;
    "do_spc": boolean;
    "do_stack": boolean;
    "do_label": boolean;
    "qcache"?: string | null | undefined;
    "resid"?: string | null | undefined;
    "fwhm"?: string | null | undefined;
    "nosmooth": boolean;
    "time"?: string | null | undefined;
    "generic_time": boolean;
    "in_label"?: string | null | undefined;
    "jac": boolean;
    "name_avg"?: string | null | undefined;
    "name_rate"?: string | null | undefined;
    "name_pc1fit"?: string | null | undefined;
    "name_pc1"?: string | null | undefined;
    "name_spc"?: string | null | undefined;
    "name_resid"?: string | null | undefined;
    "out_stack"?: string | null | undefined;
    "out_label"?: string | null | undefined;
    "isec_labels"?: string | null | undefined;
    "stack_avg"?: string | null | undefined;
    "stack_rate"?: string | null | undefined;
    "stack_pc1fit"?: string | null | undefined;
    "stack_pc1"?: string | null | undefined;
    "stack_spc"?: string | null | undefined;
    "stack_resid"?: string | null | undefined;
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
        "long_mris_slopes": long_mris_slopes_cargs,
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
 * Output object returned when calling `long_mris_slopes(...)`.
 *
 * @interface
 */
interface LongMrisSlopesOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function long_mris_slopes_params(
    qdec: InputPathType,
    meas: string,
    hemi: string,
    sd: string,
    do_avg: boolean = false,
    do_rate: boolean = false,
    do_pc1fit: boolean = false,
    do_pc1: boolean = false,
    do_spc: boolean = false,
    do_stack: boolean = false,
    do_label: boolean = false,
    qcache: string | null = null,
    resid: string | null = null,
    fwhm: string | null = null,
    nosmooth: boolean = false,
    time: string | null = null,
    generic_time: boolean = false,
    in_label: string | null = null,
    jac: boolean = false,
    name_avg: string | null = null,
    name_rate: string | null = null,
    name_pc1fit: string | null = null,
    name_pc1: string | null = null,
    name_spc: string | null = null,
    name_resid: string | null = null,
    out_stack: string | null = null,
    out_label: string | null = null,
    isec_labels: string | null = null,
    stack_avg: string | null = null,
    stack_rate: string | null = null,
    stack_pc1fit: string | null = null,
    stack_pc1: string | null = null,
    stack_spc: string | null = null,
    stack_resid: string | null = null,
): LongMrisSlopesParameters {
    /**
     * Build parameters.
    
     * @param qdec (REQUIRED) QDEC table file specifying the subjects and time points
     * @param meas (REQUIRED) The surface input measure (e.g. thickness)
     * @param hemi (REQUIRED) Run one hemisphere: lh or rh or both
     * @param sd (REQUIRED) Full path to FreeSurfer subjects directory
     * @param do_avg Compute and output the temporal average
     * @param do_rate Compute and output the rate
     * @param do_pc1fit Compute and output the percent change (w.r.t. tp1 from linear fit)
     * @param do_pc1 Compute and output the percent change (w.r.t. tp1)
     * @param do_spc Compute and output the symmetrized percent change (w.r.t. temporal average)
     * @param do_stack Save the stacked within subject file (time series)
     * @param do_label Compute and output intersected cortex label
     * @param qcache Create cache for QDEC (resample to subject <QCACHE>, e.g. fsaverage)
     * @param resid Residual time point (pass 1 for tp1 etc., pass 0 for average) to export
     * @param fwhm Smoothing at specific FWHM (required for percent change)
     * @param nosmooth Do not smooth the data
     * @param time Variable name for time column variable (e.g. age) in QDEC table
     * @param generic_time Time points are ordered in QDEC file, assume time=1,2,3...
     * @param in_label Use pre-existing label for smoothing and to mask the output
     * @param jac Use this flag when mapping area or volume maps to correct Jacobian
     * @param name_avg Filename (without hemi ?h) to store temporal average
     * @param name_rate Filename (without hemi ?h) to store rate
     * @param name_pc1fit Filename (without hemi ?h) to store percent change fit
     * @param name_pc1 Filename (without hemi ?h) to store percent change
     * @param name_spc Filename (without hemi ?h) to store symmetrized percent change
     * @param name_resid Filename (without hemi ?h) to store residual
     * @param out_stack Filename to store stacked measure file
     * @param out_label Filename to store within-subject intersected cortex labels
     * @param isec_labels Intersect labels on <qtarget> (usually cortex labels)
     * @param stack_avg Output stacked avg maps on <qtarget>
     * @param stack_rate Output stacked rate maps on <qtarget>
     * @param stack_pc1fit Output stacked PC1FIT maps on <qtarget>
     * @param stack_pc1 Output stacked PC1 maps on <qtarget>
     * @param stack_spc Output stacked SPC maps on <qtarget>
     * @param stack_resid Output stacked residual maps on <qtarget>
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "long_mris_slopes" as const,
        "qdec": qdec,
        "meas": meas,
        "hemi": hemi,
        "sd": sd,
        "do_avg": do_avg,
        "do_rate": do_rate,
        "do_pc1fit": do_pc1fit,
        "do_pc1": do_pc1,
        "do_spc": do_spc,
        "do_stack": do_stack,
        "do_label": do_label,
        "nosmooth": nosmooth,
        "generic_time": generic_time,
        "jac": jac,
    };
    if (qcache !== null) {
        params["qcache"] = qcache;
    }
    if (resid !== null) {
        params["resid"] = resid;
    }
    if (fwhm !== null) {
        params["fwhm"] = fwhm;
    }
    if (time !== null) {
        params["time"] = time;
    }
    if (in_label !== null) {
        params["in_label"] = in_label;
    }
    if (name_avg !== null) {
        params["name_avg"] = name_avg;
    }
    if (name_rate !== null) {
        params["name_rate"] = name_rate;
    }
    if (name_pc1fit !== null) {
        params["name_pc1fit"] = name_pc1fit;
    }
    if (name_pc1 !== null) {
        params["name_pc1"] = name_pc1;
    }
    if (name_spc !== null) {
        params["name_spc"] = name_spc;
    }
    if (name_resid !== null) {
        params["name_resid"] = name_resid;
    }
    if (out_stack !== null) {
        params["out_stack"] = out_stack;
    }
    if (out_label !== null) {
        params["out_label"] = out_label;
    }
    if (isec_labels !== null) {
        params["isec_labels"] = isec_labels;
    }
    if (stack_avg !== null) {
        params["stack_avg"] = stack_avg;
    }
    if (stack_rate !== null) {
        params["stack_rate"] = stack_rate;
    }
    if (stack_pc1fit !== null) {
        params["stack_pc1fit"] = stack_pc1fit;
    }
    if (stack_pc1 !== null) {
        params["stack_pc1"] = stack_pc1;
    }
    if (stack_spc !== null) {
        params["stack_spc"] = stack_spc;
    }
    if (stack_resid !== null) {
        params["stack_resid"] = stack_resid;
    }
    return params;
}


function long_mris_slopes_cargs(
    params: LongMrisSlopesParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("long_mris_slopes");
    cargs.push(
        "--qdec",
        execution.inputFile((params["qdec"] ?? null))
    );
    cargs.push(
        "--meas",
        (params["meas"] ?? null)
    );
    cargs.push(
        "--hemi",
        (params["hemi"] ?? null)
    );
    cargs.push(
        "--sd",
        (params["sd"] ?? null)
    );
    if ((params["do_avg"] ?? null)) {
        cargs.push("--do-avg");
    }
    if ((params["do_rate"] ?? null)) {
        cargs.push("--do-rate");
    }
    if ((params["do_pc1fit"] ?? null)) {
        cargs.push("--do-pc1fit");
    }
    if ((params["do_pc1"] ?? null)) {
        cargs.push("--do-pc1");
    }
    if ((params["do_spc"] ?? null)) {
        cargs.push("--do-spc");
    }
    if ((params["do_stack"] ?? null)) {
        cargs.push("--do-stack");
    }
    if ((params["do_label"] ?? null)) {
        cargs.push("--do-label");
    }
    if ((params["qcache"] ?? null) !== null) {
        cargs.push(
            "--qcache",
            (params["qcache"] ?? null)
        );
    }
    if ((params["resid"] ?? null) !== null) {
        cargs.push(
            "--resid",
            (params["resid"] ?? null)
        );
    }
    if ((params["fwhm"] ?? null) !== null) {
        cargs.push(
            "--fwhm",
            (params["fwhm"] ?? null)
        );
    }
    if ((params["nosmooth"] ?? null)) {
        cargs.push("--nosmooth");
    }
    if ((params["time"] ?? null) !== null) {
        cargs.push(
            "--time",
            (params["time"] ?? null)
        );
    }
    if ((params["generic_time"] ?? null)) {
        cargs.push("--generic-time");
    }
    if ((params["in_label"] ?? null) !== null) {
        cargs.push(
            "--in-label",
            (params["in_label"] ?? null)
        );
    }
    if ((params["jac"] ?? null)) {
        cargs.push("--jac");
    }
    if ((params["name_avg"] ?? null) !== null) {
        cargs.push(
            "--name-avg",
            (params["name_avg"] ?? null)
        );
    }
    if ((params["name_rate"] ?? null) !== null) {
        cargs.push(
            "--name-rate",
            (params["name_rate"] ?? null)
        );
    }
    if ((params["name_pc1fit"] ?? null) !== null) {
        cargs.push(
            "--name-pc1fit",
            (params["name_pc1fit"] ?? null)
        );
    }
    if ((params["name_pc1"] ?? null) !== null) {
        cargs.push(
            "--name-pc1",
            (params["name_pc1"] ?? null)
        );
    }
    if ((params["name_spc"] ?? null) !== null) {
        cargs.push(
            "--name-spc",
            (params["name_spc"] ?? null)
        );
    }
    if ((params["name_resid"] ?? null) !== null) {
        cargs.push(
            "--name-resid",
            (params["name_resid"] ?? null)
        );
    }
    if ((params["out_stack"] ?? null) !== null) {
        cargs.push(
            "--out-stack",
            (params["out_stack"] ?? null)
        );
    }
    if ((params["out_label"] ?? null) !== null) {
        cargs.push(
            "--out-label",
            (params["out_label"] ?? null)
        );
    }
    if ((params["isec_labels"] ?? null) !== null) {
        cargs.push(
            "--isec-labels",
            (params["isec_labels"] ?? null)
        );
    }
    if ((params["stack_avg"] ?? null) !== null) {
        cargs.push(
            "--stack-avg",
            (params["stack_avg"] ?? null)
        );
    }
    if ((params["stack_rate"] ?? null) !== null) {
        cargs.push(
            "--stack-rate",
            (params["stack_rate"] ?? null)
        );
    }
    if ((params["stack_pc1fit"] ?? null) !== null) {
        cargs.push(
            "--stack-pc1fit",
            (params["stack_pc1fit"] ?? null)
        );
    }
    if ((params["stack_pc1"] ?? null) !== null) {
        cargs.push(
            "--stack-pc1",
            (params["stack_pc1"] ?? null)
        );
    }
    if ((params["stack_spc"] ?? null) !== null) {
        cargs.push(
            "--stack-spc",
            (params["stack_spc"] ?? null)
        );
    }
    if ((params["stack_resid"] ?? null) !== null) {
        cargs.push(
            "--stack-resid",
            (params["stack_resid"] ?? null)
        );
    }
    return cargs;
}


function long_mris_slopes_outputs(
    params: LongMrisSlopesParameters,
    execution: Execution,
): LongMrisSlopesOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LongMrisSlopesOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function long_mris_slopes_execute(
    params: LongMrisSlopesParameters,
    execution: Execution,
): LongMrisSlopesOutputs {
    /**
     * Computes slope maps (e.g., of thickness) in a longitudinal study using FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LongMrisSlopesOutputs`).
     */
    params = execution.params(params)
    const cargs = long_mris_slopes_cargs(params, execution)
    const ret = long_mris_slopes_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function long_mris_slopes(
    qdec: InputPathType,
    meas: string,
    hemi: string,
    sd: string,
    do_avg: boolean = false,
    do_rate: boolean = false,
    do_pc1fit: boolean = false,
    do_pc1: boolean = false,
    do_spc: boolean = false,
    do_stack: boolean = false,
    do_label: boolean = false,
    qcache: string | null = null,
    resid: string | null = null,
    fwhm: string | null = null,
    nosmooth: boolean = false,
    time: string | null = null,
    generic_time: boolean = false,
    in_label: string | null = null,
    jac: boolean = false,
    name_avg: string | null = null,
    name_rate: string | null = null,
    name_pc1fit: string | null = null,
    name_pc1: string | null = null,
    name_spc: string | null = null,
    name_resid: string | null = null,
    out_stack: string | null = null,
    out_label: string | null = null,
    isec_labels: string | null = null,
    stack_avg: string | null = null,
    stack_rate: string | null = null,
    stack_pc1fit: string | null = null,
    stack_pc1: string | null = null,
    stack_spc: string | null = null,
    stack_resid: string | null = null,
    runner: Runner | null = null,
): LongMrisSlopesOutputs {
    /**
     * Computes slope maps (e.g., of thickness) in a longitudinal study using FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param qdec (REQUIRED) QDEC table file specifying the subjects and time points
     * @param meas (REQUIRED) The surface input measure (e.g. thickness)
     * @param hemi (REQUIRED) Run one hemisphere: lh or rh or both
     * @param sd (REQUIRED) Full path to FreeSurfer subjects directory
     * @param do_avg Compute and output the temporal average
     * @param do_rate Compute and output the rate
     * @param do_pc1fit Compute and output the percent change (w.r.t. tp1 from linear fit)
     * @param do_pc1 Compute and output the percent change (w.r.t. tp1)
     * @param do_spc Compute and output the symmetrized percent change (w.r.t. temporal average)
     * @param do_stack Save the stacked within subject file (time series)
     * @param do_label Compute and output intersected cortex label
     * @param qcache Create cache for QDEC (resample to subject <QCACHE>, e.g. fsaverage)
     * @param resid Residual time point (pass 1 for tp1 etc., pass 0 for average) to export
     * @param fwhm Smoothing at specific FWHM (required for percent change)
     * @param nosmooth Do not smooth the data
     * @param time Variable name for time column variable (e.g. age) in QDEC table
     * @param generic_time Time points are ordered in QDEC file, assume time=1,2,3...
     * @param in_label Use pre-existing label for smoothing and to mask the output
     * @param jac Use this flag when mapping area or volume maps to correct Jacobian
     * @param name_avg Filename (without hemi ?h) to store temporal average
     * @param name_rate Filename (without hemi ?h) to store rate
     * @param name_pc1fit Filename (without hemi ?h) to store percent change fit
     * @param name_pc1 Filename (without hemi ?h) to store percent change
     * @param name_spc Filename (without hemi ?h) to store symmetrized percent change
     * @param name_resid Filename (without hemi ?h) to store residual
     * @param out_stack Filename to store stacked measure file
     * @param out_label Filename to store within-subject intersected cortex labels
     * @param isec_labels Intersect labels on <qtarget> (usually cortex labels)
     * @param stack_avg Output stacked avg maps on <qtarget>
     * @param stack_rate Output stacked rate maps on <qtarget>
     * @param stack_pc1fit Output stacked PC1FIT maps on <qtarget>
     * @param stack_pc1 Output stacked PC1 maps on <qtarget>
     * @param stack_spc Output stacked SPC maps on <qtarget>
     * @param stack_resid Output stacked residual maps on <qtarget>
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LongMrisSlopesOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LONG_MRIS_SLOPES_METADATA);
    const params = long_mris_slopes_params(qdec, meas, hemi, sd, do_avg, do_rate, do_pc1fit, do_pc1, do_spc, do_stack, do_label, qcache, resid, fwhm, nosmooth, time, generic_time, in_label, jac, name_avg, name_rate, name_pc1fit, name_pc1, name_spc, name_resid, out_stack, out_label, isec_labels, stack_avg, stack_rate, stack_pc1fit, stack_pc1, stack_spc, stack_resid)
    return long_mris_slopes_execute(params, execution);
}


export {
      LONG_MRIS_SLOPES_METADATA,
      LongMrisSlopesOutputs,
      LongMrisSlopesParameters,
      long_mris_slopes,
      long_mris_slopes_params,
};
