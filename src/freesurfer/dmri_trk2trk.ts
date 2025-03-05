// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DMRI_TRK2TRK_METADATA: Metadata = {
    id: "7065b499ec2cb8133b9197d9f36d138deaee55a7.boutiques",
    name: "dmri_trk2trk",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface DmriTrk2trkParameters {
    "__STYXTYPE__": "dmri_trk2trk";
    "in_trk": Array<InputPathType>;
    "in_asc"?: Array<InputPathType> | null | undefined;
    "in_dir"?: string | null | undefined;
    "out_trk"?: string | null | undefined;
    "out_asc"?: string | null | undefined;
    "out_vol"?: string | null | undefined;
    "out_dir"?: string | null | undefined;
    "in_ref"?: InputPathType | null | undefined;
    "out_ref"?: InputPathType | null | undefined;
    "reg_file"?: InputPathType | null | undefined;
    "regnl_file"?: InputPathType | null | undefined;
    "inv_flag": boolean;
    "fill_flag": boolean;
    "overlay"?: Array<InputPathType> | null | undefined;
    "inclusion_mask"?: Array<InputPathType> | null | undefined;
    "exclusion_mask"?: Array<InputPathType> | null | undefined;
    "terminal_inclusion_mask"?: Array<InputPathType> | null | undefined;
    "terminal_exclusion_mask"?: Array<InputPathType> | null | undefined;
    "length_min"?: number | null | undefined;
    "length_max"?: number | null | undefined;
    "mean_flag": boolean;
    "nearmean_flag": boolean;
    "nth_streamline"?: number | null | undefined;
    "every_nth_streamline"?: number | null | undefined;
    "smooth_flag": boolean;
    "debug_flag": boolean;
    "check_opts": boolean;
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
        "dmri_trk2trk": dmri_trk2trk_cargs,
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
        "dmri_trk2trk": dmri_trk2trk_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `dmri_trk2trk(...)`.
 *
 * @interface
 */
interface DmriTrk2trkOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Transformed output .trk file
     */
    out_trk_file: OutputPathType | null;
    /**
     * Transformed output ASCII text file
     */
    out_asc_file: OutputPathType | null;
    /**
     * Transformed output volume
     */
    out_vol_file: OutputPathType | null;
}


function dmri_trk2trk_params(
    in_trk: Array<InputPathType>,
    in_asc: Array<InputPathType> | null = null,
    in_dir: string | null = null,
    out_trk: string | null = null,
    out_asc: string | null = null,
    out_vol: string | null = null,
    out_dir: string | null = null,
    in_ref: InputPathType | null = null,
    out_ref: InputPathType | null = null,
    reg_file: InputPathType | null = null,
    regnl_file: InputPathType | null = null,
    inv_flag: boolean = false,
    fill_flag: boolean = false,
    overlay: Array<InputPathType> | null = null,
    inclusion_mask: Array<InputPathType> | null = null,
    exclusion_mask: Array<InputPathType> | null = null,
    terminal_inclusion_mask: Array<InputPathType> | null = null,
    terminal_exclusion_mask: Array<InputPathType> | null = null,
    length_min: number | null = null,
    length_max: number | null = null,
    mean_flag: boolean = false,
    nearmean_flag: boolean = false,
    nth_streamline: number | null = null,
    every_nth_streamline: number | null = null,
    smooth_flag: boolean = false,
    debug_flag: boolean = false,
    check_opts: boolean = false,
): DmriTrk2trkParameters {
    /**
     * Build parameters.
    
     * @param in_trk Input .trk file(s)
     * @param in_asc Input ASCII plain text file(s), as an alternative to .trk
     * @param in_dir Input directory (optional)
     * @param out_trk Output .trk file(s), as many as inputs (or 1 to merge inputs)
     * @param out_asc Output ASCII plain text file(s), as many as inputs (or 1 to merge inputs)
     * @param out_vol Output volume(s), as many as inputs (or 1 to merge inputs)
     * @param out_dir Output directory (optional)
     * @param in_ref Input reference volume (needed for --reg/--regnl)
     * @param out_ref Output reference volume (needed for --reg/--regnl/--outvol)
     * @param reg_file Affine registration file (.lta or .mat), applied first
     * @param regnl_file Nonlinear registration file (.m3z), applied second
     * @param inv_flag Apply inverse of registration (default: no)
     * @param fill_flag Fill gaps b/w mapped points by linear interpolation
     * @param overlay Scalar overlay 1D volume(s), applied to all input .trk files
     * @param inclusion_mask Inclusion mask(s), applied to all input .trk files
     * @param exclusion_mask Exclusion mask(s), applied to all input .trk files
     * @param terminal_inclusion_mask Terminal inclusion mask(s), applied to all input .trk files
     * @param terminal_exclusion_mask Terminal exclusion mask(s), applied to all input .trk files
     * @param length_min Only save streamlines with length greater than this number
     * @param length_max Only save streamlines with length smaller than this number
     * @param mean_flag Only save the mean of the streamlines (Default: save all)
     * @param nearmean_flag Only save the streamline nearest to the mean (Default: save all)
     * @param nth_streamline Only save the n-th (0-based) streamline (Default: save all)
     * @param every_nth_streamline Only save every n-th streamline (Default: save all)
     * @param smooth_flag Smooth streamlines (default: no)
     * @param debug_flag Turn on debugging
     * @param check_opts Don't run anything, just check options and exit
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "dmri_trk2trk" as const,
        "in_trk": in_trk,
        "inv_flag": inv_flag,
        "fill_flag": fill_flag,
        "mean_flag": mean_flag,
        "nearmean_flag": nearmean_flag,
        "smooth_flag": smooth_flag,
        "debug_flag": debug_flag,
        "check_opts": check_opts,
    };
    if (in_asc !== null) {
        params["in_asc"] = in_asc;
    }
    if (in_dir !== null) {
        params["in_dir"] = in_dir;
    }
    if (out_trk !== null) {
        params["out_trk"] = out_trk;
    }
    if (out_asc !== null) {
        params["out_asc"] = out_asc;
    }
    if (out_vol !== null) {
        params["out_vol"] = out_vol;
    }
    if (out_dir !== null) {
        params["out_dir"] = out_dir;
    }
    if (in_ref !== null) {
        params["in_ref"] = in_ref;
    }
    if (out_ref !== null) {
        params["out_ref"] = out_ref;
    }
    if (reg_file !== null) {
        params["reg_file"] = reg_file;
    }
    if (regnl_file !== null) {
        params["regnl_file"] = regnl_file;
    }
    if (overlay !== null) {
        params["overlay"] = overlay;
    }
    if (inclusion_mask !== null) {
        params["inclusion_mask"] = inclusion_mask;
    }
    if (exclusion_mask !== null) {
        params["exclusion_mask"] = exclusion_mask;
    }
    if (terminal_inclusion_mask !== null) {
        params["terminal_inclusion_mask"] = terminal_inclusion_mask;
    }
    if (terminal_exclusion_mask !== null) {
        params["terminal_exclusion_mask"] = terminal_exclusion_mask;
    }
    if (length_min !== null) {
        params["length_min"] = length_min;
    }
    if (length_max !== null) {
        params["length_max"] = length_max;
    }
    if (nth_streamline !== null) {
        params["nth_streamline"] = nth_streamline;
    }
    if (every_nth_streamline !== null) {
        params["every_nth_streamline"] = every_nth_streamline;
    }
    return params;
}


function dmri_trk2trk_cargs(
    params: DmriTrk2trkParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("dmri_trk2trk");
    cargs.push(
        "--in",
        ...(params["in_trk"] ?? null).map(f => execution.inputFile(f))
    );
    if ((params["in_asc"] ?? null) !== null) {
        cargs.push(
            "--inasc",
            ...(params["in_asc"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["in_dir"] ?? null) !== null) {
        cargs.push(
            "--indir",
            (params["in_dir"] ?? null)
        );
    }
    if ((params["out_trk"] ?? null) !== null) {
        cargs.push(
            "--out",
            (params["out_trk"] ?? null)
        );
    }
    if ((params["out_asc"] ?? null) !== null) {
        cargs.push(
            "--outasc",
            (params["out_asc"] ?? null)
        );
    }
    if ((params["out_vol"] ?? null) !== null) {
        cargs.push(
            "--outvol",
            (params["out_vol"] ?? null)
        );
    }
    if ((params["out_dir"] ?? null) !== null) {
        cargs.push(
            "--outdir",
            (params["out_dir"] ?? null)
        );
    }
    if ((params["in_ref"] ?? null) !== null) {
        cargs.push(
            "--inref",
            execution.inputFile((params["in_ref"] ?? null))
        );
    }
    if ((params["out_ref"] ?? null) !== null) {
        cargs.push(
            "--outref",
            execution.inputFile((params["out_ref"] ?? null))
        );
    }
    if ((params["reg_file"] ?? null) !== null) {
        cargs.push(
            "--reg",
            execution.inputFile((params["reg_file"] ?? null))
        );
    }
    if ((params["regnl_file"] ?? null) !== null) {
        cargs.push(
            "--regnl",
            execution.inputFile((params["regnl_file"] ?? null))
        );
    }
    if ((params["inv_flag"] ?? null)) {
        cargs.push("--inv");
    }
    if ((params["fill_flag"] ?? null)) {
        cargs.push("--fill");
    }
    if ((params["overlay"] ?? null) !== null) {
        cargs.push(
            "--over",
            ...(params["overlay"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["inclusion_mask"] ?? null) !== null) {
        cargs.push(
            "--imask",
            ...(params["inclusion_mask"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["exclusion_mask"] ?? null) !== null) {
        cargs.push(
            "--emask",
            ...(params["exclusion_mask"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["terminal_inclusion_mask"] ?? null) !== null) {
        cargs.push(
            "--itmask",
            ...(params["terminal_inclusion_mask"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["terminal_exclusion_mask"] ?? null) !== null) {
        cargs.push(
            "--etmask",
            ...(params["terminal_exclusion_mask"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["length_min"] ?? null) !== null) {
        cargs.push(
            "--lmin",
            String((params["length_min"] ?? null))
        );
    }
    if ((params["length_max"] ?? null) !== null) {
        cargs.push(
            "--lmax",
            String((params["length_max"] ?? null))
        );
    }
    if ((params["mean_flag"] ?? null)) {
        cargs.push("--mean");
    }
    if ((params["nearmean_flag"] ?? null)) {
        cargs.push("--nearmean");
    }
    if ((params["nth_streamline"] ?? null) !== null) {
        cargs.push(
            "--nth",
            String((params["nth_streamline"] ?? null))
        );
    }
    if ((params["every_nth_streamline"] ?? null) !== null) {
        cargs.push(
            "--every",
            String((params["every_nth_streamline"] ?? null))
        );
    }
    if ((params["smooth_flag"] ?? null)) {
        cargs.push("--smooth");
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("--debug");
    }
    if ((params["check_opts"] ?? null)) {
        cargs.push("--checkopts");
    }
    return cargs;
}


function dmri_trk2trk_outputs(
    params: DmriTrk2trkParameters,
    execution: Execution,
): DmriTrk2trkOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DmriTrk2trkOutputs = {
        root: execution.outputFile("."),
        out_trk_file: ((params["out_trk"] ?? null) !== null) ? execution.outputFile([(params["out_trk"] ?? null)].join('')) : null,
        out_asc_file: ((params["out_asc"] ?? null) !== null) ? execution.outputFile([(params["out_asc"] ?? null)].join('')) : null,
        out_vol_file: ((params["out_vol"] ?? null) !== null) ? execution.outputFile([(params["out_vol"] ?? null)].join('')) : null,
    };
    return ret;
}


function dmri_trk2trk_execute(
    params: DmriTrk2trkParameters,
    execution: Execution,
): DmriTrk2trkOutputs {
    /**
     * A tool for transforming and analyzing tractography data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DmriTrk2trkOutputs`).
     */
    params = execution.params(params)
    const cargs = dmri_trk2trk_cargs(params, execution)
    const ret = dmri_trk2trk_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function dmri_trk2trk(
    in_trk: Array<InputPathType>,
    in_asc: Array<InputPathType> | null = null,
    in_dir: string | null = null,
    out_trk: string | null = null,
    out_asc: string | null = null,
    out_vol: string | null = null,
    out_dir: string | null = null,
    in_ref: InputPathType | null = null,
    out_ref: InputPathType | null = null,
    reg_file: InputPathType | null = null,
    regnl_file: InputPathType | null = null,
    inv_flag: boolean = false,
    fill_flag: boolean = false,
    overlay: Array<InputPathType> | null = null,
    inclusion_mask: Array<InputPathType> | null = null,
    exclusion_mask: Array<InputPathType> | null = null,
    terminal_inclusion_mask: Array<InputPathType> | null = null,
    terminal_exclusion_mask: Array<InputPathType> | null = null,
    length_min: number | null = null,
    length_max: number | null = null,
    mean_flag: boolean = false,
    nearmean_flag: boolean = false,
    nth_streamline: number | null = null,
    every_nth_streamline: number | null = null,
    smooth_flag: boolean = false,
    debug_flag: boolean = false,
    check_opts: boolean = false,
    runner: Runner | null = null,
): DmriTrk2trkOutputs {
    /**
     * A tool for transforming and analyzing tractography data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param in_trk Input .trk file(s)
     * @param in_asc Input ASCII plain text file(s), as an alternative to .trk
     * @param in_dir Input directory (optional)
     * @param out_trk Output .trk file(s), as many as inputs (or 1 to merge inputs)
     * @param out_asc Output ASCII plain text file(s), as many as inputs (or 1 to merge inputs)
     * @param out_vol Output volume(s), as many as inputs (or 1 to merge inputs)
     * @param out_dir Output directory (optional)
     * @param in_ref Input reference volume (needed for --reg/--regnl)
     * @param out_ref Output reference volume (needed for --reg/--regnl/--outvol)
     * @param reg_file Affine registration file (.lta or .mat), applied first
     * @param regnl_file Nonlinear registration file (.m3z), applied second
     * @param inv_flag Apply inverse of registration (default: no)
     * @param fill_flag Fill gaps b/w mapped points by linear interpolation
     * @param overlay Scalar overlay 1D volume(s), applied to all input .trk files
     * @param inclusion_mask Inclusion mask(s), applied to all input .trk files
     * @param exclusion_mask Exclusion mask(s), applied to all input .trk files
     * @param terminal_inclusion_mask Terminal inclusion mask(s), applied to all input .trk files
     * @param terminal_exclusion_mask Terminal exclusion mask(s), applied to all input .trk files
     * @param length_min Only save streamlines with length greater than this number
     * @param length_max Only save streamlines with length smaller than this number
     * @param mean_flag Only save the mean of the streamlines (Default: save all)
     * @param nearmean_flag Only save the streamline nearest to the mean (Default: save all)
     * @param nth_streamline Only save the n-th (0-based) streamline (Default: save all)
     * @param every_nth_streamline Only save every n-th streamline (Default: save all)
     * @param smooth_flag Smooth streamlines (default: no)
     * @param debug_flag Turn on debugging
     * @param check_opts Don't run anything, just check options and exit
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DmriTrk2trkOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DMRI_TRK2TRK_METADATA);
    const params = dmri_trk2trk_params(in_trk, in_asc, in_dir, out_trk, out_asc, out_vol, out_dir, in_ref, out_ref, reg_file, regnl_file, inv_flag, fill_flag, overlay, inclusion_mask, exclusion_mask, terminal_inclusion_mask, terminal_exclusion_mask, length_min, length_max, mean_flag, nearmean_flag, nth_streamline, every_nth_streamline, smooth_flag, debug_flag, check_opts)
    return dmri_trk2trk_execute(params, execution);
}


export {
      DMRI_TRK2TRK_METADATA,
      DmriTrk2trkOutputs,
      DmriTrk2trkParameters,
      dmri_trk2trk,
      dmri_trk2trk_params,
};
