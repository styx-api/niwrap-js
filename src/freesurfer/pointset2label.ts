// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const POINTSET2LABEL_METADATA: Metadata = {
    id: "76bc9f6d69a026b807da7960f3bfd93ec5f85c89.boutiques",
    name: "pointset2label",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Pointset2labelParameters {
    "__STYXTYPE__": "pointset2label";
    "waypoint_file": InputPathType;
    "input_volume": InputPathType;
    "label_value": number;
    "output_volume": string;
    "clear_option": boolean;
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
        "pointset2label": pointset2label_cargs,
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
        "pointset2label": pointset2label_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `pointset2label(...)`.
 *
 * @interface
 */
interface Pointset2labelOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output volume label file with applied labels.
     */
    output_label_volume: OutputPathType;
}


function pointset2label_params(
    waypoint_file: InputPathType,
    input_volume: InputPathType,
    label_value: number,
    output_volume: string,
    clear_option: boolean = false,
): Pointset2labelParameters {
    /**
     * Build parameters.
    
     * @param waypoint_file Path to the waypoint file.
     * @param input_volume Path to the input volume file.
     * @param label_value Label value to apply at the waypoints.
     * @param output_volume Path to the output volume label file.
     * @param clear_option Clear the input volume before processing.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "pointset2label" as const,
        "waypoint_file": waypoint_file,
        "input_volume": input_volume,
        "label_value": label_value,
        "output_volume": output_volume,
        "clear_option": clear_option,
    };
    return params;
}


function pointset2label_cargs(
    params: Pointset2labelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("pointset2label");
    cargs.push(execution.inputFile((params["waypoint_file"] ?? null)));
    cargs.push(execution.inputFile((params["input_volume"] ?? null)));
    cargs.push(String((params["label_value"] ?? null)));
    cargs.push((params["output_volume"] ?? null));
    if ((params["clear_option"] ?? null)) {
        cargs.push("-clear");
    }
    return cargs;
}


function pointset2label_outputs(
    params: Pointset2labelParameters,
    execution: Execution,
): Pointset2labelOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Pointset2labelOutputs = {
        root: execution.outputFile("."),
        output_label_volume: execution.outputFile([(params["output_volume"] ?? null)].join('')),
    };
    return ret;
}


function pointset2label_execute(
    params: Pointset2labelParameters,
    execution: Execution,
): Pointset2labelOutputs {
    /**
     * Tool for applying waypoint labels to a volume.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Pointset2labelOutputs`).
     */
    params = execution.params(params)
    const cargs = pointset2label_cargs(params, execution)
    const ret = pointset2label_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function pointset2label(
    waypoint_file: InputPathType,
    input_volume: InputPathType,
    label_value: number,
    output_volume: string,
    clear_option: boolean = false,
    runner: Runner | null = null,
): Pointset2labelOutputs {
    /**
     * Tool for applying waypoint labels to a volume.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param waypoint_file Path to the waypoint file.
     * @param input_volume Path to the input volume file.
     * @param label_value Label value to apply at the waypoints.
     * @param output_volume Path to the output volume label file.
     * @param clear_option Clear the input volume before processing.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Pointset2labelOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(POINTSET2LABEL_METADATA);
    const params = pointset2label_params(waypoint_file, input_volume, label_value, output_volume, clear_option)
    return pointset2label_execute(params, execution);
}


export {
      POINTSET2LABEL_METADATA,
      Pointset2labelOutputs,
      Pointset2labelParameters,
      pointset2label,
      pointset2label_params,
};
