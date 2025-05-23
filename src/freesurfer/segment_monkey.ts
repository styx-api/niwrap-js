// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SEGMENT_MONKEY_METADATA: Metadata = {
    id: "d99648d5897e88948d11ff4132bd5ecfdf37b4ad.boutiques",
    name: "segment_monkey",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface SegmentMonkeyParameters {
    "__STYXTYPE__": "segment_monkey";
    "control_points": Array<string>;
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
        "segment_monkey": segment_monkey_cargs,
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
 * Output object returned when calling `segment_monkey(...)`.
 *
 * @interface
 */
interface SegmentMonkeyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function segment_monkey_params(
    control_points: Array<string>,
): SegmentMonkeyParameters {
    /**
     * Build parameters.
    
     * @param control_points List of control points required for segmentation
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "segment_monkey" as const,
        "control_points": control_points,
    };
    return params;
}


function segment_monkey_cargs(
    params: SegmentMonkeyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("segment_monkey");
    cargs.push(...(params["control_points"] ?? null));
    return cargs;
}


function segment_monkey_outputs(
    params: SegmentMonkeyParameters,
    execution: Execution,
): SegmentMonkeyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SegmentMonkeyOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function segment_monkey_execute(
    params: SegmentMonkeyParameters,
    execution: Execution,
): SegmentMonkeyOutputs {
    /**
     * A tool for segmenting images using specified control points.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SegmentMonkeyOutputs`).
     */
    params = execution.params(params)
    const cargs = segment_monkey_cargs(params, execution)
    const ret = segment_monkey_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function segment_monkey(
    control_points: Array<string>,
    runner: Runner | null = null,
): SegmentMonkeyOutputs {
    /**
     * A tool for segmenting images using specified control points.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param control_points List of control points required for segmentation
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SegmentMonkeyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SEGMENT_MONKEY_METADATA);
    const params = segment_monkey_params(control_points)
    return segment_monkey_execute(params, execution);
}


export {
      SEGMENT_MONKEY_METADATA,
      SegmentMonkeyOutputs,
      SegmentMonkeyParameters,
      segment_monkey,
      segment_monkey_params,
};
