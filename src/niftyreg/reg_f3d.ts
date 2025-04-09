// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const REG_F3D_METADATA: Metadata = {
    id: "b0005566615144d0f1aa5363cca293da625d3971.boutiques",
    name: "reg_f3d",
    package: "niftyreg",
    container_image_tag: "vnmd/niftyreg_1.4.0:20220819",
};


interface RegF3dParameters {
    "__STYXTYPE__": "reg_f3d";
    "reference_image": InputPathType;
    "floating_image": InputPathType;
    "affine_transform"?: InputPathType | null | undefined;
    "flirt_affine_transform"?: InputPathType | null | undefined;
    "control_point_grid_input"?: InputPathType | null | undefined;
    "output_cpp"?: string | null | undefined;
    "output_resampled_image"?: string | null | undefined;
    "reference_mask"?: InputPathType | null | undefined;
    "smooth_reference"?: number | null | undefined;
    "smooth_floating"?: number | null | undefined;
    "num_bins_joint_histogram"?: number | null | undefined;
    "num_bins_floating_joint_histogram"?: number | null | undefined;
    "lower_threshold_reference"?: number | null | undefined;
    "upper_threshold_reference"?: number | null | undefined;
    "lower_threshold_floating"?: number | null | undefined;
    "upper_threshold_floating"?: number | null | undefined;
    "spacing_x"?: number | null | undefined;
    "spacing_y"?: number | null | undefined;
    "spacing_z"?: number | null | undefined;
    "bending_energy"?: number | null | undefined;
    "linear_elasticity"?: Array<number> | null | undefined;
    "l2_norm_displacement"?: number | null | undefined;
    "jacobian_determinant"?: number | null | undefined;
    "no_approx_jl": boolean;
    "no_conj": boolean;
    "ssd": boolean;
    "kld": boolean;
    "amc": boolean;
    "max_iterations"?: number | null | undefined;
    "num_levels"?: number | null | undefined;
    "first_levels"?: number | null | undefined;
    "no_pyramid": boolean;
    "symmetric": boolean;
    "floating_mask"?: InputPathType | null | undefined;
    "inverse_consistency"?: number | null | undefined;
    "velocity_field": boolean;
    "composition_steps"?: number | null | undefined;
    "smooth_gradient"?: number | null | undefined;
    "padding_value"?: number | null | undefined;
    "verbose_off": boolean;
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
        "reg_f3d": reg_f3d_cargs,
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
        "reg_f3d": reg_f3d_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `reg_f3d(...)`.
 *
 * @interface
 */
interface RegF3dOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File containing the output control point grid
     */
    output_cpp_file: OutputPathType | null;
    /**
     * File containing the resampled image
     */
    output_resampled_image_file: OutputPathType | null;
}


function reg_f3d_params(
    reference_image: InputPathType,
    floating_image: InputPathType,
    affine_transform: InputPathType | null = null,
    flirt_affine_transform: InputPathType | null = null,
    control_point_grid_input: InputPathType | null = null,
    output_cpp: string | null = null,
    output_resampled_image: string | null = null,
    reference_mask: InputPathType | null = null,
    smooth_reference: number | null = null,
    smooth_floating: number | null = null,
    num_bins_joint_histogram: number | null = null,
    num_bins_floating_joint_histogram: number | null = null,
    lower_threshold_reference: number | null = null,
    upper_threshold_reference: number | null = null,
    lower_threshold_floating: number | null = null,
    upper_threshold_floating: number | null = null,
    spacing_x: number | null = null,
    spacing_y: number | null = null,
    spacing_z: number | null = null,
    bending_energy: number | null = null,
    linear_elasticity: Array<number> | null = null,
    l2_norm_displacement: number | null = null,
    jacobian_determinant: number | null = null,
    no_approx_jl: boolean = false,
    no_conj: boolean = false,
    ssd: boolean = false,
    kld: boolean = false,
    amc: boolean = false,
    max_iterations: number | null = null,
    num_levels: number | null = null,
    first_levels: number | null = null,
    no_pyramid: boolean = false,
    symmetric: boolean = false,
    floating_mask: InputPathType | null = null,
    inverse_consistency: number | null = null,
    velocity_field: boolean = false,
    composition_steps: number | null = null,
    smooth_gradient: number | null = null,
    padding_value: number | null = null,
    verbose_off: boolean = false,
): RegF3dParameters {
    /**
     * Build parameters.
    
     * @param reference_image Filename of the reference image
     * @param floating_image Filename of the floating image
     * @param affine_transform Filename which contains an affine transformation
     * @param flirt_affine_transform Filename which contains a flirt affine transformation
     * @param control_point_grid_input Filename of control point grid input
     * @param output_cpp Filename of control point grid
     * @param output_resampled_image Filename of the resampled image
     * @param reference_mask Filename of a mask image in the reference space
     * @param smooth_reference Smooth the reference image using the specified sigma (mm)
     * @param smooth_floating Smooth the floating image using the specified sigma (mm)
     * @param num_bins_joint_histogram Number of bins to use for the joint histogram (reference)
     * @param num_bins_floating_joint_histogram Number of bins to use for the joint histogram (floating)
     * @param lower_threshold_reference Lower threshold to apply to the reference image intensities
     * @param upper_threshold_reference Upper threshold to apply to the reference image intensities
     * @param lower_threshold_floating Lower threshold to apply to the floating image intensities
     * @param upper_threshold_floating Upper threshold to apply to the floating image intensities
     * @param spacing_x Final grid spacing along the x axis in mm (or in voxel if negative value)
     * @param spacing_y Final grid spacing along the y axis in mm (or in voxel if negative value)
     * @param spacing_z Final grid spacing along the z axis in mm (or in voxel if negative value)
     * @param bending_energy Weight of the bending energy penalty term
     * @param linear_elasticity Weights of linear elasticity penalty term
     * @param l2_norm_displacement Weight of L2 norm displacement penalty term
     * @param jacobian_determinant Weight of log of the Jacobian determinant penalty term
     * @param no_approx_jl Do not approximate the JL value only at the control point position
     * @param no_conj Do not use the conjugate gradient optimization but a simple gradient ascent
     * @param ssd Use the SSD as the similarity measure instead of NMI
     * @param kld Use the KL divergence as the similarity measure instead of NMI
     * @param amc Use the additive NMI for multichannel data
     * @param max_iterations Maximal number of iterations per level
     * @param num_levels Number of levels to perform
     * @param first_levels Only perform the first levels
     * @param no_pyramid Do not use a pyramidal approach
     * @param symmetric Use symmetric approach
     * @param floating_mask Filename of a mask image in the floating space
     * @param inverse_consistency Weight of the inverse consistency penalty term
     * @param velocity_field Use velocity field integration to generate the deformation
     * @param composition_steps Number of composition steps
     * @param smooth_gradient Smooth the metric derivative (in mm)
     * @param padding_value Padding value
     * @param verbose_off Turn verbose off
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "reg_f3d" as const,
        "reference_image": reference_image,
        "floating_image": floating_image,
        "no_approx_jl": no_approx_jl,
        "no_conj": no_conj,
        "ssd": ssd,
        "kld": kld,
        "amc": amc,
        "no_pyramid": no_pyramid,
        "symmetric": symmetric,
        "velocity_field": velocity_field,
        "verbose_off": verbose_off,
    };
    if (affine_transform !== null) {
        params["affine_transform"] = affine_transform;
    }
    if (flirt_affine_transform !== null) {
        params["flirt_affine_transform"] = flirt_affine_transform;
    }
    if (control_point_grid_input !== null) {
        params["control_point_grid_input"] = control_point_grid_input;
    }
    if (output_cpp !== null) {
        params["output_cpp"] = output_cpp;
    }
    if (output_resampled_image !== null) {
        params["output_resampled_image"] = output_resampled_image;
    }
    if (reference_mask !== null) {
        params["reference_mask"] = reference_mask;
    }
    if (smooth_reference !== null) {
        params["smooth_reference"] = smooth_reference;
    }
    if (smooth_floating !== null) {
        params["smooth_floating"] = smooth_floating;
    }
    if (num_bins_joint_histogram !== null) {
        params["num_bins_joint_histogram"] = num_bins_joint_histogram;
    }
    if (num_bins_floating_joint_histogram !== null) {
        params["num_bins_floating_joint_histogram"] = num_bins_floating_joint_histogram;
    }
    if (lower_threshold_reference !== null) {
        params["lower_threshold_reference"] = lower_threshold_reference;
    }
    if (upper_threshold_reference !== null) {
        params["upper_threshold_reference"] = upper_threshold_reference;
    }
    if (lower_threshold_floating !== null) {
        params["lower_threshold_floating"] = lower_threshold_floating;
    }
    if (upper_threshold_floating !== null) {
        params["upper_threshold_floating"] = upper_threshold_floating;
    }
    if (spacing_x !== null) {
        params["spacing_x"] = spacing_x;
    }
    if (spacing_y !== null) {
        params["spacing_y"] = spacing_y;
    }
    if (spacing_z !== null) {
        params["spacing_z"] = spacing_z;
    }
    if (bending_energy !== null) {
        params["bending_energy"] = bending_energy;
    }
    if (linear_elasticity !== null) {
        params["linear_elasticity"] = linear_elasticity;
    }
    if (l2_norm_displacement !== null) {
        params["l2_norm_displacement"] = l2_norm_displacement;
    }
    if (jacobian_determinant !== null) {
        params["jacobian_determinant"] = jacobian_determinant;
    }
    if (max_iterations !== null) {
        params["max_iterations"] = max_iterations;
    }
    if (num_levels !== null) {
        params["num_levels"] = num_levels;
    }
    if (first_levels !== null) {
        params["first_levels"] = first_levels;
    }
    if (floating_mask !== null) {
        params["floating_mask"] = floating_mask;
    }
    if (inverse_consistency !== null) {
        params["inverse_consistency"] = inverse_consistency;
    }
    if (composition_steps !== null) {
        params["composition_steps"] = composition_steps;
    }
    if (smooth_gradient !== null) {
        params["smooth_gradient"] = smooth_gradient;
    }
    if (padding_value !== null) {
        params["padding_value"] = padding_value;
    }
    return params;
}


function reg_f3d_cargs(
    params: RegF3dParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("reg_f3d");
    cargs.push(
        "-ref",
        execution.inputFile((params["reference_image"] ?? null))
    );
    cargs.push(
        "-flo",
        execution.inputFile((params["floating_image"] ?? null))
    );
    if ((params["affine_transform"] ?? null) !== null) {
        cargs.push(
            "-aff",
            execution.inputFile((params["affine_transform"] ?? null))
        );
    }
    if ((params["flirt_affine_transform"] ?? null) !== null) {
        cargs.push(
            "-affFlirt",
            execution.inputFile((params["flirt_affine_transform"] ?? null))
        );
    }
    if ((params["control_point_grid_input"] ?? null) !== null) {
        cargs.push(
            "-incpp",
            execution.inputFile((params["control_point_grid_input"] ?? null))
        );
    }
    if ((params["output_cpp"] ?? null) !== null) {
        cargs.push(
            "-cpp",
            (params["output_cpp"] ?? null)
        );
    }
    if ((params["output_resampled_image"] ?? null) !== null) {
        cargs.push(
            "-res",
            (params["output_resampled_image"] ?? null)
        );
    }
    if ((params["reference_mask"] ?? null) !== null) {
        cargs.push(
            "-rmask",
            execution.inputFile((params["reference_mask"] ?? null))
        );
    }
    if ((params["smooth_reference"] ?? null) !== null) {
        cargs.push(
            "-smooR",
            String((params["smooth_reference"] ?? null))
        );
    }
    if ((params["smooth_floating"] ?? null) !== null) {
        cargs.push(
            "-smooF",
            String((params["smooth_floating"] ?? null))
        );
    }
    if ((params["num_bins_joint_histogram"] ?? null) !== null) {
        cargs.push(
            "--rbn",
            String((params["num_bins_joint_histogram"] ?? null))
        );
    }
    if ((params["num_bins_floating_joint_histogram"] ?? null) !== null) {
        cargs.push(
            "--fbn",
            String((params["num_bins_floating_joint_histogram"] ?? null))
        );
    }
    if ((params["lower_threshold_reference"] ?? null) !== null) {
        cargs.push(
            "--rLwTh",
            String((params["lower_threshold_reference"] ?? null))
        );
    }
    if ((params["upper_threshold_reference"] ?? null) !== null) {
        cargs.push(
            "--rUpTh",
            String((params["upper_threshold_reference"] ?? null))
        );
    }
    if ((params["lower_threshold_floating"] ?? null) !== null) {
        cargs.push(
            "--fLwTh",
            String((params["lower_threshold_floating"] ?? null))
        );
    }
    if ((params["upper_threshold_floating"] ?? null) !== null) {
        cargs.push(
            "--fUpTh",
            String((params["upper_threshold_floating"] ?? null))
        );
    }
    if ((params["spacing_x"] ?? null) !== null) {
        cargs.push(
            "-sx",
            String((params["spacing_x"] ?? null))
        );
    }
    if ((params["spacing_y"] ?? null) !== null) {
        cargs.push(
            "-sy",
            String((params["spacing_y"] ?? null))
        );
    }
    if ((params["spacing_z"] ?? null) !== null) {
        cargs.push(
            "-sz",
            String((params["spacing_z"] ?? null))
        );
    }
    if ((params["bending_energy"] ?? null) !== null) {
        cargs.push(
            "-be",
            String((params["bending_energy"] ?? null))
        );
    }
    if ((params["linear_elasticity"] ?? null) !== null) {
        cargs.push(
            "-le",
            ...(params["linear_elasticity"] ?? null).map(String)
        );
    }
    if ((params["l2_norm_displacement"] ?? null) !== null) {
        cargs.push(
            "-l2",
            String((params["l2_norm_displacement"] ?? null))
        );
    }
    if ((params["jacobian_determinant"] ?? null) !== null) {
        cargs.push(
            "-jl",
            String((params["jacobian_determinant"] ?? null))
        );
    }
    if ((params["no_approx_jl"] ?? null)) {
        cargs.push("-noAppJL");
    }
    if ((params["no_conj"] ?? null)) {
        cargs.push("-noConj");
    }
    if ((params["ssd"] ?? null)) {
        cargs.push("-ssd");
    }
    if ((params["kld"] ?? null)) {
        cargs.push("-kld");
    }
    if ((params["amc"] ?? null)) {
        cargs.push("-amc");
    }
    if ((params["max_iterations"] ?? null) !== null) {
        cargs.push(
            "-maxit",
            String((params["max_iterations"] ?? null))
        );
    }
    if ((params["num_levels"] ?? null) !== null) {
        cargs.push(
            "-ln",
            String((params["num_levels"] ?? null))
        );
    }
    if ((params["first_levels"] ?? null) !== null) {
        cargs.push(
            "-lp",
            String((params["first_levels"] ?? null))
        );
    }
    if ((params["no_pyramid"] ?? null)) {
        cargs.push("-nopy");
    }
    if ((params["symmetric"] ?? null)) {
        cargs.push("-sym");
    }
    if ((params["floating_mask"] ?? null) !== null) {
        cargs.push(
            "-fmask",
            execution.inputFile((params["floating_mask"] ?? null))
        );
    }
    if ((params["inverse_consistency"] ?? null) !== null) {
        cargs.push(
            "-ic",
            String((params["inverse_consistency"] ?? null))
        );
    }
    if ((params["velocity_field"] ?? null)) {
        cargs.push("-vel");
    }
    if ((params["composition_steps"] ?? null) !== null) {
        cargs.push(
            "-step",
            String((params["composition_steps"] ?? null))
        );
    }
    if ((params["smooth_gradient"] ?? null) !== null) {
        cargs.push(
            "-smoothGrad",
            String((params["smooth_gradient"] ?? null))
        );
    }
    if ((params["padding_value"] ?? null) !== null) {
        cargs.push(
            "-pad",
            String((params["padding_value"] ?? null))
        );
    }
    if ((params["verbose_off"] ?? null)) {
        cargs.push("-voff");
    }
    return cargs;
}


function reg_f3d_outputs(
    params: RegF3dParameters,
    execution: Execution,
): RegF3dOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: RegF3dOutputs = {
        root: execution.outputFile("."),
        output_cpp_file: ((params["output_cpp"] ?? null) !== null) ? execution.outputFile([(params["output_cpp"] ?? null)].join('')) : null,
        output_resampled_image_file: ((params["output_resampled_image"] ?? null) !== null) ? execution.outputFile([(params["output_resampled_image"] ?? null)].join('')) : null,
    };
    return ret;
}


function reg_f3d_execute(
    params: RegF3dParameters,
    execution: Execution,
): RegF3dOutputs {
    /**
     * Fast Free-Form Deformation algorithm for non-rigid registration based on Rueckert's 99 TMI work.
     * 
     * Author: NiftyReg Developers
     * 
     * URL: http://cmictig.cs.ucl.ac.uk/wiki/index.php/NiftyReg
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `RegF3dOutputs`).
     */
    params = execution.params(params)
    const cargs = reg_f3d_cargs(params, execution)
    const ret = reg_f3d_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function reg_f3d(
    reference_image: InputPathType,
    floating_image: InputPathType,
    affine_transform: InputPathType | null = null,
    flirt_affine_transform: InputPathType | null = null,
    control_point_grid_input: InputPathType | null = null,
    output_cpp: string | null = null,
    output_resampled_image: string | null = null,
    reference_mask: InputPathType | null = null,
    smooth_reference: number | null = null,
    smooth_floating: number | null = null,
    num_bins_joint_histogram: number | null = null,
    num_bins_floating_joint_histogram: number | null = null,
    lower_threshold_reference: number | null = null,
    upper_threshold_reference: number | null = null,
    lower_threshold_floating: number | null = null,
    upper_threshold_floating: number | null = null,
    spacing_x: number | null = null,
    spacing_y: number | null = null,
    spacing_z: number | null = null,
    bending_energy: number | null = null,
    linear_elasticity: Array<number> | null = null,
    l2_norm_displacement: number | null = null,
    jacobian_determinant: number | null = null,
    no_approx_jl: boolean = false,
    no_conj: boolean = false,
    ssd: boolean = false,
    kld: boolean = false,
    amc: boolean = false,
    max_iterations: number | null = null,
    num_levels: number | null = null,
    first_levels: number | null = null,
    no_pyramid: boolean = false,
    symmetric: boolean = false,
    floating_mask: InputPathType | null = null,
    inverse_consistency: number | null = null,
    velocity_field: boolean = false,
    composition_steps: number | null = null,
    smooth_gradient: number | null = null,
    padding_value: number | null = null,
    verbose_off: boolean = false,
    runner: Runner | null = null,
): RegF3dOutputs {
    /**
     * Fast Free-Form Deformation algorithm for non-rigid registration based on Rueckert's 99 TMI work.
     * 
     * Author: NiftyReg Developers
     * 
     * URL: http://cmictig.cs.ucl.ac.uk/wiki/index.php/NiftyReg
    
     * @param reference_image Filename of the reference image
     * @param floating_image Filename of the floating image
     * @param affine_transform Filename which contains an affine transformation
     * @param flirt_affine_transform Filename which contains a flirt affine transformation
     * @param control_point_grid_input Filename of control point grid input
     * @param output_cpp Filename of control point grid
     * @param output_resampled_image Filename of the resampled image
     * @param reference_mask Filename of a mask image in the reference space
     * @param smooth_reference Smooth the reference image using the specified sigma (mm)
     * @param smooth_floating Smooth the floating image using the specified sigma (mm)
     * @param num_bins_joint_histogram Number of bins to use for the joint histogram (reference)
     * @param num_bins_floating_joint_histogram Number of bins to use for the joint histogram (floating)
     * @param lower_threshold_reference Lower threshold to apply to the reference image intensities
     * @param upper_threshold_reference Upper threshold to apply to the reference image intensities
     * @param lower_threshold_floating Lower threshold to apply to the floating image intensities
     * @param upper_threshold_floating Upper threshold to apply to the floating image intensities
     * @param spacing_x Final grid spacing along the x axis in mm (or in voxel if negative value)
     * @param spacing_y Final grid spacing along the y axis in mm (or in voxel if negative value)
     * @param spacing_z Final grid spacing along the z axis in mm (or in voxel if negative value)
     * @param bending_energy Weight of the bending energy penalty term
     * @param linear_elasticity Weights of linear elasticity penalty term
     * @param l2_norm_displacement Weight of L2 norm displacement penalty term
     * @param jacobian_determinant Weight of log of the Jacobian determinant penalty term
     * @param no_approx_jl Do not approximate the JL value only at the control point position
     * @param no_conj Do not use the conjugate gradient optimization but a simple gradient ascent
     * @param ssd Use the SSD as the similarity measure instead of NMI
     * @param kld Use the KL divergence as the similarity measure instead of NMI
     * @param amc Use the additive NMI for multichannel data
     * @param max_iterations Maximal number of iterations per level
     * @param num_levels Number of levels to perform
     * @param first_levels Only perform the first levels
     * @param no_pyramid Do not use a pyramidal approach
     * @param symmetric Use symmetric approach
     * @param floating_mask Filename of a mask image in the floating space
     * @param inverse_consistency Weight of the inverse consistency penalty term
     * @param velocity_field Use velocity field integration to generate the deformation
     * @param composition_steps Number of composition steps
     * @param smooth_gradient Smooth the metric derivative (in mm)
     * @param padding_value Padding value
     * @param verbose_off Turn verbose off
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `RegF3dOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(REG_F3D_METADATA);
    const params = reg_f3d_params(reference_image, floating_image, affine_transform, flirt_affine_transform, control_point_grid_input, output_cpp, output_resampled_image, reference_mask, smooth_reference, smooth_floating, num_bins_joint_histogram, num_bins_floating_joint_histogram, lower_threshold_reference, upper_threshold_reference, lower_threshold_floating, upper_threshold_floating, spacing_x, spacing_y, spacing_z, bending_energy, linear_elasticity, l2_norm_displacement, jacobian_determinant, no_approx_jl, no_conj, ssd, kld, amc, max_iterations, num_levels, first_levels, no_pyramid, symmetric, floating_mask, inverse_consistency, velocity_field, composition_steps, smooth_gradient, padding_value, verbose_off)
    return reg_f3d_execute(params, execution);
}


export {
      REG_F3D_METADATA,
      RegF3dOutputs,
      RegF3dParameters,
      reg_f3d,
      reg_f3d_params,
};
