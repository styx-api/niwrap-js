// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const METRIC_MERGE_METADATA: Metadata = {
    id: "25db567ed08ac7ab90f2cdc9e83034d38278f198.boutiques",
    name: "metric-merge",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface MetricMergeUpToParameters {
    "__STYXTYPE__": "up_to";
    "last_column": string;
    "opt_reverse": boolean;
}


interface MetricMergeColumnParameters {
    "__STYXTYPE__": "column";
    "column": string;
    "up_to"?: MetricMergeUpToParameters | null | undefined;
}


interface MetricMergeMetricParameters {
    "__STYXTYPE__": "metric";
    "metric_in": InputPathType;
    "column"?: Array<MetricMergeColumnParameters> | null | undefined;
}


interface MetricMergeParameters {
    "__STYXTYPE__": "metric-merge";
    "metric_out": string;
    "metric"?: Array<MetricMergeMetricParameters> | null | undefined;
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
        "metric-merge": metric_merge_cargs,
        "metric": metric_merge_metric_cargs,
        "column": metric_merge_column_cargs,
        "up_to": metric_merge_up_to_cargs,
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
        "metric-merge": metric_merge_outputs,
    };
    return outputsFuncs[t];
}


function metric_merge_up_to_params(
    last_column: string,
    opt_reverse: boolean = false,
): MetricMergeUpToParameters {
    /**
     * Build parameters.
    
     * @param last_column the number or name of the last column to include
     * @param opt_reverse use the range in reverse order
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "up_to" as const,
        "last_column": last_column,
        "opt_reverse": opt_reverse,
    };
    return params;
}


function metric_merge_up_to_cargs(
    params: MetricMergeUpToParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-up-to");
    cargs.push((params["last_column"] ?? null));
    if ((params["opt_reverse"] ?? null)) {
        cargs.push("-reverse");
    }
    return cargs;
}


function metric_merge_column_params(
    column: string,
    up_to: MetricMergeUpToParameters | null = null,
): MetricMergeColumnParameters {
    /**
     * Build parameters.
    
     * @param column the column number or name
     * @param up_to use an inclusive range of columns
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "column" as const,
        "column": column,
    };
    if (up_to !== null) {
        params["up_to"] = up_to;
    }
    return params;
}


function metric_merge_column_cargs(
    params: MetricMergeColumnParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-column");
    cargs.push((params["column"] ?? null));
    if ((params["up_to"] ?? null) !== null) {
        cargs.push(...dynCargs((params["up_to"] ?? null).__STYXTYPE__)((params["up_to"] ?? null), execution));
    }
    return cargs;
}


function metric_merge_metric_params(
    metric_in: InputPathType,
    column: Array<MetricMergeColumnParameters> | null = null,
): MetricMergeMetricParameters {
    /**
     * Build parameters.
    
     * @param metric_in a metric file to use columns from
     * @param column select a single column to use
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "metric" as const,
        "metric_in": metric_in,
    };
    if (column !== null) {
        params["column"] = column;
    }
    return params;
}


function metric_merge_metric_cargs(
    params: MetricMergeMetricParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-metric");
    cargs.push(execution.inputFile((params["metric_in"] ?? null)));
    if ((params["column"] ?? null) !== null) {
        cargs.push(...(params["column"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


/**
 * Output object returned when calling `metric_merge(...)`.
 *
 * @interface
 */
interface MetricMergeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output metric
     */
    metric_out: OutputPathType;
}


function metric_merge_params(
    metric_out: string,
    metric: Array<MetricMergeMetricParameters> | null = null,
): MetricMergeParameters {
    /**
     * Build parameters.
    
     * @param metric_out the output metric
     * @param metric specify an input metric
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "metric-merge" as const,
        "metric_out": metric_out,
    };
    if (metric !== null) {
        params["metric"] = metric;
    }
    return params;
}


function metric_merge_cargs(
    params: MetricMergeParameters,
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
    cargs.push("-metric-merge");
    cargs.push((params["metric_out"] ?? null));
    if ((params["metric"] ?? null) !== null) {
        cargs.push(...(params["metric"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function metric_merge_outputs(
    params: MetricMergeParameters,
    execution: Execution,
): MetricMergeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MetricMergeOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
    };
    return ret;
}


function metric_merge_execute(
    params: MetricMergeParameters,
    execution: Execution,
): MetricMergeOutputs {
    /**
     * Merge metric files into a new file.
     * 
     * Takes one or more metric files and constructs a new metric file by concatenating columns from them.  The input metric files must have the same number of vertices and same structure.
     * 
     * Example: wb_command -metric-merge out.func.gii -metric first.func.gii -column 1 -metric second.func.gii
     * 
     * This example would take the first column from first.func.gii, followed by all columns from second.func.gii, and write these columns to out.func.gii.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MetricMergeOutputs`).
     */
    params = execution.params(params)
    const cargs = metric_merge_cargs(params, execution)
    const ret = metric_merge_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function metric_merge(
    metric_out: string,
    metric: Array<MetricMergeMetricParameters> | null = null,
    runner: Runner | null = null,
): MetricMergeOutputs {
    /**
     * Merge metric files into a new file.
     * 
     * Takes one or more metric files and constructs a new metric file by concatenating columns from them.  The input metric files must have the same number of vertices and same structure.
     * 
     * Example: wb_command -metric-merge out.func.gii -metric first.func.gii -column 1 -metric second.func.gii
     * 
     * This example would take the first column from first.func.gii, followed by all columns from second.func.gii, and write these columns to out.func.gii.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param metric_out the output metric
     * @param metric specify an input metric
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MetricMergeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(METRIC_MERGE_METADATA);
    const params = metric_merge_params(metric_out, metric)
    return metric_merge_execute(params, execution);
}


export {
      METRIC_MERGE_METADATA,
      MetricMergeColumnParameters,
      MetricMergeMetricParameters,
      MetricMergeOutputs,
      MetricMergeParameters,
      MetricMergeUpToParameters,
      metric_merge,
      metric_merge_column_params,
      metric_merge_metric_params,
      metric_merge_params,
      metric_merge_up_to_params,
};
