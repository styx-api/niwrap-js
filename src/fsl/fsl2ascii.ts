// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL2ASCII_METADATA: Metadata = {
    id: "7414af8d07fd0b468801eba448b093398f6fbc16.boutiques",
    name: "fsl2ascii",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface Fsl2asciiParameters {
    "__STYXTYPE__": "fsl2ascii";
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
        "fsl2ascii": fsl2ascii_cargs,
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
        "fsl2ascii": fsl2ascii_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl2ascii(...)`.
 *
 * @interface
 */
interface Fsl2asciiOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output ASCII text file
     */
    output_ascii_file: OutputPathType;
}


function fsl2ascii_params(
    input_file: InputPathType,
    output_file: string,
): Fsl2asciiParameters {
    /**
     * Build parameters.
    
     * @param input_file Input NIfTI (or analyze 7.5 format) image
     * @param output_file Output ASCII text file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl2ascii" as const,
        "input_file": input_file,
        "output_file": output_file,
    };
    return params;
}


function fsl2ascii_cargs(
    params: Fsl2asciiParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl2ascii");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    return cargs;
}


function fsl2ascii_outputs(
    params: Fsl2asciiParameters,
    execution: Execution,
): Fsl2asciiOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Fsl2asciiOutputs = {
        root: execution.outputFile("."),
        output_ascii_file: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function fsl2ascii_execute(
    params: Fsl2asciiParameters,
    execution: Execution,
): Fsl2asciiOutputs {
    /**
     * Convert NIfTI image or analyze 7.5 format file to ASCII text file.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Fsl2asciiOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl2ascii_cargs(params, execution)
    const ret = fsl2ascii_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl2ascii(
    input_file: InputPathType,
    output_file: string,
    runner: Runner | null = null,
): Fsl2asciiOutputs {
    /**
     * Convert NIfTI image or analyze 7.5 format file to ASCII text file.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_file Input NIfTI (or analyze 7.5 format) image
     * @param output_file Output ASCII text file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Fsl2asciiOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL2ASCII_METADATA);
    const params = fsl2ascii_params(input_file, output_file)
    return fsl2ascii_execute(params, execution);
}


export {
      FSL2ASCII_METADATA,
      Fsl2asciiOutputs,
      Fsl2asciiParameters,
      fsl2ascii,
      fsl2ascii_params,
};
