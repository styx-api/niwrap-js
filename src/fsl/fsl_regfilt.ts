// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_REGFILT_METADATA: Metadata = {
    id: "370119ddd315b17dcffb54b2ce6d75f6e36d4a39.boutiques",
    name: "fsl_regfilt",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslRegfiltParameters {
    "__STYXTYPE__": "fsl_regfilt";
    "infile": InputPathType;
    "designfile": InputPathType;
    "outfile": string;
    "maskfile"?: InputPathType | null | undefined;
    "filter"?: string | null | undefined;
    "freq_filter_flag": boolean;
    "freq_ic_flag": boolean;
    "freq_ic_smooth"?: number | null | undefined;
    "fthresh"?: number | null | undefined;
    "fthresh2"?: number | null | undefined;
    "vn_flag": boolean;
    "verbose_flag": boolean;
    "aggressive_flag": boolean;
    "help_flag": boolean;
    "out_data"?: string | null | undefined;
    "out_mix"?: string | null | undefined;
    "out_vnscales"?: string | null | undefined;
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
        "fsl_regfilt": fsl_regfilt_cargs,
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
        "fsl_regfilt": fsl_regfilt_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_regfilt(...)`.
 *
 * @interface
 */
interface FslRegfiltOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Filtered data output
     */
    filtered_data: OutputPathType;
    /**
     * Pre-processed data output
     */
    preprocessed_data: OutputPathType | null;
    /**
     * New mixing matrix output
     */
    mixing_matrix: OutputPathType | null;
    /**
     * Variance normalisation scaling factors output
     */
    vnscales: OutputPathType | null;
}


function fsl_regfilt_params(
    infile: InputPathType,
    designfile: InputPathType,
    outfile: string,
    maskfile: InputPathType | null = null,
    filter: string | null = null,
    freq_filter_flag: boolean = false,
    freq_ic_flag: boolean = false,
    freq_ic_smooth: number | null = null,
    fthresh: number | null = 0.15,
    fthresh2: number | null = 0.02,
    vn_flag: boolean = false,
    verbose_flag: boolean = false,
    aggressive_flag: boolean = false,
    help_flag: boolean = false,
    out_data: string | null = null,
    out_mix: string | null = null,
    out_vnscales: string | null = null,
): FslRegfiltParameters {
    /**
     * Build parameters.
    
     * @param infile Input file name (4D image)
     * @param designfile File name of the matrix with time courses (e.g. GLM design or MELODIC mixing matrix)
     * @param outfile Output file name for the filtered data
     * @param maskfile Mask image file name
     * @param filter Filter out part of the regression model, e.g., -f "1,2,3"
     * @param freq_filter_flag Filter out components based on high vs. low frequency content
     * @param freq_ic_flag Switch off IC Z-stats filtering as part of frequency filtering
     * @param freq_ic_smooth Smoothing width for IC Z-stats filtering as part of frequency filtering
     * @param fthresh Frequency threshold ratio; default: 0.15
     * @param fthresh2 Frequency filter score threshold; default: 0.02
     * @param vn_flag Perform variance-normalisation on data
     * @param verbose_flag Switch on diagnostic messages
     * @param aggressive_flag Switch on aggressive filtering (full instead of partial regression)
     * @param help_flag Display help text
     * @param out_data Output file name for pre-processed data (prior to denoising)
     * @param out_mix Output file name for new mixing matrix
     * @param out_vnscales Output file name for scaling factors from variance normalisation
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_regfilt" as const,
        "infile": infile,
        "designfile": designfile,
        "outfile": outfile,
        "freq_filter_flag": freq_filter_flag,
        "freq_ic_flag": freq_ic_flag,
        "vn_flag": vn_flag,
        "verbose_flag": verbose_flag,
        "aggressive_flag": aggressive_flag,
        "help_flag": help_flag,
    };
    if (maskfile !== null) {
        params["maskfile"] = maskfile;
    }
    if (filter !== null) {
        params["filter"] = filter;
    }
    if (freq_ic_smooth !== null) {
        params["freq_ic_smooth"] = freq_ic_smooth;
    }
    if (fthresh !== null) {
        params["fthresh"] = fthresh;
    }
    if (fthresh2 !== null) {
        params["fthresh2"] = fthresh2;
    }
    if (out_data !== null) {
        params["out_data"] = out_data;
    }
    if (out_mix !== null) {
        params["out_mix"] = out_mix;
    }
    if (out_vnscales !== null) {
        params["out_vnscales"] = out_vnscales;
    }
    return params;
}


function fsl_regfilt_cargs(
    params: FslRegfiltParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_regfilt");
    cargs.push(
        "-i",
        execution.inputFile((params["infile"] ?? null))
    );
    cargs.push(
        "-d",
        execution.inputFile((params["designfile"] ?? null))
    );
    cargs.push(
        "-o",
        (params["outfile"] ?? null)
    );
    if ((params["maskfile"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["maskfile"] ?? null))
        );
    }
    if ((params["filter"] ?? null) !== null) {
        cargs.push(
            "-f",
            (params["filter"] ?? null)
        );
    }
    if ((params["freq_filter_flag"] ?? null)) {
        cargs.push("-F");
    }
    if ((params["freq_ic_flag"] ?? null)) {
        cargs.push("--freq_ic");
    }
    if ((params["freq_ic_smooth"] ?? null) !== null) {
        cargs.push(
            "--freq_ic_smooth",
            String((params["freq_ic_smooth"] ?? null))
        );
    }
    if ((params["fthresh"] ?? null) !== null) {
        cargs.push(
            "--fthresh",
            String((params["fthresh"] ?? null))
        );
    }
    if ((params["fthresh2"] ?? null) !== null) {
        cargs.push(
            "--fthresh2",
            String((params["fthresh2"] ?? null))
        );
    }
    if ((params["vn_flag"] ?? null)) {
        cargs.push("--vn");
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["aggressive_flag"] ?? null)) {
        cargs.push("-a");
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("-h");
    }
    if ((params["out_data"] ?? null) !== null) {
        cargs.push(
            "--out_data",
            (params["out_data"] ?? null)
        );
    }
    if ((params["out_mix"] ?? null) !== null) {
        cargs.push(
            "--out_mix",
            (params["out_mix"] ?? null)
        );
    }
    if ((params["out_vnscales"] ?? null) !== null) {
        cargs.push(
            "--out_vnscales",
            (params["out_vnscales"] ?? null)
        );
    }
    return cargs;
}


function fsl_regfilt_outputs(
    params: FslRegfiltParameters,
    execution: Execution,
): FslRegfiltOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslRegfiltOutputs = {
        root: execution.outputFile("."),
        filtered_data: execution.outputFile([(params["outfile"] ?? null), ".nii.gz"].join('')),
        preprocessed_data: ((params["out_data"] ?? null) !== null) ? execution.outputFile([(params["out_data"] ?? null), ".nii.gz"].join('')) : null,
        mixing_matrix: ((params["out_mix"] ?? null) !== null) ? execution.outputFile([(params["out_mix"] ?? null), ".nii.gz"].join('')) : null,
        vnscales: ((params["out_vnscales"] ?? null) !== null) ? execution.outputFile([(params["out_vnscales"] ?? null), ".nii.gz"].join('')) : null,
    };
    return ret;
}


function fsl_regfilt_execute(
    params: FslRegfiltParameters,
    execution: Execution,
): FslRegfiltOutputs {
    /**
     * Data de-noising by regressing out part of a design matrix using simple OLS regression on 4D images.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslRegfiltOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_regfilt_cargs(params, execution)
    const ret = fsl_regfilt_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_regfilt(
    infile: InputPathType,
    designfile: InputPathType,
    outfile: string,
    maskfile: InputPathType | null = null,
    filter: string | null = null,
    freq_filter_flag: boolean = false,
    freq_ic_flag: boolean = false,
    freq_ic_smooth: number | null = null,
    fthresh: number | null = 0.15,
    fthresh2: number | null = 0.02,
    vn_flag: boolean = false,
    verbose_flag: boolean = false,
    aggressive_flag: boolean = false,
    help_flag: boolean = false,
    out_data: string | null = null,
    out_mix: string | null = null,
    out_vnscales: string | null = null,
    runner: Runner | null = null,
): FslRegfiltOutputs {
    /**
     * Data de-noising by regressing out part of a design matrix using simple OLS regression on 4D images.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param infile Input file name (4D image)
     * @param designfile File name of the matrix with time courses (e.g. GLM design or MELODIC mixing matrix)
     * @param outfile Output file name for the filtered data
     * @param maskfile Mask image file name
     * @param filter Filter out part of the regression model, e.g., -f "1,2,3"
     * @param freq_filter_flag Filter out components based on high vs. low frequency content
     * @param freq_ic_flag Switch off IC Z-stats filtering as part of frequency filtering
     * @param freq_ic_smooth Smoothing width for IC Z-stats filtering as part of frequency filtering
     * @param fthresh Frequency threshold ratio; default: 0.15
     * @param fthresh2 Frequency filter score threshold; default: 0.02
     * @param vn_flag Perform variance-normalisation on data
     * @param verbose_flag Switch on diagnostic messages
     * @param aggressive_flag Switch on aggressive filtering (full instead of partial regression)
     * @param help_flag Display help text
     * @param out_data Output file name for pre-processed data (prior to denoising)
     * @param out_mix Output file name for new mixing matrix
     * @param out_vnscales Output file name for scaling factors from variance normalisation
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslRegfiltOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_REGFILT_METADATA);
    const params = fsl_regfilt_params(infile, designfile, outfile, maskfile, filter, freq_filter_flag, freq_ic_flag, freq_ic_smooth, fthresh, fthresh2, vn_flag, verbose_flag, aggressive_flag, help_flag, out_data, out_mix, out_vnscales)
    return fsl_regfilt_execute(params, execution);
}


export {
      FSL_REGFILT_METADATA,
      FslRegfiltOutputs,
      FslRegfiltParameters,
      fsl_regfilt,
      fsl_regfilt_params,
};
