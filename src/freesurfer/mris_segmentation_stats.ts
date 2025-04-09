// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_SEGMENTATION_STATS_METADATA: Metadata = {
    id: "7e3ee3ba2a78febe7620d4f6780e4c14229db52d.boutiques",
    name: "mris_segmentation_stats",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisSegmentationStatsParameters {
    "__STYXTYPE__": "mris_segmentation_stats";
    "overlay_name": string;
    "segmentation_label_name": string;
    "subjects": Array<string>;
    "roc_file": string;
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
        "mris_segmentation_stats": mris_segmentation_stats_cargs,
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
        "mris_segmentation_stats": mris_segmentation_stats_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_segmentation_stats(...)`.
 *
 * @interface
 */
interface MrisSegmentationStatsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * ROC curve file
     */
    roc_output_file: OutputPathType;
}


function mris_segmentation_stats_params(
    overlay_name: string,
    segmentation_label_name: string,
    subjects: Array<string>,
    roc_file: string,
): MrisSegmentationStatsParameters {
    /**
     * Build parameters.
    
     * @param overlay_name Overlay name for segmentation
     * @param segmentation_label_name Segmentation label name
     * @param subjects List of subjects to process
     * @param roc_file File for ROC curve output
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_segmentation_stats" as const,
        "overlay_name": overlay_name,
        "segmentation_label_name": segmentation_label_name,
        "subjects": subjects,
        "roc_file": roc_file,
    };
    return params;
}


function mris_segmentation_stats_cargs(
    params: MrisSegmentationStatsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_segmentation_stats");
    cargs.push((params["overlay_name"] ?? null));
    cargs.push((params["segmentation_label_name"] ?? null));
    cargs.push(...(params["subjects"] ?? null));
    cargs.push((params["roc_file"] ?? null));
    return cargs;
}


function mris_segmentation_stats_outputs(
    params: MrisSegmentationStatsParameters,
    execution: Execution,
): MrisSegmentationStatsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisSegmentationStatsOutputs = {
        root: execution.outputFile("."),
        roc_output_file: execution.outputFile([(params["roc_file"] ?? null)].join('')),
    };
    return ret;
}


function mris_segmentation_stats_execute(
    params: MrisSegmentationStatsParameters,
    execution: Execution,
): MrisSegmentationStatsOutputs {
    /**
     * Tool for calculating segmentation statistics.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisSegmentationStatsOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_segmentation_stats_cargs(params, execution)
    const ret = mris_segmentation_stats_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_segmentation_stats(
    overlay_name: string,
    segmentation_label_name: string,
    subjects: Array<string>,
    roc_file: string,
    runner: Runner | null = null,
): MrisSegmentationStatsOutputs {
    /**
     * Tool for calculating segmentation statistics.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param overlay_name Overlay name for segmentation
     * @param segmentation_label_name Segmentation label name
     * @param subjects List of subjects to process
     * @param roc_file File for ROC curve output
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisSegmentationStatsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_SEGMENTATION_STATS_METADATA);
    const params = mris_segmentation_stats_params(overlay_name, segmentation_label_name, subjects, roc_file)
    return mris_segmentation_stats_execute(params, execution);
}


export {
      MRIS_SEGMENTATION_STATS_METADATA,
      MrisSegmentationStatsOutputs,
      MrisSegmentationStatsParameters,
      mris_segmentation_stats,
      mris_segmentation_stats_params,
};
