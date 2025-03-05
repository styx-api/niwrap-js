// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_5_0_2_XYZTRANS_SCH_METADATA: Metadata = {
    id: "97a334fb37fbd008c00e7f8cd6895c30829fe6b3.boutiques",
    name: "fsl.5.0.2.xyztrans.sch",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Fsl502XyztransSchParameters {
    "__STYXTYPE__": "fsl.5.0.2.xyztrans.sch";
    "term_option"?: string | null | undefined;
    "version_flag": boolean;
    "no_scrollback_flag": boolean;
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
        "fsl.5.0.2.xyztrans.sch": fsl_5_0_2_xyztrans_sch_cargs,
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
 * Output object returned when calling `fsl_5_0_2_xyztrans_sch(...)`.
 *
 * @interface
 */
interface Fsl502XyztransSchOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fsl_5_0_2_xyztrans_sch_params(
    term_option: string | null = null,
    version_flag: boolean = false,
    no_scrollback_flag: boolean = false,
): Fsl502XyztransSchParameters {
    /**
     * Build parameters.
    
     * @param term_option Use this instead of the $TERM environment variable.
     * @param version_flag Print the curses library version used.
     * @param no_scrollback_flag Do not try to clear the scrollback buffer.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl.5.0.2.xyztrans.sch" as const,
        "version_flag": version_flag,
        "no_scrollback_flag": no_scrollback_flag,
    };
    if (term_option !== null) {
        params["term_option"] = term_option;
    }
    return params;
}


function fsl_5_0_2_xyztrans_sch_cargs(
    params: Fsl502XyztransSchParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl.5.0.2.xyztrans.sch");
    if ((params["term_option"] ?? null) !== null) {
        cargs.push(
            "-T",
            (params["term_option"] ?? null)
        );
    }
    if ((params["version_flag"] ?? null)) {
        cargs.push("-V");
    }
    if ((params["no_scrollback_flag"] ?? null)) {
        cargs.push("-x");
    }
    return cargs;
}


function fsl_5_0_2_xyztrans_sch_outputs(
    params: Fsl502XyztransSchParameters,
    execution: Execution,
): Fsl502XyztransSchOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Fsl502XyztransSchOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fsl_5_0_2_xyztrans_sch_execute(
    params: Fsl502XyztransSchParameters,
    execution: Execution,
): Fsl502XyztransSchOutputs {
    /**
     * A script with unclear functionality, potentially related to terminal operations.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Fsl502XyztransSchOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_5_0_2_xyztrans_sch_cargs(params, execution)
    const ret = fsl_5_0_2_xyztrans_sch_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_5_0_2_xyztrans_sch(
    term_option: string | null = null,
    version_flag: boolean = false,
    no_scrollback_flag: boolean = false,
    runner: Runner | null = null,
): Fsl502XyztransSchOutputs {
    /**
     * A script with unclear functionality, potentially related to terminal operations.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param term_option Use this instead of the $TERM environment variable.
     * @param version_flag Print the curses library version used.
     * @param no_scrollback_flag Do not try to clear the scrollback buffer.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Fsl502XyztransSchOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_5_0_2_XYZTRANS_SCH_METADATA);
    const params = fsl_5_0_2_xyztrans_sch_params(term_option, version_flag, no_scrollback_flag)
    return fsl_5_0_2_xyztrans_sch_execute(params, execution);
}


export {
      FSL_5_0_2_XYZTRANS_SCH_METADATA,
      Fsl502XyztransSchOutputs,
      Fsl502XyztransSchParameters,
      fsl_5_0_2_xyztrans_sch,
      fsl_5_0_2_xyztrans_sch_params,
};
