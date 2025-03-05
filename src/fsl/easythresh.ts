// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const EASYTHRESH_METADATA: Metadata = {
    id: "98fe51731b5eb29a261a330f299532a959122300.boutiques",
    name: "easythresh",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface EasythreshParameters {
    "__STYXTYPE__": "easythresh";
    "raw_zstat_input": InputPathType;
    "brain_mask_input": InputPathType;
    "cluster_z_thresh_input": number;
    "cluster_prob_thresh_input": number;
    "background_image_input": InputPathType;
    "output_root": string;
    "mm_flag": boolean;
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
        "easythresh": easythresh_cargs,
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
        "easythresh": easythresh_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `easythresh(...)`.
 *
 * @interface
 */
interface EasythreshOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output thresholded image
     */
    output_thresh_image: OutputPathType;
}


function easythresh_params(
    raw_zstat_input: InputPathType,
    brain_mask_input: InputPathType,
    cluster_z_thresh_input: number,
    cluster_prob_thresh_input: number,
    background_image_input: InputPathType,
    output_root: string,
    mm_flag: boolean = false,
): EasythreshParameters {
    /**
     * Build parameters.
    
     * @param raw_zstat_input Input raw z-statistics image
     * @param brain_mask_input Brain mask image
     * @param cluster_z_thresh_input Cluster z-threshold
     * @param cluster_prob_thresh_input Cluster probability threshold
     * @param background_image_input Background image for thresholding
     * @param output_root Root of output file names
     * @param mm_flag Flag to indicate the use of mm (millimeters)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "easythresh" as const,
        "raw_zstat_input": raw_zstat_input,
        "brain_mask_input": brain_mask_input,
        "cluster_z_thresh_input": cluster_z_thresh_input,
        "cluster_prob_thresh_input": cluster_prob_thresh_input,
        "background_image_input": background_image_input,
        "output_root": output_root,
        "mm_flag": mm_flag,
    };
    return params;
}


function easythresh_cargs(
    params: EasythreshParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("easythresh");
    cargs.push(execution.inputFile((params["raw_zstat_input"] ?? null)));
    cargs.push(execution.inputFile((params["brain_mask_input"] ?? null)));
    cargs.push(String((params["cluster_z_thresh_input"] ?? null)));
    cargs.push(String((params["cluster_prob_thresh_input"] ?? null)));
    cargs.push(execution.inputFile((params["background_image_input"] ?? null)));
    cargs.push((params["output_root"] ?? null));
    if ((params["mm_flag"] ?? null)) {
        cargs.push("--mm");
    }
    return cargs;
}


function easythresh_outputs(
    params: EasythreshParameters,
    execution: Execution,
): EasythreshOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: EasythreshOutputs = {
        root: execution.outputFile("."),
        output_thresh_image: execution.outputFile([(params["output_root"] ?? null), "_thresh.nii.gz"].join('')),
    };
    return ret;
}


function easythresh_execute(
    params: EasythreshParameters,
    execution: Execution,
): EasythreshOutputs {
    /**
     * Cluster-based statistical thresholding tool from FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `EasythreshOutputs`).
     */
    params = execution.params(params)
    const cargs = easythresh_cargs(params, execution)
    const ret = easythresh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function easythresh(
    raw_zstat_input: InputPathType,
    brain_mask_input: InputPathType,
    cluster_z_thresh_input: number,
    cluster_prob_thresh_input: number,
    background_image_input: InputPathType,
    output_root: string,
    mm_flag: boolean = false,
    runner: Runner | null = null,
): EasythreshOutputs {
    /**
     * Cluster-based statistical thresholding tool from FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param raw_zstat_input Input raw z-statistics image
     * @param brain_mask_input Brain mask image
     * @param cluster_z_thresh_input Cluster z-threshold
     * @param cluster_prob_thresh_input Cluster probability threshold
     * @param background_image_input Background image for thresholding
     * @param output_root Root of output file names
     * @param mm_flag Flag to indicate the use of mm (millimeters)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `EasythreshOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(EASYTHRESH_METADATA);
    const params = easythresh_params(raw_zstat_input, brain_mask_input, cluster_z_thresh_input, cluster_prob_thresh_input, background_image_input, output_root, mm_flag)
    return easythresh_execute(params, execution);
}


export {
      EASYTHRESH_METADATA,
      EasythreshOutputs,
      EasythreshParameters,
      easythresh,
      easythresh_params,
};
