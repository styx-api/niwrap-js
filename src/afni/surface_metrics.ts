// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SURFACE_METRICS_METADATA: Metadata = {
    id: "5e58dccd9bd1540ac2ae342efc61a7a9fc45c4c2.boutiques",
    name: "SurfaceMetrics",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface SurfaceMetricsParameters {
    "__STYXTYPE__": "SurfaceMetrics";
    "internal_nodes": boolean;
    "internal_nodes_1": boolean;
    "internal_nodes_2": boolean;
    "internal_nodes_3": boolean;
    "internal_nodes_4": boolean;
    "internal_nodes_5": boolean;
    "internal_nodes_6": boolean;
    "internal_nodes_7": boolean;
    "internal_nodes_8": boolean;
    "internal_nodes_9": boolean;
    "internal_nodes_10": boolean;
    "internal_nodes_11": boolean;
    "internal_nodes_12": boolean;
    "internal_nodes_13": boolean;
    "internal_nodes_14": boolean;
    "internal_nodes_15": boolean;
    "internal_nodes_16": boolean;
    "internal_nodes_17": boolean;
    "internal_nodes_18": boolean;
    "internal_nodes_19": boolean;
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
    internal_nodes: boolean = false,
    internal_nodes_1: boolean = false,
    internal_nodes_2: boolean = false,
    internal_nodes_3: boolean = false,
    internal_nodes_4: boolean = false,
    internal_nodes_5: boolean = false,
    internal_nodes_6: boolean = false,
    internal_nodes_7: boolean = false,
    internal_nodes_8: boolean = false,
    internal_nodes_9: boolean = false,
    internal_nodes_10: boolean = false,
    internal_nodes_11: boolean = false,
    internal_nodes_12: boolean = false,
    internal_nodes_13: boolean = false,
    internal_nodes_14: boolean = false,
    internal_nodes_15: boolean = false,
    internal_nodes_16: boolean = false,
    internal_nodes_17: boolean = false,
    internal_nodes_18: boolean = false,
    internal_nodes_19: boolean = false,
    tlrc: boolean = false,
    prefix: string | null = null,
): SurfaceMetricsParameters {
    /**
     * Build parameters.
    
     * @param surf1 Specifies the input surface.
     * @param internal_nodes Output nodes that are not a boundary.
     * @param internal_nodes_1 Output nodes that are not a boundary.
     * @param internal_nodes_2 Output nodes that are not a boundary.
     * @param internal_nodes_3 Output nodes that are not a boundary.
     * @param internal_nodes_4 Output nodes that are not a boundary.
     * @param internal_nodes_5 Output nodes that are not a boundary.
     * @param internal_nodes_6 Output nodes that are not a boundary.
     * @param internal_nodes_7 Output nodes that are not a boundary.
     * @param internal_nodes_8 Output nodes that are not a boundary.
     * @param internal_nodes_9 Output nodes that are not a boundary.
     * @param internal_nodes_10 Output nodes that are not a boundary.
     * @param internal_nodes_11 Output nodes that are not a boundary.
     * @param internal_nodes_12 Output nodes that are not a boundary.
     * @param internal_nodes_13 Output nodes that are not a boundary.
     * @param internal_nodes_14 Output nodes that are not a boundary.
     * @param internal_nodes_15 Output nodes that are not a boundary.
     * @param internal_nodes_16 Output nodes that are not a boundary.
     * @param internal_nodes_17 Output nodes that are not a boundary.
     * @param internal_nodes_18 Output nodes that are not a boundary.
     * @param internal_nodes_19 Output nodes that are not a boundary.
     * @param tlrc Apply Talairach transform to surface.
     * @param prefix Use prefix for output files.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "SurfaceMetrics" as const,
        "internal_nodes": internal_nodes,
        "internal_nodes_1": internal_nodes_1,
        "internal_nodes_2": internal_nodes_2,
        "internal_nodes_3": internal_nodes_3,
        "internal_nodes_4": internal_nodes_4,
        "internal_nodes_5": internal_nodes_5,
        "internal_nodes_6": internal_nodes_6,
        "internal_nodes_7": internal_nodes_7,
        "internal_nodes_8": internal_nodes_8,
        "internal_nodes_9": internal_nodes_9,
        "internal_nodes_10": internal_nodes_10,
        "internal_nodes_11": internal_nodes_11,
        "internal_nodes_12": internal_nodes_12,
        "internal_nodes_13": internal_nodes_13,
        "internal_nodes_14": internal_nodes_14,
        "internal_nodes_15": internal_nodes_15,
        "internal_nodes_16": internal_nodes_16,
        "internal_nodes_17": internal_nodes_17,
        "internal_nodes_18": internal_nodes_18,
        "internal_nodes_19": internal_nodes_19,
        "surf1": surf1,
        "tlrc": tlrc,
    };
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
    if ((params["internal_nodes"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_1"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_2"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_3"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_4"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_5"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_6"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_7"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_8"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_9"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_10"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_11"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_12"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_13"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_14"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_15"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_16"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_17"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_18"] ?? null)) {
        cargs.push("-internal_nodes");
    }
    if ((params["internal_nodes_19"] ?? null)) {
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
    internal_nodes: boolean = false,
    internal_nodes_1: boolean = false,
    internal_nodes_2: boolean = false,
    internal_nodes_3: boolean = false,
    internal_nodes_4: boolean = false,
    internal_nodes_5: boolean = false,
    internal_nodes_6: boolean = false,
    internal_nodes_7: boolean = false,
    internal_nodes_8: boolean = false,
    internal_nodes_9: boolean = false,
    internal_nodes_10: boolean = false,
    internal_nodes_11: boolean = false,
    internal_nodes_12: boolean = false,
    internal_nodes_13: boolean = false,
    internal_nodes_14: boolean = false,
    internal_nodes_15: boolean = false,
    internal_nodes_16: boolean = false,
    internal_nodes_17: boolean = false,
    internal_nodes_18: boolean = false,
    internal_nodes_19: boolean = false,
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
     * @param internal_nodes Output nodes that are not a boundary.
     * @param internal_nodes_1 Output nodes that are not a boundary.
     * @param internal_nodes_2 Output nodes that are not a boundary.
     * @param internal_nodes_3 Output nodes that are not a boundary.
     * @param internal_nodes_4 Output nodes that are not a boundary.
     * @param internal_nodes_5 Output nodes that are not a boundary.
     * @param internal_nodes_6 Output nodes that are not a boundary.
     * @param internal_nodes_7 Output nodes that are not a boundary.
     * @param internal_nodes_8 Output nodes that are not a boundary.
     * @param internal_nodes_9 Output nodes that are not a boundary.
     * @param internal_nodes_10 Output nodes that are not a boundary.
     * @param internal_nodes_11 Output nodes that are not a boundary.
     * @param internal_nodes_12 Output nodes that are not a boundary.
     * @param internal_nodes_13 Output nodes that are not a boundary.
     * @param internal_nodes_14 Output nodes that are not a boundary.
     * @param internal_nodes_15 Output nodes that are not a boundary.
     * @param internal_nodes_16 Output nodes that are not a boundary.
     * @param internal_nodes_17 Output nodes that are not a boundary.
     * @param internal_nodes_18 Output nodes that are not a boundary.
     * @param internal_nodes_19 Output nodes that are not a boundary.
     * @param tlrc Apply Talairach transform to surface.
     * @param prefix Use prefix for output files.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SurfaceMetricsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SURFACE_METRICS_METADATA);
    const params = surface_metrics_params(surf1, internal_nodes, internal_nodes_1, internal_nodes_2, internal_nodes_3, internal_nodes_4, internal_nodes_5, internal_nodes_6, internal_nodes_7, internal_nodes_8, internal_nodes_9, internal_nodes_10, internal_nodes_11, internal_nodes_12, internal_nodes_13, internal_nodes_14, internal_nodes_15, internal_nodes_16, internal_nodes_17, internal_nodes_18, internal_nodes_19, tlrc, prefix)
    return surface_metrics_execute(params, execution);
}


export {
      SURFACE_METRICS_METADATA,
      SurfaceMetricsOutputs,
      SurfaceMetricsParameters,
      surface_metrics,
      surface_metrics_params,
};
