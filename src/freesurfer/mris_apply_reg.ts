// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_APPLY_REG_METADATA: Metadata = {
    id: "d83a6dd6faa7d3c0b5d21dce1759961d05ea7655.boutiques",
    name: "mris_apply_reg",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisApplyRegParameters {
    "__STYXTYPE__": "mris_apply_reg";
    "src_input": InputPathType;
    "trg_output": string;
    "streg_pair": string;
    "src_label"?: InputPathType | null | undefined;
    "src_annotation"?: InputPathType | null | undefined;
    "src_xyz"?: InputPathType | null | undefined;
    "jacobian": boolean;
    "no_reverse": boolean;
    "rand_noise": boolean;
    "replace_ones": boolean;
    "center_output": boolean;
    "curv_format": boolean;
    "lta_transform"?: string | null | undefined;
    "lta_patch_transform"?: string | null | undefined;
    "reverse_surface"?: string | null | undefined;
    "patch_apply"?: string | null | undefined;
    "save_vertex_pair"?: InputPathType | null | undefined;
    "m3z_transform"?: string | null | undefined;
    "inv_m3z_transform"?: string | null | undefined;
    "src_reg_scale"?: number | null | undefined;
    "trg_reg_scale"?: number | null | undefined;
    "debug_mode": boolean;
    "check_options": boolean;
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
        "mris_apply_reg": mris_apply_reg_cargs,
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
        "mris_apply_reg": mris_apply_reg_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_apply_reg(...)`.
 *
 * @interface
 */
interface MrisApplyRegOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output file resulting from registration
     */
    output_result: OutputPathType;
}


function mris_apply_reg_params(
    src_input: InputPathType,
    trg_output: string,
    streg_pair: string,
    src_label: InputPathType | null = null,
    src_annotation: InputPathType | null = null,
    src_xyz: InputPathType | null = null,
    jacobian: boolean = false,
    no_reverse: boolean = false,
    rand_noise: boolean = false,
    replace_ones: boolean = false,
    center_output: boolean = false,
    curv_format: boolean = false,
    lta_transform: string | null = null,
    lta_patch_transform: string | null = null,
    reverse_surface: string | null = null,
    patch_apply: string | null = null,
    save_vertex_pair: InputPathType | null = null,
    m3z_transform: string | null = null,
    inv_m3z_transform: string | null = null,
    src_reg_scale: number | null = null,
    trg_reg_scale: number | null = null,
    debug_mode: boolean = false,
    check_options: boolean = false,
): MrisApplyRegParameters {
    /**
     * Build parameters.
    
     * @param src_input Source values (surface overlay)
     * @param trg_output Target output file
     * @param streg_pair Source and target registration file pair
     * @param src_label Source label file (implies --no-rev)
     * @param src_annotation Source annotation file (implies --no-rev)
     * @param src_xyz XYZ coordinates from the given surface file as input
     * @param jacobian Use jacobian correction
     * @param no_reverse Do not do reverse mapping
     * @param rand_noise Replace input with white Gaussian noise
     * @param replace_ones Replace input with ones
     * @param center_output Place the center of the output surface at (0,0,0)
     * @param curv_format Save output in curvature file format
     * @param lta_transform Apply LTA transform to the surface
     * @param lta_patch_transform Apply LTA transform to surface patch
     * @param reverse_surface LR reverse surface with optional patch
     * @param patch_apply Apply patch for each --streg
     * @param save_vertex_pair Save vertex pairs from source and target surfaces
     * @param m3z_transform Apply M3Z transform
     * @param inv_m3z_transform Apply inverse M3Z transform
     * @param src_reg_scale Scale the coordinates of the first surface
     * @param trg_reg_scale Scale the coordinates of the last surface
     * @param debug_mode Turn on debugging
     * @param check_options Check options without executing anything
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_apply_reg" as const,
        "src_input": src_input,
        "trg_output": trg_output,
        "streg_pair": streg_pair,
        "jacobian": jacobian,
        "no_reverse": no_reverse,
        "rand_noise": rand_noise,
        "replace_ones": replace_ones,
        "center_output": center_output,
        "curv_format": curv_format,
        "debug_mode": debug_mode,
        "check_options": check_options,
    };
    if (src_label !== null) {
        params["src_label"] = src_label;
    }
    if (src_annotation !== null) {
        params["src_annotation"] = src_annotation;
    }
    if (src_xyz !== null) {
        params["src_xyz"] = src_xyz;
    }
    if (lta_transform !== null) {
        params["lta_transform"] = lta_transform;
    }
    if (lta_patch_transform !== null) {
        params["lta_patch_transform"] = lta_patch_transform;
    }
    if (reverse_surface !== null) {
        params["reverse_surface"] = reverse_surface;
    }
    if (patch_apply !== null) {
        params["patch_apply"] = patch_apply;
    }
    if (save_vertex_pair !== null) {
        params["save_vertex_pair"] = save_vertex_pair;
    }
    if (m3z_transform !== null) {
        params["m3z_transform"] = m3z_transform;
    }
    if (inv_m3z_transform !== null) {
        params["inv_m3z_transform"] = inv_m3z_transform;
    }
    if (src_reg_scale !== null) {
        params["src_reg_scale"] = src_reg_scale;
    }
    if (trg_reg_scale !== null) {
        params["trg_reg_scale"] = trg_reg_scale;
    }
    return params;
}


function mris_apply_reg_cargs(
    params: MrisApplyRegParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_apply_reg");
    cargs.push(
        "--src",
        execution.inputFile((params["src_input"] ?? null))
    );
    cargs.push(
        "--trg",
        (params["trg_output"] ?? null)
    );
    cargs.push(
        "--streg",
        (params["streg_pair"] ?? null)
    );
    if ((params["src_label"] ?? null) !== null) {
        cargs.push(
            "--src-label",
            execution.inputFile((params["src_label"] ?? null))
        );
    }
    if ((params["src_annotation"] ?? null) !== null) {
        cargs.push(
            "--src-annot",
            execution.inputFile((params["src_annotation"] ?? null))
        );
    }
    if ((params["src_xyz"] ?? null) !== null) {
        cargs.push(
            "--src-xyz",
            execution.inputFile((params["src_xyz"] ?? null))
        );
    }
    if ((params["jacobian"] ?? null)) {
        cargs.push("--jac");
    }
    if ((params["no_reverse"] ?? null)) {
        cargs.push("--no-rev");
    }
    if ((params["rand_noise"] ?? null)) {
        cargs.push("--randn");
    }
    if ((params["replace_ones"] ?? null)) {
        cargs.push("--ones");
    }
    if ((params["center_output"] ?? null)) {
        cargs.push("--center");
    }
    if ((params["curv_format"] ?? null)) {
        cargs.push("--curv");
    }
    if ((params["lta_transform"] ?? null) !== null) {
        cargs.push(
            "--lta",
            (params["lta_transform"] ?? null)
        );
    }
    if ((params["lta_patch_transform"] ?? null) !== null) {
        cargs.push(
            "--lta-patch",
            (params["lta_patch_transform"] ?? null)
        );
    }
    if ((params["reverse_surface"] ?? null) !== null) {
        cargs.push(
            "--reverse",
            (params["reverse_surface"] ?? null)
        );
    }
    if ((params["patch_apply"] ?? null) !== null) {
        cargs.push(
            "--patch",
            (params["patch_apply"] ?? null)
        );
    }
    if ((params["save_vertex_pair"] ?? null) !== null) {
        cargs.push(
            "--stvpair",
            execution.inputFile((params["save_vertex_pair"] ?? null))
        );
    }
    if ((params["m3z_transform"] ?? null) !== null) {
        cargs.push(
            "--m3z",
            (params["m3z_transform"] ?? null)
        );
    }
    if ((params["inv_m3z_transform"] ?? null) !== null) {
        cargs.push(
            "--inv-m3z",
            (params["inv_m3z_transform"] ?? null)
        );
    }
    if ((params["src_reg_scale"] ?? null) !== null) {
        cargs.push(
            "--src-reg-scale",
            String((params["src_reg_scale"] ?? null))
        );
    }
    if ((params["trg_reg_scale"] ?? null) !== null) {
        cargs.push(
            "--trg-reg-scale",
            String((params["trg_reg_scale"] ?? null))
        );
    }
    if ((params["debug_mode"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["check_options"] ?? null)) {
        cargs.push("--checkopts");
    }
    return cargs;
}


function mris_apply_reg_outputs(
    params: MrisApplyRegParameters,
    execution: Execution,
): MrisApplyRegOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisApplyRegOutputs = {
        root: execution.outputFile("."),
        output_result: execution.outputFile([(params["trg_output"] ?? null)].join('')),
    };
    return ret;
}


function mris_apply_reg_execute(
    params: MrisApplyRegParameters,
    execution: Execution,
): MrisApplyRegOutputs {
    /**
     * Apply surface registration in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisApplyRegOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_apply_reg_cargs(params, execution)
    const ret = mris_apply_reg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_apply_reg(
    src_input: InputPathType,
    trg_output: string,
    streg_pair: string,
    src_label: InputPathType | null = null,
    src_annotation: InputPathType | null = null,
    src_xyz: InputPathType | null = null,
    jacobian: boolean = false,
    no_reverse: boolean = false,
    rand_noise: boolean = false,
    replace_ones: boolean = false,
    center_output: boolean = false,
    curv_format: boolean = false,
    lta_transform: string | null = null,
    lta_patch_transform: string | null = null,
    reverse_surface: string | null = null,
    patch_apply: string | null = null,
    save_vertex_pair: InputPathType | null = null,
    m3z_transform: string | null = null,
    inv_m3z_transform: string | null = null,
    src_reg_scale: number | null = null,
    trg_reg_scale: number | null = null,
    debug_mode: boolean = false,
    check_options: boolean = false,
    runner: Runner | null = null,
): MrisApplyRegOutputs {
    /**
     * Apply surface registration in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param src_input Source values (surface overlay)
     * @param trg_output Target output file
     * @param streg_pair Source and target registration file pair
     * @param src_label Source label file (implies --no-rev)
     * @param src_annotation Source annotation file (implies --no-rev)
     * @param src_xyz XYZ coordinates from the given surface file as input
     * @param jacobian Use jacobian correction
     * @param no_reverse Do not do reverse mapping
     * @param rand_noise Replace input with white Gaussian noise
     * @param replace_ones Replace input with ones
     * @param center_output Place the center of the output surface at (0,0,0)
     * @param curv_format Save output in curvature file format
     * @param lta_transform Apply LTA transform to the surface
     * @param lta_patch_transform Apply LTA transform to surface patch
     * @param reverse_surface LR reverse surface with optional patch
     * @param patch_apply Apply patch for each --streg
     * @param save_vertex_pair Save vertex pairs from source and target surfaces
     * @param m3z_transform Apply M3Z transform
     * @param inv_m3z_transform Apply inverse M3Z transform
     * @param src_reg_scale Scale the coordinates of the first surface
     * @param trg_reg_scale Scale the coordinates of the last surface
     * @param debug_mode Turn on debugging
     * @param check_options Check options without executing anything
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisApplyRegOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_APPLY_REG_METADATA);
    const params = mris_apply_reg_params(src_input, trg_output, streg_pair, src_label, src_annotation, src_xyz, jacobian, no_reverse, rand_noise, replace_ones, center_output, curv_format, lta_transform, lta_patch_transform, reverse_surface, patch_apply, save_vertex_pair, m3z_transform, inv_m3z_transform, src_reg_scale, trg_reg_scale, debug_mode, check_options)
    return mris_apply_reg_execute(params, execution);
}


export {
      MRIS_APPLY_REG_METADATA,
      MrisApplyRegOutputs,
      MrisApplyRegParameters,
      mris_apply_reg,
      mris_apply_reg_params,
};
