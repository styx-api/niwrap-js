// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const METRIC_EXTREMA_METADATA: Metadata = {
    id: "a2f46a01c07390207099bf087477bc693bc124ec.boutiques",
    name: "metric-extrema",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface MetricExtremaPresmoothParameters {
    "__STYXTYPE__": "presmooth";
    "kernel": number;
    "opt_fwhm": boolean;
}


interface MetricExtremaThresholdParameters {
    "__STYXTYPE__": "threshold";
    "low": number;
    "high": number;
}


interface MetricExtremaParameters {
    "__STYXTYPE__": "metric-extrema";
    "surface": InputPathType;
    "metric_in": InputPathType;
    "distance": number;
    "metric_out": string;
    "presmooth"?: MetricExtremaPresmoothParameters | null | undefined;
    "opt_roi_roi_metric"?: InputPathType | null | undefined;
    "threshold"?: MetricExtremaThresholdParameters | null | undefined;
    "opt_sum_columns": boolean;
    "opt_consolidate_mode": boolean;
    "opt_only_maxima": boolean;
    "opt_only_minima": boolean;
    "opt_column_column"?: string | null | undefined;
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
        "metric-extrema": metric_extrema_cargs,
        "presmooth": metric_extrema_presmooth_cargs,
        "threshold": metric_extrema_threshold_cargs,
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
        "metric-extrema": metric_extrema_outputs,
    };
    return outputsFuncs[t];
}


function metric_extrema_presmooth_params(
    kernel: number,
    opt_fwhm: boolean = false,
): MetricExtremaPresmoothParameters {
    /**
     * Build parameters.
    
     * @param kernel the size of the gaussian smoothing kernel in mm, as sigma by default
     * @param opt_fwhm kernel size is FWHM, not sigma
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "presmooth" as const,
        "kernel": kernel,
        "opt_fwhm": opt_fwhm,
    };
    return params;
}


function metric_extrema_presmooth_cargs(
    params: MetricExtremaPresmoothParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-presmooth");
    cargs.push(String((params["kernel"] ?? null)));
    if ((params["opt_fwhm"] ?? null)) {
        cargs.push("-fwhm");
    }
    return cargs;
}


function metric_extrema_threshold_params(
    low: number,
    high: number,
): MetricExtremaThresholdParameters {
    /**
     * Build parameters.
    
     * @param low the largest value to consider for being a minimum
     * @param high the smallest value to consider for being a maximum
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "threshold" as const,
        "low": low,
        "high": high,
    };
    return params;
}


function metric_extrema_threshold_cargs(
    params: MetricExtremaThresholdParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-threshold");
    cargs.push(String((params["low"] ?? null)));
    cargs.push(String((params["high"] ?? null)));
    return cargs;
}


/**
 * Output object returned when calling `metric_extrema(...)`.
 *
 * @interface
 */
interface MetricExtremaOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output extrema metric
     */
    metric_out: OutputPathType;
}


function metric_extrema_params(
    surface: InputPathType,
    metric_in: InputPathType,
    distance: number,
    metric_out: string,
    presmooth: MetricExtremaPresmoothParameters | null = null,
    opt_roi_roi_metric: InputPathType | null = null,
    threshold: MetricExtremaThresholdParameters | null = null,
    opt_sum_columns: boolean = false,
    opt_consolidate_mode: boolean = false,
    opt_only_maxima: boolean = false,
    opt_only_minima: boolean = false,
    opt_column_column: string | null = null,
): MetricExtremaParameters {
    /**
     * Build parameters.
    
     * @param surface the surface to use for distance information
     * @param metric_in the metric to find the extrema of
     * @param distance the minimum distance between identified extrema of the same type
     * @param metric_out the output extrema metric
     * @param presmooth smooth the metric before finding extrema
     * @param opt_roi_roi_metric ignore values outside the selected area: the area to find extrema in, as a metric
     * @param threshold ignore small extrema
     * @param opt_sum_columns output the sum of the extrema columns instead of each column separately
     * @param opt_consolidate_mode use consolidation of local minima instead of a large neighborhood
     * @param opt_only_maxima only find the maxima
     * @param opt_only_minima only find the minima
     * @param opt_column_column select a single column to find extrema in: the column number or name
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "metric-extrema" as const,
        "surface": surface,
        "metric_in": metric_in,
        "distance": distance,
        "metric_out": metric_out,
        "opt_sum_columns": opt_sum_columns,
        "opt_consolidate_mode": opt_consolidate_mode,
        "opt_only_maxima": opt_only_maxima,
        "opt_only_minima": opt_only_minima,
    };
    if (presmooth !== null) {
        params["presmooth"] = presmooth;
    }
    if (opt_roi_roi_metric !== null) {
        params["opt_roi_roi_metric"] = opt_roi_roi_metric;
    }
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (opt_column_column !== null) {
        params["opt_column_column"] = opt_column_column;
    }
    return params;
}


function metric_extrema_cargs(
    params: MetricExtremaParameters,
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
    cargs.push("-metric-extrema");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push(execution.inputFile((params["metric_in"] ?? null)));
    cargs.push(String((params["distance"] ?? null)));
    cargs.push((params["metric_out"] ?? null));
    if ((params["presmooth"] ?? null) !== null) {
        cargs.push(...dynCargs((params["presmooth"] ?? null).__STYXTYPE__)((params["presmooth"] ?? null), execution));
    }
    if ((params["opt_roi_roi_metric"] ?? null) !== null) {
        cargs.push(
            "-roi",
            execution.inputFile((params["opt_roi_roi_metric"] ?? null))
        );
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(...dynCargs((params["threshold"] ?? null).__STYXTYPE__)((params["threshold"] ?? null), execution));
    }
    if ((params["opt_sum_columns"] ?? null)) {
        cargs.push("-sum-columns");
    }
    if ((params["opt_consolidate_mode"] ?? null)) {
        cargs.push("-consolidate-mode");
    }
    if ((params["opt_only_maxima"] ?? null)) {
        cargs.push("-only-maxima");
    }
    if ((params["opt_only_minima"] ?? null)) {
        cargs.push("-only-minima");
    }
    if ((params["opt_column_column"] ?? null) !== null) {
        cargs.push(
            "-column",
            (params["opt_column_column"] ?? null)
        );
    }
    return cargs;
}


function metric_extrema_outputs(
    params: MetricExtremaParameters,
    execution: Execution,
): MetricExtremaOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MetricExtremaOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
    };
    return ret;
}


function metric_extrema_execute(
    params: MetricExtremaParameters,
    execution: Execution,
): MetricExtremaOutputs {
    /**
     * Find extrema in a metric file.
     * 
     * Finds extrema in a metric file, such that no two extrema of the same type are within <distance> of each other.  The extrema are labeled as -1 for minima, 1 for maxima, 0 otherwise.  If -only-maxima or -only-minima is specified, then it will ignore extrema not of the specified type.  These options are mutually exclusive.
     * 
     * If -roi is specified, not only is data outside the roi not used, but any vertex on the edge of the ROI will never be counted as an extrema, in case the ROI cuts across a gradient, which would otherwise generate extrema where there should be none.
     * 
     * If -sum-columns is specified, these extrema columns are summed, and the output has a single column with this result.
     * 
     * By default, a datapoint is an extrema only if it is more extreme than every other datapoint that is within <distance> from it.  If -consolidate-mode is used, it instead starts by finding all datapoints that are more extreme than their immediate neighbors, then while there are any extrema within <distance> of each other, take the two extrema closest to each other and merge them into one by a weighted average based on how many original extrema have been merged into each.
     * 
     * By default, all input columns are used with no smoothing, use -column to specify a single column to use, and -presmooth to smooth the input before finding the extrema.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MetricExtremaOutputs`).
     */
    params = execution.params(params)
    const cargs = metric_extrema_cargs(params, execution)
    const ret = metric_extrema_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function metric_extrema(
    surface: InputPathType,
    metric_in: InputPathType,
    distance: number,
    metric_out: string,
    presmooth: MetricExtremaPresmoothParameters | null = null,
    opt_roi_roi_metric: InputPathType | null = null,
    threshold: MetricExtremaThresholdParameters | null = null,
    opt_sum_columns: boolean = false,
    opt_consolidate_mode: boolean = false,
    opt_only_maxima: boolean = false,
    opt_only_minima: boolean = false,
    opt_column_column: string | null = null,
    runner: Runner | null = null,
): MetricExtremaOutputs {
    /**
     * Find extrema in a metric file.
     * 
     * Finds extrema in a metric file, such that no two extrema of the same type are within <distance> of each other.  The extrema are labeled as -1 for minima, 1 for maxima, 0 otherwise.  If -only-maxima or -only-minima is specified, then it will ignore extrema not of the specified type.  These options are mutually exclusive.
     * 
     * If -roi is specified, not only is data outside the roi not used, but any vertex on the edge of the ROI will never be counted as an extrema, in case the ROI cuts across a gradient, which would otherwise generate extrema where there should be none.
     * 
     * If -sum-columns is specified, these extrema columns are summed, and the output has a single column with this result.
     * 
     * By default, a datapoint is an extrema only if it is more extreme than every other datapoint that is within <distance> from it.  If -consolidate-mode is used, it instead starts by finding all datapoints that are more extreme than their immediate neighbors, then while there are any extrema within <distance> of each other, take the two extrema closest to each other and merge them into one by a weighted average based on how many original extrema have been merged into each.
     * 
     * By default, all input columns are used with no smoothing, use -column to specify a single column to use, and -presmooth to smooth the input before finding the extrema.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param surface the surface to use for distance information
     * @param metric_in the metric to find the extrema of
     * @param distance the minimum distance between identified extrema of the same type
     * @param metric_out the output extrema metric
     * @param presmooth smooth the metric before finding extrema
     * @param opt_roi_roi_metric ignore values outside the selected area: the area to find extrema in, as a metric
     * @param threshold ignore small extrema
     * @param opt_sum_columns output the sum of the extrema columns instead of each column separately
     * @param opt_consolidate_mode use consolidation of local minima instead of a large neighborhood
     * @param opt_only_maxima only find the maxima
     * @param opt_only_minima only find the minima
     * @param opt_column_column select a single column to find extrema in: the column number or name
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MetricExtremaOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(METRIC_EXTREMA_METADATA);
    const params = metric_extrema_params(surface, metric_in, distance, metric_out, presmooth, opt_roi_roi_metric, threshold, opt_sum_columns, opt_consolidate_mode, opt_only_maxima, opt_only_minima, opt_column_column)
    return metric_extrema_execute(params, execution);
}


export {
      METRIC_EXTREMA_METADATA,
      MetricExtremaOutputs,
      MetricExtremaParameters,
      MetricExtremaPresmoothParameters,
      MetricExtremaThresholdParameters,
      metric_extrema,
      metric_extrema_params,
      metric_extrema_presmooth_params,
      metric_extrema_threshold_params,
};
