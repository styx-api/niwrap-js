// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const EXAMINE_XMAT_METADATA: Metadata = {
    id: "41c6732fe776e16e30c04c5fc5c3167c839b8815.boutiques",
    name: "ExamineXmat",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface ExamineXmatParameters {
    "__STYXTYPE__": "ExamineXmat";
    "input_file"?: InputPathType | null | undefined;
    "interactive": boolean;
    "prefix"?: string | null | undefined;
    "cprefix"?: string | null | undefined;
    "pprefix"?: string | null | undefined;
    "select"?: string | null | undefined;
    "msg_trace": boolean;
    "verbosity"?: number | null | undefined;
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
        "ExamineXmat": examine_xmat_cargs,
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
        "ExamineXmat": examine_xmat_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `examine_xmat(...)`.
 *
 * @interface
 */
interface ExamineXmatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output plot image
     */
    plot_image: OutputPathType | null;
    /**
     * Output plot image
     */
    plot_image_png: OutputPathType | null;
    /**
     * Output plot image
     */
    plot_image_pdf: OutputPathType | null;
    /**
     * Output cor image
     */
    cor_image: OutputPathType | null;
    /**
     * Output plot image
     */
    plot_image_prefix: OutputPathType | null;
}


function examine_xmat_params(
    input_file: InputPathType | null = null,
    interactive: boolean = false,
    prefix: string | null = null,
    cprefix: string | null = null,
    pprefix: string | null = null,
    select: string | null = null,
    msg_trace: boolean = false,
    verbosity: number | null = null,
): ExamineXmatParameters {
    /**
     * Build parameters.
    
     * @param input_file xmat file to plot
     * @param interactive Run ExamineXmat in interactive mode. This is the default if -prefix is not given. If -interactive is used with -prefix, the last plot you see is the plot saved to file.
     * @param prefix Prefix of plot image and cor image
     * @param cprefix Prefix of cor image only
     * @param pprefix Prefix of plot image only
     * @param select What to plot. Selection strings to specify regressors.
     * @param msg_trace Output trace information along with errors and notices.
     * @param verbosity Verbosity level. 0 for quiet, 1 or more for talkative.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "ExamineXmat" as const,
        "interactive": interactive,
        "msg_trace": msg_trace,
    };
    if (input_file !== null) {
        params["input_file"] = input_file;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (cprefix !== null) {
        params["cprefix"] = cprefix;
    }
    if (pprefix !== null) {
        params["pprefix"] = pprefix;
    }
    if (select !== null) {
        params["select"] = select;
    }
    if (verbosity !== null) {
        params["verbosity"] = verbosity;
    }
    return params;
}


function examine_xmat_cargs(
    params: ExamineXmatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("ExamineXmat");
    if ((params["input_file"] ?? null) !== null) {
        cargs.push(
            "-input",
            execution.inputFile((params["input_file"] ?? null))
        );
    }
    if ((params["interactive"] ?? null)) {
        cargs.push("-interactive");
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["cprefix"] ?? null) !== null) {
        cargs.push(
            "-cprefix",
            (params["cprefix"] ?? null)
        );
    }
    if ((params["pprefix"] ?? null) !== null) {
        cargs.push(
            "-pprefix",
            (params["pprefix"] ?? null)
        );
    }
    if ((params["select"] ?? null) !== null) {
        cargs.push(
            "-select",
            (params["select"] ?? null)
        );
    }
    if ((params["msg_trace"] ?? null)) {
        cargs.push("-msg.trace");
    }
    if ((params["verbosity"] ?? null) !== null) {
        cargs.push(
            "-verb",
            String((params["verbosity"] ?? null))
        );
    }
    return cargs;
}


function examine_xmat_outputs(
    params: ExamineXmatParameters,
    execution: Execution,
): ExamineXmatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ExamineXmatOutputs = {
        root: execution.outputFile("."),
        plot_image: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".jpg"].join('')) : null,
        plot_image_png: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".png"].join('')) : null,
        plot_image_pdf: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), ".pdf"].join('')) : null,
        cor_image: ((params["cprefix"] ?? null) !== null) ? execution.outputFile([(params["cprefix"] ?? null), ".jpg"].join('')) : null,
        plot_image_prefix: ((params["pprefix"] ?? null) !== null) ? execution.outputFile([(params["pprefix"] ?? null), ".jpg"].join('')) : null,
    };
    return ret;
}


function examine_xmat_execute(
    params: ExamineXmatParameters,
    execution: Execution,
): ExamineXmatOutputs {
    /**
     * A program for examining the design matrix generated by 3dDeconvolve.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ExamineXmatOutputs`).
     */
    params = execution.params(params)
    const cargs = examine_xmat_cargs(params, execution)
    const ret = examine_xmat_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function examine_xmat(
    input_file: InputPathType | null = null,
    interactive: boolean = false,
    prefix: string | null = null,
    cprefix: string | null = null,
    pprefix: string | null = null,
    select: string | null = null,
    msg_trace: boolean = false,
    verbosity: number | null = null,
    runner: Runner | null = null,
): ExamineXmatOutputs {
    /**
     * A program for examining the design matrix generated by 3dDeconvolve.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file xmat file to plot
     * @param interactive Run ExamineXmat in interactive mode. This is the default if -prefix is not given. If -interactive is used with -prefix, the last plot you see is the plot saved to file.
     * @param prefix Prefix of plot image and cor image
     * @param cprefix Prefix of cor image only
     * @param pprefix Prefix of plot image only
     * @param select What to plot. Selection strings to specify regressors.
     * @param msg_trace Output trace information along with errors and notices.
     * @param verbosity Verbosity level. 0 for quiet, 1 or more for talkative.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ExamineXmatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(EXAMINE_XMAT_METADATA);
    const params = examine_xmat_params(input_file, interactive, prefix, cprefix, pprefix, select, msg_trace, verbosity)
    return examine_xmat_execute(params, execution);
}


export {
      EXAMINE_XMAT_METADATA,
      ExamineXmatOutputs,
      ExamineXmatParameters,
      examine_xmat,
      examine_xmat_params,
};
