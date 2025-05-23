// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_TRACK_ID_METADATA: Metadata = {
    id: "3f64f0f6b5dc6322ed516320e5dec4b5ffc35c45.boutiques",
    name: "3dTrackID",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dTrackIdParameters {
    "__STYXTYPE__": "3dTrackID";
    "mode": "DET" | "MINIP" | "PROB";
    "netrois": InputPathType;
    "prefix": string;
    "dti_in"?: string | null | undefined;
    "dti_list"?: InputPathType | null | undefined;
    "dti_extra"?: string | null | undefined;
    "dti_search_no": boolean;
    "hardi_gfa"?: InputPathType | null | undefined;
    "hardi_dirs"?: InputPathType | null | undefined;
    "hardi_pars"?: string | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "thru_mask"?: InputPathType | null | undefined;
    "targ_surf_stop": boolean;
    "targ_surf_twixt": boolean;
    "logic": "OR" | "AND";
    "mini_num"?: number | null | undefined;
    "uncert"?: InputPathType | null | undefined;
    "unc_min_fa"?: number | null | undefined;
    "unc_min_v"?: number | null | undefined;
    "algopt"?: InputPathType | null | undefined;
    "alg_thresh_fa"?: number | null | undefined;
    "alg_thresh_ang"?: number | null | undefined;
    "alg_thresh_len"?: number | null | undefined;
    "alg_nseed_x"?: number | null | undefined;
    "alg_nseed_y"?: number | null | undefined;
    "alg_nseed_z"?: number | null | undefined;
    "alg_thresh_frac"?: number | null | undefined;
    "alg_nseed_vox"?: number | null | undefined;
    "alg_nmonte"?: number | null | undefined;
    "extra_tr_par": boolean;
    "uncut_at_rois": boolean;
    "dump_rois"?: "DUMP" | "AFNI" | "BOTH" | "AFNI_MAP" | null | undefined;
    "dump_no_labtab": boolean;
    "dump_lab_consec": boolean;
    "posteriori": boolean;
    "rec_orig": boolean;
    "do_trk_out": boolean;
    "trk_opp_orient": boolean;
    "nifti": boolean;
    "no_indipair_out": boolean;
    "write_rois": boolean;
    "write_opts": boolean;
    "pair_out_power": boolean;
    "verb"?: number | null | undefined;
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
        "3dTrackID": v_3d_track_id_cargs,
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
        "3dTrackID": v_3d_track_id_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_track_id(...)`.
 *
 * @interface
 */
interface V3dTrackIdOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output of INDIMAP
     */
    indimap: OutputPathType;
    /**
     * Output of PAIRMAP
     */
    pairmap: OutputPathType;
    /**
     * Text file output of statistics of WM-ROIs
     */
    grid: OutputPathType;
    /**
     * Track-like output for viewing in SUMA
     */
    niml_tract: OutputPathType;
    /**
     * Dataset output for use with *.niml.tract
     */
    niml_dset: OutputPathType;
    /**
     * TrackVis-like output for viewing in TrackVis
     */
    trk: OutputPathType;
    /**
     * Output of PAIRMAP labeltable
     */
    pairmap_labeltable: OutputPathType;
    /**
     * Output file of all ROI labels
     */
    roi_labels: OutputPathType;
    /**
     * Output of all option values
     */
    option_values: OutputPathType;
}


function v_3d_track_id_params(
    mode: "DET" | "MINIP" | "PROB",
    netrois: InputPathType,
    prefix: string,
    logic: "OR" | "AND",
    dti_in: string | null = null,
    dti_list: InputPathType | null = null,
    dti_extra: string | null = null,
    dti_search_no: boolean = false,
    hardi_gfa: InputPathType | null = null,
    hardi_dirs: InputPathType | null = null,
    hardi_pars: string | null = null,
    mask: InputPathType | null = null,
    thru_mask: InputPathType | null = null,
    targ_surf_stop: boolean = false,
    targ_surf_twixt: boolean = false,
    mini_num: number | null = null,
    uncert: InputPathType | null = null,
    unc_min_fa: number | null = null,
    unc_min_v: number | null = null,
    algopt: InputPathType | null = null,
    alg_thresh_fa: number | null = null,
    alg_thresh_ang: number | null = null,
    alg_thresh_len: number | null = null,
    alg_nseed_x: number | null = null,
    alg_nseed_y: number | null = null,
    alg_nseed_z: number | null = null,
    alg_thresh_frac: number | null = null,
    alg_nseed_vox: number | null = null,
    alg_nmonte: number | null = null,
    extra_tr_par: boolean = false,
    uncut_at_rois: boolean = false,
    dump_rois: "DUMP" | "AFNI" | "BOTH" | "AFNI_MAP" | null = null,
    dump_no_labtab: boolean = false,
    dump_lab_consec: boolean = false,
    posteriori: boolean = false,
    rec_orig: boolean = false,
    do_trk_out: boolean = false,
    trk_opp_orient: boolean = false,
    nifti: boolean = false,
    no_indipair_out: boolean = false,
    write_rois: boolean = false,
    write_opts: boolean = false,
    pair_out_power: boolean = false,
    verb: number | null = null,
): V3dTrackIdParameters {
    /**
     * Build parameters.
    
     * @param mode The mode of tracking: DET, MINIP, or PROB
     * @param netrois Network ROI mask(s)
     * @param prefix Prefix for output files
     * @param logic Control logic connections among target ROIs per network
     * @param dti_in Input DTI volumes basename
     * @param dti_list Alternative way to specify DTI input files, a NIML-formatted text file
     * @param dti_extra Option for extra scalar for WM skeleton thresholding
     * @param dti_search_no Turn off automatic search for additional scalar files to include in output
     * @param hardi_gfa Single brik dataset with generalized FA (GFA) info
     * @param hardi_dirs Directions file for HARDI data containing directions components
     * @param hardi_pars Prefix to search for scalar files naming format
     * @param mask Mask within which tracking is done. Optional but highly recommended.
     * @param thru_mask Extra restrictor mask through which paths are strictly required to pass
     * @param targ_surf_stop Make tracts stop at outer surfaces of the target ROIs
     * @param targ_surf_twixt Make tracts stop just before entering target surfaces
     * @param mini_num Number of whole brain Monte Carlo iterations for mini-probabilistic tracking
     * @param uncert Uncertainty values file
     * @param unc_min_fa Minimum stdev for perturbing FA
     * @param unc_min_v Minimum stdev for perturbing direction-vectors
     * @param algopt Specify tracking parameter quantities file in ASCII
     * @param alg_thresh_fa Set threshold for FA map or other WM proxy
     * @param alg_thresh_ang Set maximum angle for turning during propagation
     * @param alg_thresh_len Set minimum physical length of tracts to keep
     * @param alg_nseed_x Number of seeds per voxel in x-direction
     * @param alg_nseed_y Number of seeds per voxel in y-direction
     * @param alg_nseed_z Number of seeds per voxel in z-direction
     * @param alg_thresh_frac Value for thresholding the fraction of tracks through a voxel for a given connection
     * @param alg_nseed_vox Number of seeds per voxel per Monte Carlo iteration
     * @param alg_nmonte Number of Monte Carlo iterations
     * @param extra_tr_par Run three extra track parameter scalings for each connection
     * @param uncut_at_rois Keep entire track even if overshoots a target
     * @param dump_rois Output individual masks of ROI connections
     * @param dump_no_labtab Turn off label table use in ROI dump output
     * @param dump_lab_consec DON'T apply numerical labels of original ROIs in dump output
     * @param posteriori Output individual files with number of tracks per voxel per pair
     * @param rec_orig Record dataset origin in header of *.trk file
     * @param do_trk_out Output *.trk files for viewing in TrackVis
     * @param trk_opp_orient Oppositize voxel_order for TRK files
     * @param nifti Output files in *.nii.gz format
     * @param no_indipair_out Do not output INDIMAP and PAIRMAP volumes
     * @param write_rois Write out ROI labels
     * @param write_opts Write out all option values
     * @param pair_out_power Switch to use powers of two labelling for PAIRMAP
     * @param verb Set verbosity level
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dTrackID" as const,
        "mode": mode,
        "netrois": netrois,
        "prefix": prefix,
        "dti_search_no": dti_search_no,
        "targ_surf_stop": targ_surf_stop,
        "targ_surf_twixt": targ_surf_twixt,
        "logic": logic,
        "extra_tr_par": extra_tr_par,
        "uncut_at_rois": uncut_at_rois,
        "dump_no_labtab": dump_no_labtab,
        "dump_lab_consec": dump_lab_consec,
        "posteriori": posteriori,
        "rec_orig": rec_orig,
        "do_trk_out": do_trk_out,
        "trk_opp_orient": trk_opp_orient,
        "nifti": nifti,
        "no_indipair_out": no_indipair_out,
        "write_rois": write_rois,
        "write_opts": write_opts,
        "pair_out_power": pair_out_power,
    };
    if (dti_in !== null) {
        params["dti_in"] = dti_in;
    }
    if (dti_list !== null) {
        params["dti_list"] = dti_list;
    }
    if (dti_extra !== null) {
        params["dti_extra"] = dti_extra;
    }
    if (hardi_gfa !== null) {
        params["hardi_gfa"] = hardi_gfa;
    }
    if (hardi_dirs !== null) {
        params["hardi_dirs"] = hardi_dirs;
    }
    if (hardi_pars !== null) {
        params["hardi_pars"] = hardi_pars;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (thru_mask !== null) {
        params["thru_mask"] = thru_mask;
    }
    if (mini_num !== null) {
        params["mini_num"] = mini_num;
    }
    if (uncert !== null) {
        params["uncert"] = uncert;
    }
    if (unc_min_fa !== null) {
        params["unc_min_fa"] = unc_min_fa;
    }
    if (unc_min_v !== null) {
        params["unc_min_v"] = unc_min_v;
    }
    if (algopt !== null) {
        params["algopt"] = algopt;
    }
    if (alg_thresh_fa !== null) {
        params["alg_thresh_fa"] = alg_thresh_fa;
    }
    if (alg_thresh_ang !== null) {
        params["alg_thresh_ang"] = alg_thresh_ang;
    }
    if (alg_thresh_len !== null) {
        params["alg_thresh_len"] = alg_thresh_len;
    }
    if (alg_nseed_x !== null) {
        params["alg_nseed_x"] = alg_nseed_x;
    }
    if (alg_nseed_y !== null) {
        params["alg_nseed_y"] = alg_nseed_y;
    }
    if (alg_nseed_z !== null) {
        params["alg_nseed_z"] = alg_nseed_z;
    }
    if (alg_thresh_frac !== null) {
        params["alg_thresh_frac"] = alg_thresh_frac;
    }
    if (alg_nseed_vox !== null) {
        params["alg_nseed_vox"] = alg_nseed_vox;
    }
    if (alg_nmonte !== null) {
        params["alg_nmonte"] = alg_nmonte;
    }
    if (dump_rois !== null) {
        params["dump_rois"] = dump_rois;
    }
    if (verb !== null) {
        params["verb"] = verb;
    }
    return params;
}


function v_3d_track_id_cargs(
    params: V3dTrackIdParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dTrackID");
    cargs.push((params["mode"] ?? null));
    cargs.push(execution.inputFile((params["netrois"] ?? null)));
    cargs.push((params["prefix"] ?? null));
    if ((params["dti_in"] ?? null) !== null) {
        cargs.push((params["dti_in"] ?? null));
    }
    if ((params["dti_list"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["dti_list"] ?? null)));
    }
    if ((params["dti_extra"] ?? null) !== null) {
        cargs.push((params["dti_extra"] ?? null));
    }
    if ((params["dti_search_no"] ?? null)) {
        cargs.push("-dti_search_NO");
    }
    if ((params["hardi_gfa"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["hardi_gfa"] ?? null)));
    }
    if ((params["hardi_dirs"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["hardi_dirs"] ?? null)));
    }
    if ((params["hardi_pars"] ?? null) !== null) {
        cargs.push((params["hardi_pars"] ?? null));
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["mask"] ?? null)));
    }
    if ((params["thru_mask"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["thru_mask"] ?? null)));
    }
    if ((params["targ_surf_stop"] ?? null)) {
        cargs.push("-targ_surf_stop");
    }
    if ((params["targ_surf_twixt"] ?? null)) {
        cargs.push("-targ_surf_twixt");
    }
    cargs.push((params["logic"] ?? null));
    if ((params["mini_num"] ?? null) !== null) {
        cargs.push(String((params["mini_num"] ?? null)));
    }
    if ((params["uncert"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["uncert"] ?? null)));
    }
    if ((params["unc_min_fa"] ?? null) !== null) {
        cargs.push(String((params["unc_min_fa"] ?? null)));
    }
    if ((params["unc_min_v"] ?? null) !== null) {
        cargs.push(String((params["unc_min_v"] ?? null)));
    }
    if ((params["algopt"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["algopt"] ?? null)));
    }
    if ((params["alg_thresh_fa"] ?? null) !== null) {
        cargs.push(String((params["alg_thresh_fa"] ?? null)));
    }
    if ((params["alg_thresh_ang"] ?? null) !== null) {
        cargs.push(String((params["alg_thresh_ang"] ?? null)));
    }
    if ((params["alg_thresh_len"] ?? null) !== null) {
        cargs.push(String((params["alg_thresh_len"] ?? null)));
    }
    if ((params["alg_nseed_x"] ?? null) !== null) {
        cargs.push(String((params["alg_nseed_x"] ?? null)));
    }
    if ((params["alg_nseed_y"] ?? null) !== null) {
        cargs.push(String((params["alg_nseed_y"] ?? null)));
    }
    if ((params["alg_nseed_z"] ?? null) !== null) {
        cargs.push(String((params["alg_nseed_z"] ?? null)));
    }
    if ((params["alg_thresh_frac"] ?? null) !== null) {
        cargs.push(String((params["alg_thresh_frac"] ?? null)));
    }
    if ((params["alg_nseed_vox"] ?? null) !== null) {
        cargs.push(String((params["alg_nseed_vox"] ?? null)));
    }
    if ((params["alg_nmonte"] ?? null) !== null) {
        cargs.push(String((params["alg_nmonte"] ?? null)));
    }
    if ((params["extra_tr_par"] ?? null)) {
        cargs.push("-extra_tr_par");
    }
    if ((params["uncut_at_rois"] ?? null)) {
        cargs.push("-uncut_at_rois");
    }
    if ((params["dump_rois"] ?? null) !== null) {
        cargs.push((params["dump_rois"] ?? null));
    }
    if ((params["dump_no_labtab"] ?? null)) {
        cargs.push("-dump_no_labtab");
    }
    if ((params["dump_lab_consec"] ?? null)) {
        cargs.push("-dump_lab_consec");
    }
    if ((params["posteriori"] ?? null)) {
        cargs.push("-posteriori");
    }
    if ((params["rec_orig"] ?? null)) {
        cargs.push("-rec_orig");
    }
    if ((params["do_trk_out"] ?? null)) {
        cargs.push("-do_trk_out");
    }
    if ((params["trk_opp_orient"] ?? null)) {
        cargs.push("-trk_opp_orient");
    }
    if ((params["nifti"] ?? null)) {
        cargs.push("-nifti");
    }
    if ((params["no_indipair_out"] ?? null)) {
        cargs.push("-no_indipair_out");
    }
    if ((params["write_rois"] ?? null)) {
        cargs.push("-write_rois");
    }
    if ((params["write_opts"] ?? null)) {
        cargs.push("-write_opts");
    }
    if ((params["pair_out_power"] ?? null)) {
        cargs.push("-pair_out_power");
    }
    if ((params["verb"] ?? null) !== null) {
        cargs.push(String((params["verb"] ?? null)));
    }
    return cargs;
}


function v_3d_track_id_outputs(
    params: V3dTrackIdParameters,
    execution: Execution,
): V3dTrackIdOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dTrackIdOutputs = {
        root: execution.outputFile("."),
        indimap: execution.outputFile([(params["prefix"] ?? null), "_INDIMAP.nii.gz"].join('')),
        pairmap: execution.outputFile([(params["prefix"] ?? null), "_PAIRMAP.nii.gz"].join('')),
        grid: execution.outputFile([(params["prefix"] ?? null), ".grid"].join('')),
        niml_tract: execution.outputFile([(params["prefix"] ?? null), ".niml.tract"].join('')),
        niml_dset: execution.outputFile([(params["prefix"] ?? null), ".niml.dset"].join('')),
        trk: execution.outputFile([(params["prefix"] ?? null), ".trk"].join('')),
        pairmap_labeltable: execution.outputFile([(params["prefix"] ?? null), "_PAIRS.niml.lt"].join('')),
        roi_labels: execution.outputFile([(params["prefix"] ?? null), "_roi.labs"].join('')),
        option_values: execution.outputFile([(params["prefix"] ?? null), ".niml.opts"].join('')),
    };
    return ret;
}


function v_3d_track_id_execute(
    params: V3dTrackIdParameters,
    execution: Execution,
): V3dTrackIdOutputs {
    /**
     * FACTID-based tractography code for AFNI, part of FATCAT.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dTrackIdOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_track_id_cargs(params, execution)
    const ret = v_3d_track_id_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_track_id(
    mode: "DET" | "MINIP" | "PROB",
    netrois: InputPathType,
    prefix: string,
    logic: "OR" | "AND",
    dti_in: string | null = null,
    dti_list: InputPathType | null = null,
    dti_extra: string | null = null,
    dti_search_no: boolean = false,
    hardi_gfa: InputPathType | null = null,
    hardi_dirs: InputPathType | null = null,
    hardi_pars: string | null = null,
    mask: InputPathType | null = null,
    thru_mask: InputPathType | null = null,
    targ_surf_stop: boolean = false,
    targ_surf_twixt: boolean = false,
    mini_num: number | null = null,
    uncert: InputPathType | null = null,
    unc_min_fa: number | null = null,
    unc_min_v: number | null = null,
    algopt: InputPathType | null = null,
    alg_thresh_fa: number | null = null,
    alg_thresh_ang: number | null = null,
    alg_thresh_len: number | null = null,
    alg_nseed_x: number | null = null,
    alg_nseed_y: number | null = null,
    alg_nseed_z: number | null = null,
    alg_thresh_frac: number | null = null,
    alg_nseed_vox: number | null = null,
    alg_nmonte: number | null = null,
    extra_tr_par: boolean = false,
    uncut_at_rois: boolean = false,
    dump_rois: "DUMP" | "AFNI" | "BOTH" | "AFNI_MAP" | null = null,
    dump_no_labtab: boolean = false,
    dump_lab_consec: boolean = false,
    posteriori: boolean = false,
    rec_orig: boolean = false,
    do_trk_out: boolean = false,
    trk_opp_orient: boolean = false,
    nifti: boolean = false,
    no_indipair_out: boolean = false,
    write_rois: boolean = false,
    write_opts: boolean = false,
    pair_out_power: boolean = false,
    verb: number | null = null,
    runner: Runner | null = null,
): V3dTrackIdOutputs {
    /**
     * FACTID-based tractography code for AFNI, part of FATCAT.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param mode The mode of tracking: DET, MINIP, or PROB
     * @param netrois Network ROI mask(s)
     * @param prefix Prefix for output files
     * @param logic Control logic connections among target ROIs per network
     * @param dti_in Input DTI volumes basename
     * @param dti_list Alternative way to specify DTI input files, a NIML-formatted text file
     * @param dti_extra Option for extra scalar for WM skeleton thresholding
     * @param dti_search_no Turn off automatic search for additional scalar files to include in output
     * @param hardi_gfa Single brik dataset with generalized FA (GFA) info
     * @param hardi_dirs Directions file for HARDI data containing directions components
     * @param hardi_pars Prefix to search for scalar files naming format
     * @param mask Mask within which tracking is done. Optional but highly recommended.
     * @param thru_mask Extra restrictor mask through which paths are strictly required to pass
     * @param targ_surf_stop Make tracts stop at outer surfaces of the target ROIs
     * @param targ_surf_twixt Make tracts stop just before entering target surfaces
     * @param mini_num Number of whole brain Monte Carlo iterations for mini-probabilistic tracking
     * @param uncert Uncertainty values file
     * @param unc_min_fa Minimum stdev for perturbing FA
     * @param unc_min_v Minimum stdev for perturbing direction-vectors
     * @param algopt Specify tracking parameter quantities file in ASCII
     * @param alg_thresh_fa Set threshold for FA map or other WM proxy
     * @param alg_thresh_ang Set maximum angle for turning during propagation
     * @param alg_thresh_len Set minimum physical length of tracts to keep
     * @param alg_nseed_x Number of seeds per voxel in x-direction
     * @param alg_nseed_y Number of seeds per voxel in y-direction
     * @param alg_nseed_z Number of seeds per voxel in z-direction
     * @param alg_thresh_frac Value for thresholding the fraction of tracks through a voxel for a given connection
     * @param alg_nseed_vox Number of seeds per voxel per Monte Carlo iteration
     * @param alg_nmonte Number of Monte Carlo iterations
     * @param extra_tr_par Run three extra track parameter scalings for each connection
     * @param uncut_at_rois Keep entire track even if overshoots a target
     * @param dump_rois Output individual masks of ROI connections
     * @param dump_no_labtab Turn off label table use in ROI dump output
     * @param dump_lab_consec DON'T apply numerical labels of original ROIs in dump output
     * @param posteriori Output individual files with number of tracks per voxel per pair
     * @param rec_orig Record dataset origin in header of *.trk file
     * @param do_trk_out Output *.trk files for viewing in TrackVis
     * @param trk_opp_orient Oppositize voxel_order for TRK files
     * @param nifti Output files in *.nii.gz format
     * @param no_indipair_out Do not output INDIMAP and PAIRMAP volumes
     * @param write_rois Write out ROI labels
     * @param write_opts Write out all option values
     * @param pair_out_power Switch to use powers of two labelling for PAIRMAP
     * @param verb Set verbosity level
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dTrackIdOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_TRACK_ID_METADATA);
    const params = v_3d_track_id_params(mode, netrois, prefix, logic, dti_in, dti_list, dti_extra, dti_search_no, hardi_gfa, hardi_dirs, hardi_pars, mask, thru_mask, targ_surf_stop, targ_surf_twixt, mini_num, uncert, unc_min_fa, unc_min_v, algopt, alg_thresh_fa, alg_thresh_ang, alg_thresh_len, alg_nseed_x, alg_nseed_y, alg_nseed_z, alg_thresh_frac, alg_nseed_vox, alg_nmonte, extra_tr_par, uncut_at_rois, dump_rois, dump_no_labtab, dump_lab_consec, posteriori, rec_orig, do_trk_out, trk_opp_orient, nifti, no_indipair_out, write_rois, write_opts, pair_out_power, verb)
    return v_3d_track_id_execute(params, execution);
}


export {
      V3dTrackIdOutputs,
      V3dTrackIdParameters,
      V_3D_TRACK_ID_METADATA,
      v_3d_track_id,
      v_3d_track_id_params,
};
