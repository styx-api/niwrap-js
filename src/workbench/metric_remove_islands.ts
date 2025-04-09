// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const METRIC_REMOVE_ISLANDS_METADATA: Metadata = {
    id: "15ae108d4f612ce0ee6a8fbe3429120b6dc77b46.boutiques",
    name: "metric-remove-islands",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface MetricRemoveIslandsParameters {
    "__STYXTYPE__": "metric-remove-islands";
    "surface": InputPathType;
    "metric_in": InputPathType;
    "metric_out": string;
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
        "metric-remove-islands": metric_remove_islands_cargs,
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
        "metric-remove-islands": metric_remove_islands_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `metric_remove_islands(...)`.
 *
 * @interface
 */
interface MetricRemoveIslandsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output ROI metric
     */
    metric_out: OutputPathType;
}


function metric_remove_islands_params(
    surface: InputPathType,
    metric_in: InputPathType,
    metric_out: string,
    opt_corrected_areas_area_metric: InputPathType | null = null,
): MetricRemoveIslandsParameters {
    /**
     * Build parameters.
    
     * @param surface the surface to use for neighbor information
     * @param metric_in the input ROI metric
     * @param metric_out the output ROI metric
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "metric-remove-islands" as const,
        "surface": surface,
        "metric_in": metric_in,
        "metric_out": metric_out,
    };
    if (opt_corrected_areas_area_metric !== null) {
        params["opt_corrected_areas_area_metric"] = opt_corrected_areas_area_metric;
    }
    return params;
}


function metric_remove_islands_cargs(
    params: MetricRemoveIslandsParameters,
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
    cargs.push("-metric-remove-islands");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push(execution.inputFile((params["metric_in"] ?? null)));
    cargs.push((params["metric_out"] ?? null));
    if ((params["opt_corrected_areas_area_metric"] ?? null) !== null) {
        cargs.push(
            "-corrected-areas",
            execution.inputFile((params["opt_corrected_areas_area_metric"] ?? null))
        );
    }
    return cargs;
}


function metric_remove_islands_outputs(
    params: MetricRemoveIslandsParameters,
    execution: Execution,
): MetricRemoveIslandsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MetricRemoveIslandsOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
    };
    return ret;
}


function metric_remove_islands_execute(
    params: MetricRemoveIslandsParameters,
    execution: Execution,
): MetricRemoveIslandsOutputs {
    /**
     * Remove islands from an roi metric.
     * 
     * Finds all connected areas in the ROI, and zeros out all but the largest one, in terms of surface area.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MetricRemoveIslandsOutputs`).
     */
    params = execution.params(params)
    const cargs = metric_remove_islands_cargs(params, execution)
    const ret = metric_remove_islands_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function metric_remove_islands(
    surface: InputPathType,
    metric_in: InputPathType,
    metric_out: string,
    opt_corrected_areas_area_metric: InputPathType | null = null,
    runner: Runner | null = null,
): MetricRemoveIslandsOutputs {
    /**
     * Remove islands from an roi metric.
     * 
     * Finds all connected areas in the ROI, and zeros out all but the largest one, in terms of surface area.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param surface the surface to use for neighbor information
     * @param metric_in the input ROI metric
     * @param metric_out the output ROI metric
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MetricRemoveIslandsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(METRIC_REMOVE_ISLANDS_METADATA);
    const params = metric_remove_islands_params(surface, metric_in, metric_out, opt_corrected_areas_area_metric)
    return metric_remove_islands_execute(params, execution);
}


export {
      METRIC_REMOVE_ISLANDS_METADATA,
      MetricRemoveIslandsOutputs,
      MetricRemoveIslandsParameters,
      metric_remove_islands,
      metric_remove_islands_params,
};
