// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_GLM_METADATA: Metadata = {
    id: "be15ba7aea8bf677de2d297518743bf4a70fd822.boutiques",
    name: "fsl_glm",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslGlmParameters {
    "__STYXTYPE__": "fsl_glm";
    "input_file": InputPathType;
    "design_matrix": InputPathType;
    "output_file"?: string | null | undefined;
    "contrasts"?: InputPathType | null | undefined;
    "mask_file"?: InputPathType | null | undefined;
    "dof"?: number | null | undefined;
    "design_norm_flag": boolean;
    "data_norm_flag": boolean;
    "vn_flag": boolean;
    "demean_flag": boolean;
    "output_copes"?: string | null | undefined;
    "output_zstats"?: string | null | undefined;
    "output_tstats"?: string | null | undefined;
    "output_pvals"?: string | null | undefined;
    "output_fvals"?: string | null | undefined;
    "output_pfvals"?: string | null | undefined;
    "output_residuals"?: string | null | undefined;
    "output_varcb"?: string | null | undefined;
    "output_sigsq"?: string | null | undefined;
    "output_data"?: string | null | undefined;
    "output_vnscales"?: string | null | undefined;
    "vx_text"?: Array<string> | null | undefined;
    "vx_images"?: Array<InputPathType> | null | undefined;
    "help_flag": boolean;
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
        "fsl_glm": fsl_glm_cargs,
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
        "fsl_glm": fsl_glm_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_glm(...)`.
 *
 * @interface
 */
interface FslGlmOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file name for GLM parameter estimates (GLM betas)
     */
    output_file_out: OutputPathType | null;
    /**
     * Output file name for COPEs (either as text file or image)
     */
    output_copes_out: OutputPathType | null;
    /**
     * Output file name for Z-stats (either as text file or image)
     */
    output_zstats_out: OutputPathType | null;
    /**
     * Output file name for t-stats (either as text file or image)
     */
    output_tstats_out: OutputPathType | null;
    /**
     * Output file name for p-values of Z-stats (either as text file or image)
     */
    output_pvals_out: OutputPathType | null;
    /**
     * Output file name for F-value of full model fit
     */
    output_fvals_out: OutputPathType | null;
    /**
     * Output file name for p-value for full model fit
     */
    output_pfvals_out: OutputPathType | null;
    /**
     * Output file name for residuals
     */
    output_residuals_out: OutputPathType | null;
    /**
     * Output file name for variance of COPEs
     */
    output_varcb_out: OutputPathType | null;
    /**
     * Output file name for residual noise variance sigma-square
     */
    output_sigsq_out: OutputPathType | null;
    /**
     * Output file name for pre-processed data
     */
    output_data_out: OutputPathType | null;
    /**
     * Output file name for scaling factors for variance normalisation
     */
    output_vnscales_out: OutputPathType | null;
}


function fsl_glm_params(
    input_file: InputPathType,
    design_matrix: InputPathType,
    output_file: string | null = null,
    contrasts: InputPathType | null = null,
    mask_file: InputPathType | null = null,
    dof: number | null = null,
    design_norm_flag: boolean = false,
    data_norm_flag: boolean = false,
    vn_flag: boolean = false,
    demean_flag: boolean = false,
    output_copes: string | null = null,
    output_zstats: string | null = null,
    output_tstats: string | null = null,
    output_pvals: string | null = null,
    output_fvals: string | null = null,
    output_pfvals: string | null = null,
    output_residuals: string | null = null,
    output_varcb: string | null = null,
    output_sigsq: string | null = null,
    output_data: string | null = null,
    output_vnscales: string | null = null,
    vx_text: Array<string> | null = null,
    vx_images: Array<InputPathType> | null = null,
    help_flag: boolean = false,
): FslGlmParameters {
    /**
     * Build parameters.
    
     * @param input_file Input file name (text matrix or 3D/4D image file)
     * @param design_matrix File name of the GLM design matrix (text time courses for temporal regression or an image file for spatial regression)
     * @param output_file Output file name for GLM parameter estimates (GLM betas)
     * @param contrasts Matrix of t-statistics contrasts
     * @param mask_file Mask image file name if input is image
     * @param dof Set degrees-of-freedom explicitly
     * @param design_norm_flag Switch on normalisation of the design matrix columns to unit std. deviation
     * @param data_norm_flag Switch on normalisation of the data time series to unit std. deviation
     * @param vn_flag Perform MELODIC variance-normalisation on data
     * @param demean_flag Switch on de-meaning of design and data
     * @param output_copes Output file name for COPEs (either as text file or image)
     * @param output_zstats Output file name for Z-stats (either as text file or image)
     * @param output_tstats Output file name for t-stats (either as text file or image)
     * @param output_pvals Output file name for p-values of Z-stats (either as text file or image)
     * @param output_fvals Output file name for F-value of full model fit
     * @param output_pfvals Output file name for p-value for full model fit
     * @param output_residuals Output file name for residuals
     * @param output_varcb Output file name for variance of COPEs
     * @param output_sigsq Output file name for residual noise variance sigma-square
     * @param output_data Output file name for pre-processed data
     * @param output_vnscales Output file name for scaling factors for variance normalisation
     * @param vx_text List of text files containing text matrix confounds. Caution, BETA option.
     * @param vx_images List of 4D images containing voxelwise confounds. Caution, BETA option.
     * @param help_flag Display this help text
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_glm" as const,
        "input_file": input_file,
        "design_matrix": design_matrix,
        "design_norm_flag": design_norm_flag,
        "data_norm_flag": data_norm_flag,
        "vn_flag": vn_flag,
        "demean_flag": demean_flag,
        "help_flag": help_flag,
    };
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    if (contrasts !== null) {
        params["contrasts"] = contrasts;
    }
    if (mask_file !== null) {
        params["mask_file"] = mask_file;
    }
    if (dof !== null) {
        params["dof"] = dof;
    }
    if (output_copes !== null) {
        params["output_copes"] = output_copes;
    }
    if (output_zstats !== null) {
        params["output_zstats"] = output_zstats;
    }
    if (output_tstats !== null) {
        params["output_tstats"] = output_tstats;
    }
    if (output_pvals !== null) {
        params["output_pvals"] = output_pvals;
    }
    if (output_fvals !== null) {
        params["output_fvals"] = output_fvals;
    }
    if (output_pfvals !== null) {
        params["output_pfvals"] = output_pfvals;
    }
    if (output_residuals !== null) {
        params["output_residuals"] = output_residuals;
    }
    if (output_varcb !== null) {
        params["output_varcb"] = output_varcb;
    }
    if (output_sigsq !== null) {
        params["output_sigsq"] = output_sigsq;
    }
    if (output_data !== null) {
        params["output_data"] = output_data;
    }
    if (output_vnscales !== null) {
        params["output_vnscales"] = output_vnscales;
    }
    if (vx_text !== null) {
        params["vx_text"] = vx_text;
    }
    if (vx_images !== null) {
        params["vx_images"] = vx_images;
    }
    return params;
}


function fsl_glm_cargs(
    params: FslGlmParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_glm");
    cargs.push(
        "-i",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "-d",
        execution.inputFile((params["design_matrix"] ?? null))
    );
    if ((params["output_file"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_file"] ?? null)
        );
    }
    if ((params["contrasts"] ?? null) !== null) {
        cargs.push(
            "-c",
            execution.inputFile((params["contrasts"] ?? null))
        );
    }
    if ((params["mask_file"] ?? null) !== null) {
        cargs.push(
            "-m",
            execution.inputFile((params["mask_file"] ?? null))
        );
    }
    if ((params["dof"] ?? null) !== null) {
        cargs.push(
            "--dof",
            String((params["dof"] ?? null))
        );
    }
    if ((params["design_norm_flag"] ?? null)) {
        cargs.push("--des_norm");
    }
    if ((params["data_norm_flag"] ?? null)) {
        cargs.push("--dat_norm");
    }
    if ((params["vn_flag"] ?? null)) {
        cargs.push("--vn");
    }
    if ((params["demean_flag"] ?? null)) {
        cargs.push("--demean");
    }
    if ((params["output_copes"] ?? null) !== null) {
        cargs.push(
            "--out_cope",
            (params["output_copes"] ?? null)
        );
    }
    if ((params["output_zstats"] ?? null) !== null) {
        cargs.push(
            "--out_z",
            (params["output_zstats"] ?? null)
        );
    }
    if ((params["output_tstats"] ?? null) !== null) {
        cargs.push(
            "--out_t",
            (params["output_tstats"] ?? null)
        );
    }
    if ((params["output_pvals"] ?? null) !== null) {
        cargs.push(
            "--out_p",
            (params["output_pvals"] ?? null)
        );
    }
    if ((params["output_fvals"] ?? null) !== null) {
        cargs.push(
            "--out_f",
            (params["output_fvals"] ?? null)
        );
    }
    if ((params["output_pfvals"] ?? null) !== null) {
        cargs.push(
            "--out_pf",
            (params["output_pfvals"] ?? null)
        );
    }
    if ((params["output_residuals"] ?? null) !== null) {
        cargs.push(
            "--out_res",
            (params["output_residuals"] ?? null)
        );
    }
    if ((params["output_varcb"] ?? null) !== null) {
        cargs.push(
            "--out_varcb",
            (params["output_varcb"] ?? null)
        );
    }
    if ((params["output_sigsq"] ?? null) !== null) {
        cargs.push(
            "--out_sigsq",
            (params["output_sigsq"] ?? null)
        );
    }
    if ((params["output_data"] ?? null) !== null) {
        cargs.push(
            "--out_data",
            (params["output_data"] ?? null)
        );
    }
    if ((params["output_vnscales"] ?? null) !== null) {
        cargs.push(
            "--out_vnscales",
            (params["output_vnscales"] ?? null)
        );
    }
    if ((params["vx_text"] ?? null) !== null) {
        cargs.push(
            "--vxt",
            ...(params["vx_text"] ?? null)
        );
    }
    if ((params["vx_images"] ?? null) !== null) {
        cargs.push(
            "--vxf",
            ...(params["vx_images"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("-h");
    }
    return cargs;
}


function fsl_glm_outputs(
    params: FslGlmParameters,
    execution: Execution,
): FslGlmOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslGlmOutputs = {
        root: execution.outputFile("."),
        output_file_out: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null), ".nii.gz"].join('')) : null,
        output_copes_out: ((params["output_copes"] ?? null) !== null) ? execution.outputFile([(params["output_copes"] ?? null), ".nii.gz"].join('')) : null,
        output_zstats_out: ((params["output_zstats"] ?? null) !== null) ? execution.outputFile([(params["output_zstats"] ?? null), ".nii.gz"].join('')) : null,
        output_tstats_out: ((params["output_tstats"] ?? null) !== null) ? execution.outputFile([(params["output_tstats"] ?? null), ".nii.gz"].join('')) : null,
        output_pvals_out: ((params["output_pvals"] ?? null) !== null) ? execution.outputFile([(params["output_pvals"] ?? null), ".nii.gz"].join('')) : null,
        output_fvals_out: ((params["output_fvals"] ?? null) !== null) ? execution.outputFile([(params["output_fvals"] ?? null), ".nii.gz"].join('')) : null,
        output_pfvals_out: ((params["output_pfvals"] ?? null) !== null) ? execution.outputFile([(params["output_pfvals"] ?? null), ".nii.gz"].join('')) : null,
        output_residuals_out: ((params["output_residuals"] ?? null) !== null) ? execution.outputFile([(params["output_residuals"] ?? null), ".nii.gz"].join('')) : null,
        output_varcb_out: ((params["output_varcb"] ?? null) !== null) ? execution.outputFile([(params["output_varcb"] ?? null), ".nii.gz"].join('')) : null,
        output_sigsq_out: ((params["output_sigsq"] ?? null) !== null) ? execution.outputFile([(params["output_sigsq"] ?? null), ".nii.gz"].join('')) : null,
        output_data_out: ((params["output_data"] ?? null) !== null) ? execution.outputFile([(params["output_data"] ?? null), ".nii.gz"].join('')) : null,
        output_vnscales_out: ((params["output_vnscales"] ?? null) !== null) ? execution.outputFile([(params["output_vnscales"] ?? null), ".nii.gz"].join('')) : null,
    };
    return ret;
}


function fsl_glm_execute(
    params: FslGlmParameters,
    execution: Execution,
): FslGlmOutputs {
    /**
     * Simple GLM allowing temporal or spatial regression on either text data or images.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslGlmOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_glm_cargs(params, execution)
    const ret = fsl_glm_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_glm(
    input_file: InputPathType,
    design_matrix: InputPathType,
    output_file: string | null = null,
    contrasts: InputPathType | null = null,
    mask_file: InputPathType | null = null,
    dof: number | null = null,
    design_norm_flag: boolean = false,
    data_norm_flag: boolean = false,
    vn_flag: boolean = false,
    demean_flag: boolean = false,
    output_copes: string | null = null,
    output_zstats: string | null = null,
    output_tstats: string | null = null,
    output_pvals: string | null = null,
    output_fvals: string | null = null,
    output_pfvals: string | null = null,
    output_residuals: string | null = null,
    output_varcb: string | null = null,
    output_sigsq: string | null = null,
    output_data: string | null = null,
    output_vnscales: string | null = null,
    vx_text: Array<string> | null = null,
    vx_images: Array<InputPathType> | null = null,
    help_flag: boolean = false,
    runner: Runner | null = null,
): FslGlmOutputs {
    /**
     * Simple GLM allowing temporal or spatial regression on either text data or images.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_file Input file name (text matrix or 3D/4D image file)
     * @param design_matrix File name of the GLM design matrix (text time courses for temporal regression or an image file for spatial regression)
     * @param output_file Output file name for GLM parameter estimates (GLM betas)
     * @param contrasts Matrix of t-statistics contrasts
     * @param mask_file Mask image file name if input is image
     * @param dof Set degrees-of-freedom explicitly
     * @param design_norm_flag Switch on normalisation of the design matrix columns to unit std. deviation
     * @param data_norm_flag Switch on normalisation of the data time series to unit std. deviation
     * @param vn_flag Perform MELODIC variance-normalisation on data
     * @param demean_flag Switch on de-meaning of design and data
     * @param output_copes Output file name for COPEs (either as text file or image)
     * @param output_zstats Output file name for Z-stats (either as text file or image)
     * @param output_tstats Output file name for t-stats (either as text file or image)
     * @param output_pvals Output file name for p-values of Z-stats (either as text file or image)
     * @param output_fvals Output file name for F-value of full model fit
     * @param output_pfvals Output file name for p-value for full model fit
     * @param output_residuals Output file name for residuals
     * @param output_varcb Output file name for variance of COPEs
     * @param output_sigsq Output file name for residual noise variance sigma-square
     * @param output_data Output file name for pre-processed data
     * @param output_vnscales Output file name for scaling factors for variance normalisation
     * @param vx_text List of text files containing text matrix confounds. Caution, BETA option.
     * @param vx_images List of 4D images containing voxelwise confounds. Caution, BETA option.
     * @param help_flag Display this help text
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslGlmOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_GLM_METADATA);
    const params = fsl_glm_params(input_file, design_matrix, output_file, contrasts, mask_file, dof, design_norm_flag, data_norm_flag, vn_flag, demean_flag, output_copes, output_zstats, output_tstats, output_pvals, output_fvals, output_pfvals, output_residuals, output_varcb, output_sigsq, output_data, output_vnscales, vx_text, vx_images, help_flag)
    return fsl_glm_execute(params, execution);
}


export {
      FSL_GLM_METADATA,
      FslGlmOutputs,
      FslGlmParameters,
      fsl_glm,
      fsl_glm_params,
};
