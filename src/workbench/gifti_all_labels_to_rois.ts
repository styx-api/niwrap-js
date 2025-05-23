// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const GIFTI_ALL_LABELS_TO_ROIS_METADATA: Metadata = {
    id: "bc66accf1b117699201a73abc8217f7e15af5877.boutiques",
    name: "gifti-all-labels-to-rois",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface GiftiAllLabelsToRoisParameters {
    "__STYXTYPE__": "gifti-all-labels-to-rois";
    "label_in": InputPathType;
    "map": string;
    "metric_out": string;
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
        "gifti-all-labels-to-rois": gifti_all_labels_to_rois_cargs,
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
        "gifti-all-labels-to-rois": gifti_all_labels_to_rois_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `gifti_all_labels_to_rois(...)`.
 *
 * @interface
 */
interface GiftiAllLabelsToRoisOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output metric file
     */
    metric_out: OutputPathType;
}


function gifti_all_labels_to_rois_params(
    label_in: InputPathType,
    map: string,
    metric_out: string,
): GiftiAllLabelsToRoisParameters {
    /**
     * Build parameters.
    
     * @param label_in the input gifti label file
     * @param map the number or name of the label map to use
     * @param metric_out the output metric file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "gifti-all-labels-to-rois" as const,
        "label_in": label_in,
        "map": map,
        "metric_out": metric_out,
    };
    return params;
}


function gifti_all_labels_to_rois_cargs(
    params: GiftiAllLabelsToRoisParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-gifti-all-labels-to-rois");
    cargs.push(execution.inputFile((params["label_in"] ?? null)));
    cargs.push((params["map"] ?? null));
    cargs.push((params["metric_out"] ?? null));
    return cargs;
}


function gifti_all_labels_to_rois_outputs(
    params: GiftiAllLabelsToRoisParameters,
    execution: Execution,
): GiftiAllLabelsToRoisOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: GiftiAllLabelsToRoisOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
    };
    return ret;
}


function gifti_all_labels_to_rois_execute(
    params: GiftiAllLabelsToRoisParameters,
    execution: Execution,
): GiftiAllLabelsToRoisOutputs {
    /**
     * Make rois from all labels in a gifti column.
     * 
     * The output metric file has a column for each label in the specified input map, other than the ??? label, each of which contains an ROI of all vertices that are set to the corresponding label.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `GiftiAllLabelsToRoisOutputs`).
     */
    params = execution.params(params)
    const cargs = gifti_all_labels_to_rois_cargs(params, execution)
    const ret = gifti_all_labels_to_rois_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function gifti_all_labels_to_rois(
    label_in: InputPathType,
    map: string,
    metric_out: string,
    runner: Runner | null = null,
): GiftiAllLabelsToRoisOutputs {
    /**
     * Make rois from all labels in a gifti column.
     * 
     * The output metric file has a column for each label in the specified input map, other than the ??? label, each of which contains an ROI of all vertices that are set to the corresponding label.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param label_in the input gifti label file
     * @param map the number or name of the label map to use
     * @param metric_out the output metric file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `GiftiAllLabelsToRoisOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(GIFTI_ALL_LABELS_TO_ROIS_METADATA);
    const params = gifti_all_labels_to_rois_params(label_in, map, metric_out)
    return gifti_all_labels_to_rois_execute(params, execution);
}


export {
      GIFTI_ALL_LABELS_TO_ROIS_METADATA,
      GiftiAllLabelsToRoisOutputs,
      GiftiAllLabelsToRoisParameters,
      gifti_all_labels_to_rois,
      gifti_all_labels_to_rois_params,
};
