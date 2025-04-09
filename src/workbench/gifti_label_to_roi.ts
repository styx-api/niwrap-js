// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const GIFTI_LABEL_TO_ROI_METADATA: Metadata = {
    id: "fbd577d7a4881455906a02f5415f91e4912c0e7b.boutiques",
    name: "gifti-label-to-roi",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface GiftiLabelToRoiParameters {
    "__STYXTYPE__": "gifti-label-to-roi";
    "label_in": InputPathType;
    "metric_out": string;
    "opt_name_label_name"?: string | null | undefined;
    "opt_key_label_key"?: number | null | undefined;
    "opt_map_map"?: string | null | undefined;
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
        "gifti-label-to-roi": gifti_label_to_roi_cargs,
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
        "gifti-label-to-roi": gifti_label_to_roi_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `gifti_label_to_roi(...)`.
 *
 * @interface
 */
interface GiftiLabelToRoiOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output metric file
     */
    metric_out: OutputPathType;
}


function gifti_label_to_roi_params(
    label_in: InputPathType,
    metric_out: string,
    opt_name_label_name: string | null = null,
    opt_key_label_key: number | null = null,
    opt_map_map: string | null = null,
): GiftiLabelToRoiParameters {
    /**
     * Build parameters.
    
     * @param label_in the input gifti label file
     * @param metric_out the output metric file
     * @param opt_name_label_name select label by name: the label name that you want an roi of
     * @param opt_key_label_key select label by key: the label key that you want an roi of
     * @param opt_map_map select a single label map to use: the map number or name
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "gifti-label-to-roi" as const,
        "label_in": label_in,
        "metric_out": metric_out,
    };
    if (opt_name_label_name !== null) {
        params["opt_name_label_name"] = opt_name_label_name;
    }
    if (opt_key_label_key !== null) {
        params["opt_key_label_key"] = opt_key_label_key;
    }
    if (opt_map_map !== null) {
        params["opt_map_map"] = opt_map_map;
    }
    return params;
}


function gifti_label_to_roi_cargs(
    params: GiftiLabelToRoiParameters,
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
    cargs.push("-gifti-label-to-roi");
    cargs.push(execution.inputFile((params["label_in"] ?? null)));
    cargs.push((params["metric_out"] ?? null));
    if ((params["opt_name_label_name"] ?? null) !== null) {
        cargs.push(
            "-name",
            (params["opt_name_label_name"] ?? null)
        );
    }
    if ((params["opt_key_label_key"] ?? null) !== null) {
        cargs.push(
            "-key",
            String((params["opt_key_label_key"] ?? null))
        );
    }
    if ((params["opt_map_map"] ?? null) !== null) {
        cargs.push(
            "-map",
            (params["opt_map_map"] ?? null)
        );
    }
    return cargs;
}


function gifti_label_to_roi_outputs(
    params: GiftiLabelToRoiParameters,
    execution: Execution,
): GiftiLabelToRoiOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: GiftiLabelToRoiOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
    };
    return ret;
}


function gifti_label_to_roi_execute(
    params: GiftiLabelToRoiParameters,
    execution: Execution,
): GiftiLabelToRoiOutputs {
    /**
     * Make a gifti label into an roi metric.
     * 
     * For each map in <label-in>, a map is created in <metric-out> where all locations labeled with <label-name> or with a key of <label-key> are given a value of 1, and all other locations are given 0.  Exactly one of -name and -key must be specified.  Specify -map to use only one map from <label-in>.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `GiftiLabelToRoiOutputs`).
     */
    params = execution.params(params)
    const cargs = gifti_label_to_roi_cargs(params, execution)
    const ret = gifti_label_to_roi_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function gifti_label_to_roi(
    label_in: InputPathType,
    metric_out: string,
    opt_name_label_name: string | null = null,
    opt_key_label_key: number | null = null,
    opt_map_map: string | null = null,
    runner: Runner | null = null,
): GiftiLabelToRoiOutputs {
    /**
     * Make a gifti label into an roi metric.
     * 
     * For each map in <label-in>, a map is created in <metric-out> where all locations labeled with <label-name> or with a key of <label-key> are given a value of 1, and all other locations are given 0.  Exactly one of -name and -key must be specified.  Specify -map to use only one map from <label-in>.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param label_in the input gifti label file
     * @param metric_out the output metric file
     * @param opt_name_label_name select label by name: the label name that you want an roi of
     * @param opt_key_label_key select label by key: the label key that you want an roi of
     * @param opt_map_map select a single label map to use: the map number or name
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `GiftiLabelToRoiOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(GIFTI_LABEL_TO_ROI_METADATA);
    const params = gifti_label_to_roi_params(label_in, metric_out, opt_name_label_name, opt_key_label_key, opt_map_map)
    return gifti_label_to_roi_execute(params, execution);
}


export {
      GIFTI_LABEL_TO_ROI_METADATA,
      GiftiLabelToRoiOutputs,
      GiftiLabelToRoiParameters,
      gifti_label_to_roi,
      gifti_label_to_roi_params,
};
