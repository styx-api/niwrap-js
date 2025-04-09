// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_REMOVE_NECK_METADATA: Metadata = {
    id: "816c0b5433a26ae4baa8b91d1bbe9f04ac56345b.boutiques",
    name: "mri_remove_neck",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriRemoveNeckParameters {
    "__STYXTYPE__": "mri_remove_neck";
    "input_volume": InputPathType;
    "transform": InputPathType;
    "gca": InputPathType;
    "output_volume": string;
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
        "mri_remove_neck": mri_remove_neck_cargs,
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
        "mri_remove_neck": mri_remove_neck_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_remove_neck(...)`.
 *
 * @interface
 */
interface MriRemoveNeckOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Processed MRI volume with neck removed.
     */
    output_volume_file: OutputPathType;
}


function mri_remove_neck_params(
    input_volume: InputPathType,
    transform: InputPathType,
    gca: InputPathType,
    output_volume: string,
): MriRemoveNeckParameters {
    /**
     * Build parameters.
    
     * @param input_volume Input MRI volume.
     * @param transform Transformation matrix to register the volume.
     * @param gca GCA file needed for processing.
     * @param output_volume Output MRI volume with the neck removed.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_remove_neck" as const,
        "input_volume": input_volume,
        "transform": transform,
        "gca": gca,
        "output_volume": output_volume,
    };
    return params;
}


function mri_remove_neck_cargs(
    params: MriRemoveNeckParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_remove_neck");
    cargs.push(execution.inputFile((params["input_volume"] ?? null)));
    cargs.push(execution.inputFile((params["transform"] ?? null)));
    cargs.push(execution.inputFile((params["gca"] ?? null)));
    cargs.push((params["output_volume"] ?? null));
    return cargs;
}


function mri_remove_neck_outputs(
    params: MriRemoveNeckParameters,
    execution: Execution,
): MriRemoveNeckOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriRemoveNeckOutputs = {
        root: execution.outputFile("."),
        output_volume_file: execution.outputFile([(params["output_volume"] ?? null)].join('')),
    };
    return ret;
}


function mri_remove_neck_execute(
    params: MriRemoveNeckParameters,
    execution: Execution,
): MriRemoveNeckOutputs {
    /**
     * Tool for removing neck from MRI volumes.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriRemoveNeckOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_remove_neck_cargs(params, execution)
    const ret = mri_remove_neck_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_remove_neck(
    input_volume: InputPathType,
    transform: InputPathType,
    gca: InputPathType,
    output_volume: string,
    runner: Runner | null = null,
): MriRemoveNeckOutputs {
    /**
     * Tool for removing neck from MRI volumes.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_volume Input MRI volume.
     * @param transform Transformation matrix to register the volume.
     * @param gca GCA file needed for processing.
     * @param output_volume Output MRI volume with the neck removed.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriRemoveNeckOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_REMOVE_NECK_METADATA);
    const params = mri_remove_neck_params(input_volume, transform, gca, output_volume)
    return mri_remove_neck_execute(params, execution);
}


export {
      MRI_REMOVE_NECK_METADATA,
      MriRemoveNeckOutputs,
      MriRemoveNeckParameters,
      mri_remove_neck,
      mri_remove_neck_params,
};
