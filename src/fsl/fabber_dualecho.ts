// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FABBER_DUALECHO_METADATA: Metadata = {
    id: "b1b3ef305e828618a56f324d1685eaa71fa216a8.boutiques",
    name: "fabber_dualecho",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FabberDualechoParameters {
    "__STYXTYPE__": "fabber_dualecho";
    "output_directory": string;
    "method": string;
    "model": string;
    "data": InputPathType;
    "data_order"?: string | null | undefined;
    "mask_file"?: InputPathType | null | undefined;
    "mt_list"?: number | null | undefined;
    "supp_data"?: InputPathType | null | undefined;
    "options_file"?: InputPathType | null | undefined;
    "help_flag": boolean;
    "list_methods_flag": boolean;
    "list_models_flag": boolean;
    "list_params_flag": boolean;
    "desc_params_flag": boolean;
    "list_outputs_flag": boolean;
    "evaluate"?: string | null | undefined;
    "evaluate_params"?: string | null | undefined;
    "evaluate_nt"?: number | null | undefined;
    "simple_output_flag": boolean;
    "overwrite_flag": boolean;
    "link_to_latest_flag": boolean;
    "load_models"?: InputPathType | null | undefined;
    "dump_param_names_flag": boolean;
    "save_model_fit_flag": boolean;
    "save_residuals_flag": boolean;
    "save_model_extras_flag": boolean;
    "save_mvn_flag": boolean;
    "save_mean_flag": boolean;
    "save_std_flag": boolean;
    "save_var_flag": boolean;
    "save_zstat_flag": boolean;
    "save_noise_mean_flag": boolean;
    "save_noise_std_flag": boolean;
    "save_free_energy_flag": boolean;
    "debug_flag": boolean;
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
        "fabber_dualecho": fabber_dualecho_cargs,
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
        "fabber_dualecho": fabber_dualecho_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fabber_dualecho(...)`.
 *
 * @interface
 */
interface FabberDualechoOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * All output files will be stored in the output directory specified by the user.
     */
    output_files: OutputPathType;
}


function fabber_dualecho_params(
    output_directory: string,
    method: string,
    model: string,
    data: InputPathType,
    data_order: string | null = "interleave",
    mask_file: InputPathType | null = null,
    mt_list: number | null = null,
    supp_data: InputPathType | null = null,
    options_file: InputPathType | null = null,
    help_flag: boolean = false,
    list_methods_flag: boolean = false,
    list_models_flag: boolean = false,
    list_params_flag: boolean = false,
    desc_params_flag: boolean = false,
    list_outputs_flag: boolean = false,
    evaluate: string | null = null,
    evaluate_params: string | null = null,
    evaluate_nt: number | null = null,
    simple_output_flag: boolean = false,
    overwrite_flag: boolean = false,
    link_to_latest_flag: boolean = false,
    load_models: InputPathType | null = null,
    dump_param_names_flag: boolean = false,
    save_model_fit_flag: boolean = false,
    save_residuals_flag: boolean = false,
    save_model_extras_flag: boolean = false,
    save_mvn_flag: boolean = false,
    save_mean_flag: boolean = false,
    save_std_flag: boolean = false,
    save_var_flag: boolean = false,
    save_zstat_flag: boolean = false,
    save_noise_mean_flag: boolean = false,
    save_noise_std_flag: boolean = false,
    save_free_energy_flag: boolean = false,
    debug_flag: boolean = false,
): FabberDualechoParameters {
    /**
     * Build parameters.
    
     * @param output_directory Directory for output files (including logfile)
     * @param method Use this inference method
     * @param model Use this forward model
     * @param data Specify a single input data file
     * @param data_order If multiple data files are specified, how they will be handled: concatenate = one after the other, interleave = first record from each file, then second, etc.
     * @param mask_file Mask file. Inference will only be performed where mask value > 0
     * @param mt_list List of masked time points, indexed from 1. These will be ignored in the parameter updates
     * @param supp_data 'Supplemental' timeseries data, required for some models
     * @param options_file File containing additional options, one per line, in the same form as specified on the command line
     * @param help_flag Print this usage method. If given with --method or --model, display relevant method/model usage information
     * @param list_methods_flag List all known inference methods
     * @param list_models_flag List all known forward models
     * @param list_params_flag List model parameters (requires model configuration options to be given)
     * @param desc_params_flag Descript model parameters (name, description, units) - requires model configuration options to be given. Note that not all models provide parameter descriptions
     * @param list_outputs_flag List additional model outputs (requires model configuration options to be given)
     * @param evaluate Evaluate model. Set to name of output required or blank for default output. Requires model configuration options, --evaluate-params and --evaluate-nt
     * @param evaluate_params List of parameter values for evaluation
     * @param evaluate_nt Number of time points for evaluation - must be consistent with model options where appropriate
     * @param simple_output_flag Instead of usual standard output, simply output series of lines each giving progress as percentage
     * @param overwrite_flag If set will overwrite existing output. If not set, new output directories will be created by appending '+' to the directory name
     * @param link_to_latest_flag Try to create a link to the most recent output directory with the prefix _latest
     * @param load_models Load models dynamically from the specified filename, which should be a DLL/shared library
     * @param dump_param_names_flag Write the file paramnames.txt containing the names of the model parameters
     * @param save_model_fit_flag Output the model prediction as a 4d volume
     * @param save_residuals_flag Output the residuals (difference between the data and the model prediction)
     * @param save_model_extras_flag Output any additional model-specific timeseries data
     * @param save_mvn_flag Output the final MVN distributions.
     * @param save_mean_flag Output the parameter means.
     * @param save_std_flag Output the parameter standard deviations.
     * @param save_var_flag Output the parameter variances.
     * @param save_zstat_flag Output the parameter Zstats.
     * @param save_noise_mean_flag Output the noise means. The noise distribution inferred is the precision of a Gaussian noise source
     * @param save_noise_std_flag Output the noise standard deviations.
     * @param save_free_energy_flag Output the free energy, if calculated.
     * @param debug_flag Output large amounts of debug information. ONLY USE WITH VERY SMALL NUMBERS OF VOXELS
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fabber_dualecho" as const,
        "output_directory": output_directory,
        "method": method,
        "model": model,
        "data": data,
        "help_flag": help_flag,
        "list_methods_flag": list_methods_flag,
        "list_models_flag": list_models_flag,
        "list_params_flag": list_params_flag,
        "desc_params_flag": desc_params_flag,
        "list_outputs_flag": list_outputs_flag,
        "simple_output_flag": simple_output_flag,
        "overwrite_flag": overwrite_flag,
        "link_to_latest_flag": link_to_latest_flag,
        "dump_param_names_flag": dump_param_names_flag,
        "save_model_fit_flag": save_model_fit_flag,
        "save_residuals_flag": save_residuals_flag,
        "save_model_extras_flag": save_model_extras_flag,
        "save_mvn_flag": save_mvn_flag,
        "save_mean_flag": save_mean_flag,
        "save_std_flag": save_std_flag,
        "save_var_flag": save_var_flag,
        "save_zstat_flag": save_zstat_flag,
        "save_noise_mean_flag": save_noise_mean_flag,
        "save_noise_std_flag": save_noise_std_flag,
        "save_free_energy_flag": save_free_energy_flag,
        "debug_flag": debug_flag,
    };
    if (data_order !== null) {
        params["data_order"] = data_order;
    }
    if (mask_file !== null) {
        params["mask_file"] = mask_file;
    }
    if (mt_list !== null) {
        params["mt_list"] = mt_list;
    }
    if (supp_data !== null) {
        params["supp_data"] = supp_data;
    }
    if (options_file !== null) {
        params["options_file"] = options_file;
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
    if (load_models !== null) {
        params["load_models"] = load_models;
    }
    return params;
}


function fabber_dualecho_cargs(
    params: FabberDualechoParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fabber_dualecho");
    cargs.push((params["output_directory"] ?? null));
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
    if ((params["data_order"] ?? null) !== null) {
        cargs.push(
            "--data-order",
            (params["data_order"] ?? null)
        );
    }
    if ((params["mask_file"] ?? null) !== null) {
        cargs.push(
            "--mask",
            execution.inputFile((params["mask_file"] ?? null))
        );
    }
    if ((params["mt_list"] ?? null) !== null) {
        cargs.push(
            "--mt<n>",
            String((params["mt_list"] ?? null))
        );
    }
    if ((params["supp_data"] ?? null) !== null) {
        cargs.push(
            "--suppdata",
            execution.inputFile((params["supp_data"] ?? null))
        );
    }
    if ((params["options_file"] ?? null) !== null) {
        cargs.push(
            "--optfile",
            execution.inputFile((params["options_file"] ?? null))
        );
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["list_methods_flag"] ?? null)) {
        cargs.push("--listmethods");
    }
    if ((params["list_models_flag"] ?? null)) {
        cargs.push("--listmodels");
    }
    if ((params["list_params_flag"] ?? null)) {
        cargs.push("--listparams");
    }
    if ((params["desc_params_flag"] ?? null)) {
        cargs.push("--descparams");
    }
    if ((params["list_outputs_flag"] ?? null)) {
        cargs.push("--listoutputs");
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
    if ((params["simple_output_flag"] ?? null)) {
        cargs.push("--simple-output");
    }
    if ((params["overwrite_flag"] ?? null)) {
        cargs.push("--overwrite");
    }
    if ((params["link_to_latest_flag"] ?? null)) {
        cargs.push("--link-to-latest");
    }
    if ((params["load_models"] ?? null) !== null) {
        cargs.push(
            "--loadmodels",
            execution.inputFile((params["load_models"] ?? null))
        );
    }
    if ((params["dump_param_names_flag"] ?? null)) {
        cargs.push("--dump-param-names");
    }
    if ((params["save_model_fit_flag"] ?? null)) {
        cargs.push("--save-model-fit");
    }
    if ((params["save_residuals_flag"] ?? null)) {
        cargs.push("--save-residuals");
    }
    if ((params["save_model_extras_flag"] ?? null)) {
        cargs.push("--save-model-extras");
    }
    if ((params["save_mvn_flag"] ?? null)) {
        cargs.push("--save-mvn");
    }
    if ((params["save_mean_flag"] ?? null)) {
        cargs.push("--save-mean");
    }
    if ((params["save_std_flag"] ?? null)) {
        cargs.push("--save-std");
    }
    if ((params["save_var_flag"] ?? null)) {
        cargs.push("--save-var");
    }
    if ((params["save_zstat_flag"] ?? null)) {
        cargs.push("--save-zstat");
    }
    if ((params["save_noise_mean_flag"] ?? null)) {
        cargs.push("--save-noise-mean");
    }
    if ((params["save_noise_std_flag"] ?? null)) {
        cargs.push("--save-noise-std");
    }
    if ((params["save_free_energy_flag"] ?? null)) {
        cargs.push("--save-free-energy");
    }
    if ((params["debug_flag"] ?? null)) {
        cargs.push("--debug");
    }
    return cargs;
}


function fabber_dualecho_outputs(
    params: FabberDualechoParameters,
    execution: Execution,
): FabberDualechoOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FabberDualechoOutputs = {
        root: execution.outputFile("."),
        output_files: execution.outputFile([(params["output_directory"] ?? null), "/*"].join('')),
    };
    return ret;
}


function fabber_dualecho_execute(
    params: FabberDualechoParameters,
    execution: Execution,
): FabberDualechoOutputs {
    /**
     * FMRIB's Advanced Bayesian Estimation and Inference tool for FMRI analysis.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FabberDualechoOutputs`).
     */
    params = execution.params(params)
    const cargs = fabber_dualecho_cargs(params, execution)
    const ret = fabber_dualecho_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fabber_dualecho(
    output_directory: string,
    method: string,
    model: string,
    data: InputPathType,
    data_order: string | null = "interleave",
    mask_file: InputPathType | null = null,
    mt_list: number | null = null,
    supp_data: InputPathType | null = null,
    options_file: InputPathType | null = null,
    help_flag: boolean = false,
    list_methods_flag: boolean = false,
    list_models_flag: boolean = false,
    list_params_flag: boolean = false,
    desc_params_flag: boolean = false,
    list_outputs_flag: boolean = false,
    evaluate: string | null = null,
    evaluate_params: string | null = null,
    evaluate_nt: number | null = null,
    simple_output_flag: boolean = false,
    overwrite_flag: boolean = false,
    link_to_latest_flag: boolean = false,
    load_models: InputPathType | null = null,
    dump_param_names_flag: boolean = false,
    save_model_fit_flag: boolean = false,
    save_residuals_flag: boolean = false,
    save_model_extras_flag: boolean = false,
    save_mvn_flag: boolean = false,
    save_mean_flag: boolean = false,
    save_std_flag: boolean = false,
    save_var_flag: boolean = false,
    save_zstat_flag: boolean = false,
    save_noise_mean_flag: boolean = false,
    save_noise_std_flag: boolean = false,
    save_free_energy_flag: boolean = false,
    debug_flag: boolean = false,
    runner: Runner | null = null,
): FabberDualechoOutputs {
    /**
     * FMRIB's Advanced Bayesian Estimation and Inference tool for FMRI analysis.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param output_directory Directory for output files (including logfile)
     * @param method Use this inference method
     * @param model Use this forward model
     * @param data Specify a single input data file
     * @param data_order If multiple data files are specified, how they will be handled: concatenate = one after the other, interleave = first record from each file, then second, etc.
     * @param mask_file Mask file. Inference will only be performed where mask value > 0
     * @param mt_list List of masked time points, indexed from 1. These will be ignored in the parameter updates
     * @param supp_data 'Supplemental' timeseries data, required for some models
     * @param options_file File containing additional options, one per line, in the same form as specified on the command line
     * @param help_flag Print this usage method. If given with --method or --model, display relevant method/model usage information
     * @param list_methods_flag List all known inference methods
     * @param list_models_flag List all known forward models
     * @param list_params_flag List model parameters (requires model configuration options to be given)
     * @param desc_params_flag Descript model parameters (name, description, units) - requires model configuration options to be given. Note that not all models provide parameter descriptions
     * @param list_outputs_flag List additional model outputs (requires model configuration options to be given)
     * @param evaluate Evaluate model. Set to name of output required or blank for default output. Requires model configuration options, --evaluate-params and --evaluate-nt
     * @param evaluate_params List of parameter values for evaluation
     * @param evaluate_nt Number of time points for evaluation - must be consistent with model options where appropriate
     * @param simple_output_flag Instead of usual standard output, simply output series of lines each giving progress as percentage
     * @param overwrite_flag If set will overwrite existing output. If not set, new output directories will be created by appending '+' to the directory name
     * @param link_to_latest_flag Try to create a link to the most recent output directory with the prefix _latest
     * @param load_models Load models dynamically from the specified filename, which should be a DLL/shared library
     * @param dump_param_names_flag Write the file paramnames.txt containing the names of the model parameters
     * @param save_model_fit_flag Output the model prediction as a 4d volume
     * @param save_residuals_flag Output the residuals (difference between the data and the model prediction)
     * @param save_model_extras_flag Output any additional model-specific timeseries data
     * @param save_mvn_flag Output the final MVN distributions.
     * @param save_mean_flag Output the parameter means.
     * @param save_std_flag Output the parameter standard deviations.
     * @param save_var_flag Output the parameter variances.
     * @param save_zstat_flag Output the parameter Zstats.
     * @param save_noise_mean_flag Output the noise means. The noise distribution inferred is the precision of a Gaussian noise source
     * @param save_noise_std_flag Output the noise standard deviations.
     * @param save_free_energy_flag Output the free energy, if calculated.
     * @param debug_flag Output large amounts of debug information. ONLY USE WITH VERY SMALL NUMBERS OF VOXELS
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FabberDualechoOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FABBER_DUALECHO_METADATA);
    const params = fabber_dualecho_params(output_directory, method, model, data, data_order, mask_file, mt_list, supp_data, options_file, help_flag, list_methods_flag, list_models_flag, list_params_flag, desc_params_flag, list_outputs_flag, evaluate, evaluate_params, evaluate_nt, simple_output_flag, overwrite_flag, link_to_latest_flag, load_models, dump_param_names_flag, save_model_fit_flag, save_residuals_flag, save_model_extras_flag, save_mvn_flag, save_mean_flag, save_std_flag, save_var_flag, save_zstat_flag, save_noise_mean_flag, save_noise_std_flag, save_free_energy_flag, debug_flag)
    return fabber_dualecho_execute(params, execution);
}


export {
      FABBER_DUALECHO_METADATA,
      FabberDualechoOutputs,
      FabberDualechoParameters,
      fabber_dualecho,
      fabber_dualecho_params,
};
