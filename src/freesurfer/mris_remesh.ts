// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_REMESH_METADATA: Metadata = {
    id: "040169fbc540d467ef423e58c64e1b78e83cb580.boutiques",
    name: "mris_remesh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisRemeshParameters {
    "__STYXTYPE__": "mris_remesh";
    "input": InputPathType;
    "output": string;
    "edge_length"?: number | null | undefined;
    "num_vertices"?: number | null | undefined;
    "face_area"?: number | null | undefined;
    "remesh": boolean;
    "iterations"?: number | null | undefined;
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
        "mris_remesh": mris_remesh_cargs,
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
        "mris_remesh": mris_remesh_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_remesh(...)`.
 *
 * @interface
 */
interface MrisRemeshOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Remeshed output surface file
     */
    remeshed_output: OutputPathType;
}


function mris_remesh_params(
    input: InputPathType,
    output: string,
    edge_length: number | null = null,
    num_vertices: number | null = null,
    face_area: number | null = null,
    remesh: boolean = false,
    iterations: number | null = null,
): MrisRemeshParameters {
    /**
     * Build parameters.
    
     * @param input Input surface file
     * @param output Output surface file
     * @param edge_length Target average edge length in mm for remeshed surface
     * @param num_vertices Target number of vertices for remeshed surface
     * @param face_area Desired average face area in mm²
     * @param remesh Improve the quality while only reducing vertices by a small amount
     * @param iterations Number of remeshing iterations (default is 5)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_remesh" as const,
        "input": input,
        "output": output,
        "remesh": remesh,
    };
    if (edge_length !== null) {
        params["edge_length"] = edge_length;
    }
    if (num_vertices !== null) {
        params["num_vertices"] = num_vertices;
    }
    if (face_area !== null) {
        params["face_area"] = face_area;
    }
    if (iterations !== null) {
        params["iterations"] = iterations;
    }
    return params;
}


function mris_remesh_cargs(
    params: MrisRemeshParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_remesh");
    cargs.push(
        "-i",
        execution.inputFile((params["input"] ?? null))
    );
    cargs.push(
        "-o",
        (params["output"] ?? null)
    );
    if ((params["edge_length"] ?? null) !== null) {
        cargs.push(
            "--edge-len",
            String((params["edge_length"] ?? null))
        );
    }
    if ((params["num_vertices"] ?? null) !== null) {
        cargs.push(
            "--nvert",
            String((params["num_vertices"] ?? null))
        );
    }
    if ((params["face_area"] ?? null) !== null) {
        cargs.push(
            "--desired-face-area",
            String((params["face_area"] ?? null))
        );
    }
    if ((params["remesh"] ?? null)) {
        cargs.push("--remesh");
    }
    if ((params["iterations"] ?? null) !== null) {
        cargs.push(
            "--iters",
            String((params["iterations"] ?? null))
        );
    }
    return cargs;
}


function mris_remesh_outputs(
    params: MrisRemeshParameters,
    execution: Execution,
): MrisRemeshOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisRemeshOutputs = {
        root: execution.outputFile("."),
        remeshed_output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function mris_remesh_execute(
    params: MrisRemeshParameters,
    execution: Execution,
): MrisRemeshOutputs {
    /**
     * Remeshes a surface to a desired edge length, number of vertices, or average face area.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisRemeshOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_remesh_cargs(params, execution)
    const ret = mris_remesh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_remesh(
    input: InputPathType,
    output: string,
    edge_length: number | null = null,
    num_vertices: number | null = null,
    face_area: number | null = null,
    remesh: boolean = false,
    iterations: number | null = null,
    runner: Runner | null = null,
): MrisRemeshOutputs {
    /**
     * Remeshes a surface to a desired edge length, number of vertices, or average face area.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input Input surface file
     * @param output Output surface file
     * @param edge_length Target average edge length in mm for remeshed surface
     * @param num_vertices Target number of vertices for remeshed surface
     * @param face_area Desired average face area in mm²
     * @param remesh Improve the quality while only reducing vertices by a small amount
     * @param iterations Number of remeshing iterations (default is 5)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisRemeshOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_REMESH_METADATA);
    const params = mris_remesh_params(input, output, edge_length, num_vertices, face_area, remesh, iterations)
    return mris_remesh_execute(params, execution);
}


export {
      MRIS_REMESH_METADATA,
      MrisRemeshOutputs,
      MrisRemeshParameters,
      mris_remesh,
      mris_remesh_params,
};
