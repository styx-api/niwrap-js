// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_EULER_NUMBER_METADATA: Metadata = {
    id: "ff5edf807126bfa9fa22edba44beeccaa0e44710.boutiques",
    name: "mris_euler_number",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisEulerNumberParameters {
    "__STYXTYPE__": "mris_euler_number";
    "input_surface": InputPathType;
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
        "mris_euler_number": mris_euler_number_cargs,
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
        "mris_euler_number": mris_euler_number_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_euler_number(...)`.
 *
 * @interface
 */
interface MrisEulerNumberOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File where the number of holes is written
     */
    outfile: OutputPathType | null;
}


function mris_euler_number_params(
    input_surface: InputPathType,
    output_file: string | null = null,
): MrisEulerNumberParameters {
    /**
     * Build parameters.
    
     * @param input_surface Input surface file
     * @param output_file Write number of holes to output file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_euler_number" as const,
        "input_surface": input_surface,
    };
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    return params;
}


function mris_euler_number_cargs(
    params: MrisEulerNumberParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_euler_number");
    cargs.push(execution.inputFile((params["input_surface"] ?? null)));
    if ((params["output_file"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_file"] ?? null)
        );
    }
    return cargs;
}


function mris_euler_number_outputs(
    params: MrisEulerNumberParameters,
    execution: Execution,
): MrisEulerNumberOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisEulerNumberOutputs = {
        root: execution.outputFile("."),
        outfile: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function mris_euler_number_execute(
    params: MrisEulerNumberParameters,
    execution: Execution,
): MrisEulerNumberOutputs {
    /**
     * This program computes EulerNumber for a cortical surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisEulerNumberOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_euler_number_cargs(params, execution)
    const ret = mris_euler_number_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_euler_number(
    input_surface: InputPathType,
    output_file: string | null = null,
    runner: Runner | null = null,
): MrisEulerNumberOutputs {
    /**
     * This program computes EulerNumber for a cortical surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_surface Input surface file
     * @param output_file Write number of holes to output file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisEulerNumberOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_EULER_NUMBER_METADATA);
    const params = mris_euler_number_params(input_surface, output_file)
    return mris_euler_number_execute(params, execution);
}


export {
      MRIS_EULER_NUMBER_METADATA,
      MrisEulerNumberOutputs,
      MrisEulerNumberParameters,
      mris_euler_number,
      mris_euler_number_params,
};
