// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TCKSIFT_METADATA: Metadata = {
    id: "29fe410b0701807448f8d132130cf6d6fd168347.boutiques",
    name: "tcksift",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface TcksiftConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface TcksiftParameters {
    "__STYXTYPE__": "tcksift";
    "nofilter": boolean;
    "output_at_counts"?: Array<number> | null | undefined;
    "proc_mask"?: InputPathType | null | undefined;
    "act"?: InputPathType | null | undefined;
    "fd_scale_gm": boolean;
    "no_dilate_lut": boolean;
    "make_null_lobes": boolean;
    "remove_untracked": boolean;
    "fd_thresh"?: number | null | undefined;
    "csv"?: string | null | undefined;
    "out_mu"?: string | null | undefined;
    "output_debug": boolean;
    "out_selection"?: string | null | undefined;
    "term_number"?: number | null | undefined;
    "term_ratio"?: number | null | undefined;
    "term_mu"?: number | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<TcksiftConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "in_tracks": InputPathType;
    "in_fod": InputPathType;
    "out_tracks": string;
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
        "tcksift": tcksift_cargs,
        "config": tcksift_config_cargs,
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
        "tcksift": tcksift_outputs,
    };
    return outputsFuncs[t];
}


function tcksift_config_params(
    key: string,
    value: string,
): TcksiftConfigParameters {
    /**
     * Build parameters.
    
     * @param key temporarily set the value of an MRtrix config file entry.
     * @param value temporarily set the value of an MRtrix config file entry.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "config" as const,
        "key": key,
        "value": value,
    };
    return params;
}


function tcksift_config_cargs(
    params: TcksiftConfigParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-config");
    cargs.push((params["key"] ?? null));
    cargs.push((params["value"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `tcksift(...)`.
 *
 * @interface
 */
interface TcksiftOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output filtered tracks file
     */
    out_tracks: OutputPathType;
    /**
     * output statistics of execution per iteration to a .csv file 
     */
    csv: OutputPathType | null;
    /**
     * output the final value of SIFT proportionality coefficient mu to a text file 
     */
    out_mu: OutputPathType | null;
    /**
     * output a text file containing the binary selection of streamlines 
     */
    out_selection: OutputPathType | null;
}


function tcksift_params(
    in_tracks: InputPathType,
    in_fod: InputPathType,
    out_tracks: string,
    nofilter: boolean = false,
    output_at_counts: Array<number> | null = null,
    proc_mask: InputPathType | null = null,
    act: InputPathType | null = null,
    fd_scale_gm: boolean = false,
    no_dilate_lut: boolean = false,
    make_null_lobes: boolean = false,
    remove_untracked: boolean = false,
    fd_thresh: number | null = null,
    csv: string | null = null,
    out_mu: string | null = null,
    output_debug: boolean = false,
    out_selection: string | null = null,
    term_number: number | null = null,
    term_ratio: number | null = null,
    term_mu: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TcksiftConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): TcksiftParameters {
    /**
     * Build parameters.
    
     * @param in_tracks the input track file
     * @param in_fod input image containing the spherical harmonics of the fibre orientation distributions
     * @param out_tracks the output filtered tracks file
     * @param nofilter do NOT perform track filtering - just construct the model in order to provide output debugging images
     * @param output_at_counts output filtered track files (and optionally debugging images if -output_debug is specified) at specific numbers of remaining streamlines; provide as comma-separated list of integers
     * @param proc_mask provide an image containing the processing mask weights for the model; image spatial dimensions must match the fixel image
     * @param act use an ACT five-tissue-type segmented anatomical image to derive the processing mask
     * @param fd_scale_gm provide this option (in conjunction with -act) to heuristically downsize the fibre density estimates based on the presence of GM in the voxel. This can assist in reducing tissue interface effects when using a single-tissue deconvolution algorithm
     * @param no_dilate_lut do NOT dilate FOD lobe lookup tables; only map streamlines to FOD lobes if the precise tangent lies within the angular spread of that lobe
     * @param make_null_lobes add an additional FOD lobe to each voxel, with zero integral, that covers all directions with zero / negative FOD amplitudes
     * @param remove_untracked remove FOD lobes that do not have any streamline density attributed to them; this improves filtering slightly, at the expense of longer computation time (and you can no longer do quantitative comparisons between reconstructions if this is enabled)
     * @param fd_thresh fibre density threshold; exclude an FOD lobe from filtering processing if its integral is less than this amount (streamlines will still be mapped to it, but it will not contribute to the cost function or the filtering)
     * @param csv output statistics of execution per iteration to a .csv file
     * @param out_mu output the final value of SIFT proportionality coefficient mu to a text file
     * @param output_debug provide various output images for assessing & debugging performance etc.
     * @param out_selection output a text file containing the binary selection of streamlines
     * @param term_number number of streamlines - continue filtering until this number of streamlines remain
     * @param term_ratio termination ratio - defined as the ratio between reduction in cost function, and reduction in density of streamlines.
Smaller values result in more streamlines being filtered out.
     * @param term_mu terminate filtering once the SIFT proportionality coefficient reaches a given value
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tcksift" as const,
        "nofilter": nofilter,
        "fd_scale_gm": fd_scale_gm,
        "no_dilate_lut": no_dilate_lut,
        "make_null_lobes": make_null_lobes,
        "remove_untracked": remove_untracked,
        "output_debug": output_debug,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "in_tracks": in_tracks,
        "in_fod": in_fod,
        "out_tracks": out_tracks,
    };
    if (output_at_counts !== null) {
        params["output_at_counts"] = output_at_counts;
    }
    if (proc_mask !== null) {
        params["proc_mask"] = proc_mask;
    }
    if (act !== null) {
        params["act"] = act;
    }
    if (fd_thresh !== null) {
        params["fd_thresh"] = fd_thresh;
    }
    if (csv !== null) {
        params["csv"] = csv;
    }
    if (out_mu !== null) {
        params["out_mu"] = out_mu;
    }
    if (out_selection !== null) {
        params["out_selection"] = out_selection;
    }
    if (term_number !== null) {
        params["term_number"] = term_number;
    }
    if (term_ratio !== null) {
        params["term_ratio"] = term_ratio;
    }
    if (term_mu !== null) {
        params["term_mu"] = term_mu;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function tcksift_cargs(
    params: TcksiftParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tcksift");
    if ((params["nofilter"] ?? null)) {
        cargs.push("-nofilter");
    }
    if ((params["output_at_counts"] ?? null) !== null) {
        cargs.push(
            "-output_at_counts",
            (params["output_at_counts"] ?? null).map(String).join(",")
        );
    }
    if ((params["proc_mask"] ?? null) !== null) {
        cargs.push(
            "-proc_mask",
            execution.inputFile((params["proc_mask"] ?? null))
        );
    }
    if ((params["act"] ?? null) !== null) {
        cargs.push(
            "-act",
            execution.inputFile((params["act"] ?? null))
        );
    }
    if ((params["fd_scale_gm"] ?? null)) {
        cargs.push("-fd_scale_gm");
    }
    if ((params["no_dilate_lut"] ?? null)) {
        cargs.push("-no_dilate_lut");
    }
    if ((params["make_null_lobes"] ?? null)) {
        cargs.push("-make_null_lobes");
    }
    if ((params["remove_untracked"] ?? null)) {
        cargs.push("-remove_untracked");
    }
    if ((params["fd_thresh"] ?? null) !== null) {
        cargs.push(
            "-fd_thresh",
            String((params["fd_thresh"] ?? null))
        );
    }
    if ((params["csv"] ?? null) !== null) {
        cargs.push(
            "-csv",
            (params["csv"] ?? null)
        );
    }
    if ((params["out_mu"] ?? null) !== null) {
        cargs.push(
            "-out_mu",
            (params["out_mu"] ?? null)
        );
    }
    if ((params["output_debug"] ?? null)) {
        cargs.push("-output_debug");
    }
    if ((params["out_selection"] ?? null) !== null) {
        cargs.push(
            "-out_selection",
            (params["out_selection"] ?? null)
        );
    }
    if ((params["term_number"] ?? null) !== null) {
        cargs.push(
            "-term_number",
            String((params["term_number"] ?? null))
        );
    }
    if ((params["term_ratio"] ?? null) !== null) {
        cargs.push(
            "-term_ratio",
            String((params["term_ratio"] ?? null))
        );
    }
    if ((params["term_mu"] ?? null) !== null) {
        cargs.push(
            "-term_mu",
            String((params["term_mu"] ?? null))
        );
    }
    if ((params["info"] ?? null)) {
        cargs.push("-info");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["nthreads"] ?? null) !== null) {
        cargs.push(
            "-nthreads",
            String((params["nthreads"] ?? null))
        );
    }
    if ((params["config"] ?? null) !== null) {
        cargs.push(...(params["config"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    cargs.push(execution.inputFile((params["in_tracks"] ?? null)));
    cargs.push(execution.inputFile((params["in_fod"] ?? null)));
    cargs.push((params["out_tracks"] ?? null));
    return cargs;
}


function tcksift_outputs(
    params: TcksiftParameters,
    execution: Execution,
): TcksiftOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TcksiftOutputs = {
        root: execution.outputFile("."),
        out_tracks: execution.outputFile([(params["out_tracks"] ?? null)].join('')),
        csv: ((params["csv"] ?? null) !== null) ? execution.outputFile([(params["csv"] ?? null)].join('')) : null,
        out_mu: ((params["out_mu"] ?? null) !== null) ? execution.outputFile([(params["out_mu"] ?? null)].join('')) : null,
        out_selection: ((params["out_selection"] ?? null) !== null) ? execution.outputFile([(params["out_selection"] ?? null)].join('')) : null,
    };
    return ret;
}


function tcksift_execute(
    params: TcksiftParameters,
    execution: Execution,
): TcksiftOutputs {
    /**
     * Filter a whole-brain fibre-tracking data set such that the streamline densities match the FOD lobe integrals.
     * 
     * 
     * 
     * References:
     * 
     * Smith, R. E.; Tournier, J.-D.; Calamante, F. & Connelly, A. SIFT: Spherical-deconvolution informed filtering of tractograms. NeuroImage, 2013, 67, 298-312.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TcksiftOutputs`).
     */
    params = execution.params(params)
    const cargs = tcksift_cargs(params, execution)
    const ret = tcksift_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tcksift(
    in_tracks: InputPathType,
    in_fod: InputPathType,
    out_tracks: string,
    nofilter: boolean = false,
    output_at_counts: Array<number> | null = null,
    proc_mask: InputPathType | null = null,
    act: InputPathType | null = null,
    fd_scale_gm: boolean = false,
    no_dilate_lut: boolean = false,
    make_null_lobes: boolean = false,
    remove_untracked: boolean = false,
    fd_thresh: number | null = null,
    csv: string | null = null,
    out_mu: string | null = null,
    output_debug: boolean = false,
    out_selection: string | null = null,
    term_number: number | null = null,
    term_ratio: number | null = null,
    term_mu: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TcksiftConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): TcksiftOutputs {
    /**
     * Filter a whole-brain fibre-tracking data set such that the streamline densities match the FOD lobe integrals.
     * 
     * 
     * 
     * References:
     * 
     * Smith, R. E.; Tournier, J.-D.; Calamante, F. & Connelly, A. SIFT: Spherical-deconvolution informed filtering of tractograms. NeuroImage, 2013, 67, 298-312.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param in_tracks the input track file
     * @param in_fod input image containing the spherical harmonics of the fibre orientation distributions
     * @param out_tracks the output filtered tracks file
     * @param nofilter do NOT perform track filtering - just construct the model in order to provide output debugging images
     * @param output_at_counts output filtered track files (and optionally debugging images if -output_debug is specified) at specific numbers of remaining streamlines; provide as comma-separated list of integers
     * @param proc_mask provide an image containing the processing mask weights for the model; image spatial dimensions must match the fixel image
     * @param act use an ACT five-tissue-type segmented anatomical image to derive the processing mask
     * @param fd_scale_gm provide this option (in conjunction with -act) to heuristically downsize the fibre density estimates based on the presence of GM in the voxel. This can assist in reducing tissue interface effects when using a single-tissue deconvolution algorithm
     * @param no_dilate_lut do NOT dilate FOD lobe lookup tables; only map streamlines to FOD lobes if the precise tangent lies within the angular spread of that lobe
     * @param make_null_lobes add an additional FOD lobe to each voxel, with zero integral, that covers all directions with zero / negative FOD amplitudes
     * @param remove_untracked remove FOD lobes that do not have any streamline density attributed to them; this improves filtering slightly, at the expense of longer computation time (and you can no longer do quantitative comparisons between reconstructions if this is enabled)
     * @param fd_thresh fibre density threshold; exclude an FOD lobe from filtering processing if its integral is less than this amount (streamlines will still be mapped to it, but it will not contribute to the cost function or the filtering)
     * @param csv output statistics of execution per iteration to a .csv file
     * @param out_mu output the final value of SIFT proportionality coefficient mu to a text file
     * @param output_debug provide various output images for assessing & debugging performance etc.
     * @param out_selection output a text file containing the binary selection of streamlines
     * @param term_number number of streamlines - continue filtering until this number of streamlines remain
     * @param term_ratio termination ratio - defined as the ratio between reduction in cost function, and reduction in density of streamlines.
Smaller values result in more streamlines being filtered out.
     * @param term_mu terminate filtering once the SIFT proportionality coefficient reaches a given value
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TcksiftOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TCKSIFT_METADATA);
    const params = tcksift_params(in_tracks, in_fod, out_tracks, nofilter, output_at_counts, proc_mask, act, fd_scale_gm, no_dilate_lut, make_null_lobes, remove_untracked, fd_thresh, csv, out_mu, output_debug, out_selection, term_number, term_ratio, term_mu, info, quiet, debug, force, nthreads, config, help, version)
    return tcksift_execute(params, execution);
}


export {
      TCKSIFT_METADATA,
      TcksiftConfigParameters,
      TcksiftOutputs,
      TcksiftParameters,
      tcksift,
      tcksift_config_params,
      tcksift_params,
};
