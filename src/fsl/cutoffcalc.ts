// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CUTOFFCALC_METADATA: Metadata = {
    id: "f17af78bd794a8daf34d3e8b451ed1c30a497ea8.boutiques",
    name: "cutoffcalc",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface CutoffcalcParameters {
    "__STYXTYPE__": "cutoffcalc";
    "input_design": InputPathType;
    "threshold"?: number | null | undefined;
    "tr"?: number | null | undefined;
    "lower_limit"?: number | null | undefined;
    "example_sigma"?: number | null | undefined;
    "verbose_flag": boolean;
    "debug_flag": boolean;
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
        "cutoffcalc": cutoffcalc_cargs,
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
        "cutoffcalc": cutoffcalc_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `cutoffcalc(...)`.
 *
 * @interface
 */
interface CutoffcalcOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Filtered output file if example sigma is provided
     */
    example_output: OutputPathType;
}


function cutoffcalc_params(
    input_design: InputPathType,
    threshold: number | null = 0.9,
    tr: number | null = 3.0,
    lower_limit: number | null = 90.0,
    example_sigma: number | null = null,
    verbose_flag: boolean = false,
    debug_flag: boolean = false,
): CutoffcalcParameters {
    /**
     * Build parameters.
    
     * @param input_design Input design matrix (e.g. design.mat)
     * @param threshold Threshold for retained variance (default=0.9)
     * @param tr Time between successive data points (default=3.0s)
     * @param lower_limit Lower limit on period due to autocorr estimation (default=90s)
     * @param example_sigma Example sigma (in sec) to produce output called example_filt.mtx
     * @param verbose_flag Switch on diagnostic messages
     * @param debug_flag Switch on debugging messages
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cutoffcalc" as const,
        "input_design": input_design,
        "verbose_flag": verbose_flag,
        "debug_flag": debug_flag,
    };
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (tr !== null) {
        params["tr"] = tr;
    }
    if (lower_limit !== null) {
        params["lower_limit"] = lower_limit;
    }
    if (example_sigma !== null) {
        params["example_sigma"] = example_sigma;
    }
    return params;
}


function cutoffcalc_cargs(
    params: CutoffcalcParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("cutoffcalc");
    cargs.push(["-i ", execution.inputFile((params["input_design"] ?? null))].join(''));
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(["-t ", String((params["threshold"] ?? null))].join(''));
    }
    if ((params["tr"] ?? null) !== null) {
        cargs.push(["--tr ", String((params["tr"] ?? null))].join(''));
    }
    if ((params["lower_limit"] ?? null) !== null) {
        cargs.push(["--limit ", String((params["lower_limit"] ?? null))].join(''));
    }
    if ((params["example_sigma"] ?? null) !== null) {
        cargs.push(["--example_sig ", String((params["example_sigma"] ?? null))].join(''));
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("--debug");
    }
    return cargs;
}


function cutoffcalc_outputs(
    params: CutoffcalcParameters,
    execution: Execution,
): CutoffcalcOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CutoffcalcOutputs = {
        root: execution.outputFile("."),
        example_output: execution.outputFile(["example_filt.mtx"].join('')),
    };
    return ret;
}


function cutoffcalc_execute(
    params: CutoffcalcParameters,
    execution: Execution,
): CutoffcalcOutputs {
    /**
     * Calculates the minimal period for the highpass filter that still preserves a specified amount of variance in all the design matrix regressors.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CutoffcalcOutputs`).
     */
    params = execution.params(params)
    const cargs = cutoffcalc_cargs(params, execution)
    const ret = cutoffcalc_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cutoffcalc(
    input_design: InputPathType,
    threshold: number | null = 0.9,
    tr: number | null = 3.0,
    lower_limit: number | null = 90.0,
    example_sigma: number | null = null,
    verbose_flag: boolean = false,
    debug_flag: boolean = false,
    runner: Runner | null = null,
): CutoffcalcOutputs {
    /**
     * Calculates the minimal period for the highpass filter that still preserves a specified amount of variance in all the design matrix regressors.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_design Input design matrix (e.g. design.mat)
     * @param threshold Threshold for retained variance (default=0.9)
     * @param tr Time between successive data points (default=3.0s)
     * @param lower_limit Lower limit on period due to autocorr estimation (default=90s)
     * @param example_sigma Example sigma (in sec) to produce output called example_filt.mtx
     * @param verbose_flag Switch on diagnostic messages
     * @param debug_flag Switch on debugging messages
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CutoffcalcOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CUTOFFCALC_METADATA);
    const params = cutoffcalc_params(input_design, threshold, tr, lower_limit, example_sigma, verbose_flag, debug_flag)
    return cutoffcalc_execute(params, execution);
}


export {
      CUTOFFCALC_METADATA,
      CutoffcalcOutputs,
      CutoffcalcParameters,
      cutoffcalc,
      cutoffcalc_params,
};
