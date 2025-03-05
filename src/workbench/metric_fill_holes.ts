// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const METRIC_FILL_HOLES_METADATA: Metadata = {
    id: "96ff203654f51b0fbf464f9740941d18d8533b77.boutiques",
    name: "metric-fill-holes",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface MetricFillHolesParameters {
    "__STYXTYPE__": "metric-fill-holes";
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
        "metric-fill-holes": metric_fill_holes_cargs,
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
        "metric-fill-holes": metric_fill_holes_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `metric_fill_holes(...)`.
 *
 * @interface
 */
interface MetricFillHolesOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output ROI metric
     */
    metric_out: OutputPathType;
}


function metric_fill_holes_params(
    surface: InputPathType,
    metric_in: InputPathType,
    metric_out: string,
    opt_corrected_areas_area_metric: InputPathType | null = null,
): MetricFillHolesParameters {
    /**
     * Build parameters.
    
     * @param surface the surface to use for neighbor information
     * @param metric_in the input ROI metric
     * @param metric_out the output ROI metric
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "metric-fill-holes" as const,
        "surface": surface,
        "metric_in": metric_in,
        "metric_out": metric_out,
    };
    if (opt_corrected_areas_area_metric !== null) {
        params["opt_corrected_areas_area_metric"] = opt_corrected_areas_area_metric;
    }
    return params;
}


function metric_fill_holes_cargs(
    params: MetricFillHolesParameters,
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
    cargs.push("-metric-fill-holes");
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


function metric_fill_holes_outputs(
    params: MetricFillHolesParameters,
    execution: Execution,
): MetricFillHolesOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MetricFillHolesOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
    };
    return ret;
}


function metric_fill_holes_execute(
    params: MetricFillHolesParameters,
    execution: Execution,
): MetricFillHolesOutputs {
    /**
     * Fill holes in an roi metric.
     * 
     * Finds all connected areas that are not included in the ROI, and writes ones into all but the largest one, in terms of surface area.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MetricFillHolesOutputs`).
     */
    params = execution.params(params)
    const cargs = metric_fill_holes_cargs(params, execution)
    const ret = metric_fill_holes_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function metric_fill_holes(
    surface: InputPathType,
    metric_in: InputPathType,
    metric_out: string,
    opt_corrected_areas_area_metric: InputPathType | null = null,
    runner: Runner | null = null,
): MetricFillHolesOutputs {
    /**
     * Fill holes in an roi metric.
     * 
     * Finds all connected areas that are not included in the ROI, and writes ones into all but the largest one, in terms of surface area.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param surface the surface to use for neighbor information
     * @param metric_in the input ROI metric
     * @param metric_out the output ROI metric
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MetricFillHolesOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(METRIC_FILL_HOLES_METADATA);
    const params = metric_fill_holes_params(surface, metric_in, metric_out, opt_corrected_areas_area_metric)
    return metric_fill_holes_execute(params, execution);
}


export {
      METRIC_FILL_HOLES_METADATA,
      MetricFillHolesOutputs,
      MetricFillHolesParameters,
      metric_fill_holes,
      metric_fill_holes_params,
};
