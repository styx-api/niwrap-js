// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const METRIC_SMOOTHING_METADATA: Metadata = {
    id: "cf0a4d82cf3614e87a43e9e033bd71df5e871ba3.boutiques",
    name: "metric-smoothing",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface MetricSmoothingRoiParameters {
    "__STYXTYPE__": "roi";
    "roi_metric": InputPathType;
    "opt_match_columns": boolean;
}


interface MetricSmoothingParameters {
    "__STYXTYPE__": "metric-smoothing";
    "surface": InputPathType;
    "metric_in": InputPathType;
    "smoothing_kernel": number;
    "metric_out": string;
    "opt_fwhm": boolean;
    "roi"?: MetricSmoothingRoiParameters | null | undefined;
    "opt_fix_zeros": boolean;
    "opt_column_column"?: string | null | undefined;
    "opt_corrected_areas_area_metric"?: InputPathType | null | undefined;
    "opt_method_method"?: string | null | undefined;
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
        "metric-smoothing": metric_smoothing_cargs,
        "roi": metric_smoothing_roi_cargs,
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
        "metric-smoothing": metric_smoothing_outputs,
    };
    return outputsFuncs[t];
}


function metric_smoothing_roi_params(
    roi_metric: InputPathType,
    opt_match_columns: boolean = false,
): MetricSmoothingRoiParameters {
    /**
     * Build parameters.
    
     * @param roi_metric the roi to smooth within, as a metric
     * @param opt_match_columns for each input column, use the corresponding column from the roi
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "roi" as const,
        "roi_metric": roi_metric,
        "opt_match_columns": opt_match_columns,
    };
    return params;
}


function metric_smoothing_roi_cargs(
    params: MetricSmoothingRoiParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-roi");
    cargs.push(execution.inputFile((params["roi_metric"] ?? null)));
    if ((params["opt_match_columns"] ?? null)) {
        cargs.push("-match-columns");
    }
    return cargs;
}


/**
 * Output object returned when calling `metric_smoothing(...)`.
 *
 * @interface
 */
interface MetricSmoothingOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output metric
     */
    metric_out: OutputPathType;
}


function metric_smoothing_params(
    surface: InputPathType,
    metric_in: InputPathType,
    smoothing_kernel: number,
    metric_out: string,
    opt_fwhm: boolean = false,
    roi: MetricSmoothingRoiParameters | null = null,
    opt_fix_zeros: boolean = false,
    opt_column_column: string | null = null,
    opt_corrected_areas_area_metric: InputPathType | null = null,
    opt_method_method: string | null = null,
): MetricSmoothingParameters {
    /**
     * Build parameters.
    
     * @param surface the surface to smooth on
     * @param metric_in the metric to smooth
     * @param smoothing_kernel the size of the gaussian smoothing kernel in mm, as sigma by default
     * @param metric_out the output metric
     * @param opt_fwhm kernel size is FWHM, not sigma
     * @param roi select a region of interest to smooth
     * @param opt_fix_zeros treat zero values as not being data
     * @param opt_column_column select a single column to smooth: the column number or name
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
     * @param opt_method_method select smoothing method, default GEO_GAUSS_AREA: the name of the smoothing method
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "metric-smoothing" as const,
        "surface": surface,
        "metric_in": metric_in,
        "smoothing_kernel": smoothing_kernel,
        "metric_out": metric_out,
        "opt_fwhm": opt_fwhm,
        "opt_fix_zeros": opt_fix_zeros,
    };
    if (roi !== null) {
        params["roi"] = roi;
    }
    if (opt_column_column !== null) {
        params["opt_column_column"] = opt_column_column;
    }
    if (opt_corrected_areas_area_metric !== null) {
        params["opt_corrected_areas_area_metric"] = opt_corrected_areas_area_metric;
    }
    if (opt_method_method !== null) {
        params["opt_method_method"] = opt_method_method;
    }
    return params;
}


function metric_smoothing_cargs(
    params: MetricSmoothingParameters,
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
    cargs.push("-metric-smoothing");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push(execution.inputFile((params["metric_in"] ?? null)));
    cargs.push(String((params["smoothing_kernel"] ?? null)));
    cargs.push((params["metric_out"] ?? null));
    if ((params["opt_fwhm"] ?? null)) {
        cargs.push("-fwhm");
    }
    if ((params["roi"] ?? null) !== null) {
        cargs.push(...dynCargs((params["roi"] ?? null).__STYXTYPE__)((params["roi"] ?? null), execution));
    }
    if ((params["opt_fix_zeros"] ?? null)) {
        cargs.push("-fix-zeros");
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
    if ((params["opt_method_method"] ?? null) !== null) {
        cargs.push(
            "-method",
            (params["opt_method_method"] ?? null)
        );
    }
    return cargs;
}


function metric_smoothing_outputs(
    params: MetricSmoothingParameters,
    execution: Execution,
): MetricSmoothingOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MetricSmoothingOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
    };
    return ret;
}


function metric_smoothing_execute(
    params: MetricSmoothingParameters,
    execution: Execution,
): MetricSmoothingOutputs {
    /**
     * Smooth a metric file.
     * 
     * Smooth a metric file on a surface.  By default, smooths all input columns on the entire surface, specify -column to use only one input column, and -roi to smooth only where the roi metric is greater than 0, outputting zeros elsewhere.
     * 
     * When using -roi, input data outside the ROI is not used to compute the smoothed values.  By default, the first column of the roi metric is used for all input columns.  When -match-columns is specified to the -roi option, the input and roi metrics must have the same number of columns, and for each input column's index, the same column index is used in the roi metric.  If the -match-columns option to -roi is used while the -column option is also used, the number of columns must match between the roi and input metric, and it will use the roi column with the index of the selected input column.
     * 
     * The -fix-zeros option causes the smoothing to not use an input value if it is zero, but still write a smoothed value to the vertex.  This is useful for zeros that indicate lack of information, preventing them from pulling down the intensity of nearby vertices, while giving the zero an extrapolated value.
     * 
     * The -corrected-areas option is intended for when it is unavoidable to smooth on a group average surface, it is only an approximate correction for the reduction of structure in a group average surface.  It is better to smooth the data on individuals before averaging, when feasible.
     * 
     * Valid values for <method> are:
     * 
     * GEO_GAUSS_AREA - uses a geodesic gaussian kernel, and normalizes based on vertex area in order to work more reliably on irregular surfaces
     * 
     * GEO_GAUSS_EQUAL - uses a geodesic gaussian kernel, and normalizes assuming each vertex has equal importance
     * 
     * GEO_GAUSS - matches geodesic gaussian smoothing from caret5, but does not check kernels for having unequal importance
     * 
     * The GEO_GAUSS_AREA method is the default because it is usually the correct choice.  GEO_GAUSS_EQUAL may be the correct choice when the sum of vertex values is more meaningful then the surface integral (sum of values .* areas), for instance when smoothing vertex areas (the sum is the total surface area, while the surface integral is the sum of squares of the vertex areas).  The GEO_GAUSS method is not recommended, it exists mainly to replicate methods of studies done with caret5's geodesic smoothing.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MetricSmoothingOutputs`).
     */
    params = execution.params(params)
    const cargs = metric_smoothing_cargs(params, execution)
    const ret = metric_smoothing_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function metric_smoothing(
    surface: InputPathType,
    metric_in: InputPathType,
    smoothing_kernel: number,
    metric_out: string,
    opt_fwhm: boolean = false,
    roi: MetricSmoothingRoiParameters | null = null,
    opt_fix_zeros: boolean = false,
    opt_column_column: string | null = null,
    opt_corrected_areas_area_metric: InputPathType | null = null,
    opt_method_method: string | null = null,
    runner: Runner | null = null,
): MetricSmoothingOutputs {
    /**
     * Smooth a metric file.
     * 
     * Smooth a metric file on a surface.  By default, smooths all input columns on the entire surface, specify -column to use only one input column, and -roi to smooth only where the roi metric is greater than 0, outputting zeros elsewhere.
     * 
     * When using -roi, input data outside the ROI is not used to compute the smoothed values.  By default, the first column of the roi metric is used for all input columns.  When -match-columns is specified to the -roi option, the input and roi metrics must have the same number of columns, and for each input column's index, the same column index is used in the roi metric.  If the -match-columns option to -roi is used while the -column option is also used, the number of columns must match between the roi and input metric, and it will use the roi column with the index of the selected input column.
     * 
     * The -fix-zeros option causes the smoothing to not use an input value if it is zero, but still write a smoothed value to the vertex.  This is useful for zeros that indicate lack of information, preventing them from pulling down the intensity of nearby vertices, while giving the zero an extrapolated value.
     * 
     * The -corrected-areas option is intended for when it is unavoidable to smooth on a group average surface, it is only an approximate correction for the reduction of structure in a group average surface.  It is better to smooth the data on individuals before averaging, when feasible.
     * 
     * Valid values for <method> are:
     * 
     * GEO_GAUSS_AREA - uses a geodesic gaussian kernel, and normalizes based on vertex area in order to work more reliably on irregular surfaces
     * 
     * GEO_GAUSS_EQUAL - uses a geodesic gaussian kernel, and normalizes assuming each vertex has equal importance
     * 
     * GEO_GAUSS - matches geodesic gaussian smoothing from caret5, but does not check kernels for having unequal importance
     * 
     * The GEO_GAUSS_AREA method is the default because it is usually the correct choice.  GEO_GAUSS_EQUAL may be the correct choice when the sum of vertex values is more meaningful then the surface integral (sum of values .* areas), for instance when smoothing vertex areas (the sum is the total surface area, while the surface integral is the sum of squares of the vertex areas).  The GEO_GAUSS method is not recommended, it exists mainly to replicate methods of studies done with caret5's geodesic smoothing.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param surface the surface to smooth on
     * @param metric_in the metric to smooth
     * @param smoothing_kernel the size of the gaussian smoothing kernel in mm, as sigma by default
     * @param metric_out the output metric
     * @param opt_fwhm kernel size is FWHM, not sigma
     * @param roi select a region of interest to smooth
     * @param opt_fix_zeros treat zero values as not being data
     * @param opt_column_column select a single column to smooth: the column number or name
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
     * @param opt_method_method select smoothing method, default GEO_GAUSS_AREA: the name of the smoothing method
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MetricSmoothingOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(METRIC_SMOOTHING_METADATA);
    const params = metric_smoothing_params(surface, metric_in, smoothing_kernel, metric_out, opt_fwhm, roi, opt_fix_zeros, opt_column_column, opt_corrected_areas_area_metric, opt_method_method)
    return metric_smoothing_execute(params, execution);
}


export {
      METRIC_SMOOTHING_METADATA,
      MetricSmoothingOutputs,
      MetricSmoothingParameters,
      MetricSmoothingRoiParameters,
      metric_smoothing,
      metric_smoothing_params,
      metric_smoothing_roi_params,
};
