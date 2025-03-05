// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_REDUCE_METADATA: Metadata = {
    id: "00b070cbd951ede68c79c38901e32520aed29ba6.boutiques",
    name: "volume-reduce",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeReduceExcludeOutliersParameters {
    "__STYXTYPE__": "exclude_outliers";
    "sigma_below": number;
    "sigma_above": number;
}


interface VolumeReduceParameters {
    "__STYXTYPE__": "volume-reduce";
    "volume_in": InputPathType;
    "operation": string;
    "volume_out": string;
    "exclude_outliers"?: VolumeReduceExcludeOutliersParameters | null | undefined;
    "opt_only_numeric": boolean;
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
        "volume-reduce": volume_reduce_cargs,
        "exclude_outliers": volume_reduce_exclude_outliers_cargs,
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
        "volume-reduce": volume_reduce_outputs,
    };
    return outputsFuncs[t];
}


function volume_reduce_exclude_outliers_params(
    sigma_below: number,
    sigma_above: number,
): VolumeReduceExcludeOutliersParameters {
    /**
     * Build parameters.
    
     * @param sigma_below number of standard deviations below the mean to include
     * @param sigma_above number of standard deviations above the mean to include
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "exclude_outliers" as const,
        "sigma_below": sigma_below,
        "sigma_above": sigma_above,
    };
    return params;
}


function volume_reduce_exclude_outliers_cargs(
    params: VolumeReduceExcludeOutliersParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-exclude-outliers");
    cargs.push(String((params["sigma_below"] ?? null)));
    cargs.push(String((params["sigma_above"] ?? null)));
    return cargs;
}


/**
 * Output object returned when calling `volume_reduce(...)`.
 *
 * @interface
 */
interface VolumeReduceOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output volume
     */
    volume_out: OutputPathType;
}


function volume_reduce_params(
    volume_in: InputPathType,
    operation: string,
    volume_out: string,
    exclude_outliers: VolumeReduceExcludeOutliersParameters | null = null,
    opt_only_numeric: boolean = false,
): VolumeReduceParameters {
    /**
     * Build parameters.
    
     * @param volume_in the volume file to reduce
     * @param operation the reduction operator to use
     * @param volume_out the output volume
     * @param exclude_outliers exclude non-numeric values and outliers by standard deviation
     * @param opt_only_numeric exclude non-numeric values
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-reduce" as const,
        "volume_in": volume_in,
        "operation": operation,
        "volume_out": volume_out,
        "opt_only_numeric": opt_only_numeric,
    };
    if (exclude_outliers !== null) {
        params["exclude_outliers"] = exclude_outliers;
    }
    return params;
}


function volume_reduce_cargs(
    params: VolumeReduceParameters,
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
    cargs.push("-volume-reduce");
    cargs.push(execution.inputFile((params["volume_in"] ?? null)));
    cargs.push((params["operation"] ?? null));
    cargs.push((params["volume_out"] ?? null));
    if ((params["exclude_outliers"] ?? null) !== null) {
        cargs.push(...dynCargs((params["exclude_outliers"] ?? null).__STYXTYPE__)((params["exclude_outliers"] ?? null), execution));
    }
    if ((params["opt_only_numeric"] ?? null)) {
        cargs.push("-only-numeric");
    }
    return cargs;
}


function volume_reduce_outputs(
    params: VolumeReduceParameters,
    execution: Execution,
): VolumeReduceOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeReduceOutputs = {
        root: execution.outputFile("."),
        volume_out: execution.outputFile([(params["volume_out"] ?? null)].join('')),
    };
    return ret;
}


function volume_reduce_execute(
    params: VolumeReduceParameters,
    execution: Execution,
): VolumeReduceOutputs {
    /**
     * Perform reduction operation across subvolumes.
     * 
     * For each voxel, takes the data across subvolumes as a vector, and performs the specified reduction on it, putting the result into the single output volume at that voxel.  The reduction operators are as follows:
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
    
     * @returns NamedTuple of outputs (described in `VolumeReduceOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_reduce_cargs(params, execution)
    const ret = volume_reduce_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_reduce(
    volume_in: InputPathType,
    operation: string,
    volume_out: string,
    exclude_outliers: VolumeReduceExcludeOutliersParameters | null = null,
    opt_only_numeric: boolean = false,
    runner: Runner | null = null,
): VolumeReduceOutputs {
    /**
     * Perform reduction operation across subvolumes.
     * 
     * For each voxel, takes the data across subvolumes as a vector, and performs the specified reduction on it, putting the result into the single output volume at that voxel.  The reduction operators are as follows:
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
    
     * @param volume_in the volume file to reduce
     * @param operation the reduction operator to use
     * @param volume_out the output volume
     * @param exclude_outliers exclude non-numeric values and outliers by standard deviation
     * @param opt_only_numeric exclude non-numeric values
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeReduceOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_REDUCE_METADATA);
    const params = volume_reduce_params(volume_in, operation, volume_out, exclude_outliers, opt_only_numeric)
    return volume_reduce_execute(params, execution);
}


export {
      VOLUME_REDUCE_METADATA,
      VolumeReduceExcludeOutliersParameters,
      VolumeReduceOutputs,
      VolumeReduceParameters,
      volume_reduce,
      volume_reduce_exclude_outliers_params,
      volume_reduce_params,
};
