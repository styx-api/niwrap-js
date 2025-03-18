// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const EDDY_METADATA: Metadata = {
    id: "f596387c4a1472024a7a466d87ce6613e3f73908.boutiques",
    name: "eddy",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface EddyParameters {
    "__STYXTYPE__": "eddy";
    "imain": InputPathType;
    "mask": InputPathType;
    "index": InputPathType;
    "acqp": InputPathType;
    "bvecs": InputPathType;
    "bvals": InputPathType;
    "out": string;
    "mb"?: number | null | undefined;
    "mb_offs"?: number | null | undefined;
    "slspec"?: InputPathType | null | undefined;
    "json"?: InputPathType | null | undefined;
    "mporder"?: number | null | undefined;
    "s2v_lambda"?: number | null | undefined;
    "topup"?: InputPathType | null | undefined;
    "field"?: InputPathType | null | undefined;
    "field_mat"?: InputPathType | null | undefined;
    "flm"?: "movement" | "linear" | "quadratic" | "cubic" | null | undefined;
    "slm"?: "none" | "linear" | "quadratic" | null | undefined;
    "fwhm"?: number | null | undefined;
    "niter"?: number | null | undefined;
    "s2v_niter"?: number | null | undefined;
    "cnr_maps": boolean;
    "residuals": boolean;
    "fep": boolean;
    "interp"?: "spline" | "trilinear" | null | undefined;
    "s2v_interp"?: "spline" | "trilinear" | null | undefined;
    "resamp"?: "jac" | "lsr" | null | undefined;
    "nvoxhp"?: number | null | undefined;
    "initrand"?: number | null | undefined;
    "ff"?: number | null | undefined;
    "repol": boolean;
    "ol_nstd"?: number | null | undefined;
    "ol_nvox"?: number | null | undefined;
    "ol_type"?: "sw" | "gw" | "both" | null | undefined;
    "ol_pos": boolean;
    "ol_sqr": boolean;
    "estimate_move_by_susceptibility": boolean;
    "mbs_niter"?: number | null | undefined;
    "mbs_lambda"?: number | null | undefined;
    "mbs_ksp"?: number | null | undefined;
    "dont_sep_offs_move": boolean;
    "dont_peas": boolean;
    "data_is_shelled": boolean;
    "verbose": boolean;
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
        "eddy": eddy_cargs,
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
        "eddy": eddy_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `eddy(...)`.
 *
 * @interface
 */
interface EddyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file containing the corrected images
     */
    out: OutputPathType;
    /**
     * Text file containing subject movement and EC-induced field parameters for each volume
     */
    eddy_parameters: OutputPathType;
    /**
     * File containing the reoriented b-vectors for diffusion analysis
     */
    rotated_bvecs: OutputPathType;
    /**
     * File with rotated b-vectors for least-squares reconstruction
     */
    rotated_bvecs_slr: OutputPathType;
    /**
     * Text file documenting the command line used to run eddy
     */
    command_txt: OutputPathType;
    /**
     * List of all parameters used by eddy
     */
    input_parameters: OutputPathType;
    /**
     * Summary of total movement for each volume
     */
    movement_rms: OutputPathType;
    /**
     * Estimates movement RMS while disregarding translation in the PE direction
     */
    restricted_movement_rms: OutputPathType;
    /**
     * Text file with rigid body movement parameters between different shells
     */
    shell_alignment_parameters: OutputPathType;
    /**
     * Translation parameters along the PE direction between different shells
     */
    shell_pe_translation_parameters: OutputPathType;
    /**
     * Report of detected outlier slices
     */
    outlier_report: OutputPathType;
    /**
     * Numeric matrix indicating outlier slices
     */
    outlier_map: OutputPathType;
    /**
     * Map of the number of standard deviations for outliers
     */
    outlier_n_stdev_map: OutputPathType;
    /**
     * Map of the number of squared standard deviations for outliers
     */
    outlier_n_sqr_stdev_map: OutputPathType;
    /**
     * Original data with outlier slices replaced, only if --repol was set
     */
    outlier_free_data: OutputPathType;
    /**
     * Text file with movement parameters over time, only if --mporder > 0
     */
    movement_over_time: OutputPathType;
    /**
     * 4D image file of partial derivative fields, only if --estimate_move_by_susceptibility is set
     */
    mbs_first_order_fields: OutputPathType;
    /**
     * 4D image file with SNR and CNR maps, only if --cnr_maps is set
     */
    cnr_maps: OutputPathType;
    /**
     * 4D image file of residuals, only if --residuals is set
     */
    residuals: OutputPathType;
}


function eddy_params(
    imain: InputPathType,
    mask: InputPathType,
    index: InputPathType,
    acqp: InputPathType,
    bvecs: InputPathType,
    bvals: InputPathType,
    out: string = "eddy_corrected",
    mb: number | null = null,
    mb_offs: number | null = null,
    slspec: InputPathType | null = null,
    json: InputPathType | null = null,
    mporder: number | null = null,
    s2v_lambda: number | null = null,
    topup: InputPathType | null = null,
    field: InputPathType | null = null,
    field_mat: InputPathType | null = null,
    flm: "movement" | "linear" | "quadratic" | "cubic" | null = null,
    slm: "none" | "linear" | "quadratic" | null = null,
    fwhm: number | null = null,
    niter: number | null = null,
    s2v_niter: number | null = null,
    cnr_maps: boolean = false,
    residuals: boolean = false,
    fep: boolean = false,
    interp: "spline" | "trilinear" | null = null,
    s2v_interp: "spline" | "trilinear" | null = null,
    resamp: "jac" | "lsr" | null = null,
    nvoxhp: number | null = null,
    initrand: number | null = null,
    ff: number | null = null,
    repol: boolean = false,
    ol_nstd: number | null = null,
    ol_nvox: number | null = null,
    ol_type: "sw" | "gw" | "both" | null = null,
    ol_pos: boolean = false,
    ol_sqr: boolean = false,
    estimate_move_by_susceptibility: boolean = false,
    mbs_niter: number | null = null,
    mbs_lambda: number | null = null,
    mbs_ksp: number | null = null,
    dont_sep_offs_move: boolean = false,
    dont_peas: boolean = false,
    data_is_shelled: boolean = false,
    verbose: boolean = false,
): EddyParameters {
    /**
     * Build parameters.
    
     * @param imain File containing all the images to estimate distortions for
     * @param mask Mask to indicate brain
     * @param index File containing indices for all volumes in --imain into --acqp and --topup
     * @param acqp File containing acquisition parameters
     * @param bvecs File containing the b-vectors for all volumes in --imain
     * @param bvals File containing the b-values for all volumes in --imain
     * @param out Basename for output
     * @param mb Multi-band factor
     * @param mb_offs Multi-band offset (-1 if bottom slice removed, 1 if top slice removed)
     * @param slspec Name of text file completely specifying slice/group acuistion. N.B. --slspec and --json are mutually exclusive.
     * @param json Name of .json text file with information about slice timing. N.B. --json and --slspec are mutually exclusive.
     * @param mporder Order of slice-to-vol movement model (default 0, i.e. vol-to-vol
     * @param s2v_lambda Regularisation weight for slice-to-vol movement. (default 1, reasonable range 1--10)
     * @param topup Base name for output files from topup
     * @param field Name of file with susceptibility field (in Hz)
     * @param field_mat Name of rigid body transform for susceptibility field
     * @param flm First level EC model (movement/linear/quadratic/cubic, default quadratic)
     * @param slm Second level EC model (none/linear/quadratic, default none)
     * @param fwhm FWHM for conditioning filter when estimating the parameters (default 0)
     * @param niter Number of iterations (default 5)
     * @param s2v_niter Number of iterations for slice-to-vol (default 5)
     * @param cnr_maps Write shell-wise cnr-maps (default false)
     * @param residuals Write residuals (between GP and observations), (default false)
     * @param fep Fill empty planes in x- or y-directions (default false)
     * @param interp Interpolation model for estimation step (spline/trilinear, default spline)
     * @param s2v_interp Slice-to-vol interpolation model for estimation step (spline/trilinear, default trilinear)
     * @param resamp Final resampling method (jac/lsr, default jac)
     * @param nvoxhp # of voxels used to estimate the hyperparameters (default 1000)
     * @param initrand Seeds rand for when selecting voxels (default 0=no seeding)
     * @param ff Fudge factor for hyperparameter error variance (default 10.0)
     * @param repol Detect and replace outlier slices (default false))
     * @param ol_nstd Number of std off to qualify as outlier (default 4)
     * @param ol_nvox Min # of voxels in a slice for inclusion in outlier detection (default 250)
     * @param ol_type Type of outliers, slicewise (sw), groupwise (gw) or both (both). (default sw)
     * @param ol_pos Consider both positive and negative outliers if set (default false)
     * @param ol_sqr Consider outliers among sums-of-squared differences if set (default false)
     * @param estimate_move_by_susceptibility Estimate how susceptibility field changes with subject movement (default false)
     * @param mbs_niter Number of iterations for MBS estimation (default 10)
     * @param mbs_lambda Weighting of regularisation for MBS estimation (default 10)
     * @param mbs_ksp Knot-spacing for MBS field estimation (default 10mm)
     * @param dont_sep_offs_move Do NOT attempt to separate field offset from subject movement (default false)
     * @param dont_peas Do NOT perform a post-eddy alignment of shells (default false)
     * @param data_is_shelled Assume, don't check, that data is shelled (default false)
     * @param verbose switch on diagnostic messages
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "eddy" as const,
        "imain": imain,
        "mask": mask,
        "index": index,
        "acqp": acqp,
        "bvecs": bvecs,
        "bvals": bvals,
        "out": out,
        "cnr_maps": cnr_maps,
        "residuals": residuals,
        "fep": fep,
        "repol": repol,
        "ol_pos": ol_pos,
        "ol_sqr": ol_sqr,
        "estimate_move_by_susceptibility": estimate_move_by_susceptibility,
        "dont_sep_offs_move": dont_sep_offs_move,
        "dont_peas": dont_peas,
        "data_is_shelled": data_is_shelled,
        "verbose": verbose,
    };
    if (mb !== null) {
        params["mb"] = mb;
    }
    if (mb_offs !== null) {
        params["mb_offs"] = mb_offs;
    }
    if (slspec !== null) {
        params["slspec"] = slspec;
    }
    if (json !== null) {
        params["json"] = json;
    }
    if (mporder !== null) {
        params["mporder"] = mporder;
    }
    if (s2v_lambda !== null) {
        params["s2v_lambda"] = s2v_lambda;
    }
    if (topup !== null) {
        params["topup"] = topup;
    }
    if (field !== null) {
        params["field"] = field;
    }
    if (field_mat !== null) {
        params["field_mat"] = field_mat;
    }
    if (flm !== null) {
        params["flm"] = flm;
    }
    if (slm !== null) {
        params["slm"] = slm;
    }
    if (fwhm !== null) {
        params["fwhm"] = fwhm;
    }
    if (niter !== null) {
        params["niter"] = niter;
    }
    if (s2v_niter !== null) {
        params["s2v_niter"] = s2v_niter;
    }
    if (interp !== null) {
        params["interp"] = interp;
    }
    if (s2v_interp !== null) {
        params["s2v_interp"] = s2v_interp;
    }
    if (resamp !== null) {
        params["resamp"] = resamp;
    }
    if (nvoxhp !== null) {
        params["nvoxhp"] = nvoxhp;
    }
    if (initrand !== null) {
        params["initrand"] = initrand;
    }
    if (ff !== null) {
        params["ff"] = ff;
    }
    if (ol_nstd !== null) {
        params["ol_nstd"] = ol_nstd;
    }
    if (ol_nvox !== null) {
        params["ol_nvox"] = ol_nvox;
    }
    if (ol_type !== null) {
        params["ol_type"] = ol_type;
    }
    if (mbs_niter !== null) {
        params["mbs_niter"] = mbs_niter;
    }
    if (mbs_lambda !== null) {
        params["mbs_lambda"] = mbs_lambda;
    }
    if (mbs_ksp !== null) {
        params["mbs_ksp"] = mbs_ksp;
    }
    return params;
}


function eddy_cargs(
    params: EddyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("eddy");
    cargs.push(["--imain=", execution.inputFile((params["imain"] ?? null))].join(''));
    cargs.push(["--mask=", execution.inputFile((params["mask"] ?? null))].join(''));
    cargs.push(["--index=", execution.inputFile((params["index"] ?? null))].join(''));
    cargs.push(["--acqp=", execution.inputFile((params["acqp"] ?? null))].join(''));
    cargs.push(["--bvecs=", execution.inputFile((params["bvecs"] ?? null))].join(''));
    cargs.push(["--bvals=", execution.inputFile((params["bvals"] ?? null))].join(''));
    cargs.push(["--out=", (params["out"] ?? null)].join(''));
    if ((params["mb"] ?? null) !== null) {
        cargs.push(["--mb=", String((params["mb"] ?? null))].join(''));
    }
    if ((params["mb_offs"] ?? null) !== null) {
        cargs.push(["--mb_offs=", String((params["mb_offs"] ?? null))].join(''));
    }
    if ((params["slspec"] ?? null) !== null) {
        cargs.push(["--slspec=", execution.inputFile((params["slspec"] ?? null))].join(''));
    }
    if ((params["json"] ?? null) !== null) {
        cargs.push(["--json=", execution.inputFile((params["json"] ?? null))].join(''));
    }
    if ((params["mporder"] ?? null) !== null) {
        cargs.push(["--mporder=", String((params["mporder"] ?? null))].join(''));
    }
    if ((params["s2v_lambda"] ?? null) !== null) {
        cargs.push(["--s2v_lambda=", String((params["s2v_lambda"] ?? null))].join(''));
    }
    if ((params["topup"] ?? null) !== null) {
        cargs.push(["--topup=", execution.inputFile((params["topup"] ?? null), { resolveParent: true })].join(''));
    }
    if ((params["field"] ?? null) !== null) {
        cargs.push(["--field=", execution.inputFile((params["field"] ?? null))].join(''));
    }
    if ((params["field_mat"] ?? null) !== null) {
        cargs.push(["--field_mat=", execution.inputFile((params["field_mat"] ?? null))].join(''));
    }
    if ((params["flm"] ?? null) !== null) {
        cargs.push(["--flm=", (params["flm"] ?? null)].join(''));
    }
    if ((params["slm"] ?? null) !== null) {
        cargs.push(["--slm=", (params["slm"] ?? null)].join(''));
    }
    if ((params["fwhm"] ?? null) !== null) {
        cargs.push(["--fwhm=", String((params["fwhm"] ?? null))].join(''));
    }
    if ((params["niter"] ?? null) !== null) {
        cargs.push(["--niter=", String((params["niter"] ?? null))].join(''));
    }
    if ((params["s2v_niter"] ?? null) !== null) {
        cargs.push(["--s2v_niter=", String((params["s2v_niter"] ?? null))].join(''));
    }
    if ((params["cnr_maps"] ?? null)) {
        cargs.push("--cnr_maps");
    }
    if ((params["residuals"] ?? null)) {
        cargs.push("--residuals");
    }
    if ((params["fep"] ?? null)) {
        cargs.push("--fep");
    }
    if ((params["interp"] ?? null) !== null) {
        cargs.push(["--interp=", (params["interp"] ?? null)].join(''));
    }
    if ((params["s2v_interp"] ?? null) !== null) {
        cargs.push(["--s2v_interp=", (params["s2v_interp"] ?? null)].join(''));
    }
    if ((params["resamp"] ?? null) !== null) {
        cargs.push(["--resamp=", (params["resamp"] ?? null)].join(''));
    }
    if ((params["nvoxhp"] ?? null) !== null) {
        cargs.push(["--nvoxhp=", String((params["nvoxhp"] ?? null))].join(''));
    }
    if ((params["initrand"] ?? null) !== null) {
        cargs.push(["--initrand=", String((params["initrand"] ?? null))].join(''));
    }
    if ((params["ff"] ?? null) !== null) {
        cargs.push(["--ff=", String((params["ff"] ?? null))].join(''));
    }
    if ((params["repol"] ?? null)) {
        cargs.push("--repol");
    }
    if ((params["ol_nstd"] ?? null) !== null) {
        cargs.push(["--ol_nstd=", String((params["ol_nstd"] ?? null))].join(''));
    }
    if ((params["ol_nvox"] ?? null) !== null) {
        cargs.push(["--ol_nvox=", String((params["ol_nvox"] ?? null))].join(''));
    }
    if ((params["ol_type"] ?? null) !== null) {
        cargs.push(["--ol_type=", (params["ol_type"] ?? null)].join(''));
    }
    if ((params["ol_pos"] ?? null)) {
        cargs.push("--ol_pos");
    }
    if ((params["ol_sqr"] ?? null)) {
        cargs.push("--ol_sqr");
    }
    if ((params["estimate_move_by_susceptibility"] ?? null)) {
        cargs.push("--estimate_move_by_susceptibility");
    }
    if ((params["mbs_niter"] ?? null) !== null) {
        cargs.push(["--mbs_niter=", String((params["mbs_niter"] ?? null))].join(''));
    }
    if ((params["mbs_lambda"] ?? null) !== null) {
        cargs.push(["--mbs_lambda=", String((params["mbs_lambda"] ?? null))].join(''));
    }
    if ((params["mbs_ksp"] ?? null) !== null) {
        cargs.push(["--mbs_ksp=", String((params["mbs_ksp"] ?? null))].join(''));
    }
    if ((params["dont_sep_offs_move"] ?? null)) {
        cargs.push("--dont_sep_offs_move");
    }
    if ((params["dont_peas"] ?? null)) {
        cargs.push("--dont_peas");
    }
    if ((params["data_is_shelled"] ?? null)) {
        cargs.push("--data_is_shelled");
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("--verbose");
    }
    return cargs;
}


function eddy_outputs(
    params: EddyParameters,
    execution: Execution,
): EddyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: EddyOutputs = {
        root: execution.outputFile("."),
        out: execution.outputFile([(params["out"] ?? null), ".nii.gz"].join('')),
        eddy_parameters: execution.outputFile([(params["out"] ?? null), ".eddy_parameters"].join('')),
        rotated_bvecs: execution.outputFile([(params["out"] ?? null), ".eddy_rotated_bvecs"].join('')),
        rotated_bvecs_slr: execution.outputFile([(params["out"] ?? null), ".eddy_rotated_bvecs_for_SLR"].join('')),
        command_txt: execution.outputFile([(params["out"] ?? null), ".eddy_command_txt"].join('')),
        input_parameters: execution.outputFile([(params["out"] ?? null), ".eddy_values_of_all_input_parameters"].join('')),
        movement_rms: execution.outputFile([(params["out"] ?? null), ".eddy_movement_rms"].join('')),
        restricted_movement_rms: execution.outputFile([(params["out"] ?? null), ".eddy_restricted_movement_rms"].join('')),
        shell_alignment_parameters: execution.outputFile([(params["out"] ?? null), ".eddy_post_eddy_shell_alignment_parameters"].join('')),
        shell_pe_translation_parameters: execution.outputFile([(params["out"] ?? null), ".eddy_post_eddy_shell_PE_translation_parameters"].join('')),
        outlier_report: execution.outputFile([(params["out"] ?? null), ".eddy_outlier_report"].join('')),
        outlier_map: execution.outputFile([(params["out"] ?? null), ".eddy_outlier_map"].join('')),
        outlier_n_stdev_map: execution.outputFile([(params["out"] ?? null), ".eddy_outlier_n_stdev_map"].join('')),
        outlier_n_sqr_stdev_map: execution.outputFile([(params["out"] ?? null), ".eddy_outlier_n_sqr_stdev_map"].join('')),
        outlier_free_data: execution.outputFile([(params["out"] ?? null), ".eddy_outlier_free_data.nii.gz"].join('')),
        movement_over_time: execution.outputFile([(params["out"] ?? null), ".eddy_movement_over_time"].join('')),
        mbs_first_order_fields: execution.outputFile([(params["out"] ?? null), ".eddy_mbs_first_order_fields.nii.gz"].join('')),
        cnr_maps: execution.outputFile([(params["out"] ?? null), ".eddy_cnr_maps"].join('')),
        residuals: execution.outputFile([(params["out"] ?? null), ".eddy_residuals"].join('')),
    };
    return ret;
}


function eddy_execute(
    params: EddyParameters,
    execution: Execution,
): EddyOutputs {
    /**
     * A tool for correcting eddy currents and movements in diffusion data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `EddyOutputs`).
     */
    params = execution.params(params)
    const cargs = eddy_cargs(params, execution)
    const ret = eddy_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function eddy(
    imain: InputPathType,
    mask: InputPathType,
    index: InputPathType,
    acqp: InputPathType,
    bvecs: InputPathType,
    bvals: InputPathType,
    out: string = "eddy_corrected",
    mb: number | null = null,
    mb_offs: number | null = null,
    slspec: InputPathType | null = null,
    json: InputPathType | null = null,
    mporder: number | null = null,
    s2v_lambda: number | null = null,
    topup: InputPathType | null = null,
    field: InputPathType | null = null,
    field_mat: InputPathType | null = null,
    flm: "movement" | "linear" | "quadratic" | "cubic" | null = null,
    slm: "none" | "linear" | "quadratic" | null = null,
    fwhm: number | null = null,
    niter: number | null = null,
    s2v_niter: number | null = null,
    cnr_maps: boolean = false,
    residuals: boolean = false,
    fep: boolean = false,
    interp: "spline" | "trilinear" | null = null,
    s2v_interp: "spline" | "trilinear" | null = null,
    resamp: "jac" | "lsr" | null = null,
    nvoxhp: number | null = null,
    initrand: number | null = null,
    ff: number | null = null,
    repol: boolean = false,
    ol_nstd: number | null = null,
    ol_nvox: number | null = null,
    ol_type: "sw" | "gw" | "both" | null = null,
    ol_pos: boolean = false,
    ol_sqr: boolean = false,
    estimate_move_by_susceptibility: boolean = false,
    mbs_niter: number | null = null,
    mbs_lambda: number | null = null,
    mbs_ksp: number | null = null,
    dont_sep_offs_move: boolean = false,
    dont_peas: boolean = false,
    data_is_shelled: boolean = false,
    verbose: boolean = false,
    runner: Runner | null = null,
): EddyOutputs {
    /**
     * A tool for correcting eddy currents and movements in diffusion data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param imain File containing all the images to estimate distortions for
     * @param mask Mask to indicate brain
     * @param index File containing indices for all volumes in --imain into --acqp and --topup
     * @param acqp File containing acquisition parameters
     * @param bvecs File containing the b-vectors for all volumes in --imain
     * @param bvals File containing the b-values for all volumes in --imain
     * @param out Basename for output
     * @param mb Multi-band factor
     * @param mb_offs Multi-band offset (-1 if bottom slice removed, 1 if top slice removed)
     * @param slspec Name of text file completely specifying slice/group acuistion. N.B. --slspec and --json are mutually exclusive.
     * @param json Name of .json text file with information about slice timing. N.B. --json and --slspec are mutually exclusive.
     * @param mporder Order of slice-to-vol movement model (default 0, i.e. vol-to-vol
     * @param s2v_lambda Regularisation weight for slice-to-vol movement. (default 1, reasonable range 1--10)
     * @param topup Base name for output files from topup
     * @param field Name of file with susceptibility field (in Hz)
     * @param field_mat Name of rigid body transform for susceptibility field
     * @param flm First level EC model (movement/linear/quadratic/cubic, default quadratic)
     * @param slm Second level EC model (none/linear/quadratic, default none)
     * @param fwhm FWHM for conditioning filter when estimating the parameters (default 0)
     * @param niter Number of iterations (default 5)
     * @param s2v_niter Number of iterations for slice-to-vol (default 5)
     * @param cnr_maps Write shell-wise cnr-maps (default false)
     * @param residuals Write residuals (between GP and observations), (default false)
     * @param fep Fill empty planes in x- or y-directions (default false)
     * @param interp Interpolation model for estimation step (spline/trilinear, default spline)
     * @param s2v_interp Slice-to-vol interpolation model for estimation step (spline/trilinear, default trilinear)
     * @param resamp Final resampling method (jac/lsr, default jac)
     * @param nvoxhp # of voxels used to estimate the hyperparameters (default 1000)
     * @param initrand Seeds rand for when selecting voxels (default 0=no seeding)
     * @param ff Fudge factor for hyperparameter error variance (default 10.0)
     * @param repol Detect and replace outlier slices (default false))
     * @param ol_nstd Number of std off to qualify as outlier (default 4)
     * @param ol_nvox Min # of voxels in a slice for inclusion in outlier detection (default 250)
     * @param ol_type Type of outliers, slicewise (sw), groupwise (gw) or both (both). (default sw)
     * @param ol_pos Consider both positive and negative outliers if set (default false)
     * @param ol_sqr Consider outliers among sums-of-squared differences if set (default false)
     * @param estimate_move_by_susceptibility Estimate how susceptibility field changes with subject movement (default false)
     * @param mbs_niter Number of iterations for MBS estimation (default 10)
     * @param mbs_lambda Weighting of regularisation for MBS estimation (default 10)
     * @param mbs_ksp Knot-spacing for MBS field estimation (default 10mm)
     * @param dont_sep_offs_move Do NOT attempt to separate field offset from subject movement (default false)
     * @param dont_peas Do NOT perform a post-eddy alignment of shells (default false)
     * @param data_is_shelled Assume, don't check, that data is shelled (default false)
     * @param verbose switch on diagnostic messages
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `EddyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(EDDY_METADATA);
    const params = eddy_params(imain, mask, index, acqp, bvecs, bvals, out, mb, mb_offs, slspec, json, mporder, s2v_lambda, topup, field, field_mat, flm, slm, fwhm, niter, s2v_niter, cnr_maps, residuals, fep, interp, s2v_interp, resamp, nvoxhp, initrand, ff, repol, ol_nstd, ol_nvox, ol_type, ol_pos, ol_sqr, estimate_move_by_susceptibility, mbs_niter, mbs_lambda, mbs_ksp, dont_sep_offs_move, dont_peas, data_is_shelled, verbose)
    return eddy_execute(params, execution);
}


export {
      EDDY_METADATA,
      EddyOutputs,
      EddyParameters,
      eddy,
      eddy_params,
};
