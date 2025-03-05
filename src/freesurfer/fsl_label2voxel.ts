// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_LABEL2VOXEL_METADATA: Metadata = {
    id: "1a0b4441c6daf326201e9ffe4e61b70d47c06809.boutiques",
    name: "fsl_label2voxel",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FslLabel2voxelParameters {
    "__STYXTYPE__": "fsl_label2voxel";
    "label_value": number;
    "labeled_volume": InputPathType;
    "src_volume": InputPathType;
    "output_filename": string;
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
        "fsl_label2voxel": fsl_label2voxel_cargs,
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
        "fsl_label2voxel": fsl_label2voxel_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_label2voxel(...)`.
 *
 * @interface
 */
interface FslLabel2voxelOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output voxel data based on the specified label value
     */
    output_voxel_data: OutputPathType;
}


function fsl_label2voxel_params(
    label_value: number,
    labeled_volume: InputPathType,
    src_volume: InputPathType,
    output_filename: string,
): FslLabel2voxelParameters {
    /**
     * Build parameters.
    
     * @param label_value Label value to convert
     * @param labeled_volume Labeled volume file
     * @param src_volume Source volume file
     * @param output_filename Output filename for voxel data
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_label2voxel" as const,
        "label_value": label_value,
        "labeled_volume": labeled_volume,
        "src_volume": src_volume,
        "output_filename": output_filename,
    };
    return params;
}


function fsl_label2voxel_cargs(
    params: FslLabel2voxelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_label2voxel");
    cargs.push(String((params["label_value"] ?? null)));
    cargs.push(execution.inputFile((params["labeled_volume"] ?? null)));
    cargs.push(execution.inputFile((params["src_volume"] ?? null)));
    cargs.push((params["output_filename"] ?? null));
    return cargs;
}


function fsl_label2voxel_outputs(
    params: FslLabel2voxelParameters,
    execution: Execution,
): FslLabel2voxelOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslLabel2voxelOutputs = {
        root: execution.outputFile("."),
        output_voxel_data: execution.outputFile([(params["output_filename"] ?? null)].join('')),
    };
    return ret;
}


function fsl_label2voxel_execute(
    params: FslLabel2voxelParameters,
    execution: Execution,
): FslLabel2voxelOutputs {
    /**
     * Converts labeled volumes to voxels based on specified labels.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslLabel2voxelOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_label2voxel_cargs(params, execution)
    const ret = fsl_label2voxel_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_label2voxel(
    label_value: number,
    labeled_volume: InputPathType,
    src_volume: InputPathType,
    output_filename: string,
    runner: Runner | null = null,
): FslLabel2voxelOutputs {
    /**
     * Converts labeled volumes to voxels based on specified labels.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param label_value Label value to convert
     * @param labeled_volume Labeled volume file
     * @param src_volume Source volume file
     * @param output_filename Output filename for voxel data
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslLabel2voxelOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_LABEL2VOXEL_METADATA);
    const params = fsl_label2voxel_params(label_value, labeled_volume, src_volume, output_filename)
    return fsl_label2voxel_execute(params, execution);
}


export {
      FSL_LABEL2VOXEL_METADATA,
      FslLabel2voxelOutputs,
      FslLabel2voxelParameters,
      fsl_label2voxel,
      fsl_label2voxel_params,
};
