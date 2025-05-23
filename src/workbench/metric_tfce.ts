// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const METRIC_TFCE_METADATA: Metadata = {
    id: "4b86809eb4d1a8a2706ce2a6a30283a52e23dd9a.boutiques",
    name: "metric-tfce",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface MetricTfcePresmoothParameters {
    "__STYXTYPE__": "presmooth";
    "kernel": number;
    "opt_fwhm": boolean;
}


interface MetricTfceParametersParameters {
    "__STYXTYPE__": "parameters";
    "e": number;
    "h": number;
}


interface MetricTfceParameters {
    "__STYXTYPE__": "metric-tfce";
    "surface": InputPathType;
    "metric_in": InputPathType;
    "metric_out": string;
    "presmooth"?: MetricTfcePresmoothParameters | null | undefined;
    "opt_roi_roi_metric"?: InputPathType | null | undefined;
    "parameters"?: MetricTfceParametersParameters | null | undefined;
    "opt_column_column"?: string | null | undefined;
    "opt_corrected_areas_area_metric"?: InputPathType | null | undefined;
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
        "metric-tfce": metric_tfce_cargs,
        "presmooth": metric_tfce_presmooth_cargs,
        "parameters": metric_tfce_parameters_cargs,
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
        "metric-tfce": metric_tfce_outputs,
    };
    return outputsFuncs[t];
}


function metric_tfce_presmooth_params(
    kernel: number,
    opt_fwhm: boolean = false,
): MetricTfcePresmoothParameters {
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


function metric_tfce_presmooth_cargs(
    params: MetricTfcePresmoothParameters,
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


function metric_tfce_parameters_params(
    e: number,
    h: number,
): MetricTfceParametersParameters {
    /**
     * Build parameters.
    
     * @param e exponent for cluster area (default 1.0)
     * @param h exponent for threshold value (default 2.0)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "parameters" as const,
        "e": e,
        "h": h,
    };
    return params;
}


function metric_tfce_parameters_cargs(
    params: MetricTfceParametersParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-parameters");
    cargs.push(String((params["e"] ?? null)));
    cargs.push(String((params["h"] ?? null)));
    return cargs;
}


/**
 * Output object returned when calling `metric_tfce(...)`.
 *
 * @interface
 */
interface MetricTfceOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output metric
     */
    metric_out: OutputPathType;
}


function metric_tfce_params(
    surface: InputPathType,
    metric_in: InputPathType,
    metric_out: string,
    presmooth: MetricTfcePresmoothParameters | null = null,
    opt_roi_roi_metric: InputPathType | null = null,
    parameters: MetricTfceParametersParameters | null = null,
    opt_column_column: string | null = null,
    opt_corrected_areas_area_metric: InputPathType | null = null,
): MetricTfceParameters {
    /**
     * Build parameters.
    
     * @param surface the surface to compute on
     * @param metric_in the metric to run TFCE on
     * @param metric_out the output metric
     * @param presmooth smooth the metric before running TFCE
     * @param opt_roi_roi_metric select a region of interest to run TFCE on: the area to run TFCE on, as a metric
     * @param parameters set parameters for TFCE integral
     * @param opt_column_column select a single column: the column number or name
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "metric-tfce" as const,
        "surface": surface,
        "metric_in": metric_in,
        "metric_out": metric_out,
    };
    if (presmooth !== null) {
        params["presmooth"] = presmooth;
    }
    if (opt_roi_roi_metric !== null) {
        params["opt_roi_roi_metric"] = opt_roi_roi_metric;
    }
    if (parameters !== null) {
        params["parameters"] = parameters;
    }
    if (opt_column_column !== null) {
        params["opt_column_column"] = opt_column_column;
    }
    if (opt_corrected_areas_area_metric !== null) {
        params["opt_corrected_areas_area_metric"] = opt_corrected_areas_area_metric;
    }
    return params;
}


function metric_tfce_cargs(
    params: MetricTfceParameters,
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
    cargs.push("-metric-tfce");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push(execution.inputFile((params["metric_in"] ?? null)));
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
    if ((params["parameters"] ?? null) !== null) {
        cargs.push(...dynCargs((params["parameters"] ?? null).__STYXTYPE__)((params["parameters"] ?? null), execution));
    }
    if ((params["opt_column_column"] ?? null) !== null) {
        cargs.push(
            "-column",
            (params["opt_column_column"] ?? null)
        );
    }
    if ((params["opt_corrected_areas_area_metric"] ?? null) !== null) {
        cargs.push(
            "-corrected-areas",
            execution.inputFile((params["opt_corrected_areas_area_metric"] ?? null))
        );
    }
    return cargs;
}


function metric_tfce_outputs(
    params: MetricTfceParameters,
    execution: Execution,
): MetricTfceOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MetricTfceOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
    };
    return ret;
}


function metric_tfce_execute(
    params: MetricTfceParameters,
    execution: Execution,
): MetricTfceOutputs {
    /**
     * Do tfce on a metric file.
     * 
     * This command does not do any statistical analysis.  Please use something like PALM if you are just trying to do statistics on your data.
     * 
     * Threshold-free cluster enhancement is a method to increase the relative value of regions that would form clusters in a standard thresholding test.  This is accomplished by evaluating the integral of:
     * 
     * e(h, p)^E * h^H * dh
     * 
     * at each vertex p, where h ranges from 0 to the maximum value in the data, and e(h, p) is the extent of the cluster containing vertex p at threshold h.  Negative values are similarly enhanced by negating the data, running the same process, and negating the result.
     * 
     * When using -presmooth with -corrected-areas, note that it is an approximate correction within the smoothing algorithm (the TFCE correction is exact).  Doing smoothing on individual surfaces before averaging/TFCE is preferred, when possible, in order to better tie the smoothing kernel size to the original feature size.
     * 
     * The TFCE method is explained in: Smith SM, Nichols TE., "Threshold-free cluster enhancement: addressing problems of smoothing, threshold dependence and localisation in cluster inference." Neuroimage. 2009 Jan 1;44(1):83-98. PMID: 18501637.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MetricTfceOutputs`).
     */
    params = execution.params(params)
    const cargs = metric_tfce_cargs(params, execution)
    const ret = metric_tfce_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function metric_tfce(
    surface: InputPathType,
    metric_in: InputPathType,
    metric_out: string,
    presmooth: MetricTfcePresmoothParameters | null = null,
    opt_roi_roi_metric: InputPathType | null = null,
    parameters: MetricTfceParametersParameters | null = null,
    opt_column_column: string | null = null,
    opt_corrected_areas_area_metric: InputPathType | null = null,
    runner: Runner | null = null,
): MetricTfceOutputs {
    /**
     * Do tfce on a metric file.
     * 
     * This command does not do any statistical analysis.  Please use something like PALM if you are just trying to do statistics on your data.
     * 
     * Threshold-free cluster enhancement is a method to increase the relative value of regions that would form clusters in a standard thresholding test.  This is accomplished by evaluating the integral of:
     * 
     * e(h, p)^E * h^H * dh
     * 
     * at each vertex p, where h ranges from 0 to the maximum value in the data, and e(h, p) is the extent of the cluster containing vertex p at threshold h.  Negative values are similarly enhanced by negating the data, running the same process, and negating the result.
     * 
     * When using -presmooth with -corrected-areas, note that it is an approximate correction within the smoothing algorithm (the TFCE correction is exact).  Doing smoothing on individual surfaces before averaging/TFCE is preferred, when possible, in order to better tie the smoothing kernel size to the original feature size.
     * 
     * The TFCE method is explained in: Smith SM, Nichols TE., "Threshold-free cluster enhancement: addressing problems of smoothing, threshold dependence and localisation in cluster inference." Neuroimage. 2009 Jan 1;44(1):83-98. PMID: 18501637.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param surface the surface to compute on
     * @param metric_in the metric to run TFCE on
     * @param metric_out the output metric
     * @param presmooth smooth the metric before running TFCE
     * @param opt_roi_roi_metric select a region of interest to run TFCE on: the area to run TFCE on, as a metric
     * @param parameters set parameters for TFCE integral
     * @param opt_column_column select a single column: the column number or name
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MetricTfceOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(METRIC_TFCE_METADATA);
    const params = metric_tfce_params(surface, metric_in, metric_out, presmooth, opt_roi_roi_metric, parameters, opt_column_column, opt_corrected_areas_area_metric)
    return metric_tfce_execute(params, execution);
}


export {
      METRIC_TFCE_METADATA,
      MetricTfceOutputs,
      MetricTfceParameters,
      MetricTfceParametersParameters,
      MetricTfcePresmoothParameters,
      metric_tfce,
      metric_tfce_parameters_params,
      metric_tfce_params,
      metric_tfce_presmooth_params,
};
