// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__2DWARPER_METADATA: Metadata = {
    id: "b6c02c8c4a9b76cbaaf9e4aced956bd2e4543b06.boutiques",
    name: "@2dwarper",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V2dwarperParameters {
    "__STYXTYPE__": "@2dwarper";
    "input_dataset": InputPathType;
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
        "@2dwarper": v__2dwarper_cargs,
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
        "@2dwarper": v__2dwarper_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__2dwarper(...)`.
 *
 * @interface
 */
interface V2dwarperOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Warped output image from the dataset
     */
    output_file: OutputPathType;
}


function v__2dwarper_params(
    input_dataset: InputPathType,
): V2dwarperParameters {
    /**
     * Build parameters.
    
     * @param input_dataset Input dataset (e.g., image to be warped)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@2dwarper" as const,
        "input_dataset": input_dataset,
    };
    return params;
}


function v__2dwarper_cargs(
    params: V2dwarperParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@2dwarper");
    cargs.push(execution.inputFile((params["input_dataset"] ?? null)));
    return cargs;
}


function v__2dwarper_outputs(
    params: V2dwarperParameters,
    execution: Execution,
): V2dwarperOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V2dwarperOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile(["warped_output"].join('')),
    };
    return ret;
}


function v__2dwarper_execute(
    params: V2dwarperParameters,
    execution: Execution,
): V2dwarperOutputs {
    /**
     * 2D image warping tool.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V2dwarperOutputs`).
     */
    params = execution.params(params)
    const cargs = v__2dwarper_cargs(params, execution)
    const ret = v__2dwarper_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__2dwarper(
    input_dataset: InputPathType,
    runner: Runner | null = null,
): V2dwarperOutputs {
    /**
     * 2D image warping tool.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_dataset Input dataset (e.g., image to be warped)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V2dwarperOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__2DWARPER_METADATA);
    const params = v__2dwarper_params(input_dataset)
    return v__2dwarper_execute(params, execution);
}


export {
      V2dwarperOutputs,
      V2dwarperParameters,
      V__2DWARPER_METADATA,
      v__2dwarper,
      v__2dwarper_params,
};
