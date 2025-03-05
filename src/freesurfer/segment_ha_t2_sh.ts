// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SEGMENT_HA_T2_SH_METADATA: Metadata = {
    id: "e35fef1406f0bc21d5d98039621ba41ed9020379.boutiques",
    name: "segmentHA_T2.sh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface SegmentHaT2ShParameters {
    "__STYXTYPE__": "segmentHA_T2.sh";
    "input_image": InputPathType;
    "output_directory": string;
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
        "segmentHA_T2.sh": segment_ha_t2_sh_cargs,
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
        "segmentHA_T2.sh": segment_ha_t2_sh_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `segment_ha_t2_sh(...)`.
 *
 * @interface
 */
interface SegmentHaT2ShOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Left hemisphere hippocampal and amygdala labels
     */
    left_hemisphere_labels: OutputPathType;
    /**
     * Right hemisphere hippocampal and amygdala labels
     */
    right_hemisphere_labels: OutputPathType;
}


function segment_ha_t2_sh_params(
    input_image: InputPathType,
    output_directory: string,
): SegmentHaT2ShParameters {
    /**
     * Build parameters.
    
     * @param input_image Input T2-weighted MRI image file
     * @param output_directory Output directory for segmented structures
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "segmentHA_T2.sh" as const,
        "input_image": input_image,
        "output_directory": output_directory,
    };
    return params;
}


function segment_ha_t2_sh_cargs(
    params: SegmentHaT2ShParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("segmentHA_T2.sh");
    cargs.push(execution.inputFile((params["input_image"] ?? null)));
    cargs.push((params["output_directory"] ?? null));
    return cargs;
}


function segment_ha_t2_sh_outputs(
    params: SegmentHaT2ShParameters,
    execution: Execution,
): SegmentHaT2ShOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SegmentHaT2ShOutputs = {
        root: execution.outputFile("."),
        left_hemisphere_labels: execution.outputFile([(params["output_directory"] ?? null), "/lh.hippoAmygLabels-T2.v21.mgz"].join('')),
        right_hemisphere_labels: execution.outputFile([(params["output_directory"] ?? null), "/rh.hippoAmygLabels-T2.v21.mgz"].join('')),
    };
    return ret;
}


function segment_ha_t2_sh_execute(
    params: SegmentHaT2ShParameters,
    execution: Execution,
): SegmentHaT2ShOutputs {
    /**
     * Segments hippocampal and amygdala structures from T2-weighted MRI images using the FreeSurfer suite.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SegmentHaT2ShOutputs`).
     */
    params = execution.params(params)
    const cargs = segment_ha_t2_sh_cargs(params, execution)
    const ret = segment_ha_t2_sh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function segment_ha_t2_sh(
    input_image: InputPathType,
    output_directory: string,
    runner: Runner | null = null,
): SegmentHaT2ShOutputs {
    /**
     * Segments hippocampal and amygdala structures from T2-weighted MRI images using the FreeSurfer suite.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_image Input T2-weighted MRI image file
     * @param output_directory Output directory for segmented structures
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SegmentHaT2ShOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SEGMENT_HA_T2_SH_METADATA);
    const params = segment_ha_t2_sh_params(input_image, output_directory)
    return segment_ha_t2_sh_execute(params, execution);
}


export {
      SEGMENT_HA_T2_SH_METADATA,
      SegmentHaT2ShOutputs,
      SegmentHaT2ShParameters,
      segment_ha_t2_sh,
      segment_ha_t2_sh_params,
};
