// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_DISTANCE_TO_LABEL_METADATA: Metadata = {
    id: "0538a932ce0052cc0bb4e77e20e1d20d65106c51.boutiques",
    name: "mris_distance_to_label",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisDistanceToLabelParameters {
    "__STYXTYPE__": "mris_distance_to_label";
    "hemisphere": string;
    "subject_1": string;
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
        "mris_distance_to_label": mris_distance_to_label_cargs,
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
 * Output object returned when calling `mris_distance_to_label(...)`.
 *
 * @interface
 */
interface MrisDistanceToLabelOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mris_distance_to_label_params(
    hemisphere: string,
    subject_1: string,
): MrisDistanceToLabelParameters {
    /**
     * Build parameters.
    
     * @param hemisphere Hemisphere to process (e.g., 'lh' for left hemisphere or 'rh' for right hemisphere)
     * @param subject_1 Subject identifier or path to the subject directory
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_distance_to_label" as const,
        "hemisphere": hemisphere,
        "subject_1": subject_1,
    };
    return params;
}


function mris_distance_to_label_cargs(
    params: MrisDistanceToLabelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_distance_to_label");
    cargs.push((params["hemisphere"] ?? null));
    cargs.push((params["subject_1"] ?? null));
    return cargs;
}


function mris_distance_to_label_outputs(
    params: MrisDistanceToLabelParameters,
    execution: Execution,
): MrisDistanceToLabelOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisDistanceToLabelOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mris_distance_to_label_execute(
    params: MrisDistanceToLabelParameters,
    execution: Execution,
): MrisDistanceToLabelOutputs {
    /**
     * A tool for measuring the distance between vertices on a surface and a labeled region.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisDistanceToLabelOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_distance_to_label_cargs(params, execution)
    const ret = mris_distance_to_label_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_distance_to_label(
    hemisphere: string,
    subject_1: string,
    runner: Runner | null = null,
): MrisDistanceToLabelOutputs {
    /**
     * A tool for measuring the distance between vertices on a surface and a labeled region.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param hemisphere Hemisphere to process (e.g., 'lh' for left hemisphere or 'rh' for right hemisphere)
     * @param subject_1 Subject identifier or path to the subject directory
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisDistanceToLabelOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_DISTANCE_TO_LABEL_METADATA);
    const params = mris_distance_to_label_params(hemisphere, subject_1)
    return mris_distance_to_label_execute(params, execution);
}


export {
      MRIS_DISTANCE_TO_LABEL_METADATA,
      MrisDistanceToLabelOutputs,
      MrisDistanceToLabelParameters,
      mris_distance_to_label,
      mris_distance_to_label_params,
};
