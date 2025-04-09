// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FABBER_ASL_METADATA: Metadata = {
    id: "78601ea614fc950ecf0f43a99bec42c79e5df181.boutiques",
    name: "fabber_asl",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FabberAslParameters {
    "__STYXTYPE__": "fabber_asl";
    "listmethods": boolean;
    "listmodels": boolean;
    "listparams": boolean;
    "descparams": boolean;
    "listoutputs": boolean;
    "evaluate"?: string | null | undefined;
    "evaluate_params"?: string | null | undefined;
    "evaluate_nt"?: number | null | undefined;
    "simple_output": boolean;
    "output": string;
    "overwrite": boolean;
    "link_to_latest": boolean;
    "method": string;
    "model": string;
    "loadmodels"?: InputPathType | null | undefined;
    "data": InputPathType;
    "mask"?: InputPathType | null | undefined;
    "suppdata"?: InputPathType | null | undefined;
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
    "optfile"?: string | null | undefined;
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
        "fabber_asl": fabber_asl_cargs,
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
        "fabber_asl": fabber_asl_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fabber_asl(...)`.
 *
 * @interface
 */
interface FabberAslOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Log file of Fabber output
     */
    logfile: OutputPathType;
    /**
     * Model fit output
     */
    modelfit: OutputPathType;
    /**
     * Residuals output
     */
    residuals: OutputPathType;
    /**
     * Model specific timeseries data
     */
    model_extras: OutputPathType;
    /**
     * MVN distributions
     */
    mvn: OutputPathType;
    /**
     * Parameter means
     */
    means: OutputPathType;
    /**
     * Parameter standard deviations
     */
    stds: OutputPathType;
    /**
     * Parameter variances
     */
    variances: OutputPathType;
    /**
     * Parameter Zstats
     */
    zstats: OutputPathType;
    /**
     * Noise means
     */
    noise_means: OutputPathType;
    /**
     * Noise standard deviations
     */
    noise_stds: OutputPathType;
    /**
     * Free energy
     */
    free_energy: OutputPathType;
}


function fabber_asl_params(
    output: string,
    method: string,
    model: string,
    data: InputPathType,
    listmethods: boolean = false,
    listmodels: boolean = false,
    listparams: boolean = false,
    descparams: boolean = false,
    listoutputs: boolean = false,
    evaluate: string | null = null,
    evaluate_params: string | null = null,
    evaluate_nt: number | null = null,
    simple_output: boolean = false,
    overwrite: boolean = false,
    link_to_latest: boolean = false,
    loadmodels: InputPathType | null = null,
    mask: InputPathType | null = null,
    suppdata: InputPathType | null = null,
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
    optfile: string | null = null,
    debug: boolean = false,
): FabberAslParameters {
    /**
     * Build parameters.
    
     * @param output Directory for output files (including logfile)
     * @param method Use this inference method
     * @param model Use this forward model
     * @param data Specify a single input data file
     * @param listmethods List all known inference methods
     * @param listmodels List all known forward models
     * @param listparams List model parameters (requires model configuration options to be given)
     * @param descparams Describe model parameters (name, description, units) - requires model configuration options to be given. Note that not all models provide parameter descriptions
     * @param listoutputs List additional model outputs (requires model configuration options to be given)
     * @param evaluate Evaluate model. Set to name of output required or blank for default output. Requires model configuration options, --evaluate-params and --evaluate-nt
     * @param evaluate_params List of parameter values for evaluation
     * @param evaluate_nt Number of time points for evaluation - must be consistent with model options where appropriate
     * @param simple_output Instead of usual standard output, simply output series of lines each giving progress as percentage
     * @param overwrite If set will overwrite existing output. If not set, new output directories will be created by appending '+' to the directory name
     * @param link_to_latest Try to create a link to the most recent output directory with the prefix _latest
     * @param loadmodels Load models dynamically from the specified filename, which should be a DLL/shared library
     * @param mask Mask file. Inference will only be performed where mask value > 0
     * @param suppdata 'Supplemental' timeseries data, required for some models
     * @param dump_param_names Write the file paramnames.txt containing the names of the model parameters
     * @param save_model_fit Output the model prediction as a 4d volume
     * @param save_residuals Output the residuals (difference between the data and the model prediction)
     * @param save_model_extras Output any additional model-specific timeseries data
     * @param save_mvn Output the final MVN distributions.
     * @param save_mean Output the parameter means.
     * @param save_std Output the parameter standard deviations.
     * @param save_var Output the parameter variances.
     * @param save_zstat Output the parameter Zstats.
     * @param save_noise_mean Output the noise means. The noise distribution inferred is the precision of a Gaussian noise source
     * @param save_noise_std Output the noise standard deviations.
     * @param save_free_energy Output the free energy, if calculated.
     * @param optfile File containing additional options, one per line, in the same form as specified on the command line
     * @param debug Output large amounts of debug information. ONLY USE WITH VERY SMALL NUMBERS OF VOXELS
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fabber_asl" as const,
        "listmethods": listmethods,
        "listmodels": listmodels,
        "listparams": listparams,
        "descparams": descparams,
        "listoutputs": listoutputs,
        "simple_output": simple_output,
        "output": output,
        "overwrite": overwrite,
        "link_to_latest": link_to_latest,
        "method": method,
        "model": model,
        "data": data,
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
    if (evaluate !== null) {
        params["evaluate"] = evaluate;
    }
    if (evaluate_params !== null) {
        params["evaluate_params"] = evaluate_params;
    }
    if (evaluate_nt !== null) {
        params["evaluate_nt"] = evaluate_nt;
    }
    if (loadmodels !== null) {
        params["loadmodels"] = loadmodels;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (suppdata !== null) {
        params["suppdata"] = suppdata;
    }
    if (optfile !== null) {
        params["optfile"] = optfile;
    }
    return params;
}


function fabber_asl_cargs(
    params: FabberAslParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fabber_asl");
    if ((params["listmethods"] ?? null)) {
        cargs.push("--listmethods");
    }
    if ((params["listmodels"] ?? null)) {
        cargs.push("--listmodels");
    }
    if ((params["listparams"] ?? null)) {
        cargs.push("--listparams");
    }
    if ((params["descparams"] ?? null)) {
        cargs.push("--descparams");
    }
    if ((params["listoutputs"] ?? null)) {
        cargs.push("--listoutputs");
    }
    if ((params["evaluate"] ?? null) !== null) {
        cargs.push((params["evaluate"] ?? null));
    }
    if ((params["evaluate_params"] ?? null) !== null) {
        cargs.push((params["evaluate_params"] ?? null));
    }
    if ((params["evaluate_nt"] ?? null) !== null) {
        cargs.push(String((params["evaluate_nt"] ?? null)));
    }
    if ((params["simple_output"] ?? null)) {
        cargs.push("--simple-output");
    }
    cargs.push((params["output"] ?? null));
    if ((params["overwrite"] ?? null)) {
        cargs.push("--overwrite");
    }
    if ((params["link_to_latest"] ?? null)) {
        cargs.push("--link-to-latest");
    }
    cargs.push((params["method"] ?? null));
    cargs.push((params["model"] ?? null));
    if ((params["loadmodels"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["loadmodels"] ?? null)));
    }
    cargs.push(execution.inputFile((params["data"] ?? null)));
    if ((params["mask"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["mask"] ?? null)));
    }
    if ((params["suppdata"] ?? null) !== null) {
        cargs.push(execution.inputFile((params["suppdata"] ?? null)));
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
        cargs.push((params["optfile"] ?? null));
    }
    if ((params["debug"] ?? null)) {
        cargs.push("--debug");
    }
    return cargs;
}


function fabber_asl_outputs(
    params: FabberAslParameters,
    execution: Execution,
): FabberAslOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FabberAslOutputs = {
        root: execution.outputFile("."),
        logfile: execution.outputFile([(params["output"] ?? null), "/logfile.txt"].join('')),
        modelfit: execution.outputFile([(params["output"] ?? null), "/model_fit.nii.gz"].join('')),
        residuals: execution.outputFile([(params["output"] ?? null), "/residuals.nii.gz"].join('')),
        model_extras: execution.outputFile([(params["output"] ?? null), "/extras.nii.gz"].join('')),
        mvn: execution.outputFile([(params["output"] ?? null), "/mvn.nii.gz"].join('')),
        means: execution.outputFile([(params["output"] ?? null), "/means.nii.gz"].join('')),
        stds: execution.outputFile([(params["output"] ?? null), "/stds.nii.gz"].join('')),
        variances: execution.outputFile([(params["output"] ?? null), "/variances.nii.gz"].join('')),
        zstats: execution.outputFile([(params["output"] ?? null), "/zstats.nii.gz"].join('')),
        noise_means: execution.outputFile([(params["output"] ?? null), "/noise_means.nii.gz"].join('')),
        noise_stds: execution.outputFile([(params["output"] ?? null), "/noise_stds.nii.gz"].join('')),
        free_energy: execution.outputFile([(params["output"] ?? null), "/free_energy.nii.gz"].join('')),
    };
    return ret;
}


function fabber_asl_execute(
    params: FabberAslParameters,
    execution: Execution,
): FabberAslOutputs {
    /**
     * Fabber is a tool for automated model fitting of time series data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FabberAslOutputs`).
     */
    params = execution.params(params)
    const cargs = fabber_asl_cargs(params, execution)
    const ret = fabber_asl_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fabber_asl(
    output: string,
    method: string,
    model: string,
    data: InputPathType,
    listmethods: boolean = false,
    listmodels: boolean = false,
    listparams: boolean = false,
    descparams: boolean = false,
    listoutputs: boolean = false,
    evaluate: string | null = null,
    evaluate_params: string | null = null,
    evaluate_nt: number | null = null,
    simple_output: boolean = false,
    overwrite: boolean = false,
    link_to_latest: boolean = false,
    loadmodels: InputPathType | null = null,
    mask: InputPathType | null = null,
    suppdata: InputPathType | null = null,
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
    optfile: string | null = null,
    debug: boolean = false,
    runner: Runner | null = null,
): FabberAslOutputs {
    /**
     * Fabber is a tool for automated model fitting of time series data.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param output Directory for output files (including logfile)
     * @param method Use this inference method
     * @param model Use this forward model
     * @param data Specify a single input data file
     * @param listmethods List all known inference methods
     * @param listmodels List all known forward models
     * @param listparams List model parameters (requires model configuration options to be given)
     * @param descparams Describe model parameters (name, description, units) - requires model configuration options to be given. Note that not all models provide parameter descriptions
     * @param listoutputs List additional model outputs (requires model configuration options to be given)
     * @param evaluate Evaluate model. Set to name of output required or blank for default output. Requires model configuration options, --evaluate-params and --evaluate-nt
     * @param evaluate_params List of parameter values for evaluation
     * @param evaluate_nt Number of time points for evaluation - must be consistent with model options where appropriate
     * @param simple_output Instead of usual standard output, simply output series of lines each giving progress as percentage
     * @param overwrite If set will overwrite existing output. If not set, new output directories will be created by appending '+' to the directory name
     * @param link_to_latest Try to create a link to the most recent output directory with the prefix _latest
     * @param loadmodels Load models dynamically from the specified filename, which should be a DLL/shared library
     * @param mask Mask file. Inference will only be performed where mask value > 0
     * @param suppdata 'Supplemental' timeseries data, required for some models
     * @param dump_param_names Write the file paramnames.txt containing the names of the model parameters
     * @param save_model_fit Output the model prediction as a 4d volume
     * @param save_residuals Output the residuals (difference between the data and the model prediction)
     * @param save_model_extras Output any additional model-specific timeseries data
     * @param save_mvn Output the final MVN distributions.
     * @param save_mean Output the parameter means.
     * @param save_std Output the parameter standard deviations.
     * @param save_var Output the parameter variances.
     * @param save_zstat Output the parameter Zstats.
     * @param save_noise_mean Output the noise means. The noise distribution inferred is the precision of a Gaussian noise source
     * @param save_noise_std Output the noise standard deviations.
     * @param save_free_energy Output the free energy, if calculated.
     * @param optfile File containing additional options, one per line, in the same form as specified on the command line
     * @param debug Output large amounts of debug information. ONLY USE WITH VERY SMALL NUMBERS OF VOXELS
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FabberAslOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FABBER_ASL_METADATA);
    const params = fabber_asl_params(output, method, model, data, listmethods, listmodels, listparams, descparams, listoutputs, evaluate, evaluate_params, evaluate_nt, simple_output, overwrite, link_to_latest, loadmodels, mask, suppdata, dump_param_names, save_model_fit, save_residuals, save_model_extras, save_mvn, save_mean, save_std, save_var, save_zstat, save_noise_mean, save_noise_std, save_free_energy, optfile, debug)
    return fabber_asl_execute(params, execution);
}


export {
      FABBER_ASL_METADATA,
      FabberAslOutputs,
      FabberAslParameters,
      fabber_asl,
      fabber_asl_params,
};
