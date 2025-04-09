// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__DJUNCT_EDGY_ALIGN_CHECK_METADATA: Metadata = {
    id: "aa6a4a0022ad0531d548adba7cc36b0a1b5b39ae.boutiques",
    name: "@djunct_edgy_align_check",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VDjunctEdgyAlignCheckParameters {
    "__STYXTYPE__": "@djunct_edgy_align_check";
    "ULAY": string;
    "OLAY": string;
    "PREFIX": string;
    "set_dicom_xyz"?: Array<number> | null | undefined;
    "box_focus_slices"?: string | null | undefined;
    "montgap"?: number | null | undefined;
    "montcolor"?: string | null | undefined;
    "cbar"?: string | null | undefined;
    "save_ftype"?: string | null | undefined;
    "umin_fac"?: number | null | undefined;
    "montx"?: number | null | undefined;
    "monty"?: number | null | undefined;
    "use_olay_grid"?: string | null | undefined;
    "label_mode"?: string | null | undefined;
    "help_flag": boolean;
    "ver_flag": boolean;
    "echo_flag": boolean;
    "sharpen_ulay_off_flag": boolean;
    "mask_olay_edges_flag": boolean;
    "no_cor_flag": boolean;
    "no_sag_flag": boolean;
    "no_axi_flag": boolean;
    "no_clean_flag": boolean;
    "ulay_range"?: Array<number> | null | undefined;
    "ulay_range_nz"?: Array<number> | null | undefined;
    "ulay_range_am"?: Array<number> | null | undefined;
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
        "@djunct_edgy_align_check": v__djunct_edgy_align_check_cargs,
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
 * Output object returned when calling `v__djunct_edgy_align_check(...)`.
 *
 * @interface
 */
interface VDjunctEdgyAlignCheckOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v__djunct_edgy_align_check_params(
    ulay: string,
    olay: string,
    prefix: string,
    set_dicom_xyz: Array<number> | null = null,
    box_focus_slices: string | null = null,
    montgap: number | null = null,
    montcolor: string | null = null,
    cbar: string | null = null,
    save_ftype: string | null = null,
    umin_fac: number | null = null,
    montx: number | null = null,
    monty: number | null = null,
    use_olay_grid: string | null = null,
    label_mode: string | null = null,
    help_flag: boolean = false,
    ver_flag: boolean = false,
    echo_flag: boolean = false,
    sharpen_ulay_off_flag: boolean = false,
    mask_olay_edges_flag: boolean = false,
    no_cor_flag: boolean = false,
    no_sag_flag: boolean = false,
    no_axi_flag: boolean = false,
    no_clean_flag: boolean = false,
    ulay_range: Array<number> | null = null,
    ulay_range_nz: Array<number> | null = null,
    ulay_range_am: Array<number> | null = null,
): VDjunctEdgyAlignCheckParameters {
    /**
     * Build parameters.
    
     * @param ulay ULAY dataset
     * @param olay OLAY dataset
     * @param prefix Prefix for output files
     * @param set_dicom_xyz DICOM coordinates {XX YY ZZ}
     * @param box_focus_slices Dataset to focus slices
     * @param montgap Gap between slices in montage
     * @param montcolor Color for montage
     * @param cbar Color bar for overlay
     * @param save_ftype File type to save
     * @param umin_fac Scaling factor for underlay minimum
     * @param montx Number of slices in X-direction for montage
     * @param monty Number of slices in Y-direction for montage
     * @param use_olay_grid Grid interpolation method for overlay
     * @param label_mode Mode for labeling
     * @param help_flag Display help message
     * @param ver_flag Show version
     * @param echo_flag Echo commands
     * @param sharpen_ulay_off_flag Disable underlay sharpening
     * @param mask_olay_edges_flag Mask overlay edges
     * @param no_cor_flag Exclude coronal plane
     * @param no_sag_flag Exclude sagittal plane
     * @param no_axi_flag Exclude axial plane
     * @param no_clean_flag Disable cleaning temporary files
     * @param ulay_range Range for underlay {umin umax}
     * @param ulay_range_nz Range for non-zero underlay {umin umax}
     * @param ulay_range_am Range for auto-mask underlay {umin umax}
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@djunct_edgy_align_check" as const,
        "ULAY": ulay,
        "OLAY": olay,
        "PREFIX": prefix,
        "help_flag": help_flag,
        "ver_flag": ver_flag,
        "echo_flag": echo_flag,
        "sharpen_ulay_off_flag": sharpen_ulay_off_flag,
        "mask_olay_edges_flag": mask_olay_edges_flag,
        "no_cor_flag": no_cor_flag,
        "no_sag_flag": no_sag_flag,
        "no_axi_flag": no_axi_flag,
        "no_clean_flag": no_clean_flag,
    };
    if (set_dicom_xyz !== null) {
        params["set_dicom_xyz"] = set_dicom_xyz;
    }
    if (box_focus_slices !== null) {
        params["box_focus_slices"] = box_focus_slices;
    }
    if (montgap !== null) {
        params["montgap"] = montgap;
    }
    if (montcolor !== null) {
        params["montcolor"] = montcolor;
    }
    if (cbar !== null) {
        params["cbar"] = cbar;
    }
    if (save_ftype !== null) {
        params["save_ftype"] = save_ftype;
    }
    if (umin_fac !== null) {
        params["umin_fac"] = umin_fac;
    }
    if (montx !== null) {
        params["montx"] = montx;
    }
    if (monty !== null) {
        params["monty"] = monty;
    }
    if (use_olay_grid !== null) {
        params["use_olay_grid"] = use_olay_grid;
    }
    if (label_mode !== null) {
        params["label_mode"] = label_mode;
    }
    if (ulay_range !== null) {
        params["ulay_range"] = ulay_range;
    }
    if (ulay_range_nz !== null) {
        params["ulay_range_nz"] = ulay_range_nz;
    }
    if (ulay_range_am !== null) {
        params["ulay_range_am"] = ulay_range_am;
    }
    return params;
}


function v__djunct_edgy_align_check_cargs(
    params: VDjunctEdgyAlignCheckParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@djunct_edgy_align_check");
    cargs.push((params["ULAY"] ?? null));
    cargs.push((params["OLAY"] ?? null));
    cargs.push((params["PREFIX"] ?? null));
    if ((params["set_dicom_xyz"] ?? null) !== null) {
        cargs.push(...(params["set_dicom_xyz"] ?? null).map(String));
    }
    if ((params["box_focus_slices"] ?? null) !== null) {
        cargs.push((params["box_focus_slices"] ?? null));
    }
    if ((params["montgap"] ?? null) !== null) {
        cargs.push(String((params["montgap"] ?? null)));
    }
    if ((params["montcolor"] ?? null) !== null) {
        cargs.push((params["montcolor"] ?? null));
    }
    if ((params["cbar"] ?? null) !== null) {
        cargs.push((params["cbar"] ?? null));
    }
    if ((params["save_ftype"] ?? null) !== null) {
        cargs.push((params["save_ftype"] ?? null));
    }
    if ((params["umin_fac"] ?? null) !== null) {
        cargs.push(String((params["umin_fac"] ?? null)));
    }
    if ((params["montx"] ?? null) !== null) {
        cargs.push(String((params["montx"] ?? null)));
    }
    if ((params["monty"] ?? null) !== null) {
        cargs.push(String((params["monty"] ?? null)));
    }
    if ((params["use_olay_grid"] ?? null) !== null) {
        cargs.push((params["use_olay_grid"] ?? null));
    }
    if ((params["label_mode"] ?? null) !== null) {
        cargs.push((params["label_mode"] ?? null));
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["ver_flag"] ?? null)) {
        cargs.push("-ver");
    }
    if ((params["echo_flag"] ?? null)) {
        cargs.push("-echo");
    }
    if ((params["sharpen_ulay_off_flag"] ?? null)) {
        cargs.push("-sharpen_ulay_off");
    }
    if ((params["mask_olay_edges_flag"] ?? null)) {
        cargs.push("-mask_olay_edges");
    }
    if ((params["no_cor_flag"] ?? null)) {
        cargs.push("-no_cor");
    }
    if ((params["no_sag_flag"] ?? null)) {
        cargs.push("-no_sag");
    }
    if ((params["no_axi_flag"] ?? null)) {
        cargs.push("-no_axi");
    }
    if ((params["no_clean_flag"] ?? null)) {
        cargs.push("-no_clean");
    }
    if ((params["ulay_range"] ?? null) !== null) {
        cargs.push(...(params["ulay_range"] ?? null).map(String));
    }
    if ((params["ulay_range_nz"] ?? null) !== null) {
        cargs.push(...(params["ulay_range_nz"] ?? null).map(String));
    }
    if ((params["ulay_range_am"] ?? null) !== null) {
        cargs.push(...(params["ulay_range_am"] ?? null).map(String));
    }
    return cargs;
}


function v__djunct_edgy_align_check_outputs(
    params: VDjunctEdgyAlignCheckParameters,
    execution: Execution,
): VDjunctEdgyAlignCheckOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VDjunctEdgyAlignCheckOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v__djunct_edgy_align_check_execute(
    params: VDjunctEdgyAlignCheckParameters,
    execution: Execution,
): VDjunctEdgyAlignCheckOutputs {
    /**
     * Helper script for various tasks, heavily modeled on RW Cox's '@snapshot_volreg' script.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VDjunctEdgyAlignCheckOutputs`).
     */
    params = execution.params(params)
    const cargs = v__djunct_edgy_align_check_cargs(params, execution)
    const ret = v__djunct_edgy_align_check_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__djunct_edgy_align_check(
    ulay: string,
    olay: string,
    prefix: string,
    set_dicom_xyz: Array<number> | null = null,
    box_focus_slices: string | null = null,
    montgap: number | null = null,
    montcolor: string | null = null,
    cbar: string | null = null,
    save_ftype: string | null = null,
    umin_fac: number | null = null,
    montx: number | null = null,
    monty: number | null = null,
    use_olay_grid: string | null = null,
    label_mode: string | null = null,
    help_flag: boolean = false,
    ver_flag: boolean = false,
    echo_flag: boolean = false,
    sharpen_ulay_off_flag: boolean = false,
    mask_olay_edges_flag: boolean = false,
    no_cor_flag: boolean = false,
    no_sag_flag: boolean = false,
    no_axi_flag: boolean = false,
    no_clean_flag: boolean = false,
    ulay_range: Array<number> | null = null,
    ulay_range_nz: Array<number> | null = null,
    ulay_range_am: Array<number> | null = null,
    runner: Runner | null = null,
): VDjunctEdgyAlignCheckOutputs {
    /**
     * Helper script for various tasks, heavily modeled on RW Cox's '@snapshot_volreg' script.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param ulay ULAY dataset
     * @param olay OLAY dataset
     * @param prefix Prefix for output files
     * @param set_dicom_xyz DICOM coordinates {XX YY ZZ}
     * @param box_focus_slices Dataset to focus slices
     * @param montgap Gap between slices in montage
     * @param montcolor Color for montage
     * @param cbar Color bar for overlay
     * @param save_ftype File type to save
     * @param umin_fac Scaling factor for underlay minimum
     * @param montx Number of slices in X-direction for montage
     * @param monty Number of slices in Y-direction for montage
     * @param use_olay_grid Grid interpolation method for overlay
     * @param label_mode Mode for labeling
     * @param help_flag Display help message
     * @param ver_flag Show version
     * @param echo_flag Echo commands
     * @param sharpen_ulay_off_flag Disable underlay sharpening
     * @param mask_olay_edges_flag Mask overlay edges
     * @param no_cor_flag Exclude coronal plane
     * @param no_sag_flag Exclude sagittal plane
     * @param no_axi_flag Exclude axial plane
     * @param no_clean_flag Disable cleaning temporary files
     * @param ulay_range Range for underlay {umin umax}
     * @param ulay_range_nz Range for non-zero underlay {umin umax}
     * @param ulay_range_am Range for auto-mask underlay {umin umax}
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VDjunctEdgyAlignCheckOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__DJUNCT_EDGY_ALIGN_CHECK_METADATA);
    const params = v__djunct_edgy_align_check_params(ulay, olay, prefix, set_dicom_xyz, box_focus_slices, montgap, montcolor, cbar, save_ftype, umin_fac, montx, monty, use_olay_grid, label_mode, help_flag, ver_flag, echo_flag, sharpen_ulay_off_flag, mask_olay_edges_flag, no_cor_flag, no_sag_flag, no_axi_flag, no_clean_flag, ulay_range, ulay_range_nz, ulay_range_am)
    return v__djunct_edgy_align_check_execute(params, execution);
}


export {
      VDjunctEdgyAlignCheckOutputs,
      VDjunctEdgyAlignCheckParameters,
      V__DJUNCT_EDGY_ALIGN_CHECK_METADATA,
      v__djunct_edgy_align_check,
      v__djunct_edgy_align_check_params,
};
