// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FS_PRINT_HELP_METADATA: Metadata = {
    id: "1a0f96c91d8dea90a549b11726b82ded99db191b.boutiques",
    name: "fsPrintHelp",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FsPrintHelpParameters {
    "__STYXTYPE__": "fsPrintHelp";
    "arguments"?: string | null | undefined;
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
        "fsPrintHelp": fs_print_help_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fs_print_help(...)`.
 *
 * @interface
 */
interface FsPrintHelpOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fs_print_help_params(
    arguments_: string | null = null,
): FsPrintHelpParameters {
    /**
     * Build parameters.
    
     * @param arguments_ Any arguments that fsPrintHelp accepts.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsPrintHelp" as const,
    };
    if (arguments_ !== null) {
        params["arguments"] = arguments_;
    }
    return params;
}


function fs_print_help_cargs(
    params: FsPrintHelpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsPrintHelp");
    if ((params["arguments"] ?? null) !== null) {
        cargs.push((params["arguments"] ?? null));
    }
    return cargs;
}


function fs_print_help_outputs(
    params: FsPrintHelpParameters,
    execution: Execution,
): FsPrintHelpOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FsPrintHelpOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fs_print_help_execute(
    params: FsPrintHelpParameters,
    execution: Execution,
): FsPrintHelpOutputs {
    /**
     * fsPrintHelp - A tool that attempts to provide help documentation for FreeSurfer commands.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FsPrintHelpOutputs`).
     */
    params = execution.params(params)
    const cargs = fs_print_help_cargs(params, execution)
    const ret = fs_print_help_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fs_print_help(
    arguments_: string | null = null,
    runner: Runner | null = null,
): FsPrintHelpOutputs {
    /**
     * fsPrintHelp - A tool that attempts to provide help documentation for FreeSurfer commands.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param arguments_ Any arguments that fsPrintHelp accepts.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FsPrintHelpOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FS_PRINT_HELP_METADATA);
    const params = fs_print_help_params(arguments_)
    return fs_print_help_execute(params, execution);
}


export {
      FS_PRINT_HELP_METADATA,
      FsPrintHelpOutputs,
      FsPrintHelpParameters,
      fs_print_help,
      fs_print_help_params,
};
