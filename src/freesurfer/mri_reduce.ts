// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_REDUCE_METADATA: Metadata = {
    id: "cf6964a089f9810b1107cc8ec31b854f370cd7e4.boutiques",
    name: "mri_reduce",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriReduceParameters {
    "__STYXTYPE__": "mri_reduce";
    "input_file": InputPathType;
    "output_file": string;
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
        "mri_reduce": mri_reduce_cargs,
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
        "mri_reduce": mri_reduce_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_reduce(...)`.
 *
 * @interface
 */
interface MriReduceOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Reduced MRI file output
     */
    reduced_output: OutputPathType;
}


function mri_reduce_params(
    input_file: InputPathType,
    output_file: string,
): MriReduceParameters {
    /**
     * Build parameters.
    
     * @param input_file Input MRI file
     * @param output_file Output filename for the reduced MRI file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_reduce" as const,
        "input_file": input_file,
        "output_file": output_file,
    };
    return params;
}


function mri_reduce_cargs(
    params: MriReduceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_reduce");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    return cargs;
}


function mri_reduce_outputs(
    params: MriReduceParameters,
    execution: Execution,
): MriReduceOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriReduceOutputs = {
        root: execution.outputFile("."),
        reduced_output: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function mri_reduce_execute(
    params: MriReduceParameters,
    execution: Execution,
): MriReduceOutputs {
    /**
     * A tool to reduce MRI file dimensions.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriReduceOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_reduce_cargs(params, execution)
    const ret = mri_reduce_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_reduce(
    input_file: InputPathType,
    output_file: string,
    runner: Runner | null = null,
): MriReduceOutputs {
    /**
     * A tool to reduce MRI file dimensions.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input MRI file
     * @param output_file Output filename for the reduced MRI file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriReduceOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_REDUCE_METADATA);
    const params = mri_reduce_params(input_file, output_file)
    return mri_reduce_execute(params, execution);
}


export {
      MRI_REDUCE_METADATA,
      MriReduceOutputs,
      MriReduceParameters,
      mri_reduce,
      mri_reduce_params,
};
