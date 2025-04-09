// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FOCI_GET_PROJECTION_VERTEX_METADATA: Metadata = {
    id: "28cf0856b5a3b450830b791c515e9e522ca10f04.boutiques",
    name: "foci-get-projection-vertex",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface FociGetProjectionVertexParameters {
    "__STYXTYPE__": "foci-get-projection-vertex";
    "foci": InputPathType;
    "surface": InputPathType;
    "metric_out": string;
    "opt_name_name"?: string | null | undefined;
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
        "foci-get-projection-vertex": foci_get_projection_vertex_cargs,
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
        "foci-get-projection-vertex": foci_get_projection_vertex_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `foci_get_projection_vertex(...)`.
 *
 * @interface
 */
interface FociGetProjectionVertexOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output metric file
     */
    metric_out: OutputPathType;
}


function foci_get_projection_vertex_params(
    foci: InputPathType,
    surface: InputPathType,
    metric_out: string,
    opt_name_name: string | null = null,
): FociGetProjectionVertexParameters {
    /**
     * Build parameters.
    
     * @param foci the foci file
     * @param surface the surface related to the foci file
     * @param metric_out the output metric file
     * @param opt_name_name select a focus by name: the name of the focus
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "foci-get-projection-vertex" as const,
        "foci": foci,
        "surface": surface,
        "metric_out": metric_out,
    };
    if (opt_name_name !== null) {
        params["opt_name_name"] = opt_name_name;
    }
    return params;
}


function foci_get_projection_vertex_cargs(
    params: FociGetProjectionVertexParameters,
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
    cargs.push("-foci-get-projection-vertex");
    cargs.push(execution.inputFile((params["foci"] ?? null)));
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    cargs.push((params["metric_out"] ?? null));
    if ((params["opt_name_name"] ?? null) !== null) {
        cargs.push(
            "-name",
            (params["opt_name_name"] ?? null)
        );
    }
    return cargs;
}


function foci_get_projection_vertex_outputs(
    params: FociGetProjectionVertexParameters,
    execution: Execution,
): FociGetProjectionVertexOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FociGetProjectionVertexOutputs = {
        root: execution.outputFile("."),
        metric_out: execution.outputFile([(params["metric_out"] ?? null)].join('')),
    };
    return ret;
}


function foci_get_projection_vertex_execute(
    params: FociGetProjectionVertexParameters,
    execution: Execution,
): FociGetProjectionVertexOutputs {
    /**
     * Get projection vertex for foci.
     * 
     * For each focus, a column is created in <metric-out>, and the vertex with the most influence on its projection is assigned a value of 1 in that column, with all other vertices 0.  If -name is used, only one focus will be used.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FociGetProjectionVertexOutputs`).
     */
    params = execution.params(params)
    const cargs = foci_get_projection_vertex_cargs(params, execution)
    const ret = foci_get_projection_vertex_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function foci_get_projection_vertex(
    foci: InputPathType,
    surface: InputPathType,
    metric_out: string,
    opt_name_name: string | null = null,
    runner: Runner | null = null,
): FociGetProjectionVertexOutputs {
    /**
     * Get projection vertex for foci.
     * 
     * For each focus, a column is created in <metric-out>, and the vertex with the most influence on its projection is assigned a value of 1 in that column, with all other vertices 0.  If -name is used, only one focus will be used.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param foci the foci file
     * @param surface the surface related to the foci file
     * @param metric_out the output metric file
     * @param opt_name_name select a focus by name: the name of the focus
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FociGetProjectionVertexOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FOCI_GET_PROJECTION_VERTEX_METADATA);
    const params = foci_get_projection_vertex_params(foci, surface, metric_out, opt_name_name)
    return foci_get_projection_vertex_execute(params, execution);
}


export {
      FOCI_GET_PROJECTION_VERTEX_METADATA,
      FociGetProjectionVertexOutputs,
      FociGetProjectionVertexParameters,
      foci_get_projection_vertex,
      foci_get_projection_vertex_params,
};
