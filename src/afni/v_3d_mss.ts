// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_MSS_METADATA: Metadata = {
    id: "276226ad44e7a9804c89600a9895d189f8152cd2.boutiques",
    name: "3dMSS",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dMssParameters {
    "__STYXTYPE__": "3dMSS";
    "prefix": string;
    "jobs"?: number | null | undefined;
    "mrr_formula"?: string | null | undefined;
    "lme_formula"?: string | null | undefined;
    "random_effect"?: string | null | undefined;
    "qvars"?: string | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "bounds"?: Array<number> | null | undefined;
    "prediction_table"?: InputPathType | null | undefined;
    "data_table": InputPathType;
    "cio_flag": boolean;
    "rio_flag": boolean;
    "help_flag": boolean;
    "dbg_args_flag": boolean;
    "if_name"?: string | null | undefined;
    "show_allowed_options_flag": boolean;
    "sdiff_vars"?: string | null | undefined;
    "vt_formula"?: string | null | undefined;
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
        "3dMSS": v_3d_mss_cargs,
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
        "3dMSS": v_3d_mss_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_mss(...)`.
 *
 * @interface
 */
interface V3dMssOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file in NIfTI format
     */
    output_file: OutputPathType;
}


function v_3d_mss_params(
    prefix: string,
    data_table: InputPathType,
    jobs: number | null = null,
    mrr_formula: string | null = null,
    lme_formula: string | null = null,
    random_effect: string | null = null,
    qvars: string | null = null,
    mask: InputPathType | null = null,
    bounds: Array<number> | null = null,
    prediction_table: InputPathType | null = null,
    cio_flag: boolean = false,
    rio_flag: boolean = false,
    help_flag: boolean = false,
    dbg_args_flag: boolean = false,
    if_name: string | null = null,
    show_allowed_options_flag: boolean = false,
    sdiff_vars: string | null = null,
    vt_formula: string | null = null,
): V3dMssParameters {
    /**
     * Build parameters.
    
     * @param prefix Output file name. For AFNI format, provide prefix only, with no view+suffix needed. Filename for NIfTI format should have .nii attached.
     * @param data_table List the data structure with a header as the first line.
     * @param jobs Number of CPU cores for parallel processing
     * @param mrr_formula Model formulation through multilevel smoothing splines
     * @param lme_formula Specify the fixed effect components of the model
     * @param random_effect Specify the random effect components of the model
     * @param qvars Identify quantitative variables (or covariates). The list with more than one variable has to be separated with comma without any other characters.
     * @param mask Process voxels inside this mask only.
     * @param bounds Outlier removal bounds. Any values in the input data that are beyond the bounds will be removed and treated as missing.
     * @param prediction_table Provide a data table so that predicted values could be generated for graphical illustration.
     * @param cio_flag Use AFNI's C io functions, which is default.
     * @param rio_flag Use R's io functions.
     * @param help_flag Display help message
     * @param dbg_args_flag Enable R to save the parameters in a file called .3dMSS.dbg.AFNI.args for debugging.
     * @param if_name Specify the column name that is designated for input files of effect estimate. Default is 'InputFile'.
     * @param show_allowed_options_flag List of allowed options
     * @param sdiff_vars Specify the factors for group comparisons.
     * @param vt_formula Specify varying smoothing terms. Two components are required: the first one 'var' indicates the variable (e.g., subject) around which the smoothing will vary while the second component specifies the smoothing formulation.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dMSS" as const,
        "prefix": prefix,
        "data_table": data_table,
        "cio_flag": cio_flag,
        "rio_flag": rio_flag,
        "help_flag": help_flag,
        "dbg_args_flag": dbg_args_flag,
        "show_allowed_options_flag": show_allowed_options_flag,
    };
    if (jobs !== null) {
        params["jobs"] = jobs;
    }
    if (mrr_formula !== null) {
        params["mrr_formula"] = mrr_formula;
    }
    if (lme_formula !== null) {
        params["lme_formula"] = lme_formula;
    }
    if (random_effect !== null) {
        params["random_effect"] = random_effect;
    }
    if (qvars !== null) {
        params["qvars"] = qvars;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (bounds !== null) {
        params["bounds"] = bounds;
    }
    if (prediction_table !== null) {
        params["prediction_table"] = prediction_table;
    }
    if (if_name !== null) {
        params["if_name"] = if_name;
    }
    if (sdiff_vars !== null) {
        params["sdiff_vars"] = sdiff_vars;
    }
    if (vt_formula !== null) {
        params["vt_formula"] = vt_formula;
    }
    return params;
}


function v_3d_mss_cargs(
    params: V3dMssParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dMSS");
    cargs.push((params["prefix"] ?? null));
    if ((params["jobs"] ?? null) !== null) {
        cargs.push(
            "-jobs",
            String((params["jobs"] ?? null))
        );
    }
    if ((params["mrr_formula"] ?? null) !== null) {
        cargs.push(
            "-mrr",
            (params["mrr_formula"] ?? null)
        );
    }
    if ((params["lme_formula"] ?? null) !== null) {
        cargs.push(
            "-lme",
            (params["lme_formula"] ?? null)
        );
    }
    if ((params["random_effect"] ?? null) !== null) {
        cargs.push(
            "-ranEff",
            (params["random_effect"] ?? null)
        );
    }
    if ((params["qvars"] ?? null) !== null) {
        cargs.push(
            "-qVars",
            (params["qvars"] ?? null)
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["bounds"] ?? null) !== null) {
        cargs.push(
            "-bounds",
            ...(params["bounds"] ?? null).map(String)
        );
    }
    if ((params["prediction_table"] ?? null) !== null) {
        cargs.push(
            "-prediction",
            execution.inputFile((params["prediction_table"] ?? null))
        );
    }
    cargs.push(
        "-dataTable",
        execution.inputFile((params["data_table"] ?? null))
    );
    if ((params["cio_flag"] ?? null)) {
        cargs.push("-cio");
    }
    if ((params["rio_flag"] ?? null)) {
        cargs.push("-Rio");
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["dbg_args_flag"] ?? null)) {
        cargs.push("-dbgArgs");
    }
    if ((params["if_name"] ?? null) !== null) {
        cargs.push(
            "-IF",
            (params["if_name"] ?? null)
        );
    }
    if ((params["show_allowed_options_flag"] ?? null)) {
        cargs.push("-show_allowed_options");
    }
    if ((params["sdiff_vars"] ?? null) !== null) {
        cargs.push(
            "-sdiff",
            (params["sdiff_vars"] ?? null)
        );
    }
    if ((params["vt_formula"] ?? null) !== null) {
        cargs.push(
            "-vt",
            (params["vt_formula"] ?? null)
        );
    }
    return cargs;
}


function v_3d_mss_outputs(
    params: V3dMssParameters,
    execution: Execution,
): V3dMssOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dMssOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["prefix"] ?? null), ".nii"].join('')),
    };
    return ret;
}


function v_3d_mss_execute(
    params: V3dMssParameters,
    execution: Execution,
): V3dMssOutputs {
    /**
     * Voxelwise Multilevel Smoothing Spline (MSS) Analysis.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dMssOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_mss_cargs(params, execution)
    const ret = v_3d_mss_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_mss(
    prefix: string,
    data_table: InputPathType,
    jobs: number | null = null,
    mrr_formula: string | null = null,
    lme_formula: string | null = null,
    random_effect: string | null = null,
    qvars: string | null = null,
    mask: InputPathType | null = null,
    bounds: Array<number> | null = null,
    prediction_table: InputPathType | null = null,
    cio_flag: boolean = false,
    rio_flag: boolean = false,
    help_flag: boolean = false,
    dbg_args_flag: boolean = false,
    if_name: string | null = null,
    show_allowed_options_flag: boolean = false,
    sdiff_vars: string | null = null,
    vt_formula: string | null = null,
    runner: Runner | null = null,
): V3dMssOutputs {
    /**
     * Voxelwise Multilevel Smoothing Spline (MSS) Analysis.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param prefix Output file name. For AFNI format, provide prefix only, with no view+suffix needed. Filename for NIfTI format should have .nii attached.
     * @param data_table List the data structure with a header as the first line.
     * @param jobs Number of CPU cores for parallel processing
     * @param mrr_formula Model formulation through multilevel smoothing splines
     * @param lme_formula Specify the fixed effect components of the model
     * @param random_effect Specify the random effect components of the model
     * @param qvars Identify quantitative variables (or covariates). The list with more than one variable has to be separated with comma without any other characters.
     * @param mask Process voxels inside this mask only.
     * @param bounds Outlier removal bounds. Any values in the input data that are beyond the bounds will be removed and treated as missing.
     * @param prediction_table Provide a data table so that predicted values could be generated for graphical illustration.
     * @param cio_flag Use AFNI's C io functions, which is default.
     * @param rio_flag Use R's io functions.
     * @param help_flag Display help message
     * @param dbg_args_flag Enable R to save the parameters in a file called .3dMSS.dbg.AFNI.args for debugging.
     * @param if_name Specify the column name that is designated for input files of effect estimate. Default is 'InputFile'.
     * @param show_allowed_options_flag List of allowed options
     * @param sdiff_vars Specify the factors for group comparisons.
     * @param vt_formula Specify varying smoothing terms. Two components are required: the first one 'var' indicates the variable (e.g., subject) around which the smoothing will vary while the second component specifies the smoothing formulation.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dMssOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_MSS_METADATA);
    const params = v_3d_mss_params(prefix, data_table, jobs, mrr_formula, lme_formula, random_effect, qvars, mask, bounds, prediction_table, cio_flag, rio_flag, help_flag, dbg_args_flag, if_name, show_allowed_options_flag, sdiff_vars, vt_formula)
    return v_3d_mss_execute(params, execution);
}


export {
      V3dMssOutputs,
      V3dMssParameters,
      V_3D_MSS_METADATA,
      v_3d_mss,
      v_3d_mss_params,
};
