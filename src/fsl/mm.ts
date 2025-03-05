// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MM_METADATA: Metadata = {
    id: "a5f0fd0df34d3464fbfc708013a6765ded373c4d.boutiques",
    name: "mm",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface MmParameters {
    "__STYXTYPE__": "mm";
    "spatial_data_file": InputPathType;
    "mask_file": InputPathType;
    "verbose_flag": boolean;
    "debug_level"?: string | null | undefined;
    "timing_flag": boolean;
    "example_epi_file"?: InputPathType | null | undefined;
    "log_directory"?: string | null | undefined;
    "nonspatial_flag": boolean;
    "fix_mrf_precision_flag": boolean;
    "mrf_prec_start"?: number | null | undefined;
    "mrf_prec_multiplier"?: number | null | undefined;
    "init_multiplier"?: number | null | undefined;
    "no_update_theta_flag": boolean;
    "zfstat_flag": boolean;
    "phi"?: number | null | undefined;
    "niters"?: number | null | undefined;
    "threshold"?: number | null | undefined;
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
        "mm": mm_cargs,
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
 * Output object returned when calling `mm(...)`.
 *
 * @interface
 */
interface MmOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mm_params(
    spatial_data_file: InputPathType,
    mask_file: InputPathType,
    verbose_flag: boolean = false,
    debug_level: string | null = null,
    timing_flag: boolean = false,
    example_epi_file: InputPathType | null = null,
    log_directory: string | null = null,
    nonspatial_flag: boolean = false,
    fix_mrf_precision_flag: boolean = false,
    mrf_prec_start: number | null = null,
    mrf_prec_multiplier: number | null = null,
    init_multiplier: number | null = null,
    no_update_theta_flag: boolean = false,
    zfstat_flag: boolean = false,
    phi: number | null = null,
    niters: number | null = null,
    threshold: number | null = null,
): MmParameters {
    /**
     * Build parameters.
    
     * @param spatial_data_file Spatial map data file.
     * @param mask_file Mask file.
     * @param verbose_flag Switch on diagnostic messages.
     * @param debug_level Set debug level.
     * @param timing_flag Turn timing on.
     * @param example_epi_file Example EPI data file.
     * @param log_directory Log directory.
     * @param nonspatial_flag Nonspatial mixture model.
     * @param fix_mrf_precision_flag Fix MRF precision to mrfprecstart throughout.
     * @param mrf_prec_start MRF precision initial value (default is 10).
     * @param mrf_prec_multiplier Update multiplier for MRF precision (default is -1, do not multiply).
     * @param init_multiplier Init multiplier (default is 0.3).
     * @param no_update_theta_flag Turn off updating of distribution parameters after non-spatial fit.
     * @param zfstat_flag Turn on zfstat mode - this enforces no deactivation class.
     * @param phi Phi (default is 0.05).
     * @param niters Number of iterations (default is -1: auto stop).
     * @param threshold Threshold for use when displaying classification maps in MM.html report (default is 0.5, -1 indicates no thresholding).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mm" as const,
        "spatial_data_file": spatial_data_file,
        "mask_file": mask_file,
        "verbose_flag": verbose_flag,
        "timing_flag": timing_flag,
        "nonspatial_flag": nonspatial_flag,
        "fix_mrf_precision_flag": fix_mrf_precision_flag,
        "no_update_theta_flag": no_update_theta_flag,
        "zfstat_flag": zfstat_flag,
    };
    if (debug_level !== null) {
        params["debug_level"] = debug_level;
    }
    if (example_epi_file !== null) {
        params["example_epi_file"] = example_epi_file;
    }
    if (log_directory !== null) {
        params["log_directory"] = log_directory;
    }
    if (mrf_prec_start !== null) {
        params["mrf_prec_start"] = mrf_prec_start;
    }
    if (mrf_prec_multiplier !== null) {
        params["mrf_prec_multiplier"] = mrf_prec_multiplier;
    }
    if (init_multiplier !== null) {
        params["init_multiplier"] = init_multiplier;
    }
    if (phi !== null) {
        params["phi"] = phi;
    }
    if (niters !== null) {
        params["niters"] = niters;
    }
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    return params;
}


function mm_cargs(
    params: MmParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mm");
    cargs.push(
        "--sdf",
        execution.inputFile((params["spatial_data_file"] ?? null))
    );
    cargs.push(
        "-m",
        execution.inputFile((params["mask_file"] ?? null))
    );
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("--verbose");
    }
    if ((params["debug_level"] ?? null) !== null) {
        cargs.push(
            "--debug",
            (params["debug_level"] ?? null)
        );
    }
    if ((params["timing_flag"] ?? null)) {
        cargs.push("--timingon");
    }
    if ((params["example_epi_file"] ?? null) !== null) {
        cargs.push(
            "--edf",
            execution.inputFile((params["example_epi_file"] ?? null))
        );
    }
    if ((params["log_directory"] ?? null) !== null) {
        cargs.push(
            "--logdir",
            (params["log_directory"] ?? null)
        );
    }
    if ((params["nonspatial_flag"] ?? null)) {
        cargs.push("--ns");
    }
    if ((params["fix_mrf_precision_flag"] ?? null)) {
        cargs.push("--fmp");
    }
    if ((params["mrf_prec_start"] ?? null) !== null) {
        cargs.push(
            "--mps",
            String((params["mrf_prec_start"] ?? null))
        );
    }
    if ((params["mrf_prec_multiplier"] ?? null) !== null) {
        cargs.push(
            "--mpm",
            String((params["mrf_prec_multiplier"] ?? null))
        );
    }
    if ((params["init_multiplier"] ?? null) !== null) {
        cargs.push(
            "--im",
            String((params["init_multiplier"] ?? null))
        );
    }
    if ((params["no_update_theta_flag"] ?? null)) {
        cargs.push("--nut");
    }
    if ((params["zfstat_flag"] ?? null)) {
        cargs.push("--zfstatmode");
    }
    if ((params["phi"] ?? null) !== null) {
        cargs.push(
            "--phi",
            String((params["phi"] ?? null))
        );
    }
    if ((params["niters"] ?? null) !== null) {
        cargs.push(
            "--ni",
            String((params["niters"] ?? null))
        );
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "--th",
            String((params["threshold"] ?? null))
        );
    }
    return cargs;
}


function mm_outputs(
    params: MmParameters,
    execution: Execution,
): MmOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MmOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mm_execute(
    params: MmParameters,
    execution: Execution,
): MmOutputs {
    /**
     * FSL's MM: mixture modelling.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MmOutputs`).
     */
    params = execution.params(params)
    const cargs = mm_cargs(params, execution)
    const ret = mm_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mm(
    spatial_data_file: InputPathType,
    mask_file: InputPathType,
    verbose_flag: boolean = false,
    debug_level: string | null = null,
    timing_flag: boolean = false,
    example_epi_file: InputPathType | null = null,
    log_directory: string | null = null,
    nonspatial_flag: boolean = false,
    fix_mrf_precision_flag: boolean = false,
    mrf_prec_start: number | null = null,
    mrf_prec_multiplier: number | null = null,
    init_multiplier: number | null = null,
    no_update_theta_flag: boolean = false,
    zfstat_flag: boolean = false,
    phi: number | null = null,
    niters: number | null = null,
    threshold: number | null = null,
    runner: Runner | null = null,
): MmOutputs {
    /**
     * FSL's MM: mixture modelling.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param spatial_data_file Spatial map data file.
     * @param mask_file Mask file.
     * @param verbose_flag Switch on diagnostic messages.
     * @param debug_level Set debug level.
     * @param timing_flag Turn timing on.
     * @param example_epi_file Example EPI data file.
     * @param log_directory Log directory.
     * @param nonspatial_flag Nonspatial mixture model.
     * @param fix_mrf_precision_flag Fix MRF precision to mrfprecstart throughout.
     * @param mrf_prec_start MRF precision initial value (default is 10).
     * @param mrf_prec_multiplier Update multiplier for MRF precision (default is -1, do not multiply).
     * @param init_multiplier Init multiplier (default is 0.3).
     * @param no_update_theta_flag Turn off updating of distribution parameters after non-spatial fit.
     * @param zfstat_flag Turn on zfstat mode - this enforces no deactivation class.
     * @param phi Phi (default is 0.05).
     * @param niters Number of iterations (default is -1: auto stop).
     * @param threshold Threshold for use when displaying classification maps in MM.html report (default is 0.5, -1 indicates no thresholding).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MmOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MM_METADATA);
    const params = mm_params(spatial_data_file, mask_file, verbose_flag, debug_level, timing_flag, example_epi_file, log_directory, nonspatial_flag, fix_mrf_precision_flag, mrf_prec_start, mrf_prec_multiplier, init_multiplier, no_update_theta_flag, zfstat_flag, phi, niters, threshold)
    return mm_execute(params, execution);
}


export {
      MM_METADATA,
      MmOutputs,
      MmParameters,
      mm,
      mm_params,
};
