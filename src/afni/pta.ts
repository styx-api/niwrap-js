// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const PTA_METADATA: Metadata = {
    id: "d6f381ad3d83e22142bf2f95cc5bcacf92678029.boutiques",
    name: "PTA",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface PtaParameters {
    "__STYXTYPE__": "PTA";
    "prefix": string;
    "input_file": InputPathType;
    "model_formula": string;
    "vt_formulation"?: string | null | undefined;
    "prediction_table"?: InputPathType | null | undefined;
    "verbosity_level"?: number | null | undefined;
    "response_var"?: string | null | undefined;
    "dbg_args": boolean;
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
        "PTA": pta_cargs,
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
        "PTA": pta_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `pta(...)`.
 *
 * @interface
 */
interface PtaOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Statistical evidence output of PTA
     */
    stat_output: OutputPathType;
    /**
     * Predicted values and their standard errors
     */
    prediction_output: OutputPathType;
}


function pta_params(
    prefix: string,
    input_file: InputPathType,
    model_formula: string,
    vt_formulation: string | null = null,
    prediction_table: InputPathType | null = null,
    verbosity_level: number | null = null,
    response_var: string | null = null,
    dbg_args: boolean = false,
): PtaParameters {
    /**
     * Build parameters.
    
     * @param prefix Prefix for output files
     * @param input_file Input data file in table format (data frame structure of long format in R)
     * @param model_formula Model formulation through multilevel smoothing splines
     * @param vt_formulation Specify varying smoothing terms. Two components are required: the first one 'var' indicates the variable (e.g., subject) around which the smoothing will vary while the second component specifies the smoothing formulation (e.g., s(age,subject)).
     * @param prediction_table Data table to generate predicted values for graphical illustration
     * @param verbosity_level Verbosity level (0 for quiet, 1 or more for talkative)
     * @param response_var Column name designated as the response/outcome variable (default is 'Y')
     * @param dbg_args Enable R to save parameters for debugging
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "PTA" as const,
        "prefix": prefix,
        "input_file": input_file,
        "model_formula": model_formula,
        "dbg_args": dbg_args,
    };
    if (vt_formulation !== null) {
        params["vt_formulation"] = vt_formulation;
    }
    if (prediction_table !== null) {
        params["prediction_table"] = prediction_table;
    }
    if (verbosity_level !== null) {
        params["verbosity_level"] = verbosity_level;
    }
    if (response_var !== null) {
        params["response_var"] = response_var;
    }
    return params;
}


function pta_cargs(
    params: PtaParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("PTA");
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    cargs.push(
        "-input",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "-model",
        (params["model_formula"] ?? null)
    );
    if ((params["vt_formulation"] ?? null) !== null) {
        cargs.push(
            "-vt",
            (params["vt_formulation"] ?? null)
        );
    }
    if ((params["prediction_table"] ?? null) !== null) {
        cargs.push(
            "-prediction",
            execution.inputFile((params["prediction_table"] ?? null))
        );
    }
    if ((params["verbosity_level"] ?? null) !== null) {
        cargs.push(
            "-verb",
            String((params["verbosity_level"] ?? null))
        );
    }
    if ((params["response_var"] ?? null) !== null) {
        cargs.push(
            "-Y",
            (params["response_var"] ?? null)
        );
    }
    if ((params["dbg_args"] ?? null)) {
        cargs.push("-dbgArgs");
    }
    return cargs;
}


function pta_outputs(
    params: PtaParameters,
    execution: Execution,
): PtaOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: PtaOutputs = {
        root: execution.outputFile("."),
        stat_output: execution.outputFile([(params["prefix"] ?? null), "-stat.txt"].join('')),
        prediction_output: execution.outputFile([(params["prefix"] ?? null), "-prediction.txt"].join('')),
    };
    return ret;
}


function pta_execute(
    params: PtaParameters,
    execution: Execution,
): PtaOutputs {
    /**
     * Program for Profile Tracking Analysis - estimates nonlinear trajectories through smoothing splines.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `PtaOutputs`).
     */
    params = execution.params(params)
    const cargs = pta_cargs(params, execution)
    const ret = pta_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function pta(
    prefix: string,
    input_file: InputPathType,
    model_formula: string,
    vt_formulation: string | null = null,
    prediction_table: InputPathType | null = null,
    verbosity_level: number | null = null,
    response_var: string | null = null,
    dbg_args: boolean = false,
    runner: Runner | null = null,
): PtaOutputs {
    /**
     * Program for Profile Tracking Analysis - estimates nonlinear trajectories through smoothing splines.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param prefix Prefix for output files
     * @param input_file Input data file in table format (data frame structure of long format in R)
     * @param model_formula Model formulation through multilevel smoothing splines
     * @param vt_formulation Specify varying smoothing terms. Two components are required: the first one 'var' indicates the variable (e.g., subject) around which the smoothing will vary while the second component specifies the smoothing formulation (e.g., s(age,subject)).
     * @param prediction_table Data table to generate predicted values for graphical illustration
     * @param verbosity_level Verbosity level (0 for quiet, 1 or more for talkative)
     * @param response_var Column name designated as the response/outcome variable (default is 'Y')
     * @param dbg_args Enable R to save parameters for debugging
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `PtaOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(PTA_METADATA);
    const params = pta_params(prefix, input_file, model_formula, vt_formulation, prediction_table, verbosity_level, response_var, dbg_args)
    return pta_execute(params, execution);
}


export {
      PTA_METADATA,
      PtaOutputs,
      PtaParameters,
      pta,
      pta_params,
};
