// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MAKE_BIANCA_MASK_METADATA: Metadata = {
    id: "6301fdafc66328cb8c345bedf78a2080c05aa6ca.boutiques",
    name: "make_bianca_mask",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface MakeBiancaMaskParameters {
    "__STYXTYPE__": "make_bianca_mask";
    "input_image": InputPathType;
    "output_image": string;
    "overlay_flag": boolean;
    "binary_mask_flag": boolean;
    "approx_skull_flag": boolean;
    "no_seg_output_flag": boolean;
    "fractional_intensity"?: number | null | undefined;
    "vg_fractional_intensity"?: number | null | undefined;
    "head_radius"?: number | null | undefined;
    "center_of_gravity"?: string | null | undefined;
    "thresholding_flag": boolean;
    "vtk_mesh": boolean;
    "robust_iters_flag": boolean;
    "residual_optic_cleanup_flag": boolean;
    "reduce_bias_flag": boolean;
    "slice_padding_flag": boolean;
    "whole_set_mask_flag": boolean;
    "additional_surfaces_flag": boolean;
    "additional_surfaces_t2"?: InputPathType | null | undefined;
    "verbose_flag": boolean;
    "debug_flag": boolean;
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
        "make_bianca_mask": make_bianca_mask_cargs,
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
        "make_bianca_mask": make_bianca_mask_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `make_bianca_mask(...)`.
 *
 * @interface
 */
interface MakeBiancaMaskOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output image
     */
    output_image: OutputPathType;
}


function make_bianca_mask_params(
    input_image: InputPathType,
    output_image: string,
    overlay_flag: boolean = false,
    binary_mask_flag: boolean = false,
    approx_skull_flag: boolean = false,
    no_seg_output_flag: boolean = false,
    fractional_intensity: number | null = null,
    vg_fractional_intensity: number | null = null,
    head_radius: number | null = null,
    center_of_gravity: string | null = null,
    thresholding_flag: boolean = false,
    vtk_mesh: boolean = false,
    robust_iters_flag: boolean = false,
    residual_optic_cleanup_flag: boolean = false,
    reduce_bias_flag: boolean = false,
    slice_padding_flag: boolean = false,
    whole_set_mask_flag: boolean = false,
    additional_surfaces_flag: boolean = false,
    additional_surfaces_t2: InputPathType | null = null,
    verbose_flag: boolean = false,
    debug_flag: boolean = false,
): MakeBiancaMaskParameters {
    /**
     * Build parameters.
    
     * @param input_image Input image
     * @param output_image Output image
     * @param overlay_flag Generate brain surface outline overlaid onto original image
     * @param binary_mask_flag Generate binary brain mask
     * @param approx_skull_flag Generate approximate skull image
     * @param no_seg_output_flag Don't generate segmented brain image output
     * @param fractional_intensity Fractional intensity threshold (0->1); default=0.5; smaller values give larger brain outline estimates
     * @param vg_fractional_intensity Vertical gradient in fractional intensity threshold (-1->1); default=0; positive values give larger brain outline at bottom, smaller at top
     * @param head_radius Head radius (mm not voxels); initial surface sphere is set to half of this
     * @param center_of_gravity Centre-of-gravity (voxels not mm) of initial mesh surface.
     * @param thresholding_flag Apply thresholding to segmented brain image and mask
     * @param vtk_mesh Generates brain surface as mesh in .vtk format
     * @param robust_iters_flag Robust brain center estimation (iterates BET several times)
     * @param residual_optic_cleanup_flag Eye & optic nerve cleanup (can be useful in SIENA - disables -o option)
     * @param reduce_bias_flag Bias field & neck cleanup (can be useful in SIENA)
     * @param slice_padding_flag Improve BET if FOV is very small in Z (by temporarily padding end slices)
     * @param whole_set_mask_flag Apply to 4D FMRI data (uses -f 0.3 and dilates brain mask slightly)
     * @param additional_surfaces_flag Run bet2 and then betsurf to get additional skull and scalp surfaces (includes registrations)
     * @param additional_surfaces_t2 As with -A, when also feeding in non-brain-extracted T2 (includes registrations)
     * @param verbose_flag Verbose (switch on diagnostic messages)
     * @param debug_flag Debug (don't delete temporary intermediate images)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "make_bianca_mask" as const,
        "input_image": input_image,
        "output_image": output_image,
        "overlay_flag": overlay_flag,
        "binary_mask_flag": binary_mask_flag,
        "approx_skull_flag": approx_skull_flag,
        "no_seg_output_flag": no_seg_output_flag,
        "thresholding_flag": thresholding_flag,
        "vtk_mesh": vtk_mesh,
        "robust_iters_flag": robust_iters_flag,
        "residual_optic_cleanup_flag": residual_optic_cleanup_flag,
        "reduce_bias_flag": reduce_bias_flag,
        "slice_padding_flag": slice_padding_flag,
        "whole_set_mask_flag": whole_set_mask_flag,
        "additional_surfaces_flag": additional_surfaces_flag,
        "verbose_flag": verbose_flag,
        "debug_flag": debug_flag,
    };
    if (fractional_intensity !== null) {
        params["fractional_intensity"] = fractional_intensity;
    }
    if (vg_fractional_intensity !== null) {
        params["vg_fractional_intensity"] = vg_fractional_intensity;
    }
    if (head_radius !== null) {
        params["head_radius"] = head_radius;
    }
    if (center_of_gravity !== null) {
        params["center_of_gravity"] = center_of_gravity;
    }
    if (additional_surfaces_t2 !== null) {
        params["additional_surfaces_t2"] = additional_surfaces_t2;
    }
    return params;
}


function make_bianca_mask_cargs(
    params: MakeBiancaMaskParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("make_bianca_mask");
    cargs.push(execution.inputFile((params["input_image"] ?? null)));
    cargs.push((params["output_image"] ?? null));
    if ((params["overlay_flag"] ?? null)) {
        cargs.push("-o");
    }
    if ((params["binary_mask_flag"] ?? null)) {
        cargs.push("-m");
    }
    if ((params["approx_skull_flag"] ?? null)) {
        cargs.push("-s");
    }
    if ((params["no_seg_output_flag"] ?? null)) {
        cargs.push("-n");
    }
    if ((params["fractional_intensity"] ?? null) !== null) {
        cargs.push(
            "-f",
            String((params["fractional_intensity"] ?? null))
        );
    }
    if ((params["vg_fractional_intensity"] ?? null) !== null) {
        cargs.push(
            "-g",
            String((params["vg_fractional_intensity"] ?? null))
        );
    }
    if ((params["head_radius"] ?? null) !== null) {
        cargs.push(
            "-r",
            String((params["head_radius"] ?? null))
        );
    }
    if ((params["center_of_gravity"] ?? null) !== null) {
        cargs.push(
            "-c",
            (params["center_of_gravity"] ?? null)
        );
    }
    if ((params["thresholding_flag"] ?? null)) {
        cargs.push("-t");
    }
    if ((params["vtk_mesh"] ?? null)) {
        cargs.push("-e");
    }
    if ((params["robust_iters_flag"] ?? null)) {
        cargs.push("-R");
    }
    if ((params["residual_optic_cleanup_flag"] ?? null)) {
        cargs.push("-S");
    }
    if ((params["reduce_bias_flag"] ?? null)) {
        cargs.push("-B");
    }
    if ((params["slice_padding_flag"] ?? null)) {
        cargs.push("-Z");
    }
    if ((params["whole_set_mask_flag"] ?? null)) {
        cargs.push("-F");
    }
    if ((params["additional_surfaces_flag"] ?? null)) {
        cargs.push("-A");
    }
    if ((params["additional_surfaces_t2"] ?? null) !== null) {
        cargs.push(
            "-A2",
            execution.inputFile((params["additional_surfaces_t2"] ?? null))
        );
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("-d");
    }
    return cargs;
}


function make_bianca_mask_outputs(
    params: MakeBiancaMaskParameters,
    execution: Execution,
): MakeBiancaMaskOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MakeBiancaMaskOutputs = {
        root: execution.outputFile("."),
        output_image: execution.outputFile([(params["output_image"] ?? null)].join('')),
    };
    return ret;
}


function make_bianca_mask_execute(
    params: MakeBiancaMaskParameters,
    execution: Execution,
): MakeBiancaMaskOutputs {
    /**
     * A script for generating BIANCA masks.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MakeBiancaMaskOutputs`).
     */
    params = execution.params(params)
    const cargs = make_bianca_mask_cargs(params, execution)
    const ret = make_bianca_mask_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function make_bianca_mask(
    input_image: InputPathType,
    output_image: string,
    overlay_flag: boolean = false,
    binary_mask_flag: boolean = false,
    approx_skull_flag: boolean = false,
    no_seg_output_flag: boolean = false,
    fractional_intensity: number | null = null,
    vg_fractional_intensity: number | null = null,
    head_radius: number | null = null,
    center_of_gravity: string | null = null,
    thresholding_flag: boolean = false,
    vtk_mesh: boolean = false,
    robust_iters_flag: boolean = false,
    residual_optic_cleanup_flag: boolean = false,
    reduce_bias_flag: boolean = false,
    slice_padding_flag: boolean = false,
    whole_set_mask_flag: boolean = false,
    additional_surfaces_flag: boolean = false,
    additional_surfaces_t2: InputPathType | null = null,
    verbose_flag: boolean = false,
    debug_flag: boolean = false,
    runner: Runner | null = null,
): MakeBiancaMaskOutputs {
    /**
     * A script for generating BIANCA masks.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_image Input image
     * @param output_image Output image
     * @param overlay_flag Generate brain surface outline overlaid onto original image
     * @param binary_mask_flag Generate binary brain mask
     * @param approx_skull_flag Generate approximate skull image
     * @param no_seg_output_flag Don't generate segmented brain image output
     * @param fractional_intensity Fractional intensity threshold (0->1); default=0.5; smaller values give larger brain outline estimates
     * @param vg_fractional_intensity Vertical gradient in fractional intensity threshold (-1->1); default=0; positive values give larger brain outline at bottom, smaller at top
     * @param head_radius Head radius (mm not voxels); initial surface sphere is set to half of this
     * @param center_of_gravity Centre-of-gravity (voxels not mm) of initial mesh surface.
     * @param thresholding_flag Apply thresholding to segmented brain image and mask
     * @param vtk_mesh Generates brain surface as mesh in .vtk format
     * @param robust_iters_flag Robust brain center estimation (iterates BET several times)
     * @param residual_optic_cleanup_flag Eye & optic nerve cleanup (can be useful in SIENA - disables -o option)
     * @param reduce_bias_flag Bias field & neck cleanup (can be useful in SIENA)
     * @param slice_padding_flag Improve BET if FOV is very small in Z (by temporarily padding end slices)
     * @param whole_set_mask_flag Apply to 4D FMRI data (uses -f 0.3 and dilates brain mask slightly)
     * @param additional_surfaces_flag Run bet2 and then betsurf to get additional skull and scalp surfaces (includes registrations)
     * @param additional_surfaces_t2 As with -A, when also feeding in non-brain-extracted T2 (includes registrations)
     * @param verbose_flag Verbose (switch on diagnostic messages)
     * @param debug_flag Debug (don't delete temporary intermediate images)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MakeBiancaMaskOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MAKE_BIANCA_MASK_METADATA);
    const params = make_bianca_mask_params(input_image, output_image, overlay_flag, binary_mask_flag, approx_skull_flag, no_seg_output_flag, fractional_intensity, vg_fractional_intensity, head_radius, center_of_gravity, thresholding_flag, vtk_mesh, robust_iters_flag, residual_optic_cleanup_flag, reduce_bias_flag, slice_padding_flag, whole_set_mask_flag, additional_surfaces_flag, additional_surfaces_t2, verbose_flag, debug_flag)
    return make_bianca_mask_execute(params, execution);
}


export {
      MAKE_BIANCA_MASK_METADATA,
      MakeBiancaMaskOutputs,
      MakeBiancaMaskParameters,
      make_bianca_mask,
      make_bianca_mask_params,
};
