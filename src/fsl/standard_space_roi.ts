// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const STANDARD_SPACE_ROI_METADATA: Metadata = {
    id: "8ed27df1beca474debe135fb9651f581b560a11f.boutiques",
    name: "standard_space_roi",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface StandardSpaceRoiParameters {
    "__STYXTYPE__": "standard_space_roi";
    "infile": InputPathType;
    "outfile": string;
    "mask_fov_flag": boolean;
    "mask_mask"?: InputPathType | null | undefined;
    "mask_none_flag": boolean;
    "roi_fov_flag": boolean;
    "roi_mask"?: InputPathType | null | undefined;
    "roi_none_flag": boolean;
    "ss_ref"?: InputPathType | null | undefined;
    "alt_input"?: InputPathType | null | undefined;
    "debug_flag": boolean;
    "bet_premask_flag": boolean;
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
        "standard_space_roi": standard_space_roi_cargs,
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
        "standard_space_roi": standard_space_roi_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `standard_space_roi(...)`.
 *
 * @interface
 */
interface StandardSpaceRoiOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output image after masking and/or FOV reduction
     */
    out_image: OutputPathType;
}


function standard_space_roi_params(
    infile: InputPathType,
    outfile: string,
    mask_fov_flag: boolean = false,
    mask_mask: InputPathType | null = null,
    mask_none_flag: boolean = false,
    roi_fov_flag: boolean = false,
    roi_mask: InputPathType | null = null,
    roi_none_flag: boolean = false,
    ss_ref: InputPathType | null = null,
    alt_input: InputPathType | null = null,
    debug_flag: boolean = false,
    bet_premask_flag: boolean = false,
): StandardSpaceRoiParameters {
    /**
     * Build parameters.
    
     * @param infile Input image
     * @param outfile Output image
     * @param mask_fov_flag Mask output using transformed standard space FOV
     * @param mask_mask Mask output using transformed standard space mask
     * @param mask_none_flag Do not mask output
     * @param roi_fov_flag Cut down input FOV using bounding box of the transformed standard space FOV
     * @param roi_mask Cut down input FOV using nonbackground bounding box of the transformed standard space mask
     * @param roi_none_flag Do not cut down input FOV
     * @param ss_ref Standard space reference image to use (default: /usr/local/fsl/data/standard/MNI152_T1)
     * @param alt_input Alternative input image to apply the ROI to (instead of the one used to register to the reference)
     * @param debug_flag Debug mode (don't delete intermediate files)
     * @param bet_premask_flag Equivalent to: -maskMASK /usr/local/fsl/data/standard/MNI152_T1_2mm_brain_mask_dil -roiNONE
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "standard_space_roi" as const,
        "infile": infile,
        "outfile": outfile,
        "mask_fov_flag": mask_fov_flag,
        "mask_none_flag": mask_none_flag,
        "roi_fov_flag": roi_fov_flag,
        "roi_none_flag": roi_none_flag,
        "debug_flag": debug_flag,
        "bet_premask_flag": bet_premask_flag,
    };
    if (mask_mask !== null) {
        params["mask_mask"] = mask_mask;
    }
    if (roi_mask !== null) {
        params["roi_mask"] = roi_mask;
    }
    if (ss_ref !== null) {
        params["ss_ref"] = ss_ref;
    }
    if (alt_input !== null) {
        params["alt_input"] = alt_input;
    }
    return params;
}


function standard_space_roi_cargs(
    params: StandardSpaceRoiParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("standard_space_roi");
    cargs.push(execution.inputFile((params["infile"] ?? null)));
    cargs.push((params["outfile"] ?? null));
    if ((params["mask_fov_flag"] ?? null)) {
        cargs.push("-maskFOV");
    }
    if ((params["mask_mask"] ?? null) !== null) {
        cargs.push(
            "-maskMASK",
            execution.inputFile((params["mask_mask"] ?? null))
        );
    }
    if ((params["mask_none_flag"] ?? null)) {
        cargs.push("-maskNONE");
    }
    if ((params["roi_fov_flag"] ?? null)) {
        cargs.push("-roiFOV");
    }
    if ((params["roi_mask"] ?? null) !== null) {
        cargs.push(
            "-roiMASK",
            execution.inputFile((params["roi_mask"] ?? null))
        );
    }
    if ((params["roi_none_flag"] ?? null)) {
        cargs.push("-roiNONE");
    }
    if ((params["ss_ref"] ?? null) !== null) {
        cargs.push(
            "-ssref",
            execution.inputFile((params["ss_ref"] ?? null))
        );
    }
    if ((params["alt_input"] ?? null) !== null) {
        cargs.push(
            "-altinput",
            execution.inputFile((params["alt_input"] ?? null))
        );
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("-d");
    }
    if ((params["bet_premask_flag"] ?? null)) {
        cargs.push("-b");
    }
    return cargs;
}


function standard_space_roi_outputs(
    params: StandardSpaceRoiParameters,
    execution: Execution,
): StandardSpaceRoiOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: StandardSpaceRoiOutputs = {
        root: execution.outputFile("."),
        out_image: execution.outputFile([(params["outfile"] ?? null)].join('')),
    };
    return ret;
}


function standard_space_roi_execute(
    params: StandardSpaceRoiParameters,
    execution: Execution,
): StandardSpaceRoiOutputs {
    /**
     * Masks input and/or reduces its FOV based on a standard space image or mask, transformed into the space of the input image.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `StandardSpaceRoiOutputs`).
     */
    params = execution.params(params)
    const cargs = standard_space_roi_cargs(params, execution)
    const ret = standard_space_roi_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function standard_space_roi(
    infile: InputPathType,
    outfile: string,
    mask_fov_flag: boolean = false,
    mask_mask: InputPathType | null = null,
    mask_none_flag: boolean = false,
    roi_fov_flag: boolean = false,
    roi_mask: InputPathType | null = null,
    roi_none_flag: boolean = false,
    ss_ref: InputPathType | null = null,
    alt_input: InputPathType | null = null,
    debug_flag: boolean = false,
    bet_premask_flag: boolean = false,
    runner: Runner | null = null,
): StandardSpaceRoiOutputs {
    /**
     * Masks input and/or reduces its FOV based on a standard space image or mask, transformed into the space of the input image.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param infile Input image
     * @param outfile Output image
     * @param mask_fov_flag Mask output using transformed standard space FOV
     * @param mask_mask Mask output using transformed standard space mask
     * @param mask_none_flag Do not mask output
     * @param roi_fov_flag Cut down input FOV using bounding box of the transformed standard space FOV
     * @param roi_mask Cut down input FOV using nonbackground bounding box of the transformed standard space mask
     * @param roi_none_flag Do not cut down input FOV
     * @param ss_ref Standard space reference image to use (default: /usr/local/fsl/data/standard/MNI152_T1)
     * @param alt_input Alternative input image to apply the ROI to (instead of the one used to register to the reference)
     * @param debug_flag Debug mode (don't delete intermediate files)
     * @param bet_premask_flag Equivalent to: -maskMASK /usr/local/fsl/data/standard/MNI152_T1_2mm_brain_mask_dil -roiNONE
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `StandardSpaceRoiOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(STANDARD_SPACE_ROI_METADATA);
    const params = standard_space_roi_params(infile, outfile, mask_fov_flag, mask_mask, mask_none_flag, roi_fov_flag, roi_mask, roi_none_flag, ss_ref, alt_input, debug_flag, bet_premask_flag)
    return standard_space_roi_execute(params, execution);
}


export {
      STANDARD_SPACE_ROI_METADATA,
      StandardSpaceRoiOutputs,
      StandardSpaceRoiParameters,
      standard_space_roi,
      standard_space_roi_params,
};
