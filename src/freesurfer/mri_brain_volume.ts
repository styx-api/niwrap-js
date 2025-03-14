// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_BRAIN_VOLUME_METADATA: Metadata = {
    id: "7e192aa897893490560e7414f5f2c974f66d8c71.boutiques",
    name: "mri_brain_volume",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriBrainVolumeParameters {
    "__STYXTYPE__": "mri_brain_volume";
    "input_file": InputPathType;
    "output_file"?: string | null | undefined;
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
        "mri_brain_volume": mri_brain_volume_cargs,
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
        "mri_brain_volume": mri_brain_volume_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_brain_volume(...)`.
 *
 * @interface
 */
interface MriBrainVolumeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file containing brain volume information
     */
    output_volume_file: OutputPathType | null;
}


function mri_brain_volume_params(
    input_file: InputPathType,
    output_file: string | null = null,
): MriBrainVolumeParameters {
    /**
     * Build parameters.
    
     * @param input_file Input MRI file
     * @param output_file Output file for brain volume
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_brain_volume" as const,
        "input_file": input_file,
    };
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    return params;
}


function mri_brain_volume_cargs(
    params: MriBrainVolumeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_brain_volume");
    cargs.push("[OPTIONS]");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    if ((params["output_file"] ?? null) !== null) {
        cargs.push((params["output_file"] ?? null));
    }
    return cargs;
}


function mri_brain_volume_outputs(
    params: MriBrainVolumeParameters,
    execution: Execution,
): MriBrainVolumeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriBrainVolumeOutputs = {
        root: execution.outputFile("."),
        output_volume_file: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function mri_brain_volume_execute(
    params: MriBrainVolumeParameters,
    execution: Execution,
): MriBrainVolumeOutputs {
    /**
     * Tool to calculate brain volume from MRI scans.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriBrainVolumeOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_brain_volume_cargs(params, execution)
    const ret = mri_brain_volume_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_brain_volume(
    input_file: InputPathType,
    output_file: string | null = null,
    runner: Runner | null = null,
): MriBrainVolumeOutputs {
    /**
     * Tool to calculate brain volume from MRI scans.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input MRI file
     * @param output_file Output file for brain volume
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriBrainVolumeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_BRAIN_VOLUME_METADATA);
    const params = mri_brain_volume_params(input_file, output_file)
    return mri_brain_volume_execute(params, execution);
}


export {
      MRI_BRAIN_VOLUME_METADATA,
      MriBrainVolumeOutputs,
      MriBrainVolumeParameters,
      mri_brain_volume,
      mri_brain_volume_params,
};
