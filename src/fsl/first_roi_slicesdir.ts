// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FIRST_ROI_SLICESDIR_METADATA: Metadata = {
    id: "d99cc0c205b74580499089f0d5d96083d3a77854.boutiques",
    name: "first_roi_slicesdir",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FirstRoiSlicesdirParameters {
    "__STYXTYPE__": "first_roi_slicesdir";
    "input_t1_images": string;
    "input_label_images": string;
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
        "first_roi_slicesdir": first_roi_slicesdir_cargs,
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
        "first_roi_slicesdir": first_roi_slicesdir_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `first_roi_slicesdir(...)`.
 *
 * @interface
 */
interface FirstRoiSlicesdirOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated slice directory for the input T1 images
     */
    t1_slicesdir: OutputPathType;
    /**
     * Generated slice directory for the input label images
     */
    label_slicesdir: OutputPathType;
}


function first_roi_slicesdir_params(
    input_t1_images: string,
    input_label_images: string,
): FirstRoiSlicesdirParameters {
    /**
     * Build parameters.
    
     * @param input_t1_images Input T1-weighted images of the brain (pattern-matched); for example, *_t1.nii.gz
     * @param input_label_images Input label images corresponding to the T1 images (pattern-matched); for example, *_L_Hipp_first.nii.gz
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "first_roi_slicesdir" as const,
        "input_t1_images": input_t1_images,
        "input_label_images": input_label_images,
    };
    return params;
}


function first_roi_slicesdir_cargs(
    params: FirstRoiSlicesdirParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("first_roi_slicesdir");
    cargs.push((params["input_t1_images"] ?? null));
    cargs.push((params["input_label_images"] ?? null));
    return cargs;
}


function first_roi_slicesdir_outputs(
    params: FirstRoiSlicesdirParameters,
    execution: Execution,
): FirstRoiSlicesdirOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FirstRoiSlicesdirOutputs = {
        root: execution.outputFile("."),
        t1_slicesdir: execution.outputFile([(params["input_t1_images"] ?? null), "_slicesdir"].join('')),
        label_slicesdir: execution.outputFile([(params["input_label_images"] ?? null), "_slicesdir"].join('')),
    };
    return ret;
}


function first_roi_slicesdir_execute(
    params: FirstRoiSlicesdirParameters,
    execution: Execution,
): FirstRoiSlicesdirOutputs {
    /**
     * A utility for generating slice directories for FIRST-ROI.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FirstRoiSlicesdirOutputs`).
     */
    params = execution.params(params)
    const cargs = first_roi_slicesdir_cargs(params, execution)
    const ret = first_roi_slicesdir_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function first_roi_slicesdir(
    input_t1_images: string,
    input_label_images: string,
    runner: Runner | null = null,
): FirstRoiSlicesdirOutputs {
    /**
     * A utility for generating slice directories for FIRST-ROI.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_t1_images Input T1-weighted images of the brain (pattern-matched); for example, *_t1.nii.gz
     * @param input_label_images Input label images corresponding to the T1 images (pattern-matched); for example, *_L_Hipp_first.nii.gz
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FirstRoiSlicesdirOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FIRST_ROI_SLICESDIR_METADATA);
    const params = first_roi_slicesdir_params(input_t1_images, input_label_images)
    return first_roi_slicesdir_execute(params, execution);
}


export {
      FIRST_ROI_SLICESDIR_METADATA,
      FirstRoiSlicesdirOutputs,
      FirstRoiSlicesdirParameters,
      first_roi_slicesdir,
      first_roi_slicesdir_params,
};
