// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const HELP_FORMAT_METADATA: Metadata = {
    id: "2c2e44d1845d44d18c53666d3810111107853205.boutiques",
    name: "help_format",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface HelpFormatParameters {
    "__STYXTYPE__": "help_format";
    "stdin": string;
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
        "help_format": help_format_cargs,
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
        "help_format": help_format_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `help_format(...)`.
 *
 * @interface
 */
interface HelpFormatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The formatted text with hyperlinks
     */
    formatted_output: OutputPathType;
}


function help_format_params(
    stdin: string,
): HelpFormatParameters {
    /**
     * Build parameters.
    
     * @param stdin Standard input text to be formatted
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "help_format" as const,
        "stdin": stdin,
    };
    return params;
}


function help_format_cargs(
    params: HelpFormatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("help_format");
    cargs.push((params["stdin"] ?? null));
    return cargs;
}


function help_format_outputs(
    params: HelpFormatParameters,
    execution: Execution,
): HelpFormatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: HelpFormatOutputs = {
        root: execution.outputFile("."),
        formatted_output: execution.outputFile(["formatted_output.html"].join('')),
    };
    return ret;
}


function help_format_execute(
    params: HelpFormatParameters,
    execution: Execution,
): HelpFormatOutputs {
    /**
     * Formats text by converting URLs into HTML hyperlinks.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `HelpFormatOutputs`).
     */
    params = execution.params(params)
    const cargs = help_format_cargs(params, execution)
    const ret = help_format_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function help_format(
    stdin: string,
    runner: Runner | null = null,
): HelpFormatOutputs {
    /**
     * Formats text by converting URLs into HTML hyperlinks.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param stdin Standard input text to be formatted
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `HelpFormatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(HELP_FORMAT_METADATA);
    const params = help_format_params(stdin)
    return help_format_execute(params, execution);
}


export {
      HELP_FORMAT_METADATA,
      HelpFormatOutputs,
      HelpFormatParameters,
      help_format,
      help_format_params,
};
