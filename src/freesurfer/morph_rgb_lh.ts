// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MORPH_RGB_LH_METADATA: Metadata = {
    id: "8a27176b135c7e00506bbb223dc33d4f8b5c331f.boutiques",
    name: "morph_rgb-lh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MorphRgbLhParameters {
    "__STYXTYPE__": "morph_rgb-lh";
    "subject_id": string;
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
        "morph_rgb-lh": morph_rgb_lh_cargs,
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
 * Output object returned when calling `morph_rgb_lh(...)`.
 *
 * @interface
 */
interface MorphRgbLhOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function morph_rgb_lh_params(
    subject_id: string,
): MorphRgbLhParameters {
    /**
     * Build parameters.
    
     * @param subject_id The subject ID to process. This refers to the sub-directory within $SUBJECTS_DIR containing the FreeSurfer processed data for the subject.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "morph_rgb-lh" as const,
        "subject_id": subject_id,
    };
    return params;
}


function morph_rgb_lh_cargs(
    params: MorphRgbLhParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push(
        "-lh",
        ["morph_rgb", (params["subject_id"] ?? null)].join('')
    );
    return cargs;
}


function morph_rgb_lh_outputs(
    params: MorphRgbLhParameters,
    execution: Execution,
): MorphRgbLhOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MorphRgbLhOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function morph_rgb_lh_execute(
    params: MorphRgbLhParameters,
    execution: Execution,
): MorphRgbLhOutputs {
    /**
     * Tool for working with and generating RGB images of morphometric data for the left hemisphere in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MorphRgbLhOutputs`).
     */
    params = execution.params(params)
    const cargs = morph_rgb_lh_cargs(params, execution)
    const ret = morph_rgb_lh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function morph_rgb_lh(
    subject_id: string,
    runner: Runner | null = null,
): MorphRgbLhOutputs {
    /**
     * Tool for working with and generating RGB images of morphometric data for the left hemisphere in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_id The subject ID to process. This refers to the sub-directory within $SUBJECTS_DIR containing the FreeSurfer processed data for the subject.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MorphRgbLhOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MORPH_RGB_LH_METADATA);
    const params = morph_rgb_lh_params(subject_id)
    return morph_rgb_lh_execute(params, execution);
}


export {
      MORPH_RGB_LH_METADATA,
      MorphRgbLhOutputs,
      MorphRgbLhParameters,
      morph_rgb_lh,
      morph_rgb_lh_params,
};
