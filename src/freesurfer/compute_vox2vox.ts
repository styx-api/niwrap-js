// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const COMPUTE_VOX2VOX_METADATA: Metadata = {
    id: "9a7bf87929e316ff71cbf7100a4c060f4d38576b.boutiques",
    name: "compute_vox2vox",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface ComputeVox2voxParameters {
    "__STYXTYPE__": "compute_vox2vox";
    "source": InputPathType;
    "t4file": InputPathType;
    "target": InputPathType;
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
        "compute_vox2vox": compute_vox2vox_cargs,
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
        "compute_vox2vox": compute_vox2vox_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `compute_vox2vox(...)`.
 *
 * @interface
 */
interface ComputeVox2voxOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resulting transformed voxel-to-voxel 4dfp output file.
     */
    output: OutputPathType;
}


function compute_vox2vox_params(
    source: InputPathType,
    t4file: InputPathType,
    target: InputPathType,
): ComputeVox2voxParameters {
    /**
     * Build parameters.
    
     * @param source Input 4dfp source file.
     * @param t4file T4 transformation matrix file.
     * @param target Input 4dfp target file.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "compute_vox2vox" as const,
        "source": source,
        "t4file": t4file,
        "target": target,
    };
    return params;
}


function compute_vox2vox_cargs(
    params: ComputeVox2voxParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("compute_vox2vox");
    cargs.push(execution.inputFile((params["source"] ?? null)));
    cargs.push(execution.inputFile((params["t4file"] ?? null)));
    cargs.push(execution.inputFile((params["target"] ?? null)));
    return cargs;
}


function compute_vox2vox_outputs(
    params: ComputeVox2voxParameters,
    execution: Execution,
): ComputeVox2voxOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ComputeVox2voxOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile(["<replace_with_output_path_pattern>"].join('')),
    };
    return ret;
}


function compute_vox2vox_execute(
    params: ComputeVox2voxParameters,
    execution: Execution,
): ComputeVox2voxOutputs {
    /**
     * Tool for computing voxel-to-voxel transformations.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ComputeVox2voxOutputs`).
     */
    params = execution.params(params)
    const cargs = compute_vox2vox_cargs(params, execution)
    const ret = compute_vox2vox_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function compute_vox2vox(
    source: InputPathType,
    t4file: InputPathType,
    target: InputPathType,
    runner: Runner | null = null,
): ComputeVox2voxOutputs {
    /**
     * Tool for computing voxel-to-voxel transformations.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param source Input 4dfp source file.
     * @param t4file T4 transformation matrix file.
     * @param target Input 4dfp target file.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ComputeVox2voxOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(COMPUTE_VOX2VOX_METADATA);
    const params = compute_vox2vox_params(source, t4file, target)
    return compute_vox2vox_execute(params, execution);
}


export {
      COMPUTE_VOX2VOX_METADATA,
      ComputeVox2voxOutputs,
      ComputeVox2voxParameters,
      compute_vox2vox,
      compute_vox2vox_params,
};
