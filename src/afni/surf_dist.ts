// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SURF_DIST_METADATA: Metadata = {
    id: "4b7fc8f067afc394968ebdfef5be6b16641eee5b.boutiques",
    name: "SurfDist",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface SurfDistParameters {
    "__STYXTYPE__": "SurfDist";
    "surface": InputPathType;
    "nodepairs": InputPathType;
    "node_path_do"?: string | null | undefined;
    "graph": boolean;
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
        "SurfDist": surf_dist_cargs,
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
        "SurfDist": surf_dist_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `surf_dist(...)`.
 *
 * @interface
 */
interface SurfDistOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File containing the distances between nodes
     */
    distances: OutputPathType;
}


function surf_dist_params(
    surface: InputPathType,
    nodepairs: InputPathType,
    node_path_do: string | null = null,
    graph: boolean = false,
): SurfDistParameters {
    /**
     * Build parameters.
    
     * @param surface Surface on which distances are computed.
     * @param nodepairs Specify node pairs for distance computation.
     * @param node_path_do Output the shortest path between each node pair as a SUMA Displayable object.
     * @param graph Calculate distance along the mesh (default).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "SurfDist" as const,
        "surface": surface,
        "nodepairs": nodepairs,
        "graph": graph,
    };
    if (node_path_do !== null) {
        params["node_path_do"] = node_path_do;
    }
    return params;
}


function surf_dist_cargs(
    params: SurfDistParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("SurfDist");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push(execution.inputFile((params["nodepairs"] ?? null)));
    if ((params["node_path_do"] ?? null) !== null) {
        cargs.push(
            "-node_path_do",
            (params["node_path_do"] ?? null)
        );
    }
    if ((params["graph"] ?? null)) {
        cargs.push("-graph");
    }
    return cargs;
}


function surf_dist_outputs(
    params: SurfDistParameters,
    execution: Execution,
): SurfDistOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SurfDistOutputs = {
        root: execution.outputFile("."),
        distances: execution.outputFile(["example.1D"].join('')),
    };
    return ret;
}


function surf_dist_execute(
    params: SurfDistParameters,
    execution: Execution,
): SurfDistOutputs {
    /**
     * Calculate shortest distance between node pairs on a surface mesh.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SurfDistOutputs`).
     */
    params = execution.params(params)
    const cargs = surf_dist_cargs(params, execution)
    const ret = surf_dist_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function surf_dist(
    surface: InputPathType,
    nodepairs: InputPathType,
    node_path_do: string | null = null,
    graph: boolean = false,
    runner: Runner | null = null,
): SurfDistOutputs {
    /**
     * Calculate shortest distance between node pairs on a surface mesh.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param surface Surface on which distances are computed.
     * @param nodepairs Specify node pairs for distance computation.
     * @param node_path_do Output the shortest path between each node pair as a SUMA Displayable object.
     * @param graph Calculate distance along the mesh (default).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SurfDistOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SURF_DIST_METADATA);
    const params = surf_dist_params(surface, nodepairs, node_path_do, graph)
    return surf_dist_execute(params, execution);
}


export {
      SURF_DIST_METADATA,
      SurfDistOutputs,
      SurfDistParameters,
      surf_dist,
      surf_dist_params,
};
