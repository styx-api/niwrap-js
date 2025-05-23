// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_BLUR_IN_MASK_METADATA: Metadata = {
    id: "78220f12aa00c67903fa95e35580c1c0e4f335bd.boutiques",
    name: "3dBlurInMask",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dBlurInMaskParameters {
    "__STYXTYPE__": "3dBlurInMask";
    "input_file": InputPathType;
    "output_prefix": string;
    "fwhm": number;
    "fwhm_dataset"?: InputPathType | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "multi_mask"?: InputPathType | null | undefined;
    "automask": boolean;
    "preserve": boolean;
    "quiet": boolean;
    "float": boolean;
    "fwhm_xyz"?: Array<number> | null | undefined;
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
        "3dBlurInMask": v_3d_blur_in_mask_cargs,
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
        "3dBlurInMask": v_3d_blur_in_mask_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_blur_in_mask(...)`.
 *
 * @interface
 */
interface V3dBlurInMaskOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset
     */
    output_file: OutputPathType;
}


function v_3d_blur_in_mask_params(
    input_file: InputPathType,
    output_prefix: string,
    fwhm: number,
    fwhm_dataset: InputPathType | null = null,
    mask: InputPathType | null = null,
    multi_mask: InputPathType | null = null,
    automask: boolean = false,
    preserve: boolean = false,
    quiet: boolean = false,
    float: boolean = false,
    fwhm_xyz: Array<number> | null = null,
): V3dBlurInMaskParameters {
    /**
     * Build parameters.
    
     * @param input_file Dataset to be smoothed and output
     * @param output_prefix Prefix for output dataset
     * @param fwhm Amount of smoothness to add to the dataset (in mm)
     * @param fwhm_dataset Dataset containing the amount of smoothness for each voxel
     * @param mask Mask dataset for blurring; voxels NOT in the mask will be zeroed in the output
     * @param multi_mask Multi-mask dataset; each distinct nonzero value is treated as a separate mask
     * @param automask Create an automask from the input dataset
     * @param preserve Preserve original values in the dataset outside the mask
     * @param quiet Don't be verbose with progress reports
     * @param float Save dataset as floats
     * @param fwhm_xyz Add different amounts of smoothness in the 3 spatial directions
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dBlurInMask" as const,
        "input_file": input_file,
        "output_prefix": output_prefix,
        "fwhm": fwhm,
        "automask": automask,
        "preserve": preserve,
        "quiet": quiet,
        "float": float,
    };
    if (fwhm_dataset !== null) {
        params["fwhm_dataset"] = fwhm_dataset;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (multi_mask !== null) {
        params["multi_mask"] = multi_mask;
    }
    if (fwhm_xyz !== null) {
        params["fwhm_xyz"] = fwhm_xyz;
    }
    return params;
}


function v_3d_blur_in_mask_cargs(
    params: V3dBlurInMaskParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dBlurInMask");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push((params["output_prefix"] ?? null));
    cargs.push(
        "-FWHM",
        String((params["fwhm"] ?? null))
    );
    if ((params["fwhm_dataset"] ?? null) !== null) {
        cargs.push(
            "-FWHMdset",
            execution.inputFile((params["fwhm_dataset"] ?? null))
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["multi_mask"] ?? null) !== null) {
        cargs.push(
            "-Mmask",
            execution.inputFile((params["multi_mask"] ?? null))
        );
    }
    if ((params["automask"] ?? null)) {
        cargs.push("-automask");
    }
    if ((params["preserve"] ?? null)) {
        cargs.push("-preserve");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["float"] ?? null)) {
        cargs.push("-float");
    }
    if ((params["fwhm_xyz"] ?? null) !== null) {
        cargs.push(
            "-FWHMxyz",
            ...(params["fwhm_xyz"] ?? null).map(String)
        );
    }
    return cargs;
}


function v_3d_blur_in_mask_outputs(
    params: V3dBlurInMaskParameters,
    execution: Execution,
): V3dBlurInMaskOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dBlurInMaskOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_prefix"] ?? null)].join('')),
    };
    return ret;
}


function v_3d_blur_in_mask_execute(
    params: V3dBlurInMaskParameters,
    execution: Execution,
): V3dBlurInMaskOutputs {
    /**
     * Blurs a dataset spatially inside a mask.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dBlurInMaskOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_blur_in_mask_cargs(params, execution)
    const ret = v_3d_blur_in_mask_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_blur_in_mask(
    input_file: InputPathType,
    output_prefix: string,
    fwhm: number,
    fwhm_dataset: InputPathType | null = null,
    mask: InputPathType | null = null,
    multi_mask: InputPathType | null = null,
    automask: boolean = false,
    preserve: boolean = false,
    quiet: boolean = false,
    float: boolean = false,
    fwhm_xyz: Array<number> | null = null,
    runner: Runner | null = null,
): V3dBlurInMaskOutputs {
    /**
     * Blurs a dataset spatially inside a mask.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Dataset to be smoothed and output
     * @param output_prefix Prefix for output dataset
     * @param fwhm Amount of smoothness to add to the dataset (in mm)
     * @param fwhm_dataset Dataset containing the amount of smoothness for each voxel
     * @param mask Mask dataset for blurring; voxels NOT in the mask will be zeroed in the output
     * @param multi_mask Multi-mask dataset; each distinct nonzero value is treated as a separate mask
     * @param automask Create an automask from the input dataset
     * @param preserve Preserve original values in the dataset outside the mask
     * @param quiet Don't be verbose with progress reports
     * @param float Save dataset as floats
     * @param fwhm_xyz Add different amounts of smoothness in the 3 spatial directions
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dBlurInMaskOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_BLUR_IN_MASK_METADATA);
    const params = v_3d_blur_in_mask_params(input_file, output_prefix, fwhm, fwhm_dataset, mask, multi_mask, automask, preserve, quiet, float, fwhm_xyz)
    return v_3d_blur_in_mask_execute(params, execution);
}


export {
      V3dBlurInMaskOutputs,
      V3dBlurInMaskParameters,
      V_3D_BLUR_IN_MASK_METADATA,
      v_3d_blur_in_mask,
      v_3d_blur_in_mask_params,
};
