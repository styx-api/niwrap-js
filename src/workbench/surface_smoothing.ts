// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SURFACE_SMOOTHING_METADATA: Metadata = {
    id: "6b32ba9da0ff9007c9ff329a9f9ea689f27d2a20.boutiques",
    name: "surface-smoothing",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface SurfaceSmoothingParameters {
    "__STYXTYPE__": "surface-smoothing";
    "surface_in": InputPathType;
    "smoothing_strength": number;
    "smoothing_iterations": number;
    "surface_out": string;
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
        "surface-smoothing": surface_smoothing_cargs,
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
        "surface-smoothing": surface_smoothing_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `surface_smoothing(...)`.
 *
 * @interface
 */
interface SurfaceSmoothingOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * output surface file
     */
    surface_out: OutputPathType;
}


function surface_smoothing_params(
    surface_in: InputPathType,
    smoothing_strength: number,
    smoothing_iterations: number,
    surface_out: string,
): SurfaceSmoothingParameters {
    /**
     * Build parameters.
    
     * @param surface_in the surface file to smooth
     * @param smoothing_strength smoothing strength (ranges [0.0 - 1.0])
     * @param smoothing_iterations smoothing iterations
     * @param surface_out output surface file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "surface-smoothing" as const,
        "surface_in": surface_in,
        "smoothing_strength": smoothing_strength,
        "smoothing_iterations": smoothing_iterations,
        "surface_out": surface_out,
    };
    return params;
}


function surface_smoothing_cargs(
    params: SurfaceSmoothingParameters,
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
    cargs.push("-surface-smoothing");
    cargs.push(execution.inputFile((params["surface_in"] ?? null)));
    cargs.push(String((params["smoothing_strength"] ?? null)));
    cargs.push(String((params["smoothing_iterations"] ?? null)));
    cargs.push((params["surface_out"] ?? null));
    return cargs;
}


function surface_smoothing_outputs(
    params: SurfaceSmoothingParameters,
    execution: Execution,
): SurfaceSmoothingOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SurfaceSmoothingOutputs = {
        root: execution.outputFile("."),
        surface_out: execution.outputFile([(params["surface_out"] ?? null)].join('')),
    };
    return ret;
}


function surface_smoothing_execute(
    params: SurfaceSmoothingParameters,
    execution: Execution,
): SurfaceSmoothingOutputs {
    /**
     * Surface smoothing.
     * 
     * Smooths a surface by averaging vertex coordinates with those of the neighboring vertices.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SurfaceSmoothingOutputs`).
     */
    params = execution.params(params)
    const cargs = surface_smoothing_cargs(params, execution)
    const ret = surface_smoothing_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function surface_smoothing(
    surface_in: InputPathType,
    smoothing_strength: number,
    smoothing_iterations: number,
    surface_out: string,
    runner: Runner | null = null,
): SurfaceSmoothingOutputs {
    /**
     * Surface smoothing.
     * 
     * Smooths a surface by averaging vertex coordinates with those of the neighboring vertices.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param surface_in the surface file to smooth
     * @param smoothing_strength smoothing strength (ranges [0.0 - 1.0])
     * @param smoothing_iterations smoothing iterations
     * @param surface_out output surface file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SurfaceSmoothingOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SURFACE_SMOOTHING_METADATA);
    const params = surface_smoothing_params(surface_in, smoothing_strength, smoothing_iterations, surface_out)
    return surface_smoothing_execute(params, execution);
}


export {
      SURFACE_SMOOTHING_METADATA,
      SurfaceSmoothingOutputs,
      SurfaceSmoothingParameters,
      surface_smoothing,
      surface_smoothing_params,
};
