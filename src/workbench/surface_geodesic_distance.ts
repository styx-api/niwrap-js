// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SURFACE_GEODESIC_DISTANCE_METADATA: Metadata = {
    id: "130a4eb6602ae80eca16d31c283d2ae952c92739.boutiques",
    name: "surface-geodesic-distance",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface SurfaceGeodesicDistanceParameters {
    "__STYXTYPE__": "surface-geodesic-distance";
    "surface": InputPathType;
    "vertex": number;
    "metric_out": string;
    "opt_naive": boolean;
    "opt_limit_limit_mm"?: number | null | undefined;
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
        "surface-geodesic-distance": surface_geodesic_distance_cargs,
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
        "surface-geodesic-distance": surface_geodesic_distance_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `surface_geodesic_distance(...)`.
 *
 * @interface
 */
interface SurfaceGeodesicDistanceOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output metric
     */
    metric_out: OutputPathType;
}


function surface_geodesic_distance_params(
    surface: InputPathType,
    vertex: number,
    metric_out: string,
    opt_naive: boolean = false,
    opt_limit_limit_mm: number | null = null,
    opt_corrected_areas_area_metric: InputPathType | null = null,
): SurfaceGeodesicDistanceParameters {
    /**
     * Build parameters.
    
     * @param surface the surface to compute on
     * @param vertex the vertex to compute geodesic distance from
     * @param metric_out the output metric
     * @param opt_naive use only neighbors, don't crawl triangles (not recommended)
     * @param opt_limit_limit_mm stop at a certain distance: distance in mm to stop at
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "surface-geodesic-distance" as const,
        "surface": surface,
        "vertex": vertex,
        "metric_out": metric_out,
        "opt_naive": opt_naive,
    };
    if (opt_limit_limit_mm !== null) {
        params["opt_limit_limit_mm"] = opt_limit_limit_mm;
    }
    if (opt_corrected_areas_area_metric !== null) {
        params["opt_corrected_areas_area_metric"] = opt_corrected_areas_area_metric;
    }
    return params;
}


function surface_geodesic_distance_cargs(
    params: SurfaceGeodesicDistanceParameters,
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
    cargs.push("-surface-geodesic-distance");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push(String((params["vertex"] ?? null)));
    cargs.push((params["metric_out"] ?? null));
    if ((params["opt_naive"] ?? null)) {
        cargs.push("-naive");
    }
    if ((params["opt_limit_limit_mm"] ?? null) !== null) {
        cargs.push(
            "-limit",
            String((params["opt_limit_limit_mm"] ?? null))
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


function surface_geodesic_distance_outputs(
    params: SurfaceGeodesicDistanceParameters,
    execution: Execution,
): SurfaceGeodesicDistanceOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SurfaceGeodesicDistanceOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
    };
    return ret;
}


function surface_geodesic_distance_execute(
    params: SurfaceGeodesicDistanceParameters,
    execution: Execution,
): SurfaceGeodesicDistanceOutputs {
    /**
     * Compute geodesic distance from one vertex to the entire surface.
     * 
     * Unless -limit is specified, computes the geodesic distance from the specified vertex to all others.  The result is output as a single column metric file, with a value of -1 for vertices that the distance was not computed for.
     * 
     * The -corrected-areas option should be used when the input is a group average surface - group average surfaces have significantly less surface area than individual surfaces do, and therefore distances measured on them would be smaller than measuring them on individual surfaces.  In this case, the input to this option should be a group average of the output of -surface-vertex-areas for each subject.
     * 
     * If -naive is not specified, the algorithm uses not just immediate neighbors, but also neighbors derived from crawling across pairs of triangles that share an edge.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SurfaceGeodesicDistanceOutputs`).
     */
    params = execution.params(params)
    const cargs = surface_geodesic_distance_cargs(params, execution)
    const ret = surface_geodesic_distance_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function surface_geodesic_distance(
    surface: InputPathType,
    vertex: number,
    metric_out: string,
    opt_naive: boolean = false,
    opt_limit_limit_mm: number | null = null,
    opt_corrected_areas_area_metric: InputPathType | null = null,
    runner: Runner | null = null,
): SurfaceGeodesicDistanceOutputs {
    /**
     * Compute geodesic distance from one vertex to the entire surface.
     * 
     * Unless -limit is specified, computes the geodesic distance from the specified vertex to all others.  The result is output as a single column metric file, with a value of -1 for vertices that the distance was not computed for.
     * 
     * The -corrected-areas option should be used when the input is a group average surface - group average surfaces have significantly less surface area than individual surfaces do, and therefore distances measured on them would be smaller than measuring them on individual surfaces.  In this case, the input to this option should be a group average of the output of -surface-vertex-areas for each subject.
     * 
     * If -naive is not specified, the algorithm uses not just immediate neighbors, but also neighbors derived from crawling across pairs of triangles that share an edge.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param surface the surface to compute on
     * @param vertex the vertex to compute geodesic distance from
     * @param metric_out the output metric
     * @param opt_naive use only neighbors, don't crawl triangles (not recommended)
     * @param opt_limit_limit_mm stop at a certain distance: distance in mm to stop at
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SurfaceGeodesicDistanceOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SURFACE_GEODESIC_DISTANCE_METADATA);
    const params = surface_geodesic_distance_params(surface, vertex, metric_out, opt_naive, opt_limit_limit_mm, opt_corrected_areas_area_metric)
    return surface_geodesic_distance_execute(params, execution);
}


export {
      SURFACE_GEODESIC_DISTANCE_METADATA,
      SurfaceGeodesicDistanceOutputs,
      SurfaceGeodesicDistanceParameters,
      surface_geodesic_distance,
      surface_geodesic_distance_params,
};
