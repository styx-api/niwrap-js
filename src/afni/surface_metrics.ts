// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SURFACE_METRICS_METADATA: Metadata = {
    id: "1ef3c8a44dad85904fd6b95c168fae520751be00.boutiques",
    name: "SurfaceMetrics",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface SurfaceMetricsParameters {
    "__STYXTYPE__": "SurfaceMetrics";
    "volume": boolean;
    "convexity": boolean;
    "closest_node"?: InputPathType | null | undefined;
    "area": boolean;
    "tri_sines": boolean;
    "tri_cosines": boolean;
    "tri_CoSines": boolean;
    "tri_angles": boolean;
    "node_angles": boolean;
    "curvature": boolean;
    "edges": boolean;
    "node_normals": boolean;
    "face_normals": boolean;
    "normals_scale"?: number | null | undefined;
    "coords": boolean;
    "sph_coords": boolean;
    "sph_coords_center"?: Array<number> | null | undefined;
    "boundary_nodes": boolean;
    "boundary_triangles": boolean;
    "internal_nodes": boolean;
    "surf1": string;
    "tlrc": boolean;
    "prefix"?: string | null | undefined;
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
        "SurfaceMetrics": surface_metrics_cargs,
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


/**
 * Output object returned when calling `surface_metrics(...)`.
 *
 * @interface
 */
interface SurfaceMetricsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function surface_metrics_params(
    surf1: string,
    volume: boolean = false,
    convexity: boolean = false,
    closest_node: InputPathType | null = null,
    area: boolean = false,
    tri_sines: boolean = false,
    tri_cosines: boolean = false,
    tri_co_sines: boolean = false,
    tri_angles: boolean = false,
    node_angles: boolean = false,
    curvature: boolean = false,
    edges: boolean = false,
    node_normals: boolean = false,
    face_normals: boolean = false,
    normals_scale: number | null = null,
    coords: boolean = false,
    sph_coords: boolean = false,
    sph_coords_center: Array<number> | null = null,
    boundary_nodes: boolean = false,
    boundary_triangles: boolean = false,
    internal_nodes: boolean = false,
    tlrc: boolean = false,
    prefix: string | null = null,
): SurfaceMetricsParameters {
    /**
     * Build parameters.
    
     * @param surf1 Specifies the input surface.
     * @param volume Calculates the volume of a surface.
     * @param convexity Output surface convexity at each node.
     * @param closest_node Find the closest node to each XYZ triplet in XYZ_LIST.1D.
     * @param area Output area of each triangle.
     * @param tri_sines Output sine of angles at nodes forming triangles.
     * @param tri_cosines Output cosine of angles at nodes forming triangles.
     * @param tri_co_sines Output both cosines and sines of angles at nodes forming triangles.
     * @param tri_angles Unsigned angles in radians of triangles.
     * @param node_angles Unsigned angles in radians at nodes of surface.
     * @param curvature Output curvature at each node.
     * @param edges Outputs info on each edge.
     * @param node_normals Outputs segments along node normals.
     * @param face_normals Outputs segments along triangle normals.
     * @param normals_scale Scale the normals by a given factor.
     * @param coords Output coordinates of each node after any transformation.
     * @param sph_coords Output spherical coordinates of each node.
     * @param sph_coords_center Shift each node by x y z before calculating spherical coordinates.
     * @param boundary_nodes Output nodes that form a boundary of a surface.
     * @param boundary_triangles Output triangles that form a boundary of a surface.
     * @param internal_nodes Output nodes that are not a boundary.
     * @param tlrc Apply Talairach transform to surface.
     * @param prefix Use prefix for output files.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "SurfaceMetrics" as const,
        "volume": volume,
        "convexity": convexity,
        "area": area,
        "tri_sines": tri_sines,
        "tri_cosines": tri_cosines,
        "tri_CoSines": tri_co_sines,
        "tri_angles": tri_angles,
        "node_angles": node_angles,
        "curvature": curvature,
        "edges": edges,
        "node_normals": node_normals,
        "face_normals": face_normals,
        "coords": coords,
        "sph_coords": sph_coords,
        "boundary_nodes": boundary_nodes,
        "boundary_triangles": boundary_triangles,
        "internal_nodes": internal_nodes,
        "surf1": surf1,
        "tlrc": tlrc,
    };
    if (closest_node !== null) {
        params["closest_node"] = closest_node;
    }
    if (normals_scale !== null) {
        params["normals_scale"] = normals_scale;
    }
    if (sph_coords_center !== null) {
        params["sph_coords_center"] = sph_coords_center;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    return params;
}


function surface_metrics_cargs(
    params: SurfaceMetricsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("SurfaceMetrics");
    if ((params["volume"] ?? null)) {
        cargs.push("-vol");
    }
    if ((params["convexity"] ?? null)) {
        cargs.push("-conv");
    }
    if ((params["closest_node"] ?? null) !== null) {
        cargs.push(
            "-closest_node",
            execution.inputFile((params["closest_node"] ?? null))
        );
    }
    if ((params["area"] ?? null)) {
        cargs.push("-area");
    }
    if ((params["tri_sines"] ?? null)) {
        cargs.push("-tri_sines");
    }
    if ((params["tri_cosines"] ?? null)) {
        cargs.push("-tri_cosines");
    }
    if ((params["tri_CoSines"] ?? null)) {
        cargs.push("-tri_CoSines");
    }
    if ((params["tri_angles"] ?? null)) {
        cargs.push("-tri_angles");
    }
    if ((params["node_angles"] ?? null)) {
        cargs.push("-node_angles");
    }
    if ((params["curvature"] ?? null)) {
        cargs.push("-curv");
    }
    if ((params["edges"] ?? null)) {
        cargs.push("-edges");
    }
    if ((params["node_normals"] ?? null)) {
        cargs.push("-node_normals");
    }
    if ((params["face_normals"] ?? null)) {
        cargs.push("-face_normals");
    }
    if ((params["normals_scale"] ?? null) !== null) {
        cargs.push(
            "-normals_scale",
            String((params["normals_scale"] ?? null))
        );
    }
    if ((params["coords"] ?? null)) {
        cargs.push("-coords");
    }
    if ((params["sph_coords"] ?? null)) {
        cargs.push("-sph_coords");
    }
    if ((params["sph_coords_center"] ?? null) !== null) {
        cargs.push(
            "-sph_coords_center",
            ...(params["sph_coords_center"] ?? null).map(String)
        );
    }
    if ((params["boundary_nodes"] ?? null)) {
        cargs.push("-boundary_nodes");
    }
    if ((params["boundary_triangles"] ?? null)) {
        cargs.push("-boundary_triangles");
    }
    if ((params["internal_nodes"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    cargs.push(
        "-SURF_1",
        (params["surf1"] ?? null)
    );
    if ((params["tlrc"] ?? null)) {
        cargs.push("-tlrc");
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    return cargs;
}


function surface_metrics_outputs(
    params: SurfaceMetricsParameters,
    execution: Execution,
): SurfaceMetricsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SurfaceMetricsOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function surface_metrics_execute(
    params: SurfaceMetricsParameters,
    execution: Execution,
): SurfaceMetricsOutputs {
    /**
     * Outputs information about a surface's mesh.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SurfaceMetricsOutputs`).
     */
    params = execution.params(params)
    const cargs = surface_metrics_cargs(params, execution)
    const ret = surface_metrics_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function surface_metrics(
    surf1: string,
    volume: boolean = false,
    convexity: boolean = false,
    closest_node: InputPathType | null = null,
    area: boolean = false,
    tri_sines: boolean = false,
    tri_cosines: boolean = false,
    tri_co_sines: boolean = false,
    tri_angles: boolean = false,
    node_angles: boolean = false,
    curvature: boolean = false,
    edges: boolean = false,
    node_normals: boolean = false,
    face_normals: boolean = false,
    normals_scale: number | null = null,
    coords: boolean = false,
    sph_coords: boolean = false,
    sph_coords_center: Array<number> | null = null,
    boundary_nodes: boolean = false,
    boundary_triangles: boolean = false,
    internal_nodes: boolean = false,
    tlrc: boolean = false,
    prefix: string | null = null,
    runner: Runner | null = null,
): SurfaceMetricsOutputs {
    /**
     * Outputs information about a surface's mesh.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param surf1 Specifies the input surface.
     * @param volume Calculates the volume of a surface.
     * @param convexity Output surface convexity at each node.
     * @param closest_node Find the closest node to each XYZ triplet in XYZ_LIST.1D.
     * @param area Output area of each triangle.
     * @param tri_sines Output sine of angles at nodes forming triangles.
     * @param tri_cosines Output cosine of angles at nodes forming triangles.
     * @param tri_co_sines Output both cosines and sines of angles at nodes forming triangles.
     * @param tri_angles Unsigned angles in radians of triangles.
     * @param node_angles Unsigned angles in radians at nodes of surface.
     * @param curvature Output curvature at each node.
     * @param edges Outputs info on each edge.
     * @param node_normals Outputs segments along node normals.
     * @param face_normals Outputs segments along triangle normals.
     * @param normals_scale Scale the normals by a given factor.
     * @param coords Output coordinates of each node after any transformation.
     * @param sph_coords Output spherical coordinates of each node.
     * @param sph_coords_center Shift each node by x y z before calculating spherical coordinates.
     * @param boundary_nodes Output nodes that form a boundary of a surface.
     * @param boundary_triangles Output triangles that form a boundary of a surface.
     * @param internal_nodes Output nodes that are not a boundary.
     * @param tlrc Apply Talairach transform to surface.
     * @param prefix Use prefix for output files.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SurfaceMetricsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SURFACE_METRICS_METADATA);
    const params = surface_metrics_params(surf1, volume, convexity, closest_node, area, tri_sines, tri_cosines, tri_co_sines, tri_angles, node_angles, curvature, edges, node_normals, face_normals, normals_scale, coords, sph_coords, sph_coords_center, boundary_nodes, boundary_triangles, internal_nodes, tlrc, prefix)
    return surface_metrics_execute(params, execution);
}


export {
      SURFACE_METRICS_METADATA,
      SurfaceMetricsOutputs,
      SurfaceMetricsParameters,
      surface_metrics,
      surface_metrics_params,
};
