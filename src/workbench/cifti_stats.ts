// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_STATS_METADATA: Metadata = {
    id: "59510ec6fa9ccb15b91394912ea55ac86e9579d7.boutiques",
    name: "cifti-stats",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiStatsRoiParameters {
    "__STYXTYPE__": "roi";
    "roi_cifti": InputPathType;
    "opt_match_maps": boolean;
}


interface CiftiStatsParameters {
    "__STYXTYPE__": "cifti-stats";
    "cifti_in": InputPathType;
    "opt_reduce_operation"?: string | null | undefined;
    "opt_percentile_percent"?: number | null | undefined;
    "opt_column_column"?: number | null | undefined;
    "roi"?: CiftiStatsRoiParameters | null | undefined;
    "opt_show_map_name": boolean;
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
        "cifti-stats": cifti_stats_cargs,
        "roi": cifti_stats_roi_cargs,
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
    };
    return outputsFuncs[t];
}


function cifti_stats_roi_params(
    roi_cifti: InputPathType,
    opt_match_maps: boolean = false,
): CiftiStatsRoiParameters {
    /**
     * Build parameters.
    
     * @param roi_cifti the roi, as a cifti file
     * @param opt_match_maps each column of input uses the corresponding column from the roi file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "roi" as const,
        "roi_cifti": roi_cifti,
        "opt_match_maps": opt_match_maps,
    };
    return params;
}


function cifti_stats_roi_cargs(
    params: CiftiStatsRoiParameters,
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
    cargs.push(execution.inputFile((params["roi_cifti"] ?? null)));
    if ((params["opt_match_maps"] ?? null)) {
        cargs.push("-match-maps");
    }
    return cargs;
}


/**
 * Output object returned when calling `cifti_stats(...)`.
 *
 * @interface
 */
interface CiftiStatsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function cifti_stats_params(
    cifti_in: InputPathType,
    opt_reduce_operation: string | null = null,
    opt_percentile_percent: number | null = null,
    opt_column_column: number | null = null,
    roi: CiftiStatsRoiParameters | null = null,
    opt_show_map_name: boolean = false,
): CiftiStatsParameters {
    /**
     * Build parameters.
    
     * @param cifti_in the input cifti
     * @param opt_reduce_operation use a reduction operation: the reduction operation
     * @param opt_percentile_percent give the value at a percentile: the percentile to find, must be between 0 and 100
     * @param opt_column_column only display output for one column: the column index (starting from 1)
     * @param roi only consider data inside an roi
     * @param opt_show_map_name print column index and name before each output
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-stats" as const,
        "cifti_in": cifti_in,
        "opt_show_map_name": opt_show_map_name,
    };
    if (opt_reduce_operation !== null) {
        params["opt_reduce_operation"] = opt_reduce_operation;
    }
    if (opt_percentile_percent !== null) {
        params["opt_percentile_percent"] = opt_percentile_percent;
    }
    if (opt_column_column !== null) {
        params["opt_column_column"] = opt_column_column;
    }
    if (roi !== null) {
        params["roi"] = roi;
    }
    return params;
}


function cifti_stats_cargs(
    params: CiftiStatsParameters,
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
    cargs.push("-cifti-stats");
    cargs.push(execution.inputFile((params["cifti_in"] ?? null)));
    if ((params["opt_reduce_operation"] ?? null) !== null) {
        cargs.push(
            "-reduce",
            (params["opt_reduce_operation"] ?? null)
        );
    }
    if ((params["opt_percentile_percent"] ?? null) !== null) {
        cargs.push(
            "-percentile",
            String((params["opt_percentile_percent"] ?? null))
        );
    }
    if ((params["opt_column_column"] ?? null) !== null) {
        cargs.push(
            "-column",
            String((params["opt_column_column"] ?? null))
        );
    }
    if ((params["roi"] ?? null) !== null) {
        cargs.push(...dynCargs((params["roi"] ?? null).__STYXTYPE__)((params["roi"] ?? null), execution));
    }
    if ((params["opt_show_map_name"] ?? null)) {
        cargs.push("-show-map-name");
    }
    return cargs;
}


function cifti_stats_outputs(
    params: CiftiStatsParameters,
    execution: Execution,
): CiftiStatsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiStatsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function cifti_stats_execute(
    params: CiftiStatsParameters,
    execution: Execution,
): CiftiStatsOutputs {
    /**
     * Statistics along cifti columns.
     * 
     * For each column of the input, a line of text is printed, resulting from the specified reduction or percentile operation.  If -roi is specified without -match-maps, then each line will contain as many numbers as there are maps in the ROI file, separated by tab characters.  Use -column to only give output for a single data column.  Exactly one of -reduce or -percentile must be specified.
     * 
     * The argument to the -reduce option must be one of the following:
     * 
     * MAX: the maximum value
     * MIN: the minimum value
     * INDEXMAX: the 1-based index of the maximum value
     * INDEXMIN: the 1-based index of the minimum value
     * SUM: add all values
     * PRODUCT: multiply all values
     * MEAN: the mean of the data
     * STDEV: the standard deviation (N denominator)
     * SAMPSTDEV: the sample standard deviation (N-1 denominator)
     * VARIANCE: the variance of the data
     * TSNR: mean divided by sample standard deviation (N-1 denominator)
     * COV: sample standard deviation (N-1 denominator) divided by mean
     * L2NORM: square root of sum of squares
     * MEDIAN: the median of the data
     * MODE: the mode of the data
     * COUNT_NONZERO: the number of nonzero elements in the data
     * .
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiStatsOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_stats_cargs(params, execution)
    const ret = cifti_stats_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_stats(
    cifti_in: InputPathType,
    opt_reduce_operation: string | null = null,
    opt_percentile_percent: number | null = null,
    opt_column_column: number | null = null,
    roi: CiftiStatsRoiParameters | null = null,
    opt_show_map_name: boolean = false,
    runner: Runner | null = null,
): CiftiStatsOutputs {
    /**
     * Statistics along cifti columns.
     * 
     * For each column of the input, a line of text is printed, resulting from the specified reduction or percentile operation.  If -roi is specified without -match-maps, then each line will contain as many numbers as there are maps in the ROI file, separated by tab characters.  Use -column to only give output for a single data column.  Exactly one of -reduce or -percentile must be specified.
     * 
     * The argument to the -reduce option must be one of the following:
     * 
     * MAX: the maximum value
     * MIN: the minimum value
     * INDEXMAX: the 1-based index of the maximum value
     * INDEXMIN: the 1-based index of the minimum value
     * SUM: add all values
     * PRODUCT: multiply all values
     * MEAN: the mean of the data
     * STDEV: the standard deviation (N denominator)
     * SAMPSTDEV: the sample standard deviation (N-1 denominator)
     * VARIANCE: the variance of the data
     * TSNR: mean divided by sample standard deviation (N-1 denominator)
     * COV: sample standard deviation (N-1 denominator) divided by mean
     * L2NORM: square root of sum of squares
     * MEDIAN: the median of the data
     * MODE: the mode of the data
     * COUNT_NONZERO: the number of nonzero elements in the data
     * .
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param cifti_in the input cifti
     * @param opt_reduce_operation use a reduction operation: the reduction operation
     * @param opt_percentile_percent give the value at a percentile: the percentile to find, must be between 0 and 100
     * @param opt_column_column only display output for one column: the column index (starting from 1)
     * @param roi only consider data inside an roi
     * @param opt_show_map_name print column index and name before each output
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiStatsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_STATS_METADATA);
    const params = cifti_stats_params(cifti_in, opt_reduce_operation, opt_percentile_percent, opt_column_column, roi, opt_show_map_name)
    return cifti_stats_execute(params, execution);
}


export {
      CIFTI_STATS_METADATA,
      CiftiStatsOutputs,
      CiftiStatsParameters,
      CiftiStatsRoiParameters,
      cifti_stats,
      cifti_stats_params,
      cifti_stats_roi_params,
};
