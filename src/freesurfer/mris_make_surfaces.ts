// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_MAKE_SURFACES_METADATA: Metadata = {
    id: "e96557d2a5fb1819382e59922a58f1b8b9878284.boutiques",
    name: "mris_make_surfaces",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisMakeSurfacesParameters {
    "__STYXTYPE__": "mris_make_surfaces";
    "subject_name": string;
    "hemisphere": string;
    "white"?: string | null | undefined;
    "pial"?: string | null | undefined;
    "whiteonly": boolean;
    "nowhite": boolean;
    "orig_white"?: string | null | undefined;
    "orig_pial"?: string | null | undefined;
    "q": boolean;
    "max_gray_scale"?: number | null | undefined;
    "c": boolean;
    "cortex"?: number | null | undefined;
    "w"?: number | null | undefined;
    "first_wm_peak": boolean;
    "a_avgs"?: number | null | undefined;
    "pa_avgs"?: number | null | undefined;
    "wa_avgs"?: number | null | undefined;
    "t1_vol"?: string | null | undefined;
    "w_vol"?: string | null | undefined;
    "long": boolean;
    "dura_thresh"?: number | null | undefined;
    "sdir"?: string | null | undefined;
    "erase_cerebellum": boolean;
    "wm_weight"?: number | null | undefined;
    "nsigma_above"?: number | null | undefined;
    "nsigma_below"?: number | null | undefined;
    "t2_min_inside"?: number | null | undefined;
    "t2_max_inside"?: number | null | undefined;
    "t2_outside_min"?: number | null | undefined;
    "t2_outside_max"?: number | null | undefined;
    "min_peak_pct"?: number | null | undefined;
    "border_vals_hires": boolean;
    "no_unitize": boolean;
    "intensity"?: number | null | undefined;
    "curv"?: number | null | undefined;
    "tspring"?: number | null | undefined;
    "nspring"?: number | null | undefined;
    "repulse"?: number | null | undefined;
    "save_target": boolean;
    "save_res": boolean;
    "v_vertexno"?: number | null | undefined;
    "diag_vertex"?: number | null | undefined;
    "rip"?: string | null | undefined;
    "sigma_white"?: string | null | undefined;
    "sigma_pial"?: string | null | undefined;
    "output"?: string | null | undefined;
    "min_border_white"?: number | null | undefined;
    "max_border_white"?: number | null | undefined;
    "min_gray_white_border"?: number | null | undefined;
    "max_gray"?: number | null | undefined;
    "max_gray_csf_border"?: number | null | undefined;
    "min_gray_csf_border"?: number | null | undefined;
    "max_csf"?: number | null | undefined;
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
        "mris_make_surfaces": mris_make_surfaces_cargs,
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
 * Output object returned when calling `mris_make_surfaces(...)`.
 *
 * @interface
 */
interface MrisMakeSurfacesOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mris_make_surfaces_params(
    subject_name: string,
    hemisphere: string,
    white: string | null = null,
    pial: string | null = null,
    whiteonly: boolean = false,
    nowhite: boolean = false,
    orig_white: string | null = null,
    orig_pial: string | null = null,
    q: boolean = false,
    max_gray_scale: number | null = null,
    c: boolean = false,
    cortex: number | null = null,
    w: number | null = null,
    first_wm_peak: boolean = false,
    a_avgs: number | null = null,
    pa_avgs: number | null = null,
    wa_avgs: number | null = null,
    t1_vol: string | null = null,
    w_vol: string | null = null,
    long: boolean = false,
    dura_thresh: number | null = null,
    sdir: string | null = null,
    erase_cerebellum: boolean = false,
    wm_weight: number | null = null,
    nsigma_above: number | null = null,
    nsigma_below: number | null = null,
    t2_min_inside: number | null = null,
    t2_max_inside: number | null = null,
    t2_outside_min: number | null = null,
    t2_outside_max: number | null = null,
    min_peak_pct: number | null = null,
    border_vals_hires: boolean = false,
    no_unitize: boolean = false,
    intensity: number | null = null,
    curv: number | null = null,
    tspring: number | null = null,
    nspring: number | null = null,
    repulse: number | null = null,
    save_target: boolean = false,
    save_res: boolean = false,
    v_vertexno: number | null = null,
    diag_vertex: number | null = null,
    rip: string | null = null,
    sigma_white: string | null = null,
    sigma_pial: string | null = null,
    output: string | null = null,
    min_border_white: number | null = null,
    max_border_white: number | null = null,
    min_gray_white_border: number | null = null,
    max_gray: number | null = null,
    max_gray_csf_border: number | null = null,
    min_gray_csf_border: number | null = null,
    max_csf: number | null = null,
): MrisMakeSurfacesParameters {
    /**
     * Build parameters.
    
     * @param subject_name Name of the subject
     * @param hemisphere Brain hemisphere (r or l)
     * @param white Output name for white surface (default is 'white'). Set to NOWHITE to generate but not save white surface.
     * @param pial Output name for pial surface (default is 'pial').
     * @param whiteonly Only generate white matter surface.
     * @param nowhite Only generate pial surface.
     * @param orig_white Specify a white surface to start with.
     * @param orig_pial Specify a pial surface to start with.
     * @param q Omit self-intersection and only generate gray/white surface.
     * @param max_gray_scale Set maximum gray scale value.
     * @param c Do not create curvature and area files from white matter surface.
     * @param cortex Set to 0 to turn off creation of cortex label file.
     * @param w Unused argument
     * @param first_wm_peak Settle WM surface at first peak in intensity profile instead of highest.
     * @param a_avgs Average curvature values a number of times (default=10).
     * @param pa_avgs Average pial curvature values a max of a number of times (default=16).
     * @param wa_avgs Average white curvature values a max of a number of times (default=4).
     * @param t1_vol Specify T1 volume (default is brain).
     * @param w_vol Specify white volume and <hires> option.
     * @param long Run longitudinal analysis.
     * @param dura_thresh Set a threshold for the multi-echo mprage dura avoidance.
     * @param sdir Specify SUBJECTS_DIR.
     * @param erase_cerebellum Erase cerebellar labeled voxels if aseg is loaded.
     * @param wm_weight Weighting of WM mean in calculating T2 threshold of disallowed GM values, default=3.
     * @param nsigma_above # of sigmas above the mean to allow gray matter T2 intensities.
     * @param nsigma_below # of sigmas below the mean to allow gray matter T2 intensities.
     * @param t2_min_inside Specify threshold for min T2 value allowed to be interior to the cortical ribbon.
     * @param t2_max_inside Specify threshold for max T2 value allowed to be interior to the cortical ribbon.
     * @param t2_outside_min Specify threshold for min T2 value outside of pial surface that will cause surface to deform outwards.
     * @param t2_outside_max Specify threshold for max T2 value outside of pial surface that will cause surface to deform outwards.
     * @param min_peak_pct Specify the pct of the histo peak in the local gm histogram to use as threshold for finding the local inside and outside gm thresholds.
     * @param border_vals_hires Turn on hires options in MRIScomputeBorderValues_new(). May not be helpful.
     * @param no_unitize Turn off face normal unitization.
     * @param intensity Set weight of intensity cost.
     * @param curv Set weight of curvature cost.
     * @param tspring Set weight of tangential spring cost.
     * @param nspring Set weight of normal spring cost.
     * @param repulse Set weight of repulsion force.
     * @param save_target Save target surface for debugging.
     * @param save_res Save residual for debugging.
     * @param v_vertexno Set Gdiag_no to vertex number.
     * @param diag_vertex Set Gdiag_no to vertex number and turn off writing of cortex label or curvature files.
     * @param rip Save ripflag as overlay. Specify full path including hemi, suffix, etc.
     * @param sigma_white Save white surface sigma as overlay. Specify full path including hemi, suffix, etc.
     * @param sigma_pial Save pial surface sigma as overlay. Specify full path including hemi, suffix, etc.
     * @param output Append suffix to all outputs to prevent over-writing.
     * @param min_border_white Minimum border white.
     * @param max_border_white Maximum border white.
     * @param min_gray_white_border Minimum gray at white border.
     * @param max_gray Maximum gray value.
     * @param max_gray_csf_border Maximum gray at CSF border.
     * @param min_gray_csf_border Minimum gray at CSF border.
     * @param max_csf Maximum CSF value.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_make_surfaces" as const,
        "subject_name": subject_name,
        "hemisphere": hemisphere,
        "whiteonly": whiteonly,
        "nowhite": nowhite,
        "q": q,
        "c": c,
        "first_wm_peak": first_wm_peak,
        "long": long,
        "erase_cerebellum": erase_cerebellum,
        "border_vals_hires": border_vals_hires,
        "no_unitize": no_unitize,
        "save_target": save_target,
        "save_res": save_res,
    };
    if (white !== null) {
        params["white"] = white;
    }
    if (pial !== null) {
        params["pial"] = pial;
    }
    if (orig_white !== null) {
        params["orig_white"] = orig_white;
    }
    if (orig_pial !== null) {
        params["orig_pial"] = orig_pial;
    }
    if (max_gray_scale !== null) {
        params["max_gray_scale"] = max_gray_scale;
    }
    if (cortex !== null) {
        params["cortex"] = cortex;
    }
    if (w !== null) {
        params["w"] = w;
    }
    if (a_avgs !== null) {
        params["a_avgs"] = a_avgs;
    }
    if (pa_avgs !== null) {
        params["pa_avgs"] = pa_avgs;
    }
    if (wa_avgs !== null) {
        params["wa_avgs"] = wa_avgs;
    }
    if (t1_vol !== null) {
        params["t1_vol"] = t1_vol;
    }
    if (w_vol !== null) {
        params["w_vol"] = w_vol;
    }
    if (dura_thresh !== null) {
        params["dura_thresh"] = dura_thresh;
    }
    if (sdir !== null) {
        params["sdir"] = sdir;
    }
    if (wm_weight !== null) {
        params["wm_weight"] = wm_weight;
    }
    if (nsigma_above !== null) {
        params["nsigma_above"] = nsigma_above;
    }
    if (nsigma_below !== null) {
        params["nsigma_below"] = nsigma_below;
    }
    if (t2_min_inside !== null) {
        params["t2_min_inside"] = t2_min_inside;
    }
    if (t2_max_inside !== null) {
        params["t2_max_inside"] = t2_max_inside;
    }
    if (t2_outside_min !== null) {
        params["t2_outside_min"] = t2_outside_min;
    }
    if (t2_outside_max !== null) {
        params["t2_outside_max"] = t2_outside_max;
    }
    if (min_peak_pct !== null) {
        params["min_peak_pct"] = min_peak_pct;
    }
    if (intensity !== null) {
        params["intensity"] = intensity;
    }
    if (curv !== null) {
        params["curv"] = curv;
    }
    if (tspring !== null) {
        params["tspring"] = tspring;
    }
    if (nspring !== null) {
        params["nspring"] = nspring;
    }
    if (repulse !== null) {
        params["repulse"] = repulse;
    }
    if (v_vertexno !== null) {
        params["v_vertexno"] = v_vertexno;
    }
    if (diag_vertex !== null) {
        params["diag_vertex"] = diag_vertex;
    }
    if (rip !== null) {
        params["rip"] = rip;
    }
    if (sigma_white !== null) {
        params["sigma_white"] = sigma_white;
    }
    if (sigma_pial !== null) {
        params["sigma_pial"] = sigma_pial;
    }
    if (output !== null) {
        params["output"] = output;
    }
    if (min_border_white !== null) {
        params["min_border_white"] = min_border_white;
    }
    if (max_border_white !== null) {
        params["max_border_white"] = max_border_white;
    }
    if (min_gray_white_border !== null) {
        params["min_gray_white_border"] = min_gray_white_border;
    }
    if (max_gray !== null) {
        params["max_gray"] = max_gray;
    }
    if (max_gray_csf_border !== null) {
        params["max_gray_csf_border"] = max_gray_csf_border;
    }
    if (min_gray_csf_border !== null) {
        params["min_gray_csf_border"] = min_gray_csf_border;
    }
    if (max_csf !== null) {
        params["max_csf"] = max_csf;
    }
    return params;
}


function mris_make_surfaces_cargs(
    params: MrisMakeSurfacesParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_make_surfaces");
    cargs.push((params["subject_name"] ?? null));
    cargs.push((params["hemisphere"] ?? null));
    if ((params["white"] ?? null) !== null) {
        cargs.push(
            "-white",
            (params["white"] ?? null)
        );
    }
    if ((params["pial"] ?? null) !== null) {
        cargs.push(
            "-pial",
            (params["pial"] ?? null)
        );
    }
    if ((params["whiteonly"] ?? null)) {
        cargs.push("-whiteonly");
    }
    if ((params["nowhite"] ?? null)) {
        cargs.push("-nowhite");
    }
    if ((params["orig_white"] ?? null) !== null) {
        cargs.push(
            "-orig_white",
            (params["orig_white"] ?? null)
        );
    }
    if ((params["orig_pial"] ?? null) !== null) {
        cargs.push(
            "-orig_pial",
            (params["orig_pial"] ?? null)
        );
    }
    if ((params["q"] ?? null)) {
        cargs.push("-q");
    }
    if ((params["max_gray_scale"] ?? null) !== null) {
        cargs.push(
            "-max_gray_scale",
            String((params["max_gray_scale"] ?? null))
        );
    }
    if ((params["c"] ?? null)) {
        cargs.push("-c");
    }
    if ((params["cortex"] ?? null) !== null) {
        cargs.push(
            "-cortex",
            String((params["cortex"] ?? null))
        );
    }
    if ((params["w"] ?? null) !== null) {
        cargs.push(
            "-w",
            String((params["w"] ?? null))
        );
    }
    if ((params["first_wm_peak"] ?? null)) {
        cargs.push("-first_wm_peak");
    }
    if ((params["a_avgs"] ?? null) !== null) {
        cargs.push(
            "-a",
            String((params["a_avgs"] ?? null))
        );
    }
    if ((params["pa_avgs"] ?? null) !== null) {
        cargs.push(
            "-pa",
            String((params["pa_avgs"] ?? null))
        );
    }
    if ((params["wa_avgs"] ?? null) !== null) {
        cargs.push(
            "-wa",
            String((params["wa_avgs"] ?? null))
        );
    }
    if ((params["t1_vol"] ?? null) !== null) {
        cargs.push(
            "-T1",
            (params["t1_vol"] ?? null)
        );
    }
    if ((params["w_vol"] ?? null) !== null) {
        cargs.push(
            "-wvol",
            (params["w_vol"] ?? null)
        );
    }
    if ((params["long"] ?? null)) {
        cargs.push("-long");
    }
    if ((params["dura_thresh"] ?? null) !== null) {
        cargs.push(
            "-dura_thresh",
            String((params["dura_thresh"] ?? null))
        );
    }
    if ((params["sdir"] ?? null) !== null) {
        cargs.push(
            "-SDIR",
            (params["sdir"] ?? null)
        );
    }
    if ((params["erase_cerebellum"] ?? null)) {
        cargs.push("-erase_cerebellum");
    }
    if ((params["wm_weight"] ?? null) !== null) {
        cargs.push(
            "-wm_weight",
            String((params["wm_weight"] ?? null))
        );
    }
    if ((params["nsigma_above"] ?? null) !== null) {
        cargs.push(
            "-nsigma_above",
            String((params["nsigma_above"] ?? null))
        );
    }
    if ((params["nsigma_below"] ?? null) !== null) {
        cargs.push(
            "-nsigma_below",
            String((params["nsigma_below"] ?? null))
        );
    }
    if ((params["t2_min_inside"] ?? null) !== null) {
        cargs.push(
            "-T2_min_inside",
            String((params["t2_min_inside"] ?? null))
        );
    }
    if ((params["t2_max_inside"] ?? null) !== null) {
        cargs.push(
            "-T2_max_inside",
            String((params["t2_max_inside"] ?? null))
        );
    }
    if ((params["t2_outside_min"] ?? null) !== null) {
        cargs.push(
            "-T2_outside_min",
            String((params["t2_outside_min"] ?? null))
        );
    }
    if ((params["t2_outside_max"] ?? null) !== null) {
        cargs.push(
            "-T2_outside_max",
            String((params["t2_outside_max"] ?? null))
        );
    }
    if ((params["min_peak_pct"] ?? null) !== null) {
        cargs.push(
            "-min_peak_pct",
            String((params["min_peak_pct"] ?? null))
        );
    }
    if ((params["border_vals_hires"] ?? null)) {
        cargs.push("-border-vals-hires");
    }
    if ((params["no_unitize"] ?? null)) {
        cargs.push("-no-unitize");
    }
    if ((params["intensity"] ?? null) !== null) {
        cargs.push(
            "-intensity",
            String((params["intensity"] ?? null))
        );
    }
    if ((params["curv"] ?? null) !== null) {
        cargs.push(
            "-curv",
            String((params["curv"] ?? null))
        );
    }
    if ((params["tspring"] ?? null) !== null) {
        cargs.push(
            "-tspring",
            String((params["tspring"] ?? null))
        );
    }
    if ((params["nspring"] ?? null) !== null) {
        cargs.push(
            "-nspring",
            String((params["nspring"] ?? null))
        );
    }
    if ((params["repulse"] ?? null) !== null) {
        cargs.push(
            "-repulse",
            String((params["repulse"] ?? null))
        );
    }
    if ((params["save_target"] ?? null)) {
        cargs.push("-save-target");
    }
    if ((params["save_res"] ?? null)) {
        cargs.push("-save-res");
    }
    if ((params["v_vertexno"] ?? null) !== null) {
        cargs.push(
            "-v",
            String((params["v_vertexno"] ?? null))
        );
    }
    if ((params["diag_vertex"] ?? null) !== null) {
        cargs.push(
            "-diag-vertex",
            String((params["diag_vertex"] ?? null))
        );
    }
    if ((params["rip"] ?? null) !== null) {
        cargs.push(
            "-rip",
            (params["rip"] ?? null)
        );
    }
    if ((params["sigma_white"] ?? null) !== null) {
        cargs.push(
            "-sigma-white",
            (params["sigma_white"] ?? null)
        );
    }
    if ((params["sigma_pial"] ?? null) !== null) {
        cargs.push(
            "-sigma-pial",
            (params["sigma_pial"] ?? null)
        );
    }
    if ((params["output"] ?? null) !== null) {
        cargs.push(
            "-output",
            (params["output"] ?? null)
        );
    }
    if ((params["min_border_white"] ?? null) !== null) {
        cargs.push(
            "-min_border_white",
            String((params["min_border_white"] ?? null))
        );
    }
    if ((params["max_border_white"] ?? null) !== null) {
        cargs.push(
            "-max_border_white",
            String((params["max_border_white"] ?? null))
        );
    }
    if ((params["min_gray_white_border"] ?? null) !== null) {
        cargs.push(
            "-min_gray_at_white_border",
            String((params["min_gray_white_border"] ?? null))
        );
    }
    if ((params["max_gray"] ?? null) !== null) {
        cargs.push(
            "-max_gray",
            String((params["max_gray"] ?? null))
        );
    }
    if ((params["max_gray_csf_border"] ?? null) !== null) {
        cargs.push(
            "-max_gray_at_csf_border",
            String((params["max_gray_csf_border"] ?? null))
        );
    }
    if ((params["min_gray_csf_border"] ?? null) !== null) {
        cargs.push(
            "-min_gray_at_csf_border",
            String((params["min_gray_csf_border"] ?? null))
        );
    }
    if ((params["max_csf"] ?? null) !== null) {
        cargs.push(
            "-max_csf",
            String((params["max_csf"] ?? null))
        );
    }
    return cargs;
}


function mris_make_surfaces_outputs(
    params: MrisMakeSurfacesParameters,
    execution: Execution,
): MrisMakeSurfacesOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisMakeSurfacesOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mris_make_surfaces_execute(
    params: MrisMakeSurfacesParameters,
    execution: Execution,
): MrisMakeSurfacesOutputs {
    /**
     * Positions the tessellation of the cortical surface at the white matter surface, then the gray matter surface, generating surface files along with a curvature file and a surface file for cortical thickness.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisMakeSurfacesOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_make_surfaces_cargs(params, execution)
    const ret = mris_make_surfaces_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_make_surfaces(
    subject_name: string,
    hemisphere: string,
    white: string | null = null,
    pial: string | null = null,
    whiteonly: boolean = false,
    nowhite: boolean = false,
    orig_white: string | null = null,
    orig_pial: string | null = null,
    q: boolean = false,
    max_gray_scale: number | null = null,
    c: boolean = false,
    cortex: number | null = null,
    w: number | null = null,
    first_wm_peak: boolean = false,
    a_avgs: number | null = null,
    pa_avgs: number | null = null,
    wa_avgs: number | null = null,
    t1_vol: string | null = null,
    w_vol: string | null = null,
    long: boolean = false,
    dura_thresh: number | null = null,
    sdir: string | null = null,
    erase_cerebellum: boolean = false,
    wm_weight: number | null = null,
    nsigma_above: number | null = null,
    nsigma_below: number | null = null,
    t2_min_inside: number | null = null,
    t2_max_inside: number | null = null,
    t2_outside_min: number | null = null,
    t2_outside_max: number | null = null,
    min_peak_pct: number | null = null,
    border_vals_hires: boolean = false,
    no_unitize: boolean = false,
    intensity: number | null = null,
    curv: number | null = null,
    tspring: number | null = null,
    nspring: number | null = null,
    repulse: number | null = null,
    save_target: boolean = false,
    save_res: boolean = false,
    v_vertexno: number | null = null,
    diag_vertex: number | null = null,
    rip: string | null = null,
    sigma_white: string | null = null,
    sigma_pial: string | null = null,
    output: string | null = null,
    min_border_white: number | null = null,
    max_border_white: number | null = null,
    min_gray_white_border: number | null = null,
    max_gray: number | null = null,
    max_gray_csf_border: number | null = null,
    min_gray_csf_border: number | null = null,
    max_csf: number | null = null,
    runner: Runner | null = null,
): MrisMakeSurfacesOutputs {
    /**
     * Positions the tessellation of the cortical surface at the white matter surface, then the gray matter surface, generating surface files along with a curvature file and a surface file for cortical thickness.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_name Name of the subject
     * @param hemisphere Brain hemisphere (r or l)
     * @param white Output name for white surface (default is 'white'). Set to NOWHITE to generate but not save white surface.
     * @param pial Output name for pial surface (default is 'pial').
     * @param whiteonly Only generate white matter surface.
     * @param nowhite Only generate pial surface.
     * @param orig_white Specify a white surface to start with.
     * @param orig_pial Specify a pial surface to start with.
     * @param q Omit self-intersection and only generate gray/white surface.
     * @param max_gray_scale Set maximum gray scale value.
     * @param c Do not create curvature and area files from white matter surface.
     * @param cortex Set to 0 to turn off creation of cortex label file.
     * @param w Unused argument
     * @param first_wm_peak Settle WM surface at first peak in intensity profile instead of highest.
     * @param a_avgs Average curvature values a number of times (default=10).
     * @param pa_avgs Average pial curvature values a max of a number of times (default=16).
     * @param wa_avgs Average white curvature values a max of a number of times (default=4).
     * @param t1_vol Specify T1 volume (default is brain).
     * @param w_vol Specify white volume and <hires> option.
     * @param long Run longitudinal analysis.
     * @param dura_thresh Set a threshold for the multi-echo mprage dura avoidance.
     * @param sdir Specify SUBJECTS_DIR.
     * @param erase_cerebellum Erase cerebellar labeled voxels if aseg is loaded.
     * @param wm_weight Weighting of WM mean in calculating T2 threshold of disallowed GM values, default=3.
     * @param nsigma_above # of sigmas above the mean to allow gray matter T2 intensities.
     * @param nsigma_below # of sigmas below the mean to allow gray matter T2 intensities.
     * @param t2_min_inside Specify threshold for min T2 value allowed to be interior to the cortical ribbon.
     * @param t2_max_inside Specify threshold for max T2 value allowed to be interior to the cortical ribbon.
     * @param t2_outside_min Specify threshold for min T2 value outside of pial surface that will cause surface to deform outwards.
     * @param t2_outside_max Specify threshold for max T2 value outside of pial surface that will cause surface to deform outwards.
     * @param min_peak_pct Specify the pct of the histo peak in the local gm histogram to use as threshold for finding the local inside and outside gm thresholds.
     * @param border_vals_hires Turn on hires options in MRIScomputeBorderValues_new(). May not be helpful.
     * @param no_unitize Turn off face normal unitization.
     * @param intensity Set weight of intensity cost.
     * @param curv Set weight of curvature cost.
     * @param tspring Set weight of tangential spring cost.
     * @param nspring Set weight of normal spring cost.
     * @param repulse Set weight of repulsion force.
     * @param save_target Save target surface for debugging.
     * @param save_res Save residual for debugging.
     * @param v_vertexno Set Gdiag_no to vertex number.
     * @param diag_vertex Set Gdiag_no to vertex number and turn off writing of cortex label or curvature files.
     * @param rip Save ripflag as overlay. Specify full path including hemi, suffix, etc.
     * @param sigma_white Save white surface sigma as overlay. Specify full path including hemi, suffix, etc.
     * @param sigma_pial Save pial surface sigma as overlay. Specify full path including hemi, suffix, etc.
     * @param output Append suffix to all outputs to prevent over-writing.
     * @param min_border_white Minimum border white.
     * @param max_border_white Maximum border white.
     * @param min_gray_white_border Minimum gray at white border.
     * @param max_gray Maximum gray value.
     * @param max_gray_csf_border Maximum gray at CSF border.
     * @param min_gray_csf_border Minimum gray at CSF border.
     * @param max_csf Maximum CSF value.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisMakeSurfacesOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_MAKE_SURFACES_METADATA);
    const params = mris_make_surfaces_params(subject_name, hemisphere, white, pial, whiteonly, nowhite, orig_white, orig_pial, q, max_gray_scale, c, cortex, w, first_wm_peak, a_avgs, pa_avgs, wa_avgs, t1_vol, w_vol, long, dura_thresh, sdir, erase_cerebellum, wm_weight, nsigma_above, nsigma_below, t2_min_inside, t2_max_inside, t2_outside_min, t2_outside_max, min_peak_pct, border_vals_hires, no_unitize, intensity, curv, tspring, nspring, repulse, save_target, save_res, v_vertexno, diag_vertex, rip, sigma_white, sigma_pial, output, min_border_white, max_border_white, min_gray_white_border, max_gray, max_gray_csf_border, min_gray_csf_border, max_csf)
    return mris_make_surfaces_execute(params, execution);
}


export {
      MRIS_MAKE_SURFACES_METADATA,
      MrisMakeSurfacesOutputs,
      MrisMakeSurfacesParameters,
      mris_make_surfaces,
      mris_make_surfaces_params,
};
