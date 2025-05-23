// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_FWHM_METADATA: Metadata = {
    id: "45b5bc003ed2b047c475c3acaeebef825cbc7118.boutiques",
    name: "mri_fwhm",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriFwhmParameters {
    "__STYXTYPE__": "mri_fwhm";
    "inputvol": InputPathType;
    "outputvol": string;
    "save_detrended": boolean;
    "save_unmasked": boolean;
    "smooth_only": boolean;
    "mask"?: InputPathType | null | undefined;
    "mask_thresh"?: number | null | undefined;
    "auto_mask"?: number | null | undefined;
    "nerode"?: number | null | undefined;
    "mask_inv": boolean;
    "out_mask"?: string | null | undefined;
    "detrend_matrix"?: InputPathType | null | undefined;
    "detrend_order"?: number | null | undefined;
    "square_input": boolean;
    "smooth_by_fwhm"?: number | null | undefined;
    "smooth_by_gstd"?: number | null | undefined;
    "median_filter"?: number | null | undefined;
    "smooth_to_fwhm"?: number | null | undefined;
    "to_fwhm_tol"?: number | null | undefined;
    "to_fwhm_nmax"?: number | null | undefined;
    "to_fwhm_file"?: string | null | undefined;
    "summary_file"?: string | null | undefined;
    "dat_file"?: string | null | undefined;
    "fwhm_dat_file"?: string | null | undefined;
    "fwhm_vol_mean_file"?: string | null | undefined;
    "fwhm_vol"?: string | null | undefined;
    "synth": boolean;
    "synth_frames"?: number | null | undefined;
    "nframes_min"?: number | null | undefined;
    "ispm": boolean;
    "nspm_zero_padding"?: number | null | undefined;
    "threads"?: number | null | undefined;
    "debug": boolean;
    "checkopts": boolean;
    "version": boolean;
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
        "mri_fwhm": mri_fwhm_cargs,
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
        "mri_fwhm": mri_fwhm_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_fwhm(...)`.
 *
 * @interface
 */
interface MriFwhmOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output volume after smoothing.
     */
    output_volume_file: OutputPathType;
    /**
     * Final mask volume.
     */
    final_mask_output_file: OutputPathType | null;
    /**
     * Summary log file.
     */
    summary_log_file: OutputPathType | null;
    /**
     * Final FWHM estimate file.
     */
    final_fwhm_estimate_file: OutputPathType | null;
    /**
     * File containing the FWHM of each dimension.
     */
    fwhm_of_each_dimension_file: OutputPathType | null;
    /**
     * Mean FWHM from volume file.
     */
    mean_fwhm_volume_file: OutputPathType | null;
    /**
     * FWHM volume file.
     */
    fwhm_volume_file: OutputPathType | null;
}


function mri_fwhm_params(
    inputvol: InputPathType,
    outputvol: string,
    save_detrended: boolean = false,
    save_unmasked: boolean = false,
    smooth_only: boolean = false,
    mask: InputPathType | null = null,
    mask_thresh: number | null = null,
    auto_mask: number | null = null,
    nerode: number | null = null,
    mask_inv: boolean = false,
    out_mask: string | null = null,
    detrend_matrix: InputPathType | null = null,
    detrend_order: number | null = null,
    square_input: boolean = false,
    smooth_by_fwhm: number | null = null,
    smooth_by_gstd: number | null = null,
    median_filter: number | null = null,
    smooth_to_fwhm: number | null = null,
    to_fwhm_tol: number | null = null,
    to_fwhm_nmax: number | null = null,
    to_fwhm_file: string | null = null,
    summary_file: string | null = null,
    dat_file: string | null = null,
    fwhm_dat_file: string | null = null,
    fwhm_vol_mean_file: string | null = null,
    fwhm_vol: string | null = null,
    synth: boolean = false,
    synth_frames: number | null = null,
    nframes_min: number | null = null,
    ispm: boolean = false,
    nspm_zero_padding: number | null = null,
    threads: number | null = null,
    debug: boolean = false,
    checkopts: boolean = false,
    version: boolean = false,
): MriFwhmParameters {
    /**
     * Build parameters.
    
     * @param inputvol Input volume file. Format must be something readable by mri_convert (e.g., mgh, mgz, img, nii, nii.gz).
     * @param outputvol Output volume file: save input after smoothing.
     * @param save_detrended Save input after smoothing and detrending.
     * @param save_unmasked Do not mask output volume.
     * @param smooth_only Smooth and save, do not compute fwhm.
     * @param mask Binary mask file.
     * @param mask_thresh Threshold for mask (default is 0.5).
     * @param auto_mask Auto compute mask based on global mean threshold.
     * @param nerode Erode mask n times prior to FWHM computation.
     * @param mask_inv Invert mask.
     * @param out_mask Save final mask to outmaskvol.
     * @param detrend_matrix Detrending matrix file in MATLAB4 format.
     * @param detrend_order Polynomial detrending order (default 0).
     * @param square_input Compute square of input before smoothing.
     * @param smooth_by_fwhm Smooth BY fwhm before measuring.
     * @param smooth_by_gstd Smooth using gstd (equivalent to --fwhm).
     * @param median_filter Perform median filtering instead of Gaussian.
     * @param smooth_to_fwhm Smooth TO this FWHM.
     * @param to_fwhm_tol Tolerance for smoothing to FWHM (default 0.5mm).
     * @param to_fwhm_nmax Maximum iterations for smoothing to FWHM (default 20).
     * @param to_fwhm_file Save smoothing to FWHM parameters to file.
     * @param summary_file Summary/log file.
     * @param dat_file Prints only the final FWHM estimate into this file.
     * @param fwhm_dat_file Compute and save the FWHM of each dimension.
     * @param fwhm_vol_mean_file Compute and save the FWHM of each dimension based on fwhmvol.
     * @param fwhm_vol Save FWHM volume.
     * @param synth Synthesize input with white Gaussian noise.
     * @param synth_frames Number of frames for synthesized input (default is 10).
     * @param nframes_min Require at least this many frames.
     * @param ispm Input is SPM-analyze.
     * @param nspm_zero_padding Zero-padding for SPM-analyze.
     * @param threads Set OPEN MP threads.
     * @param debug Turn on debugging.
     * @param checkopts Check options and exit without running.
     * @param version Print version and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_fwhm" as const,
        "inputvol": inputvol,
        "outputvol": outputvol,
        "save_detrended": save_detrended,
        "save_unmasked": save_unmasked,
        "smooth_only": smooth_only,
        "mask_inv": mask_inv,
        "square_input": square_input,
        "synth": synth,
        "ispm": ispm,
        "debug": debug,
        "checkopts": checkopts,
        "version": version,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (mask_thresh !== null) {
        params["mask_thresh"] = mask_thresh;
    }
    if (auto_mask !== null) {
        params["auto_mask"] = auto_mask;
    }
    if (nerode !== null) {
        params["nerode"] = nerode;
    }
    if (out_mask !== null) {
        params["out_mask"] = out_mask;
    }
    if (detrend_matrix !== null) {
        params["detrend_matrix"] = detrend_matrix;
    }
    if (detrend_order !== null) {
        params["detrend_order"] = detrend_order;
    }
    if (smooth_by_fwhm !== null) {
        params["smooth_by_fwhm"] = smooth_by_fwhm;
    }
    if (smooth_by_gstd !== null) {
        params["smooth_by_gstd"] = smooth_by_gstd;
    }
    if (median_filter !== null) {
        params["median_filter"] = median_filter;
    }
    if (smooth_to_fwhm !== null) {
        params["smooth_to_fwhm"] = smooth_to_fwhm;
    }
    if (to_fwhm_tol !== null) {
        params["to_fwhm_tol"] = to_fwhm_tol;
    }
    if (to_fwhm_nmax !== null) {
        params["to_fwhm_nmax"] = to_fwhm_nmax;
    }
    if (to_fwhm_file !== null) {
        params["to_fwhm_file"] = to_fwhm_file;
    }
    if (summary_file !== null) {
        params["summary_file"] = summary_file;
    }
    if (dat_file !== null) {
        params["dat_file"] = dat_file;
    }
    if (fwhm_dat_file !== null) {
        params["fwhm_dat_file"] = fwhm_dat_file;
    }
    if (fwhm_vol_mean_file !== null) {
        params["fwhm_vol_mean_file"] = fwhm_vol_mean_file;
    }
    if (fwhm_vol !== null) {
        params["fwhm_vol"] = fwhm_vol;
    }
    if (synth_frames !== null) {
        params["synth_frames"] = synth_frames;
    }
    if (nframes_min !== null) {
        params["nframes_min"] = nframes_min;
    }
    if (nspm_zero_padding !== null) {
        params["nspm_zero_padding"] = nspm_zero_padding;
    }
    if (threads !== null) {
        params["threads"] = threads;
    }
    return params;
}


function mri_fwhm_cargs(
    params: MriFwhmParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_fwhm");
    cargs.push(
        "--i",
        execution.inputFile((params["inputvol"] ?? null))
    );
    cargs.push(
        "--o",
        (params["outputvol"] ?? null)
    );
    if ((params["save_detrended"] ?? null)) {
        cargs.push("--save-detrended");
    }
    if ((params["save_unmasked"] ?? null)) {
        cargs.push("--save-unmasked");
    }
    if ((params["smooth_only"] ?? null)) {
        cargs.push("--smooth-only");
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "--mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["mask_thresh"] ?? null) !== null) {
        cargs.push(
            "--mask-thresh",
            String((params["mask_thresh"] ?? null))
        );
    }
    if ((params["auto_mask"] ?? null) !== null) {
        cargs.push(
            "--auto-mask",
            String((params["auto_mask"] ?? null))
        );
    }
    if ((params["nerode"] ?? null) !== null) {
        cargs.push(
            "--nerode",
            String((params["nerode"] ?? null))
        );
    }
    if ((params["mask_inv"] ?? null)) {
        cargs.push("--mask-inv");
    }
    if ((params["out_mask"] ?? null) !== null) {
        cargs.push(
            "--out-mask",
            (params["out_mask"] ?? null)
        );
    }
    if ((params["detrend_matrix"] ?? null) !== null) {
        cargs.push(
            "--X",
            execution.inputFile((params["detrend_matrix"] ?? null))
        );
    }
    if ((params["detrend_order"] ?? null) !== null) {
        cargs.push(
            "--detrend",
            String((params["detrend_order"] ?? null))
        );
    }
    if ((params["square_input"] ?? null)) {
        cargs.push("--sqr");
    }
    if ((params["smooth_by_fwhm"] ?? null) !== null) {
        cargs.push(
            "--fwhm",
            String((params["smooth_by_fwhm"] ?? null))
        );
    }
    if ((params["smooth_by_gstd"] ?? null) !== null) {
        cargs.push(
            "--gstd",
            String((params["smooth_by_gstd"] ?? null))
        );
    }
    if ((params["median_filter"] ?? null) !== null) {
        cargs.push(
            "--median",
            String((params["median_filter"] ?? null))
        );
    }
    if ((params["smooth_to_fwhm"] ?? null) !== null) {
        cargs.push(
            "--to-fwhm",
            String((params["smooth_to_fwhm"] ?? null))
        );
    }
    if ((params["to_fwhm_tol"] ?? null) !== null) {
        cargs.push(
            "--to-fwhm-tol",
            String((params["to_fwhm_tol"] ?? null))
        );
    }
    if ((params["to_fwhm_nmax"] ?? null) !== null) {
        cargs.push(
            "--to-fwhm-nmax",
            String((params["to_fwhm_nmax"] ?? null))
        );
    }
    if ((params["to_fwhm_file"] ?? null) !== null) {
        cargs.push(
            "--to-fwhm-file",
            (params["to_fwhm_file"] ?? null)
        );
    }
    if ((params["summary_file"] ?? null) !== null) {
        cargs.push(
            "--sum",
            (params["summary_file"] ?? null)
        );
    }
    if ((params["dat_file"] ?? null) !== null) {
        cargs.push(
            "--dat",
            (params["dat_file"] ?? null)
        );
    }
    if ((params["fwhm_dat_file"] ?? null) !== null) {
        cargs.push(
            "--fwhmdat",
            (params["fwhm_dat_file"] ?? null)
        );
    }
    if ((params["fwhm_vol_mean_file"] ?? null) !== null) {
        cargs.push(
            "--fwhmvolmn",
            (params["fwhm_vol_mean_file"] ?? null)
        );
    }
    if ((params["fwhm_vol"] ?? null) !== null) {
        cargs.push(
            "--fwhmvol",
            (params["fwhm_vol"] ?? null)
        );
    }
    if ((params["synth"] ?? null)) {
        cargs.push("--synth");
    }
    if ((params["synth_frames"] ?? null) !== null) {
        cargs.push(
            "--synth-frames",
            String((params["synth_frames"] ?? null))
        );
    }
    if ((params["nframes_min"] ?? null) !== null) {
        cargs.push(
            "--nframesmin",
            String((params["nframes_min"] ?? null))
        );
    }
    if ((params["ispm"] ?? null)) {
        cargs.push("--ispm");
    }
    if ((params["nspm_zero_padding"] ?? null) !== null) {
        cargs.push(
            "--in_nspmzeropad",
            String((params["nspm_zero_padding"] ?? null))
        );
    }
    if ((params["threads"] ?? null) !== null) {
        cargs.push(
            "--nthreads",
            String((params["threads"] ?? null))
        );
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["checkopts"] ?? null)) {
        cargs.push("--checkopts");
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    return cargs;
}


function mri_fwhm_outputs(
    params: MriFwhmParameters,
    execution: Execution,
): MriFwhmOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriFwhmOutputs = {
        root: execution.outputFile("."),
        output_volume_file: execution.outputFile([(params["outputvol"] ?? null)].join('')),
        final_mask_output_file: ((params["out_mask"] ?? null) !== null) ? execution.outputFile([(params["out_mask"] ?? null)].join('')) : null,
        summary_log_file: ((params["summary_file"] ?? null) !== null) ? execution.outputFile([(params["summary_file"] ?? null)].join('')) : null,
        final_fwhm_estimate_file: ((params["dat_file"] ?? null) !== null) ? execution.outputFile([(params["dat_file"] ?? null)].join('')) : null,
        fwhm_of_each_dimension_file: ((params["fwhm_dat_file"] ?? null) !== null) ? execution.outputFile([(params["fwhm_dat_file"] ?? null)].join('')) : null,
        mean_fwhm_volume_file: ((params["fwhm_vol_mean_file"] ?? null) !== null) ? execution.outputFile([(params["fwhm_vol_mean_file"] ?? null)].join('')) : null,
        fwhm_volume_file: ((params["fwhm_vol"] ?? null) !== null) ? execution.outputFile([(params["fwhm_vol"] ?? null)].join('')) : null,
    };
    return ret;
}


function mri_fwhm_execute(
    params: MriFwhmParameters,
    execution: Execution,
): MriFwhmOutputs {
    /**
     * FreeSurfer program to estimate the global Gaussian smoothness of a multi-frame, volume-based data set.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriFwhmOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_fwhm_cargs(params, execution)
    const ret = mri_fwhm_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_fwhm(
    inputvol: InputPathType,
    outputvol: string,
    save_detrended: boolean = false,
    save_unmasked: boolean = false,
    smooth_only: boolean = false,
    mask: InputPathType | null = null,
    mask_thresh: number | null = null,
    auto_mask: number | null = null,
    nerode: number | null = null,
    mask_inv: boolean = false,
    out_mask: string | null = null,
    detrend_matrix: InputPathType | null = null,
    detrend_order: number | null = null,
    square_input: boolean = false,
    smooth_by_fwhm: number | null = null,
    smooth_by_gstd: number | null = null,
    median_filter: number | null = null,
    smooth_to_fwhm: number | null = null,
    to_fwhm_tol: number | null = null,
    to_fwhm_nmax: number | null = null,
    to_fwhm_file: string | null = null,
    summary_file: string | null = null,
    dat_file: string | null = null,
    fwhm_dat_file: string | null = null,
    fwhm_vol_mean_file: string | null = null,
    fwhm_vol: string | null = null,
    synth: boolean = false,
    synth_frames: number | null = null,
    nframes_min: number | null = null,
    ispm: boolean = false,
    nspm_zero_padding: number | null = null,
    threads: number | null = null,
    debug: boolean = false,
    checkopts: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): MriFwhmOutputs {
    /**
     * FreeSurfer program to estimate the global Gaussian smoothness of a multi-frame, volume-based data set.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param inputvol Input volume file. Format must be something readable by mri_convert (e.g., mgh, mgz, img, nii, nii.gz).
     * @param outputvol Output volume file: save input after smoothing.
     * @param save_detrended Save input after smoothing and detrending.
     * @param save_unmasked Do not mask output volume.
     * @param smooth_only Smooth and save, do not compute fwhm.
     * @param mask Binary mask file.
     * @param mask_thresh Threshold for mask (default is 0.5).
     * @param auto_mask Auto compute mask based on global mean threshold.
     * @param nerode Erode mask n times prior to FWHM computation.
     * @param mask_inv Invert mask.
     * @param out_mask Save final mask to outmaskvol.
     * @param detrend_matrix Detrending matrix file in MATLAB4 format.
     * @param detrend_order Polynomial detrending order (default 0).
     * @param square_input Compute square of input before smoothing.
     * @param smooth_by_fwhm Smooth BY fwhm before measuring.
     * @param smooth_by_gstd Smooth using gstd (equivalent to --fwhm).
     * @param median_filter Perform median filtering instead of Gaussian.
     * @param smooth_to_fwhm Smooth TO this FWHM.
     * @param to_fwhm_tol Tolerance for smoothing to FWHM (default 0.5mm).
     * @param to_fwhm_nmax Maximum iterations for smoothing to FWHM (default 20).
     * @param to_fwhm_file Save smoothing to FWHM parameters to file.
     * @param summary_file Summary/log file.
     * @param dat_file Prints only the final FWHM estimate into this file.
     * @param fwhm_dat_file Compute and save the FWHM of each dimension.
     * @param fwhm_vol_mean_file Compute and save the FWHM of each dimension based on fwhmvol.
     * @param fwhm_vol Save FWHM volume.
     * @param synth Synthesize input with white Gaussian noise.
     * @param synth_frames Number of frames for synthesized input (default is 10).
     * @param nframes_min Require at least this many frames.
     * @param ispm Input is SPM-analyze.
     * @param nspm_zero_padding Zero-padding for SPM-analyze.
     * @param threads Set OPEN MP threads.
     * @param debug Turn on debugging.
     * @param checkopts Check options and exit without running.
     * @param version Print version and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriFwhmOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_FWHM_METADATA);
    const params = mri_fwhm_params(inputvol, outputvol, save_detrended, save_unmasked, smooth_only, mask, mask_thresh, auto_mask, nerode, mask_inv, out_mask, detrend_matrix, detrend_order, square_input, smooth_by_fwhm, smooth_by_gstd, median_filter, smooth_to_fwhm, to_fwhm_tol, to_fwhm_nmax, to_fwhm_file, summary_file, dat_file, fwhm_dat_file, fwhm_vol_mean_file, fwhm_vol, synth, synth_frames, nframes_min, ispm, nspm_zero_padding, threads, debug, checkopts, version)
    return mri_fwhm_execute(params, execution);
}


export {
      MRI_FWHM_METADATA,
      MriFwhmOutputs,
      MriFwhmParameters,
      mri_fwhm,
      mri_fwhm_params,
};
