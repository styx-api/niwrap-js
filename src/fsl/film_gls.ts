// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FILM_GLS_METADATA: Metadata = {
    id: "28329eab3f2c965f28a8a491f743aafbacd80c74.boutiques",
    name: "film_gls",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FilmGlsParameters {
    "__STYXTYPE__": "film_gls";
    "infile": InputPathType;
    "ac_flag": boolean;
    "threshold"?: number | null | undefined;
    "ar_flag": boolean;
    "noest_flag": boolean;
    "outputPW_flag": boolean;
    "pava_flag": boolean;
    "sa_flag": boolean;
    "verbose_flag": boolean;
    "results_dir"?: string | null | undefined;
    "mode"?: string | null | undefined;
    "input_surface"?: InputPathType | null | undefined;
    "mean_func_file"?: InputPathType | null | undefined;
    "min_timepoint_file"?: InputPathType | null | undefined;
    "paradigm_file"?: InputPathType | null | undefined;
    "t_contrasts_file"?: InputPathType | null | undefined;
    "f_contrasts_file"?: InputPathType | null | undefined;
    "epith"?: number | null | undefined;
    "ms"?: number | null | undefined;
    "tukey"?: number | null | undefined;
    "mt"?: number | null | undefined;
    "ven"?: Array<string> | null | undefined;
    "vef"?: Array<InputPathType> | null | undefined;
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
        "film_gls": film_gls_cargs,
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
        "film_gls": film_gls_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `film_gls(...)`.
 *
 * @interface
 */
interface FilmGlsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Prewhitened data output
     */
    prewhitened_data: OutputPathType;
    /**
     * Average design matrix output
     */
    average_design_matrix: OutputPathType;
    /**
     * Results output
     */
    results_data: OutputPathType;
}


function film_gls_params(
    infile: InputPathType,
    ac_flag: boolean = false,
    threshold: number | null = null,
    ar_flag: boolean = false,
    noest_flag: boolean = false,
    output_pw_flag: boolean = false,
    pava_flag: boolean = false,
    sa_flag: boolean = false,
    verbose_flag: boolean = false,
    results_dir: string | null = null,
    mode: string | null = null,
    input_surface: InputPathType | null = null,
    mean_func_file: InputPathType | null = null,
    min_timepoint_file: InputPathType | null = null,
    paradigm_file: InputPathType | null = null,
    t_contrasts_file: InputPathType | null = null,
    f_contrasts_file: InputPathType | null = null,
    epith: number | null = null,
    ms: number | null = null,
    tukey: number | null = null,
    mt: number | null = null,
    ven: Array<string> | null = null,
    vef: Array<InputPathType> | null = null,
): FilmGlsParameters {
    /**
     * Build parameters.
    
     * @param infile Input data file (NIFTI for volumetric, GIFTI for surface)
     * @param ac_flag Perform autocorrelation estimation only
     * @param threshold Initial threshold to apply to input data
     * @param ar_flag Fits autoregressive model - default is to use tukey with M=sqrt(numvols)
     * @param noest_flag Do not estimate autocorrelations
     * @param output_pw_flag Output prewhitened data and average design matrix
     * @param pava_flag Estimates autocorrelation using PAVA - default is to use tukey with M=sqrt(numvols)
     * @param sa_flag Smooths autocorrelation estimates
     * @param verbose_flag Outputs full data
     * @param results_dir Directory name to store results in, default is results
     * @param mode Analysis mode, options are volumetric (default) or surface. Caution: surface-based functionality is still BETA
     * @param input_surface Input surface for autocorrelation smoothing in surface-based analyses
     * @param mean_func_file Re-estimate mean_func baseline - for use with perfusion subtraction
     * @param min_timepoint_file Minimum timepoint file
     * @param paradigm_file Paradigm file
     * @param t_contrasts_file T-contrasts file
     * @param f_contrasts_file F-contrasts file
     * @param epith SUSAN brightness threshold for volumetric analysis/smoothing sigma for surface analysis
     * @param ms SUSAN mask size for volumetric analysis/smoothing extent for surface analysis
     * @param tukey Uses tukey window to estimate autocorrelation with window size num - default is to use tukey with M=sqrt(numvols)
     * @param mt Uses multitapering with slepian tapers and num is the time-bandwidth product - default is to use tukey with M=sqrt(numvols)
     * @param ven List of numbers indicating voxelwise EVs position in the design matrix (list order corresponds to files in vxf option). Caution BETA option, only use with volumetric analysis.
     * @param vef List of 4D images containing voxelwise EVs (list order corresponds to numbers in vxl option). Caution BETA option, only use with volumetric analysis.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "film_gls" as const,
        "infile": infile,
        "ac_flag": ac_flag,
        "ar_flag": ar_flag,
        "noest_flag": noest_flag,
        "outputPW_flag": output_pw_flag,
        "pava_flag": pava_flag,
        "sa_flag": sa_flag,
        "verbose_flag": verbose_flag,
    };
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (results_dir !== null) {
        params["results_dir"] = results_dir;
    }
    if (mode !== null) {
        params["mode"] = mode;
    }
    if (input_surface !== null) {
        params["input_surface"] = input_surface;
    }
    if (mean_func_file !== null) {
        params["mean_func_file"] = mean_func_file;
    }
    if (min_timepoint_file !== null) {
        params["min_timepoint_file"] = min_timepoint_file;
    }
    if (paradigm_file !== null) {
        params["paradigm_file"] = paradigm_file;
    }
    if (t_contrasts_file !== null) {
        params["t_contrasts_file"] = t_contrasts_file;
    }
    if (f_contrasts_file !== null) {
        params["f_contrasts_file"] = f_contrasts_file;
    }
    if (epith !== null) {
        params["epith"] = epith;
    }
    if (ms !== null) {
        params["ms"] = ms;
    }
    if (tukey !== null) {
        params["tukey"] = tukey;
    }
    if (mt !== null) {
        params["mt"] = mt;
    }
    if (ven !== null) {
        params["ven"] = ven;
    }
    if (vef !== null) {
        params["vef"] = vef;
    }
    return params;
}


function film_gls_cargs(
    params: FilmGlsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("film_gls");
    cargs.push(execution.inputFile((params["infile"] ?? null)));
    if ((params["ac_flag"] ?? null)) {
        cargs.push("--ac");
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "--thr",
            String((params["threshold"] ?? null))
        );
    }
    if ((params["ar_flag"] ?? null)) {
        cargs.push("--ar");
    }
    if ((params["noest_flag"] ?? null)) {
        cargs.push("--noest");
    }
    if ((params["outputPW_flag"] ?? null)) {
        cargs.push("--outputPWdata");
    }
    if ((params["pava_flag"] ?? null)) {
        cargs.push("--pava");
    }
    if ((params["sa_flag"] ?? null)) {
        cargs.push("--sa");
    }
    if ((params["verbose_flag"] ?? null)) {
        cargs.push("-v");
    }
    if ((params["results_dir"] ?? null) !== null) {
        cargs.push(
            "--rn",
            (params["results_dir"] ?? null)
        );
    }
    if ((params["mode"] ?? null) !== null) {
        cargs.push(
            "--mode",
            (params["mode"] ?? null)
        );
    }
    if ((params["input_surface"] ?? null) !== null) {
        cargs.push(
            "--in2",
            execution.inputFile((params["input_surface"] ?? null))
        );
    }
    if ((params["mean_func_file"] ?? null) !== null) {
        cargs.push(
            "--mf",
            execution.inputFile((params["mean_func_file"] ?? null))
        );
    }
    if ((params["min_timepoint_file"] ?? null) !== null) {
        cargs.push(
            "--mft",
            execution.inputFile((params["min_timepoint_file"] ?? null))
        );
    }
    if ((params["paradigm_file"] ?? null) !== null) {
        cargs.push(
            "--pd",
            execution.inputFile((params["paradigm_file"] ?? null))
        );
    }
    if ((params["t_contrasts_file"] ?? null) !== null) {
        cargs.push(
            "--con",
            execution.inputFile((params["t_contrasts_file"] ?? null))
        );
    }
    if ((params["f_contrasts_file"] ?? null) !== null) {
        cargs.push(
            "--fcon",
            execution.inputFile((params["f_contrasts_file"] ?? null))
        );
    }
    if ((params["epith"] ?? null) !== null) {
        cargs.push(
            "--epith",
            String((params["epith"] ?? null))
        );
    }
    if ((params["ms"] ?? null) !== null) {
        cargs.push(
            "--ms",
            String((params["ms"] ?? null))
        );
    }
    if ((params["tukey"] ?? null) !== null) {
        cargs.push(
            "--tukey",
            String((params["tukey"] ?? null))
        );
    }
    if ((params["mt"] ?? null) !== null) {
        cargs.push(
            "--mt",
            String((params["mt"] ?? null))
        );
    }
    if ((params["ven"] ?? null) !== null) {
        cargs.push(
            "--ven",
            ...(params["ven"] ?? null)
        );
    }
    if ((params["vef"] ?? null) !== null) {
        cargs.push(
            "--vef",
            ...(params["vef"] ?? null).map(f => execution.inputFile(f))
        );
    }
    return cargs;
}


function film_gls_outputs(
    params: FilmGlsParameters,
    execution: Execution,
): FilmGlsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FilmGlsOutputs = {
        root: execution.outputFile("."),
        prewhitened_data: execution.outputFile(["[rn]/prewhitened_data.nii.gz"].join('')),
        average_design_matrix: execution.outputFile(["[rn]/average_design_matrix.txt"].join('')),
        results_data: execution.outputFile(["[rn]/results.txt"].join('')),
    };
    return ret;
}


function film_gls_execute(
    params: FilmGlsParameters,
    execution: Execution,
): FilmGlsOutputs {
    /**
     * General Linear Model fitting with autocorrelation in FMRI.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FilmGlsOutputs`).
     */
    params = execution.params(params)
    const cargs = film_gls_cargs(params, execution)
    const ret = film_gls_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function film_gls(
    infile: InputPathType,
    ac_flag: boolean = false,
    threshold: number | null = null,
    ar_flag: boolean = false,
    noest_flag: boolean = false,
    output_pw_flag: boolean = false,
    pava_flag: boolean = false,
    sa_flag: boolean = false,
    verbose_flag: boolean = false,
    results_dir: string | null = null,
    mode: string | null = null,
    input_surface: InputPathType | null = null,
    mean_func_file: InputPathType | null = null,
    min_timepoint_file: InputPathType | null = null,
    paradigm_file: InputPathType | null = null,
    t_contrasts_file: InputPathType | null = null,
    f_contrasts_file: InputPathType | null = null,
    epith: number | null = null,
    ms: number | null = null,
    tukey: number | null = null,
    mt: number | null = null,
    ven: Array<string> | null = null,
    vef: Array<InputPathType> | null = null,
    runner: Runner | null = null,
): FilmGlsOutputs {
    /**
     * General Linear Model fitting with autocorrelation in FMRI.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param infile Input data file (NIFTI for volumetric, GIFTI for surface)
     * @param ac_flag Perform autocorrelation estimation only
     * @param threshold Initial threshold to apply to input data
     * @param ar_flag Fits autoregressive model - default is to use tukey with M=sqrt(numvols)
     * @param noest_flag Do not estimate autocorrelations
     * @param output_pw_flag Output prewhitened data and average design matrix
     * @param pava_flag Estimates autocorrelation using PAVA - default is to use tukey with M=sqrt(numvols)
     * @param sa_flag Smooths autocorrelation estimates
     * @param verbose_flag Outputs full data
     * @param results_dir Directory name to store results in, default is results
     * @param mode Analysis mode, options are volumetric (default) or surface. Caution: surface-based functionality is still BETA
     * @param input_surface Input surface for autocorrelation smoothing in surface-based analyses
     * @param mean_func_file Re-estimate mean_func baseline - for use with perfusion subtraction
     * @param min_timepoint_file Minimum timepoint file
     * @param paradigm_file Paradigm file
     * @param t_contrasts_file T-contrasts file
     * @param f_contrasts_file F-contrasts file
     * @param epith SUSAN brightness threshold for volumetric analysis/smoothing sigma for surface analysis
     * @param ms SUSAN mask size for volumetric analysis/smoothing extent for surface analysis
     * @param tukey Uses tukey window to estimate autocorrelation with window size num - default is to use tukey with M=sqrt(numvols)
     * @param mt Uses multitapering with slepian tapers and num is the time-bandwidth product - default is to use tukey with M=sqrt(numvols)
     * @param ven List of numbers indicating voxelwise EVs position in the design matrix (list order corresponds to files in vxf option). Caution BETA option, only use with volumetric analysis.
     * @param vef List of 4D images containing voxelwise EVs (list order corresponds to numbers in vxl option). Caution BETA option, only use with volumetric analysis.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FilmGlsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FILM_GLS_METADATA);
    const params = film_gls_params(infile, ac_flag, threshold, ar_flag, noest_flag, output_pw_flag, pava_flag, sa_flag, verbose_flag, results_dir, mode, input_surface, mean_func_file, min_timepoint_file, paradigm_file, t_contrasts_file, f_contrasts_file, epith, ms, tukey, mt, ven, vef)
    return film_gls_execute(params, execution);
}


export {
      FILM_GLS_METADATA,
      FilmGlsOutputs,
      FilmGlsParameters,
      film_gls,
      film_gls_params,
};
