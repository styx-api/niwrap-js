// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__DJUNCT_MODAL_SMOOTHING_WITH_REP_METADATA: Metadata = {
    id: "0a3436dc5db4b133e39a70c1855022a5b90e8a73.boutiques",
    name: "@djunct_modal_smoothing_with_rep",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VDjunctModalSmoothingWithRepParameters {
    "__STYXTYPE__": "@djunct_modal_smoothing_with_rep";
    "input_file": InputPathType;
    "output_prefix": string;
    "modesmooth"?: number | null | undefined;
    "help_view": boolean;
    "help": boolean;
    "version": boolean;
    "overwrite": boolean;
    "no_clean": boolean;
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
        "@djunct_modal_smoothing_with_rep": v__djunct_modal_smoothing_with_rep_cargs,
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
        "@djunct_modal_smoothing_with_rep": v__djunct_modal_smoothing_with_rep_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__djunct_modal_smoothing_with_rep(...)`.
 *
 * @interface
 */
interface VDjunctModalSmoothingWithRepOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset after modal smoothing
     */
    output_file_head: OutputPathType;
    /**
     * Output dataset after modal smoothing
     */
    output_file_brik: OutputPathType;
}


function v__djunct_modal_smoothing_with_rep_params(
    input_file: InputPathType,
    output_prefix: string,
    modesmooth: number | null = null,
    help_view: boolean = false,
    help: boolean = false,
    version: boolean = false,
    overwrite: boolean = false,
    no_clean: boolean = false,
): VDjunctModalSmoothingWithRepParameters {
    /**
     * Build parameters.
    
     * @param input_file Input dataset (assumes < 10^5 subbricks)
     * @param output_prefix Prefix for output dataset
     * @param modesmooth Fill in X in: 3dLocalstat -nbhd "SPHERE(-X)" ...
     * @param help_view Display help in a viewable format
     * @param help Display help information
     * @param version Display version information
     * @param overwrite Overwrite existing output files
     * @param no_clean Do not clean up intermediate files
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@djunct_modal_smoothing_with_rep" as const,
        "input_file": input_file,
        "output_prefix": output_prefix,
        "help_view": help_view,
        "help": help,
        "version": version,
        "overwrite": overwrite,
        "no_clean": no_clean,
    };
    if (modesmooth !== null) {
        params["modesmooth"] = modesmooth;
    }
    return params;
}


function v__djunct_modal_smoothing_with_rep_cargs(
    params: VDjunctModalSmoothingWithRepParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@djunct_modal_smoothing_with_rep");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push((params["output_prefix"] ?? null));
    if ((params["modesmooth"] ?? null) !== null) {
        cargs.push(
            "-modesmooth",
            String((params["modesmooth"] ?? null))
        );
    }
    if ((params["help_view"] ?? null)) {
        cargs.push("-hview");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-ver");
    }
    if ((params["overwrite"] ?? null)) {
        cargs.push("-overwrite");
    }
    if ((params["no_clean"] ?? null)) {
        cargs.push("-no_clean");
    }
    return cargs;
}


function v__djunct_modal_smoothing_with_rep_outputs(
    params: VDjunctModalSmoothingWithRepParameters,
    execution: Execution,
): VDjunctModalSmoothingWithRepOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VDjunctModalSmoothingWithRepOutputs = {
        root: execution.outputFile("."),
        output_file_head: execution.outputFile([(params["output_prefix"] ?? null), "+tlrc.HEAD"].join('')),
        output_file_brik: execution.outputFile([(params["output_prefix"] ?? null), "+tlrc.BRIK"].join('')),
    };
    return ret;
}


function v__djunct_modal_smoothing_with_rep_execute(
    params: VDjunctModalSmoothingWithRepParameters,
    execution: Execution,
): VDjunctModalSmoothingWithRepOutputs {
    /**
     * A script to perform modal smoothing of ROI maps and check for eliminated ROIs. If any ROIs are eliminated during smoothing, they are restored, potentially in a degraded form.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VDjunctModalSmoothingWithRepOutputs`).
     */
    params = execution.params(params)
    const cargs = v__djunct_modal_smoothing_with_rep_cargs(params, execution)
    const ret = v__djunct_modal_smoothing_with_rep_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__djunct_modal_smoothing_with_rep(
    input_file: InputPathType,
    output_prefix: string,
    modesmooth: number | null = null,
    help_view: boolean = false,
    help: boolean = false,
    version: boolean = false,
    overwrite: boolean = false,
    no_clean: boolean = false,
    runner: Runner | null = null,
): VDjunctModalSmoothingWithRepOutputs {
    /**
     * A script to perform modal smoothing of ROI maps and check for eliminated ROIs. If any ROIs are eliminated during smoothing, they are restored, potentially in a degraded form.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Input dataset (assumes < 10^5 subbricks)
     * @param output_prefix Prefix for output dataset
     * @param modesmooth Fill in X in: 3dLocalstat -nbhd "SPHERE(-X)" ...
     * @param help_view Display help in a viewable format
     * @param help Display help information
     * @param version Display version information
     * @param overwrite Overwrite existing output files
     * @param no_clean Do not clean up intermediate files
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VDjunctModalSmoothingWithRepOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__DJUNCT_MODAL_SMOOTHING_WITH_REP_METADATA);
    const params = v__djunct_modal_smoothing_with_rep_params(input_file, output_prefix, modesmooth, help_view, help, version, overwrite, no_clean)
    return v__djunct_modal_smoothing_with_rep_execute(params, execution);
}


export {
      VDjunctModalSmoothingWithRepOutputs,
      VDjunctModalSmoothingWithRepParameters,
      V__DJUNCT_MODAL_SMOOTHING_WITH_REP_METADATA,
      v__djunct_modal_smoothing_with_rep,
      v__djunct_modal_smoothing_with_rep_params,
};
