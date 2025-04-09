// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const BET_METADATA: Metadata = {
    id: "61dd4ff7026bdb5560e2c2e9d203eb7d67c6d7fa.boutiques",
    name: "bet",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface BetParameters {
    "__STYXTYPE__": "bet";
    "infile": InputPathType;
    "maskfile": string;
    "fractional_intensity"?: number | null | undefined;
    "vg_fractional_intensity"?: number | null | undefined;
    "center_of_gravity"?: Array<number> | null | undefined;
    "overlay": boolean;
    "binary_mask": boolean;
    "approx_skull": boolean;
    "no_seg_output": boolean;
    "vtk_mesh": boolean;
    "head_radius"?: number | null | undefined;
    "thresholding": boolean;
    "robust_iters": boolean;
    "residual_optic_cleanup": boolean;
    "reduce_bias": boolean;
    "slice_padding": boolean;
    "whole_set_mask": boolean;
    "additional_surfaces": boolean;
    "additional_surfaces_t2"?: InputPathType | null | undefined;
    "verbose": boolean;
    "debug": boolean;
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
        "bet": bet_cargs,
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
        "bet": bet_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `bet(...)`.
 *
 * @interface
 */
interface BetOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Main default mask output of BET
     */
    outfile: OutputPathType;
    /**
     * Binary mask file (from -m option)
     */
    binary_mask: OutputPathType;
    /**
     * Overlaid brain surface onto original image
     */
    overlay_file: OutputPathType;
    /**
     * Approximate skull image file
     */
    approx_skull_img: OutputPathType;
    /**
     * Mesh in VTK format
     */
    output_vtk_mesh: OutputPathType;
    /**
     * Output mask for skull image
     */
    skull_mask: OutputPathType;
    /**
     * The in-skull mask file from betsurf (from -A or -A2)
     */
    out_inskull_mask: OutputPathType;
    /**
     * The in-skull mesh file from betsurf (from -A or -A2)
     */
    out_inskull_mesh: OutputPathType;
    /**
     * The in-skull mesh .off file from betsurf (from -A or -A2)
     */
    out_inskull_off: OutputPathType;
    /**
     * The out-skin mask file from betsurf (from -A or -A2)
     */
    out_outskin_mask: OutputPathType;
    /**
     * The out-skin mesh file from betsurf (from -A or -A2)
     */
    out_outskin_mesh: OutputPathType;
    /**
     * The out-skin mesh .off file from betsurf (from -A or -A2)
     */
    out_outskin_off: OutputPathType;
    /**
     * The out-skull mask file from betsurf (from -A or -A2)
     */
    out_outskull_mask: OutputPathType;
    /**
     * The out-skull mesh file from betsurf (from -A or -A2)
     */
    out_outskull_mesh: OutputPathType;
    /**
     * The out-skull mesh .off file from betsurf (from -A or -A2)
     */
    out_outskull_off: OutputPathType;
}


function bet_params(
    infile: InputPathType,
    maskfile: string = "img_bet",
    fractional_intensity: number | null = null,
    vg_fractional_intensity: number | null = null,
    center_of_gravity: Array<number> | null = null,
    overlay: boolean = false,
    binary_mask: boolean = false,
    approx_skull: boolean = false,
    no_seg_output: boolean = false,
    vtk_mesh: boolean = false,
    head_radius: number | null = null,
    thresholding: boolean = false,
    robust_iters: boolean = false,
    residual_optic_cleanup: boolean = false,
    reduce_bias: boolean = false,
    slice_padding: boolean = false,
    whole_set_mask: boolean = false,
    additional_surfaces: boolean = false,
    additional_surfaces_t2: InputPathType | null = null,
    verbose: boolean = false,
    debug: boolean = false,
): BetParameters {
    /**
     * Build parameters.
    
     * @param infile Input image (e.g. img.nii.gz)
     * @param maskfile Output brain mask (e.g. img_bet.nii.gz)
     * @param fractional_intensity Fractional intensity threshold (0->1); default=0.5; smaller values give larger brain outline estimates
     * @param vg_fractional_intensity Vertical gradient in fractional intensity threshold (-1->1); default=0; positive values give larger brain outline at bottom, smaller at top
     * @param center_of_gravity The xyz coordinates of the center of gravity (voxels, not mm) of initial mesh surface. Must have exactly three numerical entries in the list (3-vector).
     * @param overlay Generate brain surface outline overlaid onto original image
     * @param binary_mask Generate binary brain mask
     * @param approx_skull Generate rough skull image (not as clean as betsurf)
     * @param no_seg_output Don't generate segmented brain image output
     * @param vtk_mesh Generate brain surface as mesh in .vtk format
     * @param head_radius head radius (mm not voxels); initial surface sphere is set to half of this
     * @param thresholding Apply thresholding to segmented brain image and mask
     * @param robust_iters More robust brain center estimation, by iterating BET with a changing center-of-gravity.
     * @param residual_optic_cleanup This attempts to cleanup residual eye and optic nerve voxels which bet2 can sometimes leave behind. This can be useful when running SIENA or SIENAX, for example. Various stages involving standard-space masking, morphpological operations and thresholdings are combined to produce a result which can often give better results than just running bet2.
     * @param reduce_bias This attempts to reduce image bias, and residual neck voxels. This can be useful when running SIENA or SIENAX, for example. Various stages involving FAST segmentation-based bias field removal and standard-space masking are combined to produce a result which can often give better results than just running bet2.
     * @param slice_padding This can improve the brain extraction if only a few slices are present in the data (i.e., a small field of view in the Z direction). This is achieved by padding the end slices in both directions, copying the end slices several times, running bet2 and then removing the added slices.
     * @param whole_set_mask This option uses bet2 to determine a brain mask on the basis of the first volume in a 4D data set, and applies this to the whole data set. This is principally intended for use on FMRI data, for example to remove eyeballs. Because it is normally important (in this application) that masking be liberal (ie that there be little risk of cutting out valid brain voxels) the -f threshold is reduced to 0.3, and also the brain mask is "dilated" slightly before being used.
     * @param additional_surfaces This runs both bet2 and betsurf programs in order to get the additional skull and scalp surfaces created by betsurf. This involves registering to standard space in order to allow betsurf to find the standard space masks it needs.
     * @param additional_surfaces_t2 This is the same as -A except that a T2 image is also input, to further improve the estimated skull and scalp surfaces. As well as carrying out the standard space registration this also registers the T2 to the T1 input image.
     * @param verbose Switch on diagnostic messages
     * @param debug Don't delete temporary intermediate images
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "bet" as const,
        "infile": infile,
        "maskfile": maskfile,
        "overlay": overlay,
        "binary_mask": binary_mask,
        "approx_skull": approx_skull,
        "no_seg_output": no_seg_output,
        "vtk_mesh": vtk_mesh,
        "thresholding": thresholding,
        "robust_iters": robust_iters,
        "residual_optic_cleanup": residual_optic_cleanup,
        "reduce_bias": reduce_bias,
        "slice_padding": slice_padding,
        "whole_set_mask": whole_set_mask,
        "additional_surfaces": additional_surfaces,
        "verbose": verbose,
        "debug": debug,
    };
    if (fractional_intensity !== null) {
        params["fractional_intensity"] = fractional_intensity;
    }
    if (vg_fractional_intensity !== null) {
        params["vg_fractional_intensity"] = vg_fractional_intensity;
    }
    if (center_of_gravity !== null) {
        params["center_of_gravity"] = center_of_gravity;
    }
    if (head_radius !== null) {
        params["head_radius"] = head_radius;
    }
    if (additional_surfaces_t2 !== null) {
        params["additional_surfaces_t2"] = additional_surfaces_t2;
    }
    return params;
}


function bet_cargs(
    params: BetParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("bet");
    cargs.push(execution.inputFile((params["infile"] ?? null)));
    cargs.push((params["maskfile"] ?? null));
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
    if ((params["center_of_gravity"] ?? null) !== null) {
        cargs.push(
            "-c",
            ...(params["center_of_gravity"] ?? null).map(String)
        );
    }
    if ((params["overlay"] ?? null)) {
        cargs.push("-o");
    }
    if ((params["binary_mask"] ?? null)) {
        cargs.push("-m");
    }
    if ((params["approx_skull"] ?? null)) {
        cargs.push("-s");
    }
    if ((params["no_seg_output"] ?? null)) {
        cargs.push("-n");
    }
    if ((params["vtk_mesh"] ?? null)) {
        cargs.push("-e");
    }
    if ((params["head_radius"] ?? null) !== null) {
        cargs.push(
            "-r",
            String((params["head_radius"] ?? null))
        );
    }
    if ((params["thresholding"] ?? null)) {
        cargs.push("-t");
    }
    if ((params["robust_iters"] ?? null)) {
        cargs.push("-R");
    }
    if ((params["residual_optic_cleanup"] ?? null)) {
        cargs.push("-S");
    }
    if ((params["reduce_bias"] ?? null)) {
        cargs.push("-B");
    }
    if ((params["slice_padding"] ?? null)) {
        cargs.push("-Z");
    }
    if ((params["whole_set_mask"] ?? null)) {
        cargs.push("-F");
    }
    if ((params["additional_surfaces"] ?? null)) {
        cargs.push("-A");
    }
    if ((params["additional_surfaces_t2"] ?? null) !== null) {
        cargs.push(
            "-A2",
            execution.inputFile((params["additional_surfaces_t2"] ?? null))
        );
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-d");
    }
    return cargs;
}


function bet_outputs(
    params: BetParameters,
    execution: Execution,
): BetOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: BetOutputs = {
        root: execution.outputFile("."),
        outfile: execution.outputFile([(params["maskfile"] ?? null), ".nii.gz"].join('')),
        binary_mask: execution.outputFile([(params["maskfile"] ?? null), "_mask.nii.gz"].join('')),
        overlay_file: execution.outputFile([(params["maskfile"] ?? null), "_overlay.nii.gz"].join('')),
        approx_skull_img: execution.outputFile([(params["maskfile"] ?? null), "_skull.nii.gz"].join('')),
        output_vtk_mesh: execution.outputFile([(params["maskfile"] ?? null), "_mesh.vtk"].join('')),
        skull_mask: execution.outputFile([(params["maskfile"] ?? null), "_skull_mask.nii.gz"].join('')),
        out_inskull_mask: execution.outputFile([(params["maskfile"] ?? null), "_inskull_mask.nii.gz"].join('')),
        out_inskull_mesh: execution.outputFile([(params["maskfile"] ?? null), "_inskull_mesh.nii.gz"].join('')),
        out_inskull_off: execution.outputFile([(params["maskfile"] ?? null), "_inskull_mesh.off"].join('')),
        out_outskin_mask: execution.outputFile([(params["maskfile"] ?? null), "_outskin_mask.nii.gz"].join('')),
        out_outskin_mesh: execution.outputFile([(params["maskfile"] ?? null), "_outskin_mesh.nii.gz"].join('')),
        out_outskin_off: execution.outputFile([(params["maskfile"] ?? null), "_outskin_mesh.off"].join('')),
        out_outskull_mask: execution.outputFile([(params["maskfile"] ?? null), "_outskull_mask.nii.gz"].join('')),
        out_outskull_mesh: execution.outputFile([(params["maskfile"] ?? null), "_outskull_mesh.nii.gz"].join('')),
        out_outskull_off: execution.outputFile([(params["maskfile"] ?? null), "_outskull_mesh.off"].join('')),
    };
    return ret;
}


function bet_execute(
    params: BetParameters,
    execution: Execution,
): BetOutputs {
    /**
     * Automated brain extraction tool for FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `BetOutputs`).
     */
    params = execution.params(params)
    const cargs = bet_cargs(params, execution)
    const ret = bet_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function bet(
    infile: InputPathType,
    maskfile: string = "img_bet",
    fractional_intensity: number | null = null,
    vg_fractional_intensity: number | null = null,
    center_of_gravity: Array<number> | null = null,
    overlay: boolean = false,
    binary_mask: boolean = false,
    approx_skull: boolean = false,
    no_seg_output: boolean = false,
    vtk_mesh: boolean = false,
    head_radius: number | null = null,
    thresholding: boolean = false,
    robust_iters: boolean = false,
    residual_optic_cleanup: boolean = false,
    reduce_bias: boolean = false,
    slice_padding: boolean = false,
    whole_set_mask: boolean = false,
    additional_surfaces: boolean = false,
    additional_surfaces_t2: InputPathType | null = null,
    verbose: boolean = false,
    debug: boolean = false,
    runner: Runner | null = null,
): BetOutputs {
    /**
     * Automated brain extraction tool for FSL.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param infile Input image (e.g. img.nii.gz)
     * @param maskfile Output brain mask (e.g. img_bet.nii.gz)
     * @param fractional_intensity Fractional intensity threshold (0->1); default=0.5; smaller values give larger brain outline estimates
     * @param vg_fractional_intensity Vertical gradient in fractional intensity threshold (-1->1); default=0; positive values give larger brain outline at bottom, smaller at top
     * @param center_of_gravity The xyz coordinates of the center of gravity (voxels, not mm) of initial mesh surface. Must have exactly three numerical entries in the list (3-vector).
     * @param overlay Generate brain surface outline overlaid onto original image
     * @param binary_mask Generate binary brain mask
     * @param approx_skull Generate rough skull image (not as clean as betsurf)
     * @param no_seg_output Don't generate segmented brain image output
     * @param vtk_mesh Generate brain surface as mesh in .vtk format
     * @param head_radius head radius (mm not voxels); initial surface sphere is set to half of this
     * @param thresholding Apply thresholding to segmented brain image and mask
     * @param robust_iters More robust brain center estimation, by iterating BET with a changing center-of-gravity.
     * @param residual_optic_cleanup This attempts to cleanup residual eye and optic nerve voxels which bet2 can sometimes leave behind. This can be useful when running SIENA or SIENAX, for example. Various stages involving standard-space masking, morphpological operations and thresholdings are combined to produce a result which can often give better results than just running bet2.
     * @param reduce_bias This attempts to reduce image bias, and residual neck voxels. This can be useful when running SIENA or SIENAX, for example. Various stages involving FAST segmentation-based bias field removal and standard-space masking are combined to produce a result which can often give better results than just running bet2.
     * @param slice_padding This can improve the brain extraction if only a few slices are present in the data (i.e., a small field of view in the Z direction). This is achieved by padding the end slices in both directions, copying the end slices several times, running bet2 and then removing the added slices.
     * @param whole_set_mask This option uses bet2 to determine a brain mask on the basis of the first volume in a 4D data set, and applies this to the whole data set. This is principally intended for use on FMRI data, for example to remove eyeballs. Because it is normally important (in this application) that masking be liberal (ie that there be little risk of cutting out valid brain voxels) the -f threshold is reduced to 0.3, and also the brain mask is "dilated" slightly before being used.
     * @param additional_surfaces This runs both bet2 and betsurf programs in order to get the additional skull and scalp surfaces created by betsurf. This involves registering to standard space in order to allow betsurf to find the standard space masks it needs.
     * @param additional_surfaces_t2 This is the same as -A except that a T2 image is also input, to further improve the estimated skull and scalp surfaces. As well as carrying out the standard space registration this also registers the T2 to the T1 input image.
     * @param verbose Switch on diagnostic messages
     * @param debug Don't delete temporary intermediate images
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `BetOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(BET_METADATA);
    const params = bet_params(infile, maskfile, fractional_intensity, vg_fractional_intensity, center_of_gravity, overlay, binary_mask, approx_skull, no_seg_output, vtk_mesh, head_radius, thresholding, robust_iters, residual_optic_cleanup, reduce_bias, slice_padding, whole_set_mask, additional_surfaces, additional_surfaces_t2, verbose, debug)
    return bet_execute(params, execution);
}


export {
      BET_METADATA,
      BetOutputs,
      BetParameters,
      bet,
      bet_params,
};
