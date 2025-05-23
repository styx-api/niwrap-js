// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_TO_SURFACE_MAPPING_METADATA: Metadata = {
    id: "abd765683fad9b7a544e4ef214a36cb0c3e6853a.boutiques",
    name: "volume-to-surface-mapping",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeToSurfaceMappingVolumeRoiParameters {
    "__STYXTYPE__": "volume_roi";
    "roi_volume": InputPathType;
    "opt_weighted": boolean;
}


interface VolumeToSurfaceMappingOutputWeightsParameters {
    "__STYXTYPE__": "output_weights";
    "vertex": number;
    "weights_out": string;
}


interface VolumeToSurfaceMappingRibbonConstrainedParameters {
    "__STYXTYPE__": "ribbon_constrained";
    "inner_surf": InputPathType;
    "outer_surf": InputPathType;
    "volume_roi"?: VolumeToSurfaceMappingVolumeRoiParameters | null | undefined;
    "opt_voxel_subdiv_subdiv_num"?: number | null | undefined;
    "opt_thin_columns": boolean;
    "opt_gaussian_scale"?: number | null | undefined;
    "opt_interpolate_method"?: string | null | undefined;
    "opt_bad_vertices_out_roi_out"?: string | null | undefined;
    "output_weights"?: VolumeToSurfaceMappingOutputWeightsParameters | null | undefined;
    "opt_output_weights_text_text_out"?: string | null | undefined;
}


interface VolumeToSurfaceMappingMyelinStyleParameters {
    "__STYXTYPE__": "myelin_style";
    "ribbon_roi": InputPathType;
    "thickness": InputPathType;
    "sigma": number;
    "opt_legacy_bug": boolean;
}


interface VolumeToSurfaceMappingParameters {
    "__STYXTYPE__": "volume-to-surface-mapping";
    "volume": InputPathType;
    "surface": InputPathType;
    "metric_out": string;
    "opt_trilinear": boolean;
    "opt_enclosing": boolean;
    "opt_cubic": boolean;
    "ribbon_constrained"?: VolumeToSurfaceMappingRibbonConstrainedParameters | null | undefined;
    "myelin_style"?: VolumeToSurfaceMappingMyelinStyleParameters | null | undefined;
    "opt_subvol_select_subvol"?: string | null | undefined;
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
        "volume-to-surface-mapping": volume_to_surface_mapping_cargs,
        "ribbon_constrained": volume_to_surface_mapping_ribbon_constrained_cargs,
        "volume_roi": volume_to_surface_mapping_volume_roi_cargs,
        "output_weights": volume_to_surface_mapping_output_weights_cargs,
        "myelin_style": volume_to_surface_mapping_myelin_style_cargs,
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
        "volume-to-surface-mapping": volume_to_surface_mapping_outputs,
        "ribbon_constrained": volume_to_surface_mapping_ribbon_constrained_outputs,
        "output_weights": volume_to_surface_mapping_output_weights_outputs,
    };
    return outputsFuncs[t];
}


function volume_to_surface_mapping_volume_roi_params(
    roi_volume: InputPathType,
    opt_weighted: boolean = false,
): VolumeToSurfaceMappingVolumeRoiParameters {
    /**
     * Build parameters.
    
     * @param roi_volume the roi volume file
     * @param opt_weighted treat the roi values as weightings rather than binary
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume_roi" as const,
        "roi_volume": roi_volume,
        "opt_weighted": opt_weighted,
    };
    return params;
}


function volume_to_surface_mapping_volume_roi_cargs(
    params: VolumeToSurfaceMappingVolumeRoiParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-volume-roi");
    cargs.push(execution.inputFile((params["roi_volume"] ?? null)));
    if ((params["opt_weighted"] ?? null)) {
        cargs.push("-weighted");
    }
    return cargs;
}


/**
 * Output object returned when calling `VolumeToSurfaceMappingOutputWeightsParameters | null(...)`.
 *
 * @interface
 */
interface VolumeToSurfaceMappingOutputWeightsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * volume to write the weights to
     */
    weights_out: OutputPathType;
}


function volume_to_surface_mapping_output_weights_params(
    vertex: number,
    weights_out: string,
): VolumeToSurfaceMappingOutputWeightsParameters {
    /**
     * Build parameters.
    
     * @param vertex the vertex number to get the voxel weights for, 0-based
     * @param weights_out volume to write the weights to
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "output_weights" as const,
        "vertex": vertex,
        "weights_out": weights_out,
    };
    return params;
}


function volume_to_surface_mapping_output_weights_cargs(
    params: VolumeToSurfaceMappingOutputWeightsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-output-weights");
    cargs.push(String((params["vertex"] ?? null)));
    cargs.push((params["weights_out"] ?? null));
    return cargs;
}


function volume_to_surface_mapping_output_weights_outputs(
    params: VolumeToSurfaceMappingOutputWeightsParameters,
    execution: Execution,
): VolumeToSurfaceMappingOutputWeightsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeToSurfaceMappingOutputWeightsOutputs = {
        root: execution.outputFile("."),
        weights_out: execution.outputFile([(params["weights_out"] ?? null)].join('')),
    };
    return ret;
}


/**
 * Output object returned when calling `VolumeToSurfaceMappingRibbonConstrainedParameters | null(...)`.
 *
 * @interface
 */
interface VolumeToSurfaceMappingRibbonConstrainedOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Outputs from `volume_to_surface_mapping_output_weights_outputs`.
     */
    output_weights: VolumeToSurfaceMappingOutputWeightsOutputs | null;
}


function volume_to_surface_mapping_ribbon_constrained_params(
    inner_surf: InputPathType,
    outer_surf: InputPathType,
    volume_roi: VolumeToSurfaceMappingVolumeRoiParameters | null = null,
    opt_voxel_subdiv_subdiv_num: number | null = null,
    opt_thin_columns: boolean = false,
    opt_gaussian_scale: number | null = null,
    opt_interpolate_method: string | null = null,
    opt_bad_vertices_out_roi_out: string | null = null,
    output_weights: VolumeToSurfaceMappingOutputWeightsParameters | null = null,
    opt_output_weights_text_text_out: string | null = null,
): VolumeToSurfaceMappingRibbonConstrainedParameters {
    /**
     * Build parameters.
    
     * @param inner_surf the inner surface of the ribbon
     * @param outer_surf the outer surface of the ribbon
     * @param volume_roi use a volume roi
     * @param opt_voxel_subdiv_subdiv_num voxel divisions while estimating voxel weights: number of subdivisions, default 3
     * @param opt_thin_columns use non-overlapping polyhedra
     * @param opt_gaussian_scale reduce weight to voxels that aren't near <surface>: value to multiply the local thickness by, to get the gaussian sigma
     * @param opt_interpolate_method instead of a weighted average of voxels, interpolate at subpoints inside the ribbon: interpolation method, must be CUBIC, ENCLOSING_VOXEL, or TRILINEAR
     * @param opt_bad_vertices_out_roi_out output an ROI of which vertices didn't intersect any valid voxels: the output metric file of vertices that have no data
     * @param output_weights write the voxel weights for a vertex to a volume file
     * @param opt_output_weights_text_text_out write the voxel weights for all vertices to a text file: output - the output text filename
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "ribbon_constrained" as const,
        "inner_surf": inner_surf,
        "outer_surf": outer_surf,
        "opt_thin_columns": opt_thin_columns,
    };
    if (volume_roi !== null) {
        params["volume_roi"] = volume_roi;
    }
    if (opt_voxel_subdiv_subdiv_num !== null) {
        params["opt_voxel_subdiv_subdiv_num"] = opt_voxel_subdiv_subdiv_num;
    }
    if (opt_gaussian_scale !== null) {
        params["opt_gaussian_scale"] = opt_gaussian_scale;
    }
    if (opt_interpolate_method !== null) {
        params["opt_interpolate_method"] = opt_interpolate_method;
    }
    if (opt_bad_vertices_out_roi_out !== null) {
        params["opt_bad_vertices_out_roi_out"] = opt_bad_vertices_out_roi_out;
    }
    if (output_weights !== null) {
        params["output_weights"] = output_weights;
    }
    if (opt_output_weights_text_text_out !== null) {
        params["opt_output_weights_text_text_out"] = opt_output_weights_text_text_out;
    }
    return params;
}


function volume_to_surface_mapping_ribbon_constrained_cargs(
    params: VolumeToSurfaceMappingRibbonConstrainedParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-ribbon-constrained");
    cargs.push(execution.inputFile((params["inner_surf"] ?? null)));
    cargs.push(execution.inputFile((params["outer_surf"] ?? null)));
    if ((params["volume_roi"] ?? null) !== null) {
        cargs.push(...dynCargs((params["volume_roi"] ?? null).__STYXTYPE__)((params["volume_roi"] ?? null), execution));
    }
    if ((params["opt_voxel_subdiv_subdiv_num"] ?? null) !== null) {
        cargs.push(
            "-voxel-subdiv",
            String((params["opt_voxel_subdiv_subdiv_num"] ?? null))
        );
    }
    if ((params["opt_thin_columns"] ?? null)) {
        cargs.push("-thin-columns");
    }
    if ((params["opt_gaussian_scale"] ?? null) !== null) {
        cargs.push(
            "-gaussian",
            String((params["opt_gaussian_scale"] ?? null))
        );
    }
    if ((params["opt_interpolate_method"] ?? null) !== null) {
        cargs.push(
            "-interpolate",
            (params["opt_interpolate_method"] ?? null)
        );
    }
    if ((params["opt_bad_vertices_out_roi_out"] ?? null) !== null) {
        cargs.push(
            "-bad-vertices-out",
            (params["opt_bad_vertices_out_roi_out"] ?? null)
        );
    }
    if ((params["output_weights"] ?? null) !== null) {
        cargs.push(...dynCargs((params["output_weights"] ?? null).__STYXTYPE__)((params["output_weights"] ?? null), execution));
    }
    if ((params["opt_output_weights_text_text_out"] ?? null) !== null) {
        cargs.push(
            "-output-weights-text",
            (params["opt_output_weights_text_text_out"] ?? null)
        );
    }
    return cargs;
}


function volume_to_surface_mapping_ribbon_constrained_outputs(
    params: VolumeToSurfaceMappingRibbonConstrainedParameters,
    execution: Execution,
): VolumeToSurfaceMappingRibbonConstrainedOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeToSurfaceMappingRibbonConstrainedOutputs = {
        root: execution.outputFile("."),
        output_weights: (dynOutputs((params["output_weights"] ?? null).__STYXTYPE__)?.((params["output_weights"] ?? null), execution) ?? null),
    };
    return ret;
}


function volume_to_surface_mapping_myelin_style_params(
    ribbon_roi: InputPathType,
    thickness: InputPathType,
    sigma: number,
    opt_legacy_bug: boolean = false,
): VolumeToSurfaceMappingMyelinStyleParameters {
    /**
     * Build parameters.
    
     * @param ribbon_roi an roi volume of the cortical ribbon for this hemisphere
     * @param thickness a metric file of cortical thickness
     * @param sigma gaussian kernel in mm for weighting voxels within range
     * @param opt_legacy_bug emulate old v1.2.3 and earlier code that didn't follow a cylinder cutoff
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "myelin_style" as const,
        "ribbon_roi": ribbon_roi,
        "thickness": thickness,
        "sigma": sigma,
        "opt_legacy_bug": opt_legacy_bug,
    };
    return params;
}


function volume_to_surface_mapping_myelin_style_cargs(
    params: VolumeToSurfaceMappingMyelinStyleParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-myelin-style");
    cargs.push(execution.inputFile((params["ribbon_roi"] ?? null)));
    cargs.push(execution.inputFile((params["thickness"] ?? null)));
    cargs.push(String((params["sigma"] ?? null)));
    if ((params["opt_legacy_bug"] ?? null)) {
        cargs.push("-legacy-bug");
    }
    return cargs;
}


/**
 * Output object returned when calling `volume_to_surface_mapping(...)`.
 *
 * @interface
 */
interface VolumeToSurfaceMappingOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output metric file
     */
    metric_out: OutputPathType;
    /**
     * Outputs from `volume_to_surface_mapping_ribbon_constrained_outputs`.
     */
    ribbon_constrained: VolumeToSurfaceMappingRibbonConstrainedOutputs | null;
}


function volume_to_surface_mapping_params(
    volume: InputPathType,
    surface: InputPathType,
    metric_out: string,
    opt_trilinear: boolean = false,
    opt_enclosing: boolean = false,
    opt_cubic: boolean = false,
    ribbon_constrained: VolumeToSurfaceMappingRibbonConstrainedParameters | null = null,
    myelin_style: VolumeToSurfaceMappingMyelinStyleParameters | null = null,
    opt_subvol_select_subvol: string | null = null,
): VolumeToSurfaceMappingParameters {
    /**
     * Build parameters.
    
     * @param volume the volume to map data from
     * @param surface the surface to map the data onto
     * @param metric_out the output metric file
     * @param opt_trilinear use trilinear volume interpolation
     * @param opt_enclosing use value of the enclosing voxel
     * @param opt_cubic use cubic splines
     * @param ribbon_constrained use ribbon constrained mapping algorithm
     * @param myelin_style use the method from myelin mapping
     * @param opt_subvol_select_subvol select a single subvolume to map: the subvolume number or name
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-to-surface-mapping" as const,
        "volume": volume,
        "surface": surface,
        "metric_out": metric_out,
        "opt_trilinear": opt_trilinear,
        "opt_enclosing": opt_enclosing,
        "opt_cubic": opt_cubic,
    };
    if (ribbon_constrained !== null) {
        params["ribbon_constrained"] = ribbon_constrained;
    }
    if (myelin_style !== null) {
        params["myelin_style"] = myelin_style;
    }
    if (opt_subvol_select_subvol !== null) {
        params["opt_subvol_select_subvol"] = opt_subvol_select_subvol;
    }
    return params;
}


function volume_to_surface_mapping_cargs(
    params: VolumeToSurfaceMappingParameters,
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
    cargs.push("-volume-to-surface-mapping");
    cargs.push(execution.inputFile((params["volume"] ?? null)));
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push((params["metric_out"] ?? null));
    if ((params["opt_trilinear"] ?? null)) {
        cargs.push("-trilinear");
    }
    if ((params["opt_enclosing"] ?? null)) {
        cargs.push("-enclosing");
    }
    if ((params["opt_cubic"] ?? null)) {
        cargs.push("-cubic");
    }
    if ((params["ribbon_constrained"] ?? null) !== null) {
        cargs.push(...dynCargs((params["ribbon_constrained"] ?? null).__STYXTYPE__)((params["ribbon_constrained"] ?? null), execution));
    }
    if ((params["myelin_style"] ?? null) !== null) {
        cargs.push(...dynCargs((params["myelin_style"] ?? null).__STYXTYPE__)((params["myelin_style"] ?? null), execution));
    }
    if ((params["opt_subvol_select_subvol"] ?? null) !== null) {
        cargs.push(
            "-subvol-select",
            (params["opt_subvol_select_subvol"] ?? null)
        );
    }
    return cargs;
}


function volume_to_surface_mapping_outputs(
    params: VolumeToSurfaceMappingParameters,
    execution: Execution,
): VolumeToSurfaceMappingOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeToSurfaceMappingOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
        ribbon_constrained: (dynOutputs((params["ribbon_constrained"] ?? null).__STYXTYPE__)?.((params["ribbon_constrained"] ?? null), execution) ?? null),
    };
    return ret;
}


function volume_to_surface_mapping_execute(
    params: VolumeToSurfaceMappingParameters,
    execution: Execution,
): VolumeToSurfaceMappingOutputs {
    /**
     * Map volume to surface.
     * 
     * You must specify exactly one mapping method.  Enclosing voxel uses the value from the voxel the vertex lies inside, while trilinear does a 3D linear interpolation based on the voxels immediately on each side of the vertex's position.
     * 
     * The ribbon mapping method constructs a polyhedron from the vertex's neighbors on each surface, and estimates the amount of this polyhedron's volume that falls inside any nearby voxels, to use as the weights for sampling.  If -thin-columns is specified, the polyhedron uses the edge midpoints and triangle centroids, so that neighboring vertices do not have overlapping polyhedra.  This may require increasing -voxel-subdiv to get enough samples in each voxel to reliably land inside these smaller polyhedra.  The volume ROI is useful to exclude partial volume effects of voxels the surfaces pass through, and will cause the mapping to ignore voxels that don't have a positive value in the mask.  The subdivision number specifies how it approximates the amount of the volume the polyhedron intersects, by splitting each voxel into NxNxN pieces, and checking whether the center of each piece is inside the polyhedron.  If you have very large voxels, consider increasing this if you get zeros in your output.  The -gaussian option makes it act more like the myelin method, where the distance of a voxel from <surface> is used to downweight the voxel.  The -interpolate suboption, instead of doing a weighted average of voxels, interpolates from the volume at the subdivided points inside the ribbon.  If using both -interpolate and the -weighted suboption to -volume-roi, the roi volume weights are linearly interpolated, unless the -interpolate method is ENCLOSING_VOXEL, in which case ENCLOSING_VOXEL is also used for sampling the roi volume weights.
     * 
     * The myelin style method uses part of the caret5 myelin mapping command to do the mapping: for each surface vertex, take all voxels that are in a cylinder with radius and height equal to cortical thickness, centered on the vertex and aligned with the surface normal, and that are also within the ribbon ROI, and apply a gaussian kernel with the specified sigma to them to get the weights to use.  The -legacy-bug flag reverts to the unintended behavior present from the initial implementation up to and including v1.2.3, which had only the tangential cutoff and a bounding box intended to be larger than where the cylinder cutoff should have been.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VolumeToSurfaceMappingOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_to_surface_mapping_cargs(params, execution)
    const ret = volume_to_surface_mapping_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_to_surface_mapping(
    volume: InputPathType,
    surface: InputPathType,
    metric_out: string,
    opt_trilinear: boolean = false,
    opt_enclosing: boolean = false,
    opt_cubic: boolean = false,
    ribbon_constrained: VolumeToSurfaceMappingRibbonConstrainedParameters | null = null,
    myelin_style: VolumeToSurfaceMappingMyelinStyleParameters | null = null,
    opt_subvol_select_subvol: string | null = null,
    runner: Runner | null = null,
): VolumeToSurfaceMappingOutputs {
    /**
     * Map volume to surface.
     * 
     * You must specify exactly one mapping method.  Enclosing voxel uses the value from the voxel the vertex lies inside, while trilinear does a 3D linear interpolation based on the voxels immediately on each side of the vertex's position.
     * 
     * The ribbon mapping method constructs a polyhedron from the vertex's neighbors on each surface, and estimates the amount of this polyhedron's volume that falls inside any nearby voxels, to use as the weights for sampling.  If -thin-columns is specified, the polyhedron uses the edge midpoints and triangle centroids, so that neighboring vertices do not have overlapping polyhedra.  This may require increasing -voxel-subdiv to get enough samples in each voxel to reliably land inside these smaller polyhedra.  The volume ROI is useful to exclude partial volume effects of voxels the surfaces pass through, and will cause the mapping to ignore voxels that don't have a positive value in the mask.  The subdivision number specifies how it approximates the amount of the volume the polyhedron intersects, by splitting each voxel into NxNxN pieces, and checking whether the center of each piece is inside the polyhedron.  If you have very large voxels, consider increasing this if you get zeros in your output.  The -gaussian option makes it act more like the myelin method, where the distance of a voxel from <surface> is used to downweight the voxel.  The -interpolate suboption, instead of doing a weighted average of voxels, interpolates from the volume at the subdivided points inside the ribbon.  If using both -interpolate and the -weighted suboption to -volume-roi, the roi volume weights are linearly interpolated, unless the -interpolate method is ENCLOSING_VOXEL, in which case ENCLOSING_VOXEL is also used for sampling the roi volume weights.
     * 
     * The myelin style method uses part of the caret5 myelin mapping command to do the mapping: for each surface vertex, take all voxels that are in a cylinder with radius and height equal to cortical thickness, centered on the vertex and aligned with the surface normal, and that are also within the ribbon ROI, and apply a gaussian kernel with the specified sigma to them to get the weights to use.  The -legacy-bug flag reverts to the unintended behavior present from the initial implementation up to and including v1.2.3, which had only the tangential cutoff and a bounding box intended to be larger than where the cylinder cutoff should have been.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param volume the volume to map data from
     * @param surface the surface to map the data onto
     * @param metric_out the output metric file
     * @param opt_trilinear use trilinear volume interpolation
     * @param opt_enclosing use value of the enclosing voxel
     * @param opt_cubic use cubic splines
     * @param ribbon_constrained use ribbon constrained mapping algorithm
     * @param myelin_style use the method from myelin mapping
     * @param opt_subvol_select_subvol select a single subvolume to map: the subvolume number or name
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeToSurfaceMappingOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_TO_SURFACE_MAPPING_METADATA);
    const params = volume_to_surface_mapping_params(volume, surface, metric_out, opt_trilinear, opt_enclosing, opt_cubic, ribbon_constrained, myelin_style, opt_subvol_select_subvol)
    return volume_to_surface_mapping_execute(params, execution);
}


export {
      VOLUME_TO_SURFACE_MAPPING_METADATA,
      VolumeToSurfaceMappingMyelinStyleParameters,
      VolumeToSurfaceMappingOutputWeightsOutputs,
      VolumeToSurfaceMappingOutputWeightsParameters,
      VolumeToSurfaceMappingOutputs,
      VolumeToSurfaceMappingParameters,
      VolumeToSurfaceMappingRibbonConstrainedOutputs,
      VolumeToSurfaceMappingRibbonConstrainedParameters,
      VolumeToSurfaceMappingVolumeRoiParameters,
      volume_to_surface_mapping,
      volume_to_surface_mapping_myelin_style_params,
      volume_to_surface_mapping_output_weights_params,
      volume_to_surface_mapping_params,
      volume_to_surface_mapping_ribbon_constrained_params,
      volume_to_surface_mapping_volume_roi_params,
};
