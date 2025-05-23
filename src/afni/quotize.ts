// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const QUOTIZE_METADATA: Metadata = {
    id: "4c584c1c53b452f98fe6627b0010b0bc7d24c8a7.boutiques",
    name: "quotize",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface QuotizeParameters {
    "__STYXTYPE__": "quotize";
    "name": string;
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
        "quotize": quotize_cargs,
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
        "quotize": quotize_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `quotize(...)`.
 *
 * @interface
 */
interface QuotizeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated C array of strings file
     */
    array_output: OutputPathType;
}


function quotize_params(
    name: string,
    input_file: InputPathType,
    output_file: string,
): QuotizeParameters {
    /**
     * Build parameters.
    
     * @param name The name to be used for the array of strings.
     * @param input_file Input text file to be converted.
     * @param output_file Output file which will contain the C array of strings.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "quotize" as const,
        "name": name,
        "input_file": input_file,
        "output_file": output_file,
    };
    return params;
}


function quotize_cargs(
    params: QuotizeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("quotize");
    cargs.push((params["name"] ?? null));
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    return cargs;
}


function quotize_outputs(
    params: QuotizeParameters,
    execution: Execution,
): QuotizeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: QuotizeOutputs = {
        root: execution.outputFile("."),
        array_output: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function quotize_execute(
    params: QuotizeParameters,
    execution: Execution,
): QuotizeOutputs {
    /**
     * Turns a text file into a C array of strings initialized into an array 'char *name[]'.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `QuotizeOutputs`).
     */
    params = execution.params(params)
    const cargs = quotize_cargs(params, execution)
    const ret = quotize_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function quotize(
    name: string,
    input_file: InputPathType,
    output_file: string,
    runner: Runner | null = null,
): QuotizeOutputs {
    /**
     * Turns a text file into a C array of strings initialized into an array 'char *name[]'.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param name The name to be used for the array of strings.
     * @param input_file Input text file to be converted.
     * @param output_file Output file which will contain the C array of strings.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `QuotizeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(QUOTIZE_METADATA);
    const params = quotize_params(name, input_file, output_file)
    return quotize_execute(params, execution);
}


export {
      QUOTIZE_METADATA,
      QuotizeOutputs,
      QuotizeParameters,
      quotize,
      quotize_params,
};
