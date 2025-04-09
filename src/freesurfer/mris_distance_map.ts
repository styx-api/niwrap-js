// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_DISTANCE_MAP_METADATA: Metadata = {
    id: "0893c6f050e343dadac472a8f00aeaaaecf0a30c.boutiques",
    name: "mris_distance_map",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisDistanceMapParameters {
    "__STYXTYPE__": "mris_distance_map";
    "input_surface_file": InputPathType;
    "output_scalar_field": string;
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
        "mris_distance_map": mris_distance_map_cargs,
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
        "mris_distance_map": mris_distance_map_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_distance_map(...)`.
 *
 * @interface
 */
interface MrisDistanceMapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output scalar field file
     */
    output_file: OutputPathType;
}


function mris_distance_map_params(
    input_surface_file: InputPathType,
    output_scalar_field: string,
): MrisDistanceMapParameters {
    /**
     * Build parameters.
    
     * @param input_surface_file Input surface file
     * @param output_scalar_field Output scalar field (.mgz)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_distance_map" as const,
        "input_surface_file": input_surface_file,
        "output_scalar_field": output_scalar_field,
    };
    return params;
}


function mris_distance_map_cargs(
    params: MrisDistanceMapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_distance_map");
    cargs.push(execution.inputFile((params["input_surface_file"] ?? null)));
    cargs.push((params["output_scalar_field"] ?? null));
    return cargs;
}


function mris_distance_map_outputs(
    params: MrisDistanceMapParameters,
    execution: Execution,
): MrisDistanceMapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisDistanceMapOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_scalar_field"] ?? null), ".mgz"].join('')),
    };
    return ret;
}


function mris_distance_map_execute(
    params: MrisDistanceMapParameters,
    execution: Execution,
): MrisDistanceMapOutputs {
    /**
     * Tool to compute a distance map of each point on the surface to a reference point.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisDistanceMapOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_distance_map_cargs(params, execution)
    const ret = mris_distance_map_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_distance_map(
    input_surface_file: InputPathType,
    output_scalar_field: string,
    runner: Runner | null = null,
): MrisDistanceMapOutputs {
    /**
     * Tool to compute a distance map of each point on the surface to a reference point.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_surface_file Input surface file
     * @param output_scalar_field Output scalar field (.mgz)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisDistanceMapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_DISTANCE_MAP_METADATA);
    const params = mris_distance_map_params(input_surface_file, output_scalar_field)
    return mris_distance_map_execute(params, execution);
}


export {
      MRIS_DISTANCE_MAP_METADATA,
      MrisDistanceMapOutputs,
      MrisDistanceMapParameters,
      mris_distance_map,
      mris_distance_map_params,
};
