// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FABBER_T1_METADATA: Metadata = {
    id: "ce3c716e36f55f0aa97d6ec169e5de17639579d4.boutiques",
    name: "fabber_t1",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FabberT1Parameters {
    "__STYXTYPE__": "fabber_t1";
    "output": string;
    "method": string;
    "model": string;
    "data": InputPathType;
    "data_mult"?: Array<InputPathType> | null | undefined;
    "data_order"?: string | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "masked_time_points"?: Array<number> | null | undefined;
    "supp_data"?: InputPathType | null | undefined;
    "overwrite": boolean;
    "link_to_latest": boolean;
    "simple_output": boolean;
    "load_models"?: InputPathType | null | undefined;
    "evaluate"?: string | null | undefined;
    "evaluate_params"?: string | null | undefined;
    "evaluate_nt"?: number | null | undefined;
    "dump_param_names": boolean;
    "save_model_fit": boolean;
    "save_residuals": boolean;
    "save_model_extras": boolean;
    "save_mvn": boolean;
    "save_mean": boolean;
    "save_std": boolean;
    "save_var": boolean;
    "save_zstat": boolean;
    "save_noise_mean": boolean;
    "save_noise_std": boolean;
    "save_free_energy": boolean;
    "optfile"?: InputPathType | null | undefined;
    "debug": boolean;
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
        "fabber_t1": fabber_t1_cargs,
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
        "fabber_t1": fabber_t1_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fabber_t1(...)`.
 *
 * @interface
 */
interface FabberT1Outputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File containing the names of the model parameters
     */
    param_names: OutputPathType;
    /**
     * Output the model prediction as a 4D volume
     */
    model_fit: OutputPathType;
    /**
     * Output the residuals (difference between the data and the model prediction)
     */
    residuals: OutputPathType;
    /**
     * Output any additional model-specific timeseries data
     */
    model_extras: OutputPathType;
    /**
     * Output the final MVN distributions
     */
    mvn_distributions: OutputPathType;
    /**
     * Output the parameter means
     */
    param_means: OutputPathType;
    /**
     * Output the parameter standard deviations
     */
    param_stds: OutputPathType;
    /**
     * Output the parameter variances
     */
    param_vars: OutputPathType;
    /**
     * Output the parameter Z-stats
     */
    param_zstats: OutputPathType;
    /**
     * Output the noise means
     */
    noise_means: OutputPathType;
    /**
     * Output the noise standard deviations
     */
    noise_stds: OutputPathType;
    /**
     * Output the free energy
     */
    free_energy: OutputPathType;
}


function fabber_t1_params(
    output: string,
    method: string,
    model: string,
    data: InputPathType,
    data_mult: Array<InputPathType> | null = null,
    data_order: string | null = "interleave",
    mask: InputPathType | null = null,
    masked_time_points: Array<number> | null = null,
    supp_data: InputPathType | null = null,
    overwrite: boolean = false,
    link_to_latest: boolean = false,
    simple_output: boolean = false,
    load_models: InputPathType | null = null,
    evaluate: string | null = null,
    evaluate_params: string | null = null,
    evaluate_nt: number | null = null,
    dump_param_names: boolean = false,
    save_model_fit: boolean = false,
    save_residuals: boolean = false,
    save_model_extras: boolean = false,
    save_mvn: boolean = false,
    save_mean: boolean = false,
    save_std: boolean = false,
    save_var: boolean = false,
    save_zstat: boolean = false,
    save_noise_mean: boolean = false,
    save_noise_std: boolean = false,
    save_free_energy: boolean = false,
    optfile: InputPathType | null = null,
    debug: boolean = false,
): FabberT1Parameters {
    /**
     * Build parameters.
    
     * @param output Directory for output files (including logfile)
     * @param method Inference method to use
     * @param model Forward model to use
     * @param data Specify a single input data file
     * @param data_mult Specify multiple data files for n=1, 2, 3...
     * @param data_order How multiple data files are handled: concatenate or interleave
     * @param mask Mask file. Inference will only be performed where mask value > 0
     * @param masked_time_points List of masked time points, indexed from 1. These will be ignored in the parameter updates
     * @param supp_data Supplemental timeseries data, required for some models
     * @param overwrite Overwrite existing output. If not set, new output directories will be created by appending '+' to the directory name
     * @param link_to_latest Try to create a link to the most recent output directory with the prefix _latest
     * @param simple_output Simple output format: progress as percentage
     * @param load_models Load models dynamically from the specified filename, which should be a DLL/shared library
     * @param evaluate Evaluate model. Set to name of output required or blank for default output
     * @param evaluate_params List of parameter values for evaluation
     * @param evaluate_nt Number of time points for evaluation - must be consistent with model options where appropriate
     * @param dump_param_names Write the file paramnames.txt containing the names of the model parameters
     * @param save_model_fit Output the model prediction as a 4d volume
     * @param save_residuals Output the residuals (difference between the data and the model prediction)
     * @param save_model_extras Output any additional model-specific timeseries data
     * @param save_mvn Output the final MVN distributions
     * @param save_mean Output the parameter means
     * @param save_std Output the parameter standard deviations
     * @param save_var Output the parameter variances
     * @param save_zstat Output the parameter Zstats
     * @param save_noise_mean Output the noise means. The noise distribution inferred is the precision of a Gaussian noise source
     * @param save_noise_std Output the noise standard deviations
     * @param save_free_energy Output the free energy, if calculated
     * @param optfile File containing additional options, one per line, in the same form as specified on the command line
     * @param debug Output large amounts of debug information
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fabber_t1" as const,
        "output": output,
        "method": method,
        "model": model,
        "data": data,
        "overwrite": overwrite,
        "link_to_latest": link_to_latest,
        "simple_output": simple_output,
        "dump_param_names": dump_param_names,
        "save_model_fit": save_model_fit,
        "save_residuals": save_residuals,
        "save_model_extras": save_model_extras,
        "save_mvn": save_mvn,
        "save_mean": save_mean,
        "save_std": save_std,
        "save_var": save_var,
        "save_zstat": save_zstat,
        "save_noise_mean": save_noise_mean,
        "save_noise_std": save_noise_std,
        "save_free_energy": save_free_energy,
        "debug": debug,
    };
    if (data_mult !== null) {
        params["data_mult"] = data_mult;
    }
    if (data_order !== null) {
        params["data_order"] = data_order;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (masked_time_points !== null) {
        params["masked_time_points"] = masked_time_points;
    }
    if (supp_data !== null) {
        params["supp_data"] = supp_data;
    }
    if (load_models !== null) {
        params["load_models"] = load_models;
    }
    if (evaluate !== null) {
        params["evaluate"] = evaluate;
    }
    if (evaluate_params !== null) {
        params["evaluate_params"] = evaluate_params;
    }
    if (evaluate_nt !== null) {
        params["evaluate_nt"] = evaluate_nt;
    }
    if (optfile !== null) {
        params["optfile"] = optfile;
    }
    return params;
}


function fabber_t1_cargs(
    params: FabberT1Parameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fabber_t1");
    cargs.push(
        "--output",
        (params["output"] ?? null)
    );
    cargs.push(
        "--method",
        (params["method"] ?? null)
    );
    cargs.push(
        "--model",
        (params["model"] ?? null)
    );
    cargs.push(
        "--data",
        execution.inputFile((params["data"] ?? null))
    );
    if ((params["data_mult"] ?? null) !== null) {
        cargs.push(
            "--data<n>",
            ...(params["data_mult"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["data_order"] ?? null) !== null) {
        cargs.push(
            "--data-order",
            (params["data_order"] ?? null)
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "--mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["masked_time_points"] ?? null) !== null) {
        cargs.push(
            "--mt<n>",
            ...(params["masked_time_points"] ?? null).map(String)
        );
    }
    if ((params["supp_data"] ?? null) !== null) {
        cargs.push(
            "--suppdata",
            execution.inputFile((params["supp_data"] ?? null))
        );
    }
    if ((params["overwrite"] ?? null)) {
        cargs.push("--overwrite");
    }
    if ((params["link_to_latest"] ?? null)) {
        cargs.push("--link-to-latest");
    }
    if ((params["simple_output"] ?? null)) {
        cargs.push("--simple-output");
    }
    if ((params["load_models"] ?? null) !== null) {
        cargs.push(
            "--loadmodels",
            execution.inputFile((params["load_models"] ?? null))
        );
    }
    if ((params["evaluate"] ?? null) !== null) {
        cargs.push(
            "--evaluate",
            (params["evaluate"] ?? null)
        );
    }
    if ((params["evaluate_params"] ?? null) !== null) {
        cargs.push(
            "--evaluate-params",
            (params["evaluate_params"] ?? null)
        );
    }
    if ((params["evaluate_nt"] ?? null) !== null) {
        cargs.push(
            "--evaluate-nt",
            String((params["evaluate_nt"] ?? null))
        );
    }
    if ((params["dump_param_names"] ?? null)) {
        cargs.push("--dump-param-names");
    }
    if ((params["save_model_fit"] ?? null)) {
        cargs.push("--save-model-fit");
    }
    if ((params["save_residuals"] ?? null)) {
        cargs.push("--save-residuals");
    }
    if ((params["save_model_extras"] ?? null)) {
        cargs.push("--save-model-extras");
    }
    if ((params["save_mvn"] ?? null)) {
        cargs.push("--save-mvn");
    }
    if ((params["save_mean"] ?? null)) {
        cargs.push("--save-mean");
    }
    if ((params["save_std"] ?? null)) {
        cargs.push("--save-std");
    }
    if ((params["save_var"] ?? null)) {
        cargs.push("--save-var");
    }
    if ((params["save_zstat"] ?? null)) {
        cargs.push("--save-zstat");
    }
    if ((params["save_noise_mean"] ?? null)) {
        cargs.push("--save-noise-mean");
    }
    if ((params["save_noise_std"] ?? null)) {
        cargs.push("--save-noise-std");
    }
    if ((params["save_free_energy"] ?? null)) {
        cargs.push("--save-free-energy");
    }
    if ((params["optfile"] ?? null) !== null) {
        cargs.push(
            "--optfile",
            execution.inputFile((params["optfile"] ?? null))
        );
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    return cargs;
}


function fabber_t1_outputs(
    params: FabberT1Parameters,
    execution: Execution,
): FabberT1Outputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FabberT1Outputs = {
        root: execution.outputFile("."),
        param_names: execution.outputFile([(params["output"] ?? null), "/paramnames.txt"].join('')),
        model_fit: execution.outputFile([(params["output"] ?? null), "/model_prediction.nii.gz"].join('')),
        residuals: execution.outputFile([(params["output"] ?? null), "/residuals.nii.gz"].join('')),
        model_extras: execution.outputFile([(params["output"] ?? null), "/model_extras.nii.gz"].join('')),
        mvn_distributions: execution.outputFile([(params["output"] ?? null), "/mvn_distributions.nii.gz"].join('')),
        param_means: execution.outputFile([(params["output"] ?? null), "/param_means.nii.gz"].join('')),
        param_stds: execution.outputFile([(params["output"] ?? null), "/param_stds.nii.gz"].join('')),
        param_vars: execution.outputFile([(params["output"] ?? null), "/param_vars.nii.gz"].join('')),
        param_zstats: execution.outputFile([(params["output"] ?? null), "/param_zstats.nii.gz"].join('')),
        noise_means: execution.outputFile([(params["output"] ?? null), "/noise_means.nii.gz"].join('')),
        noise_stds: execution.outputFile([(params["output"] ?? null), "/noise_stds.nii.gz"].join('')),
        free_energy: execution.outputFile([(params["output"] ?? null), "/free_energy.nii.gz"].join('')),
    };
    return ret;
}


function fabber_t1_execute(
    params: FabberT1Parameters,
    execution: Execution,
): FabberT1Outputs {
    /**
     * Fabber is a tool for performing model-based analysis of fMRI data, using advanced Bayesian inference techniques.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FabberT1Outputs`).
     */
    params = execution.params(params)
    const cargs = fabber_t1_cargs(params, execution)
    const ret = fabber_t1_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fabber_t1(
    output: string,
    method: string,
    model: string,
    data: InputPathType,
    data_mult: Array<InputPathType> | null = null,
    data_order: string | null = "interleave",
    mask: InputPathType | null = null,
    masked_time_points: Array<number> | null = null,
    supp_data: InputPathType | null = null,
    overwrite: boolean = false,
    link_to_latest: boolean = false,
    simple_output: boolean = false,
    load_models: InputPathType | null = null,
    evaluate: string | null = null,
    evaluate_params: string | null = null,
    evaluate_nt: number | null = null,
    dump_param_names: boolean = false,
    save_model_fit: boolean = false,
    save_residuals: boolean = false,
    save_model_extras: boolean = false,
    save_mvn: boolean = false,
    save_mean: boolean = false,
    save_std: boolean = false,
    save_var: boolean = false,
    save_zstat: boolean = false,
    save_noise_mean: boolean = false,
    save_noise_std: boolean = false,
    save_free_energy: boolean = false,
    optfile: InputPathType | null = null,
    debug: boolean = false,
    runner: Runner | null = null,
): FabberT1Outputs {
    /**
     * Fabber is a tool for performing model-based analysis of fMRI data, using advanced Bayesian inference techniques.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param output Directory for output files (including logfile)
     * @param method Inference method to use
     * @param model Forward model to use
     * @param data Specify a single input data file
     * @param data_mult Specify multiple data files for n=1, 2, 3...
     * @param data_order How multiple data files are handled: concatenate or interleave
     * @param mask Mask file. Inference will only be performed where mask value > 0
     * @param masked_time_points List of masked time points, indexed from 1. These will be ignored in the parameter updates
     * @param supp_data Supplemental timeseries data, required for some models
     * @param overwrite Overwrite existing output. If not set, new output directories will be created by appending '+' to the directory name
     * @param link_to_latest Try to create a link to the most recent output directory with the prefix _latest
     * @param simple_output Simple output format: progress as percentage
     * @param load_models Load models dynamically from the specified filename, which should be a DLL/shared library
     * @param evaluate Evaluate model. Set to name of output required or blank for default output
     * @param evaluate_params List of parameter values for evaluation
     * @param evaluate_nt Number of time points for evaluation - must be consistent with model options where appropriate
     * @param dump_param_names Write the file paramnames.txt containing the names of the model parameters
     * @param save_model_fit Output the model prediction as a 4d volume
     * @param save_residuals Output the residuals (difference between the data and the model prediction)
     * @param save_model_extras Output any additional model-specific timeseries data
     * @param save_mvn Output the final MVN distributions
     * @param save_mean Output the parameter means
     * @param save_std Output the parameter standard deviations
     * @param save_var Output the parameter variances
     * @param save_zstat Output the parameter Zstats
     * @param save_noise_mean Output the noise means. The noise distribution inferred is the precision of a Gaussian noise source
     * @param save_noise_std Output the noise standard deviations
     * @param save_free_energy Output the free energy, if calculated
     * @param optfile File containing additional options, one per line, in the same form as specified on the command line
     * @param debug Output large amounts of debug information
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FabberT1Outputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FABBER_T1_METADATA);
    const params = fabber_t1_params(output, method, model, data, data_mult, data_order, mask, masked_time_points, supp_data, overwrite, link_to_latest, simple_output, load_models, evaluate, evaluate_params, evaluate_nt, dump_param_names, save_model_fit, save_residuals, save_model_extras, save_mvn, save_mean, save_std, save_var, save_zstat, save_noise_mean, save_noise_std, save_free_energy, optfile, debug)
    return fabber_t1_execute(params, execution);
}


export {
      FABBER_T1_METADATA,
      FabberT1Outputs,
      FabberT1Parameters,
      fabber_t1,
      fabber_t1_params,
};
