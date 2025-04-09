// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const LABEL_TO_VOLUME_MAPPING_METADATA: Metadata = {
    id: "1002c8cc85faa2800b3c565c6faed87584c74e9e.boutiques",
    name: "label-to-volume-mapping",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface LabelToVolumeMappingRibbonConstrainedParameters {
    "__STYXTYPE__": "ribbon_constrained";
    "inner_surf": InputPathType;
    "outer_surf": InputPathType;
    "opt_voxel_subdiv_subdiv_num"?: number | null | undefined;
    "opt_greedy": boolean;
    "opt_thick_columns": boolean;
}


interface LabelToVolumeMappingParameters {
    "__STYXTYPE__": "label-to-volume-mapping";
    "label": InputPathType;
    "surface": InputPathType;
    "volume_space": InputPathType;
    "volume_out": string;
    "opt_nearest_vertex_distance"?: number | null | undefined;
    "ribbon_constrained"?: LabelToVolumeMappingRibbonConstrainedParameters | null | undefined;
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
        "label-to-volume-mapping": label_to_volume_mapping_cargs,
        "ribbon_constrained": label_to_volume_mapping_ribbon_constrained_cargs,
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
        "label-to-volume-mapping": label_to_volume_mapping_outputs,
    };
    return outputsFuncs[t];
}


function label_to_volume_mapping_ribbon_constrained_params(
    inner_surf: InputPathType,
    outer_surf: InputPathType,
    opt_voxel_subdiv_subdiv_num: number | null = null,
    opt_greedy: boolean = false,
    opt_thick_columns: boolean = false,
): LabelToVolumeMappingRibbonConstrainedParameters {
    /**
     * Build parameters.
    
     * @param inner_surf the inner surface of the ribbon
     * @param outer_surf the outer surface of the ribbon
     * @param opt_voxel_subdiv_subdiv_num voxel divisions while estimating voxel weights: number of subdivisions, default 3
     * @param opt_greedy also put labels in voxels with less than 50% partial volume (legacy behavior)
     * @param opt_thick_columns use overlapping columns (legacy method)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "ribbon_constrained" as const,
        "inner_surf": inner_surf,
        "outer_surf": outer_surf,
        "opt_greedy": opt_greedy,
        "opt_thick_columns": opt_thick_columns,
    };
    if (opt_voxel_subdiv_subdiv_num !== null) {
        params["opt_voxel_subdiv_subdiv_num"] = opt_voxel_subdiv_subdiv_num;
    }
    return params;
}


function label_to_volume_mapping_ribbon_constrained_cargs(
    params: LabelToVolumeMappingRibbonConstrainedParameters,
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
    if ((params["opt_voxel_subdiv_subdiv_num"] ?? null) !== null) {
        cargs.push(
            "-voxel-subdiv",
            String((params["opt_voxel_subdiv_subdiv_num"] ?? null))
        );
    }
    if ((params["opt_greedy"] ?? null)) {
        cargs.push("-greedy");
    }
    if ((params["opt_thick_columns"] ?? null)) {
        cargs.push("-thick-columns");
    }
    return cargs;
}


/**
 * Output object returned when calling `label_to_volume_mapping(...)`.
 *
 * @interface
 */
interface LabelToVolumeMappingOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output volume file
     */
    volume_out: OutputPathType;
}


function label_to_volume_mapping_params(
    label: InputPathType,
    surface: InputPathType,
    volume_space: InputPathType,
    volume_out: string,
    opt_nearest_vertex_distance: number | null = null,
    ribbon_constrained: LabelToVolumeMappingRibbonConstrainedParameters | null = null,
): LabelToVolumeMappingParameters {
    /**
     * Build parameters.
    
     * @param label the input label file
     * @param surface the surface to use coordinates from
     * @param volume_space a volume file in the desired output volume space
     * @param volume_out the output volume file
     * @param opt_nearest_vertex_distance use the label from the vertex closest to the voxel center: how far from the surface to map labels to voxels, in mm
     * @param ribbon_constrained use ribbon constrained mapping algorithm
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "label-to-volume-mapping" as const,
        "label": label,
        "surface": surface,
        "volume_space": volume_space,
        "volume_out": volume_out,
    };
    if (opt_nearest_vertex_distance !== null) {
        params["opt_nearest_vertex_distance"] = opt_nearest_vertex_distance;
    }
    if (ribbon_constrained !== null) {
        params["ribbon_constrained"] = ribbon_constrained;
    }
    return params;
}


function label_to_volume_mapping_cargs(
    params: LabelToVolumeMappingParameters,
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
    cargs.push("-label-to-volume-mapping");
    cargs.push(execution.inputFile((params["label"] ?? null)));
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push(execution.inputFile((params["volume_space"] ?? null)));
    cargs.push((params["volume_out"] ?? null));
    if ((params["opt_nearest_vertex_distance"] ?? null) !== null) {
        cargs.push(
            "-nearest-vertex",
            String((params["opt_nearest_vertex_distance"] ?? null))
        );
    }
    if ((params["ribbon_constrained"] ?? null) !== null) {
        cargs.push(...dynCargs((params["ribbon_constrained"] ?? null).__STYXTYPE__)((params["ribbon_constrained"] ?? null), execution));
    }
    return cargs;
}


function label_to_volume_mapping_outputs(
    params: LabelToVolumeMappingParameters,
    execution: Execution,
): LabelToVolumeMappingOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: LabelToVolumeMappingOutputs = {
        root: execution.outputFile("."),
        volume_out: execution.outputFile([(params["volume_out"] ?? null)].join('')),
    };
    return ret;
}


function label_to_volume_mapping_execute(
    params: LabelToVolumeMappingParameters,
    execution: Execution,
): LabelToVolumeMappingOutputs {
    /**
     * Map label file to volume.
     * 
     * Maps labels from a gifti label file into a volume file.  You must specify exactly one mapping method option.  The -nearest-vertex method uses the label from the vertex closest to the voxel center.  The -ribbon-constrained method uses the same method as in -volume-to-surface-mapping, then uses the weights in reverse, with popularity logic to decide on a label to use.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `LabelToVolumeMappingOutputs`).
     */
    params = execution.params(params)
    const cargs = label_to_volume_mapping_cargs(params, execution)
    const ret = label_to_volume_mapping_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function label_to_volume_mapping(
    label: InputPathType,
    surface: InputPathType,
    volume_space: InputPathType,
    volume_out: string,
    opt_nearest_vertex_distance: number | null = null,
    ribbon_constrained: LabelToVolumeMappingRibbonConstrainedParameters | null = null,
    runner: Runner | null = null,
): LabelToVolumeMappingOutputs {
    /**
     * Map label file to volume.
     * 
     * Maps labels from a gifti label file into a volume file.  You must specify exactly one mapping method option.  The -nearest-vertex method uses the label from the vertex closest to the voxel center.  The -ribbon-constrained method uses the same method as in -volume-to-surface-mapping, then uses the weights in reverse, with popularity logic to decide on a label to use.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param label the input label file
     * @param surface the surface to use coordinates from
     * @param volume_space a volume file in the desired output volume space
     * @param volume_out the output volume file
     * @param opt_nearest_vertex_distance use the label from the vertex closest to the voxel center: how far from the surface to map labels to voxels, in mm
     * @param ribbon_constrained use ribbon constrained mapping algorithm
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `LabelToVolumeMappingOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(LABEL_TO_VOLUME_MAPPING_METADATA);
    const params = label_to_volume_mapping_params(label, surface, volume_space, volume_out, opt_nearest_vertex_distance, ribbon_constrained)
    return label_to_volume_mapping_execute(params, execution);
}


export {
      LABEL_TO_VOLUME_MAPPING_METADATA,
      LabelToVolumeMappingOutputs,
      LabelToVolumeMappingParameters,
      LabelToVolumeMappingRibbonConstrainedParameters,
      label_to_volume_mapping,
      label_to_volume_mapping_params,
      label_to_volume_mapping_ribbon_constrained_params,
};
