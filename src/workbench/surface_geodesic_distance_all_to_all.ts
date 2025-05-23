// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SURFACE_GEODESIC_DISTANCE_ALL_TO_ALL_METADATA: Metadata = {
    id: "a890212d1459e2b009fb3ac62c427e314578ba4d.boutiques",
    name: "surface-geodesic-distance-all-to-all",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface SurfaceGeodesicDistanceAllToAllParameters {
    "__STYXTYPE__": "surface-geodesic-distance-all-to-all";
    "surface": InputPathType;
    "cifti_out": string;
    "opt_roi_roi_metric"?: InputPathType | null | undefined;
    "opt_limit_limit_mm"?: number | null | undefined;
    "opt_corrected_areas_area_metric"?: InputPathType | null | undefined;
    "opt_naive": boolean;
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
        "surface-geodesic-distance-all-to-all": surface_geodesic_distance_all_to_all_cargs,
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
        "surface-geodesic-distance-all-to-all": surface_geodesic_distance_all_to_all_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `surface_geodesic_distance_all_to_all(...)`.
 *
 * @interface
 */
interface SurfaceGeodesicDistanceAllToAllOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * single-hemisphere dconn containing the distances
     */
    cifti_out: OutputPathType;
}


function surface_geodesic_distance_all_to_all_params(
    surface: InputPathType,
    cifti_out: string,
    opt_roi_roi_metric: InputPathType | null = null,
    opt_limit_limit_mm: number | null = null,
    opt_corrected_areas_area_metric: InputPathType | null = null,
    opt_naive: boolean = false,
): SurfaceGeodesicDistanceAllToAllParameters {
    /**
     * Build parameters.
    
     * @param surface the surface to compute on
     * @param cifti_out single-hemisphere dconn containing the distances
     * @param opt_roi_roi_metric only output distances for vertices inside an ROI: the ROI as a metric file
     * @param opt_limit_limit_mm stop at a specified distance: distance in mm to stop at
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
     * @param opt_naive use only neighbors, don't crawl triangles (not recommended)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "surface-geodesic-distance-all-to-all" as const,
        "surface": surface,
        "cifti_out": cifti_out,
        "opt_naive": opt_naive,
    };
    if (opt_roi_roi_metric !== null) {
        params["opt_roi_roi_metric"] = opt_roi_roi_metric;
    }
    if (opt_limit_limit_mm !== null) {
        params["opt_limit_limit_mm"] = opt_limit_limit_mm;
    }
    if (opt_corrected_areas_area_metric !== null) {
        params["opt_corrected_areas_area_metric"] = opt_corrected_areas_area_metric;
    }
    return params;
}


function surface_geodesic_distance_all_to_all_cargs(
    params: SurfaceGeodesicDistanceAllToAllParameters,
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
    cargs.push("-surface-geodesic-distance-all-to-all");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push((params["cifti_out"] ?? null));
    if ((params["opt_roi_roi_metric"] ?? null) !== null) {
        cargs.push(
            "-roi",
            execution.inputFile((params["opt_roi_roi_metric"] ?? null))
        );
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
    if ((params["opt_naive"] ?? null)) {
        cargs.push("-naive");
    }
    return cargs;
}


function surface_geodesic_distance_all_to_all_outputs(
    params: SurfaceGeodesicDistanceAllToAllParameters,
    execution: Execution,
): SurfaceGeodesicDistanceAllToAllOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SurfaceGeodesicDistanceAllToAllOutputs = {
        root: execution.outputFile("."),
        cifti_out: execution.outputFile([(params["cifti_out"] ?? null)].join('')),
    };
    return ret;
}


function surface_geodesic_distance_all_to_all_execute(
    params: SurfaceGeodesicDistanceAllToAllParameters,
    execution: Execution,
): SurfaceGeodesicDistanceAllToAllOutputs {
    /**
     * Compute geodesic distances from all vertices.
     * 
     * Computes geodesic distance from every vertex to every vertex, outputting a single-hemisphere dconn file.  If you are only interested in a few vertices, see -surface-geodesic-distance.  When -limit is specified, any vertex beyond the limit is assigned the value -1.
     * 
     * The -roi option makes the output file smaller by not outputting distances to or from vertices outside the ROI, but paths are still allowed to go outside the ROI when finding distances to other vertices.
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
    
     * @returns NamedTuple of outputs (described in `SurfaceGeodesicDistanceAllToAllOutputs`).
     */
    params = execution.params(params)
    const cargs = surface_geodesic_distance_all_to_all_cargs(params, execution)
    const ret = surface_geodesic_distance_all_to_all_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function surface_geodesic_distance_all_to_all(
    surface: InputPathType,
    cifti_out: string,
    opt_roi_roi_metric: InputPathType | null = null,
    opt_limit_limit_mm: number | null = null,
    opt_corrected_areas_area_metric: InputPathType | null = null,
    opt_naive: boolean = false,
    runner: Runner | null = null,
): SurfaceGeodesicDistanceAllToAllOutputs {
    /**
     * Compute geodesic distances from all vertices.
     * 
     * Computes geodesic distance from every vertex to every vertex, outputting a single-hemisphere dconn file.  If you are only interested in a few vertices, see -surface-geodesic-distance.  When -limit is specified, any vertex beyond the limit is assigned the value -1.
     * 
     * The -roi option makes the output file smaller by not outputting distances to or from vertices outside the ROI, but paths are still allowed to go outside the ROI when finding distances to other vertices.
     * 
     * The -corrected-areas option should be used when the input is a group average surface - group average surfaces have significantly less surface area than individual surfaces do, and therefore distances measured on them would be smaller than measuring them on individual surfaces.  In this case, the input to this option should be a group average of the output of -surface-vertex-areas for each subject.
     * 
     * If -naive is not specified, the algorithm uses not just immediate neighbors, but also neighbors derived from crawling across pairs of triangles that share an edge.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param surface the surface to compute on
     * @param cifti_out single-hemisphere dconn containing the distances
     * @param opt_roi_roi_metric only output distances for vertices inside an ROI: the ROI as a metric file
     * @param opt_limit_limit_mm stop at a specified distance: distance in mm to stop at
     * @param opt_corrected_areas_area_metric vertex areas to use instead of computing them from the surface: the corrected vertex areas, as a metric
     * @param opt_naive use only neighbors, don't crawl triangles (not recommended)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SurfaceGeodesicDistanceAllToAllOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SURFACE_GEODESIC_DISTANCE_ALL_TO_ALL_METADATA);
    const params = surface_geodesic_distance_all_to_all_params(surface, cifti_out, opt_roi_roi_metric, opt_limit_limit_mm, opt_corrected_areas_area_metric, opt_naive)
    return surface_geodesic_distance_all_to_all_execute(params, execution);
}


export {
      SURFACE_GEODESIC_DISTANCE_ALL_TO_ALL_METADATA,
      SurfaceGeodesicDistanceAllToAllOutputs,
      SurfaceGeodesicDistanceAllToAllParameters,
      surface_geodesic_distance_all_to_all,
      surface_geodesic_distance_all_to_all_params,
};
