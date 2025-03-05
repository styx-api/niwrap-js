// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const METRIC_REGRESSION_METADATA: Metadata = {
    id: "ed3451cc9b4382fc2c1eefb297b008ce34410f5e.boutiques",
    name: "metric-regression",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface MetricRegressionRemoveParameters {
    "__STYXTYPE__": "remove";
    "metric": InputPathType;
    "opt_remove_column_column"?: string | null | undefined;
}


interface MetricRegressionKeepParameters {
    "__STYXTYPE__": "keep";
    "metric": InputPathType;
    "opt_keep_column_column"?: string | null | undefined;
}


interface MetricRegressionParameters {
    "__STYXTYPE__": "metric-regression";
    "metric_in": InputPathType;
    "metric_out": string;
    "opt_roi_roi_metric"?: InputPathType | null | undefined;
    "opt_column_column"?: string | null | undefined;
    "remove"?: Array<MetricRegressionRemoveParameters> | null | undefined;
    "keep"?: Array<MetricRegressionKeepParameters> | null | undefined;
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
        "metric-regression": metric_regression_cargs,
        "remove": metric_regression_remove_cargs,
        "keep": metric_regression_keep_cargs,
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
        "metric-regression": metric_regression_outputs,
    };
    return outputsFuncs[t];
}


function metric_regression_remove_params(
    metric: InputPathType,
    opt_remove_column_column: string | null = null,
): MetricRegressionRemoveParameters {
    /**
     * Build parameters.
    
     * @param metric the metric file to use
     * @param opt_remove_column_column select a column to use, rather than all: the column number or name
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "remove" as const,
        "metric": metric,
    };
    if (opt_remove_column_column !== null) {
        params["opt_remove_column_column"] = opt_remove_column_column;
    }
    return params;
}


function metric_regression_remove_cargs(
    params: MetricRegressionRemoveParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-remove");
    cargs.push(execution.inputFile((params["metric"] ?? null)));
    if ((params["opt_remove_column_column"] ?? null) !== null) {
        cargs.push(
            "-remove-column",
            (params["opt_remove_column_column"] ?? null)
        );
    }
    return cargs;
}


function metric_regression_keep_params(
    metric: InputPathType,
    opt_keep_column_column: string | null = null,
): MetricRegressionKeepParameters {
    /**
     * Build parameters.
    
     * @param metric the metric file to use
     * @param opt_keep_column_column select a column to use, rather than all: the column number or name
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "keep" as const,
        "metric": metric,
    };
    if (opt_keep_column_column !== null) {
        params["opt_keep_column_column"] = opt_keep_column_column;
    }
    return params;
}


function metric_regression_keep_cargs(
    params: MetricRegressionKeepParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-keep");
    cargs.push(execution.inputFile((params["metric"] ?? null)));
    if ((params["opt_keep_column_column"] ?? null) !== null) {
        cargs.push(
            "-keep-column",
            (params["opt_keep_column_column"] ?? null)
        );
    }
    return cargs;
}


/**
 * Output object returned when calling `metric_regression(...)`.
 *
 * @interface
 */
interface MetricRegressionOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output metric
     */
    metric_out: OutputPathType;
}


function metric_regression_params(
    metric_in: InputPathType,
    metric_out: string,
    opt_roi_roi_metric: InputPathType | null = null,
    opt_column_column: string | null = null,
    remove: Array<MetricRegressionRemoveParameters> | null = null,
    keep: Array<MetricRegressionKeepParameters> | null = null,
): MetricRegressionParameters {
    /**
     * Build parameters.
    
     * @param metric_in the metric to regress from
     * @param metric_out the output metric
     * @param opt_roi_roi_metric only regress inside an roi: the area to use for regression, as a metric
     * @param opt_column_column select a single column to regress from: the column number or name
     * @param remove specify a metric to regress out
     * @param keep specify a metric to include in regression, but not remove
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "metric-regression" as const,
        "metric_in": metric_in,
        "metric_out": metric_out,
    };
    if (opt_roi_roi_metric !== null) {
        params["opt_roi_roi_metric"] = opt_roi_roi_metric;
    }
    if (opt_column_column !== null) {
        params["opt_column_column"] = opt_column_column;
    }
    if (remove !== null) {
        params["remove"] = remove;
    }
    if (keep !== null) {
        params["keep"] = keep;
    }
    return params;
}


function metric_regression_cargs(
    params: MetricRegressionParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-metric-regression");
    cargs.push(execution.inputFile((params["metric_in"] ?? null)));
    cargs.push((params["metric_out"] ?? null));
    if ((params["opt_roi_roi_metric"] ?? null) !== null) {
        cargs.push(
            "-roi",
            execution.inputFile((params["opt_roi_roi_metric"] ?? null))
        );
    }
    if ((params["opt_column_column"] ?? null) !== null) {
        cargs.push(
            "-column",
            (params["opt_column_column"] ?? null)
        );
    }
    if ((params["remove"] ?? null) !== null) {
        cargs.push(...(params["remove"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["keep"] ?? null) !== null) {
        cargs.push(...(params["keep"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function metric_regression_outputs(
    params: MetricRegressionParameters,
    execution: Execution,
): MetricRegressionOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MetricRegressionOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
    };
    return ret;
}


function metric_regression_execute(
    params: MetricRegressionParameters,
    execution: Execution,
): MetricRegressionOutputs {
    /**
     * Regress spatial map out of a metric file.
     * 
     * For each regressor, its mean across the surface is subtracted from its data.  Each input map is then regressed against these, and a constant term.  The resulting regressed slopes of all regressors specified with -remove are multiplied with their respective regressor maps, and these are subtracted from the input map.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MetricRegressionOutputs`).
     */
    params = execution.params(params)
    const cargs = metric_regression_cargs(params, execution)
    const ret = metric_regression_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function metric_regression(
    metric_in: InputPathType,
    metric_out: string,
    opt_roi_roi_metric: InputPathType | null = null,
    opt_column_column: string | null = null,
    remove: Array<MetricRegressionRemoveParameters> | null = null,
    keep: Array<MetricRegressionKeepParameters> | null = null,
    runner: Runner | null = null,
): MetricRegressionOutputs {
    /**
     * Regress spatial map out of a metric file.
     * 
     * For each regressor, its mean across the surface is subtracted from its data.  Each input map is then regressed against these, and a constant term.  The resulting regressed slopes of all regressors specified with -remove are multiplied with their respective regressor maps, and these are subtracted from the input map.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param metric_in the metric to regress from
     * @param metric_out the output metric
     * @param opt_roi_roi_metric only regress inside an roi: the area to use for regression, as a metric
     * @param opt_column_column select a single column to regress from: the column number or name
     * @param remove specify a metric to regress out
     * @param keep specify a metric to include in regression, but not remove
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MetricRegressionOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(METRIC_REGRESSION_METADATA);
    const params = metric_regression_params(metric_in, metric_out, opt_roi_roi_metric, opt_column_column, remove, keep)
    return metric_regression_execute(params, execution);
}


export {
      METRIC_REGRESSION_METADATA,
      MetricRegressionKeepParameters,
      MetricRegressionOutputs,
      MetricRegressionParameters,
      MetricRegressionRemoveParameters,
      metric_regression,
      metric_regression_keep_params,
      metric_regression_params,
      metric_regression_remove_params,
};
