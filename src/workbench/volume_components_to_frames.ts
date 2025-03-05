// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_COMPONENTS_TO_FRAMES_METADATA: Metadata = {
    id: "ada7a00c2444c2cdda91b6587672b293db9d33c4.boutiques",
    name: "volume-components-to-frames",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeComponentsToFramesParameters {
    "__STYXTYPE__": "volume-components-to-frames";
    "input": InputPathType;
    "output": string;
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
        "volume-components-to-frames": volume_components_to_frames_cargs,
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
        "volume-components-to-frames": volume_components_to_frames_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `volume_components_to_frames(...)`.
 *
 * @interface
 */
interface VolumeComponentsToFramesOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the input volume converted to multiple frames of scalar type
     */
    output: OutputPathType;
}


function volume_components_to_frames_params(
    input: InputPathType,
    output: string,
): VolumeComponentsToFramesParameters {
    /**
     * Build parameters.
    
     * @param input the RGB/complex-type volume
     * @param output the input volume converted to multiple frames of scalar type
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-components-to-frames" as const,
        "input": input,
        "output": output,
    };
    return params;
}


function volume_components_to_frames_cargs(
    params: VolumeComponentsToFramesParameters,
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
    cargs.push("-volume-components-to-frames");
    cargs.push(execution.inputFile((params["input"] ?? null)));
    cargs.push((params["output"] ?? null));
    return cargs;
}


function volume_components_to_frames_outputs(
    params: VolumeComponentsToFramesParameters,
    execution: Execution,
): VolumeComponentsToFramesOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeComponentsToFramesOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function volume_components_to_frames_execute(
    params: VolumeComponentsToFramesParameters,
    execution: Execution,
): VolumeComponentsToFramesOutputs {
    /**
     * Convert rgb/complex volume to frames.
     * 
     * RGB and complex datatypes are not always well supported, this command allows separating them into standard subvolumes for better support.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VolumeComponentsToFramesOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_components_to_frames_cargs(params, execution)
    const ret = volume_components_to_frames_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_components_to_frames(
    input: InputPathType,
    output: string,
    runner: Runner | null = null,
): VolumeComponentsToFramesOutputs {
    /**
     * Convert rgb/complex volume to frames.
     * 
     * RGB and complex datatypes are not always well supported, this command allows separating them into standard subvolumes for better support.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param input the RGB/complex-type volume
     * @param output the input volume converted to multiple frames of scalar type
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeComponentsToFramesOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_COMPONENTS_TO_FRAMES_METADATA);
    const params = volume_components_to_frames_params(input, output)
    return volume_components_to_frames_execute(params, execution);
}


export {
      VOLUME_COMPONENTS_TO_FRAMES_METADATA,
      VolumeComponentsToFramesOutputs,
      VolumeComponentsToFramesParameters,
      volume_components_to_frames,
      volume_components_to_frames_params,
};
