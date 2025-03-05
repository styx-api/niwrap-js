// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CONNECTED_COMPONENTS_METADATA: Metadata = {
    id: "415ac7eebb3cd7123aaeb6ad6eb398b6cc1343ba.boutiques",
    name: "connected_components",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface ConnectedComponentsParameters {
    "__STYXTYPE__": "connected_components";
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
        "connected_components": connected_components_cargs,
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
        "connected_components": connected_components_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `connected_components(...)`.
 *
 * @interface
 */
interface ConnectedComponentsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Labeled connected components image output file.
     */
    output_labelled_image_file: OutputPathType;
}


function connected_components_params(
): ConnectedComponentsParameters {
    /**
     * Build parameters.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "connected_components" as const,
    };
    return params;
}


function connected_components_cargs(
    params: ConnectedComponentsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("connected_components");
    return cargs;
}


function connected_components_outputs(
    params: ConnectedComponentsParameters,
    execution: Execution,
): ConnectedComponentsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ConnectedComponentsOutputs = {
        root: execution.outputFile("."),
        output_labelled_image_file: execution.outputFile(["[OUTPUT_IMAGE].nii.gz"].join('')),
    };
    return ret;
}


function connected_components_execute(
    params: ConnectedComponentsParameters,
    execution: Execution,
): ConnectedComponentsOutputs {
    /**
     * A tool for identifying connected components in an image.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ConnectedComponentsOutputs`).
     */
    params = execution.params(params)
    const cargs = connected_components_cargs(params, execution)
    const ret = connected_components_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function connected_components(
    runner: Runner | null = null,
): ConnectedComponentsOutputs {
    /**
     * A tool for identifying connected components in an image.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ConnectedComponentsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CONNECTED_COMPONENTS_METADATA);
    const params = connected_components_params()
    return connected_components_execute(params, execution);
}


export {
      CONNECTED_COMPONENTS_METADATA,
      ConnectedComponentsOutputs,
      ConnectedComponentsParameters,
      connected_components,
      connected_components_params,
};
