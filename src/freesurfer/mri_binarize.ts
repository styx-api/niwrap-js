// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_BINARIZE_METADATA: Metadata = {
    id: "59f6f48713e3317e96a861f9a20ae48799c89f70.boutiques",
    name: "mri_binarize",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriBinarizeParameters {
    "__STYXTYPE__": "mri_binarize";
    "input_volume": InputPathType;
    "output_volume": string;
    "min_threshold"?: number | null | undefined;
    "max_threshold"?: number | null | undefined;
    "pct_threshold"?: number | null | undefined;
    "rmin"?: number | null | undefined;
    "rmax"?: number | null | undefined;
    "fdr_threshold"?: number | null | undefined;
    "match_values"?: Array<number> | null | undefined;
    "replace_values"?: Array<number> | null | undefined;
    "binval"?: number | null | undefined;
    "binval_not"?: number | null | undefined;
    "frame"?: number | null | undefined;
    "merge_volume"?: InputPathType | null | undefined;
    "mask_volume"?: InputPathType | null | undefined;
    "mask_threshold"?: number | null | undefined;
    "surf_name"?: string | null | undefined;
    "surf_smooth"?: number | null | undefined;
    "threads"?: number | null | undefined;
    "ctx_wm_flag": boolean;
    "all_wm_flag": boolean;
    "ventricles_flag": boolean;
    "wm_vcsf_flag": boolean;
    "gm_flag": boolean;
    "subcort_gm_flag": boolean;
    "scm_lh_flag": boolean;
    "scm_rh_flag": boolean;
    "zero_edges_flag": boolean;
    "zero_slice_edges_flag": boolean;
    "dilate_vertex"?: string | null | undefined;
    "remove_islands_flag": boolean;
    "fill_holes_flag": boolean;
    "noverbose_flag": boolean;
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
        "mri_binarize": mri_binarize_cargs,
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
        "mri_binarize": mri_binarize_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_binarize(...)`.
 *
 * @interface
 */
interface MriBinarizeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resulting binarized volume.
     */
    out_volume: OutputPathType;
}


function mri_binarize_params(
    input_volume: InputPathType,
    output_volume: string,
    min_threshold: number | null = null,
    max_threshold: number | null = null,
    pct_threshold: number | null = null,
    rmin: number | null = null,
    rmax: number | null = null,
    fdr_threshold: number | null = null,
    match_values: Array<number> | null = null,
    replace_values: Array<number> | null = null,
    binval: number | null = null,
    binval_not: number | null = null,
    frame: number | null = null,
    merge_volume: InputPathType | null = null,
    mask_volume: InputPathType | null = null,
    mask_threshold: number | null = null,
    surf_name: string | null = null,
    surf_smooth: number | null = null,
    threads: number | null = null,
    ctx_wm_flag: boolean = false,
    all_wm_flag: boolean = false,
    ventricles_flag: boolean = false,
    wm_vcsf_flag: boolean = false,
    gm_flag: boolean = false,
    subcort_gm_flag: boolean = false,
    scm_lh_flag: boolean = false,
    scm_rh_flag: boolean = false,
    zero_edges_flag: boolean = false,
    zero_slice_edges_flag: boolean = false,
    dilate_vertex: string | null = null,
    remove_islands_flag: boolean = false,
    fill_holes_flag: boolean = false,
    noverbose_flag: boolean = false,
    debug_flag: boolean = false,
): MriBinarizeParameters {
    /**
     * Build parameters.
    
     * @param input_volume Input volume to be binarized.
     * @param output_volume Path to output volume.
     * @param min_threshold Minimum threshold (default is -inf).
     * @param max_threshold Maximum threshold (default is +inf).
     * @param pct_threshold Set threshold to capture top P% of voxels.
     * @param rmin Compute min threshold based on rmin times global mean.
     * @param rmax Compute max threshold based on rmax times global mean.
     * @param fdr_threshold Compute min threshold based on FDR.
     * @param match_values Binarize based on matching values.
     * @param replace_values Replace voxels with specified values. Format: V1 V2
     * @param binval Set voxel value within threshold to specified value (default is 1).
     * @param binval_not Set voxel value outside threshold range to specified value (default is 0).
     * @param frame Use specific frame of the input. 0-based index.
     * @param merge_volume Merge with another volume. Must be the same dimensions as input volume.
     * @param mask_volume Mask input with a specified mask volume.
     * @param mask_threshold Set threshold for mask volume (default is 0.5).
     * @param surf_name Create a surface mesh from the binarization.
     * @param surf_smooth Smooth the surface mesh iteratively, specifying the number of iterations.
     * @param threads Specify number of threads to use.
     * @param ctx_wm_flag Set match values for cerebral white matter.
     * @param all_wm_flag Set match values for all white matter.
     * @param ventricles_flag Set match values for ventricles and choroid.
     * @param wm_vcsf_flag Match for WM and ventricular CSF.
     * @param gm_flag Match for all WM, VCSF and background, then invert.
     * @param subcort_gm_flag Match for subcortical gray matter.
     * @param scm_lh_flag Subcortical mass for left hemisphere.
     * @param scm_rh_flag Subcortical mass for right hemisphere.
     * @param zero_edges_flag Set edge voxels to zero.
     * @param zero_slice_edges_flag Set edge slice voxels to zero.
     * @param dilate_vertex Dilate vertex to a specific target area.
     * @param remove_islands_flag Remove islands in the mask.
     * @param fill_holes_flag Remove holes in the mask.
     * @param noverbose_flag Suppress verbose output.
     * @param debug_flag Enable debugging output.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_binarize" as const,
        "input_volume": input_volume,
        "output_volume": output_volume,
        "ctx_wm_flag": ctx_wm_flag,
        "all_wm_flag": all_wm_flag,
        "ventricles_flag": ventricles_flag,
        "wm_vcsf_flag": wm_vcsf_flag,
        "gm_flag": gm_flag,
        "subcort_gm_flag": subcort_gm_flag,
        "scm_lh_flag": scm_lh_flag,
        "scm_rh_flag": scm_rh_flag,
        "zero_edges_flag": zero_edges_flag,
        "zero_slice_edges_flag": zero_slice_edges_flag,
        "remove_islands_flag": remove_islands_flag,
        "fill_holes_flag": fill_holes_flag,
        "noverbose_flag": noverbose_flag,
        "debug_flag": debug_flag,
    };
    if (min_threshold !== null) {
        params["min_threshold"] = min_threshold;
    }
    if (max_threshold !== null) {
        params["max_threshold"] = max_threshold;
    }
    if (pct_threshold !== null) {
        params["pct_threshold"] = pct_threshold;
    }
    if (rmin !== null) {
        params["rmin"] = rmin;
    }
    if (rmax !== null) {
        params["rmax"] = rmax;
    }
    if (fdr_threshold !== null) {
        params["fdr_threshold"] = fdr_threshold;
    }
    if (match_values !== null) {
        params["match_values"] = match_values;
    }
    if (replace_values !== null) {
        params["replace_values"] = replace_values;
    }
    if (binval !== null) {
        params["binval"] = binval;
    }
    if (binval_not !== null) {
        params["binval_not"] = binval_not;
    }
    if (frame !== null) {
        params["frame"] = frame;
    }
    if (merge_volume !== null) {
        params["merge_volume"] = merge_volume;
    }
    if (mask_volume !== null) {
        params["mask_volume"] = mask_volume;
    }
    if (mask_threshold !== null) {
        params["mask_threshold"] = mask_threshold;
    }
    if (surf_name !== null) {
        params["surf_name"] = surf_name;
    }
    if (surf_smooth !== null) {
        params["surf_smooth"] = surf_smooth;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    if (dilate_vertex !== null) {
        params["dilate_vertex"] = dilate_vertex;
    }
    return params;
}


function mri_binarize_cargs(
    params: MriBinarizeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_binarize");
    cargs.push(
        "--i",
        execution.inputFile((params["input_volume"] ?? null))
    );
    cargs.push(
        "--o",
        (params["output_volume"] ?? null)
    );
    if ((params["min_threshold"] ?? null) !== null) {
        cargs.push(
            "--min",
            String((params["min_threshold"] ?? null))
        );
    }
    if ((params["max_threshold"] ?? null) !== null) {
        cargs.push(
            "--max",
            String((params["max_threshold"] ?? null))
        );
    }
    if ((params["pct_threshold"] ?? null) !== null) {
        cargs.push(
            "--pct",
            String((params["pct_threshold"] ?? null))
        );
    }
    if ((params["rmin"] ?? null) !== null) {
        cargs.push(
            "--rmin",
            String((params["rmin"] ?? null))
        );
    }
    if ((params["rmax"] ?? null) !== null) {
        cargs.push(
            "--rmax",
            String((params["rmax"] ?? null))
        );
    }
    if ((params["fdr_threshold"] ?? null) !== null) {
        cargs.push(
            "--fdr",
            String((params["fdr_threshold"] ?? null))
        );
    }
    if ((params["match_values"] ?? null) !== null) {
        cargs.push(
            "--match",
            ...(params["match_values"] ?? null).map(String)
        );
    }
    if ((params["replace_values"] ?? null) !== null) {
        cargs.push(
            "--replace",
            ...(params["replace_values"] ?? null).map(String)
        );
    }
    if ((params["binval"] ?? null) !== null) {
        cargs.push(
            "--binval",
            String((params["binval"] ?? null))
        );
    }
    if ((params["binval_not"] ?? null) !== null) {
        cargs.push(
            "--binvalnot",
            String((params["binval_not"] ?? null))
        );
    }
    if ((params["frame"] ?? null) !== null) {
        cargs.push(
            "--frame",
            String((params["frame"] ?? null))
        );
    }
    if ((params["merge_volume"] ?? null) !== null) {
        cargs.push(
            "--merge",
            execution.inputFile((params["merge_volume"] ?? null))
        );
    }
    if ((params["mask_volume"] ?? null) !== null) {
        cargs.push(
            "--mask",
            execution.inputFile((params["mask_volume"] ?? null))
        );
    }
    if ((params["mask_threshold"] ?? null) !== null) {
        cargs.push(
            "--mask-thresh",
            String((params["mask_threshold"] ?? null))
        );
    }
    if ((params["surf_name"] ?? null) !== null) {
        cargs.push(
            "--surf",
            (params["surf_name"] ?? null)
        );
    }
    if ((params["surf_smooth"] ?? null) !== null) {
        cargs.push(
            "--surf-smooth",
            String((params["surf_smooth"] ?? null))
        );
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "--threads",
            String((params["threads"] ?? null))
        );
    }
    if ((params["ctx_wm_flag"] ?? null)) {
        cargs.push("--ctx-wm");
    }
    if ((params["all_wm_flag"] ?? null)) {
        cargs.push("--all-wm");
    }
    if ((params["ventricles_flag"] ?? null)) {
        cargs.push("--ventricles");
    }
    if ((params["wm_vcsf_flag"] ?? null)) {
        cargs.push("--wm+vcsf");
    }
    if ((params["gm_flag"] ?? null)) {
        cargs.push("--gm");
    }
    if ((params["subcort_gm_flag"] ?? null)) {
        cargs.push("--subcort-gm");
    }
    if ((params["scm_lh_flag"] ?? null)) {
        cargs.push("--scm-lh");
    }
    if ((params["scm_rh_flag"] ?? null)) {
        cargs.push("--scm-rh");
    }
    if ((params["zero_edges_flag"] ?? null)) {
        cargs.push("--zero-edges");
    }
    if ((params["zero_slice_edges_flag"] ?? null)) {
        cargs.push("--zero-slice-edges");
    }
    if ((params["dilate_vertex"] ?? null) !== null) {
        cargs.push(
            "--dilate-vertex",
            (params["dilate_vertex"] ?? null)
        );
    }
    if ((params["remove_islands_flag"] ?? null)) {
        cargs.push("--remove-islands");
    }
    if ((params["fill_holes_flag"] ?? null)) {
        cargs.push("--fill-holes");
    }
    if ((params["noverbose_flag"] ?? null)) {
        cargs.push("--noverbose");
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("--debug");
    }
    return cargs;
}


function mri_binarize_outputs(
    params: MriBinarizeParameters,
    execution: Execution,
): MriBinarizeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriBinarizeOutputs = {
        root: execution.outputFile("."),
        out_volume: execution.outputFile([(params["output_volume"] ?? null)].join('')),
    };
    return ret;
}


function mri_binarize_execute(
    params: MriBinarizeParameters,
    execution: Execution,
): MriBinarizeOutputs {
    /**
     * A program to binarize a volume or volume-encoded surface file, with options to merge and manipulate binarized output.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriBinarizeOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_binarize_cargs(params, execution)
    const ret = mri_binarize_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_binarize(
    input_volume: InputPathType,
    output_volume: string,
    min_threshold: number | null = null,
    max_threshold: number | null = null,
    pct_threshold: number | null = null,
    rmin: number | null = null,
    rmax: number | null = null,
    fdr_threshold: number | null = null,
    match_values: Array<number> | null = null,
    replace_values: Array<number> | null = null,
    binval: number | null = null,
    binval_not: number | null = null,
    frame: number | null = null,
    merge_volume: InputPathType | null = null,
    mask_volume: InputPathType | null = null,
    mask_threshold: number | null = null,
    surf_name: string | null = null,
    surf_smooth: number | null = null,
    threads: number | null = null,
    ctx_wm_flag: boolean = false,
    all_wm_flag: boolean = false,
    ventricles_flag: boolean = false,
    wm_vcsf_flag: boolean = false,
    gm_flag: boolean = false,
    subcort_gm_flag: boolean = false,
    scm_lh_flag: boolean = false,
    scm_rh_flag: boolean = false,
    zero_edges_flag: boolean = false,
    zero_slice_edges_flag: boolean = false,
    dilate_vertex: string | null = null,
    remove_islands_flag: boolean = false,
    fill_holes_flag: boolean = false,
    noverbose_flag: boolean = false,
    debug_flag: boolean = false,
    runner: Runner | null = null,
): MriBinarizeOutputs {
    /**
     * A program to binarize a volume or volume-encoded surface file, with options to merge and manipulate binarized output.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_volume Input volume to be binarized.
     * @param output_volume Path to output volume.
     * @param min_threshold Minimum threshold (default is -inf).
     * @param max_threshold Maximum threshold (default is +inf).
     * @param pct_threshold Set threshold to capture top P% of voxels.
     * @param rmin Compute min threshold based on rmin times global mean.
     * @param rmax Compute max threshold based on rmax times global mean.
     * @param fdr_threshold Compute min threshold based on FDR.
     * @param match_values Binarize based on matching values.
     * @param replace_values Replace voxels with specified values. Format: V1 V2
     * @param binval Set voxel value within threshold to specified value (default is 1).
     * @param binval_not Set voxel value outside threshold range to specified value (default is 0).
     * @param frame Use specific frame of the input. 0-based index.
     * @param merge_volume Merge with another volume. Must be the same dimensions as input volume.
     * @param mask_volume Mask input with a specified mask volume.
     * @param mask_threshold Set threshold for mask volume (default is 0.5).
     * @param surf_name Create a surface mesh from the binarization.
     * @param surf_smooth Smooth the surface mesh iteratively, specifying the number of iterations.
     * @param threads Specify number of threads to use.
     * @param ctx_wm_flag Set match values for cerebral white matter.
     * @param all_wm_flag Set match values for all white matter.
     * @param ventricles_flag Set match values for ventricles and choroid.
     * @param wm_vcsf_flag Match for WM and ventricular CSF.
     * @param gm_flag Match for all WM, VCSF and background, then invert.
     * @param subcort_gm_flag Match for subcortical gray matter.
     * @param scm_lh_flag Subcortical mass for left hemisphere.
     * @param scm_rh_flag Subcortical mass for right hemisphere.
     * @param zero_edges_flag Set edge voxels to zero.
     * @param zero_slice_edges_flag Set edge slice voxels to zero.
     * @param dilate_vertex Dilate vertex to a specific target area.
     * @param remove_islands_flag Remove islands in the mask.
     * @param fill_holes_flag Remove holes in the mask.
     * @param noverbose_flag Suppress verbose output.
     * @param debug_flag Enable debugging output.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriBinarizeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_BINARIZE_METADATA);
    const params = mri_binarize_params(input_volume, output_volume, min_threshold, max_threshold, pct_threshold, rmin, rmax, fdr_threshold, match_values, replace_values, binval, binval_not, frame, merge_volume, mask_volume, mask_threshold, surf_name, surf_smooth, threads, ctx_wm_flag, all_wm_flag, ventricles_flag, wm_vcsf_flag, gm_flag, subcort_gm_flag, scm_lh_flag, scm_rh_flag, zero_edges_flag, zero_slice_edges_flag, dilate_vertex, remove_islands_flag, fill_holes_flag, noverbose_flag, debug_flag)
    return mri_binarize_execute(params, execution);
}


export {
      MRI_BINARIZE_METADATA,
      MriBinarizeOutputs,
      MriBinarizeParameters,
      mri_binarize,
      mri_binarize_params,
};
