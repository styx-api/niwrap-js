// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const BAYESIAN_GROUP_ANA_PY_METADATA: Metadata = {
    id: "16a41e07083d349e8b592010dd1d0f643a97bab3.boutiques",
    name: "BayesianGroupAna.py",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface BayesianGroupAnaPyParameters {
    "__STYXTYPE__": "BayesianGroupAna.py";
    "dataTable": InputPathType;
    "y_variable": string;
    "prefix"?: string | null | undefined;
    "x_variables"?: Array<string> | null | undefined;
    "no_center": boolean;
    "iterations"?: number | null | undefined;
    "chains"?: number | null | undefined;
    "control_list"?: string | null | undefined;
    "plot": boolean;
    "more_plots"?: Array<string> | null | undefined;
    "RData": boolean;
    "seed"?: number | null | undefined;
    "overwrite": boolean;
    "help": boolean;
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
        "BayesianGroupAna.py": bayesian_group_ana_py_cargs,
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
        "BayesianGroupAna.py": bayesian_group_ana_py_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `bayesian_group_ana_py(...)`.
 *
 * @interface
 */
interface BayesianGroupAnaPyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Summary of the brmsfit object from R.
     */
    summary: OutputPathType | null;
    /**
     * Rhats for each effect and x variable combination.
     */
    rhats: OutputPathType | null;
    /**
     * Table with the MedianEst, StdDev, 2.50%, 5%, 50%, 95%, and 97.50% of each ROI for the Intercept term.
     */
    intercept_table: OutputPathType | null;
    /**
     * The same table as the Intercept but for the specified x variable.
     */
    x_var_table: OutputPathType | null;
}


function bayesian_group_ana_py_params(
    data_table: InputPathType,
    y_variable: string,
    prefix: string | null = null,
    x_variables: Array<string> | null = null,
    no_center: boolean = false,
    iterations: number | null = null,
    chains: number | null = null,
    control_list: string | null = null,
    plot: boolean = false,
    more_plots: Array<string> | null = null,
    rdata: boolean = false,
    seed: number | null = null,
    overwrite: boolean = false,
    help: boolean = false,
): BayesianGroupAnaPyParameters {
    /**
     * Build parameters.
    
     * @param data_table Input text file containing the data table.
     * @param y_variable Column name for the y variable.
     * @param prefix Name of the output file.
     * @param x_variables Column name(s) for the x variables. If not specified, only the intercept will be added.
     * @param no_center Disable centering on the x variables. Maybe useful if you centered manually.
     * @param iterations Number of total iterations per chain including warmup. Default [1000]
     * @param chains Number of Markov chains. Default [4]
     * @param control_list Comma separated list of control parameters to pass to the brm function. Default is the brm function defaults.
     * @param plot Output box, fit, and posterior prediction plots.
     * @param more_plots Output 'stanplots' given different types of plot names.
     * @param rdata Save the R session workspace and data.
     * @param seed Seed to generate random number. Default [1234]
     * @param overwrite Overwrites the output files.
     * @param help Show help message and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "BayesianGroupAna.py" as const,
        "dataTable": data_table,
        "y_variable": y_variable,
        "no_center": no_center,
        "plot": plot,
        "RData": rdata,
        "overwrite": overwrite,
        "help": help,
    };
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (x_variables !== null) {
        params["x_variables"] = x_variables;
    }
    if (iterations !== null) {
        params["iterations"] = iterations;
    }
    if (chains !== null) {
        params["chains"] = chains;
    }
    if (control_list !== null) {
        params["control_list"] = control_list;
    }
    if (more_plots !== null) {
        params["more_plots"] = more_plots;
    }
    if (seed !== null) {
        params["seed"] = seed;
    }
    return params;
}


function bayesian_group_ana_py_cargs(
    params: BayesianGroupAnaPyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("BayesianGroupAna.py");
    cargs.push(execution.inputFile((params["dataTable"] ?? null)));
    cargs.push((params["y_variable"] ?? null));
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["x_variables"] ?? null) !== null) {
        cargs.push(
            "-x",
            ...(params["x_variables"] ?? null)
        );
    }
    if ((params["no_center"] ?? null)) {
        cargs.push("-no_center");
    }
    if ((params["iterations"] ?? null) !== null) {
        cargs.push(
            "-iterations",
            String((params["iterations"] ?? null))
        );
    }
    if ((params["chains"] ?? null) !== null) {
        cargs.push(
            "-chains",
            String((params["chains"] ?? null))
        );
    }
    if ((params["control_list"] ?? null) !== null) {
        cargs.push(
            "-control_list",
            (params["control_list"] ?? null)
        );
    }
    if ((params["plot"] ?? null)) {
        cargs.push("-plot");
    }
    if ((params["more_plots"] ?? null) !== null) {
        cargs.push(
            "-more_plots",
            ...(params["more_plots"] ?? null)
        );
    }
    if ((params["RData"] ?? null)) {
        cargs.push("-RData");
    }
    if ((params["seed"] ?? null) !== null) {
        cargs.push(
            "-seed",
            String((params["seed"] ?? null))
        );
    }
    if ((params["overwrite"] ?? null)) {
        cargs.push("-overwrite");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    return cargs;
}


function bayesian_group_ana_py_outputs(
    params: BayesianGroupAnaPyParameters,
    execution: Execution,
): BayesianGroupAnaPyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: BayesianGroupAnaPyOutputs = {
        root: execution.outputFile("."),
        summary: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "_summary.txt"].join('')) : null,
        rhats: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "_rhats.csv"].join('')) : null,
        intercept_table: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "_Intercept_table.csv"].join('')) : null,
        x_var_table: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "_table.csv"].join('')) : null,
    };
    return ret;
}


function bayesian_group_ana_py_execute(
    params: BayesianGroupAnaPyParameters,
    execution: Execution,
): BayesianGroupAnaPyOutputs {
    /**
     * This program conducts Bayesian Group Analysis (BGA) on a list of regions of interest (ROIs). Compared to the conventional univariate GLM, BGA pools and shares the information across the ROIs in a multilevel system.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `BayesianGroupAnaPyOutputs`).
     */
    params = execution.params(params)
    const cargs = bayesian_group_ana_py_cargs(params, execution)
    const ret = bayesian_group_ana_py_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function bayesian_group_ana_py(
    data_table: InputPathType,
    y_variable: string,
    prefix: string | null = null,
    x_variables: Array<string> | null = null,
    no_center: boolean = false,
    iterations: number | null = null,
    chains: number | null = null,
    control_list: string | null = null,
    plot: boolean = false,
    more_plots: Array<string> | null = null,
    rdata: boolean = false,
    seed: number | null = null,
    overwrite: boolean = false,
    help: boolean = false,
    runner: Runner | null = null,
): BayesianGroupAnaPyOutputs {
    /**
     * This program conducts Bayesian Group Analysis (BGA) on a list of regions of interest (ROIs). Compared to the conventional univariate GLM, BGA pools and shares the information across the ROIs in a multilevel system.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param data_table Input text file containing the data table.
     * @param y_variable Column name for the y variable.
     * @param prefix Name of the output file.
     * @param x_variables Column name(s) for the x variables. If not specified, only the intercept will be added.
     * @param no_center Disable centering on the x variables. Maybe useful if you centered manually.
     * @param iterations Number of total iterations per chain including warmup. Default [1000]
     * @param chains Number of Markov chains. Default [4]
     * @param control_list Comma separated list of control parameters to pass to the brm function. Default is the brm function defaults.
     * @param plot Output box, fit, and posterior prediction plots.
     * @param more_plots Output 'stanplots' given different types of plot names.
     * @param rdata Save the R session workspace and data.
     * @param seed Seed to generate random number. Default [1234]
     * @param overwrite Overwrites the output files.
     * @param help Show help message and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `BayesianGroupAnaPyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(BAYESIAN_GROUP_ANA_PY_METADATA);
    const params = bayesian_group_ana_py_params(data_table, y_variable, prefix, x_variables, no_center, iterations, chains, control_list, plot, more_plots, rdata, seed, overwrite, help)
    return bayesian_group_ana_py_execute(params, execution);
}


export {
      BAYESIAN_GROUP_ANA_PY_METADATA,
      BayesianGroupAnaPyOutputs,
      BayesianGroupAnaPyParameters,
      bayesian_group_ana_py,
      bayesian_group_ana_py_params,
};
