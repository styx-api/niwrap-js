// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const RESPONSEMEAN_METADATA: Metadata = {
    id: "e6c56f5745cf6a8cbb9c9387ca97dbcce3e44b95.boutiques",
    name: "responsemean",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface ResponsemeanParameters {
    "__STYXTYPE__": "responsemean";
    "input_response": Array<InputPathType>;
    "output_response": string;
    "legacy": boolean;
    "nocleanup": boolean;
    "scratch_dir"?: InputPathType | null | undefined;
    "continue_scratch_dir"?: Array<InputPathType> | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<string> | null | undefined;
    "help": boolean;
    "version": boolean;
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
        "responsemean": responsemean_cargs,
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
        "responsemean": responsemean_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `responsemean(...)`.
 *
 * @interface
 */
interface ResponsemeanOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File containing the averaged tissue response function
     */
    output_response_file: OutputPathType;
}


function responsemean_params(
    input_response: Array<InputPathType>,
    output_response: string,
    legacy: boolean = false,
    nocleanup: boolean = false,
    scratch_dir: InputPathType | null = null,
    continue_scratch_dir: Array<InputPathType> | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<string> | null = null,
    help: boolean = false,
    version: boolean = false,
): ResponsemeanParameters {
    /**
     * Build parameters.
    
     * @param input_response Input response functions
     * @param output_response Output mean response function
     * @param legacy Calculate the mean response function from a set of text files
     * @param nocleanup Do not delete intermediate files during script execution, and do not delete scratch directory at script completion
     * @param scratch_dir Manually specify the path in which to generate the scratch directory
     * @param continue_scratch_dir Continue the script from a previous execution; must provide the scratch directory path
     * @param info Display information messages
     * @param quiet Do not display information messages or progress status
     * @param debug Display debugging messages
     * @param force Force overwrite of output files
     * @param nthreads Use this number of threads in multi-threaded applications (set to 0 to disable multi-threading)
     * @param config Temporarily set the value of an MRtrix config file entry
     * @param help Display help information and exit
     * @param version Display version information and exit
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "responsemean" as const,
        "input_response": input_response,
        "output_response": output_response,
        "legacy": legacy,
        "nocleanup": nocleanup,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
    };
    if (scratch_dir !== null) {
        params["scratch_dir"] = scratch_dir;
    }
    if (continue_scratch_dir !== null) {
        params["continue_scratch_dir"] = continue_scratch_dir;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function responsemean_cargs(
    params: ResponsemeanParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("responsemean");
    cargs.push(...(params["input_response"] ?? null).map(f => execution.inputFile(f)));
    cargs.push((params["output_response"] ?? null));
    if ((params["legacy"] ?? null)) {
        cargs.push("-legacy");
    }
    if ((params["nocleanup"] ?? null)) {
        cargs.push("-nocleanup");
    }
    if ((params["scratch_dir"] ?? null) !== null) {
        cargs.push(
            "-scratch",
            execution.inputFile((params["scratch_dir"] ?? null))
        );
    }
    if ((params["continue_scratch_dir"] ?? null) !== null) {
        cargs.push(
            "-continue",
            ...(params["continue_scratch_dir"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["info"] ?? null)) {
        cargs.push("-info");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["nthreads"] ?? null) !== null) {
        cargs.push(
            "-nthreads",
            String((params["nthreads"] ?? null))
        );
    }
    if ((params["config"] ?? null) !== null) {
        cargs.push(
            "-config",
            ...(params["config"] ?? null)
        );
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    return cargs;
}


function responsemean_outputs(
    params: ResponsemeanParameters,
    execution: Execution,
): ResponsemeanOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ResponsemeanOutputs = {
        root: execution.outputFile("."),
        output_response_file: execution.outputFile([(params["output_response"] ?? null)].join('')),
    };
    return ret;
}


function responsemean_execute(
    params: ResponsemeanParameters,
    execution: Execution,
): ResponsemeanOutputs {
    /**
     * Calculate the mean response function from a set of text files.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ResponsemeanOutputs`).
     */
    params = execution.params(params)
    const cargs = responsemean_cargs(params, execution)
    const ret = responsemean_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function responsemean(
    input_response: Array<InputPathType>,
    output_response: string,
    legacy: boolean = false,
    nocleanup: boolean = false,
    scratch_dir: InputPathType | null = null,
    continue_scratch_dir: Array<InputPathType> | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<string> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): ResponsemeanOutputs {
    /**
     * Calculate the mean response function from a set of text files.
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param input_response Input response functions
     * @param output_response Output mean response function
     * @param legacy Calculate the mean response function from a set of text files
     * @param nocleanup Do not delete intermediate files during script execution, and do not delete scratch directory at script completion
     * @param scratch_dir Manually specify the path in which to generate the scratch directory
     * @param continue_scratch_dir Continue the script from a previous execution; must provide the scratch directory path
     * @param info Display information messages
     * @param quiet Do not display information messages or progress status
     * @param debug Display debugging messages
     * @param force Force overwrite of output files
     * @param nthreads Use this number of threads in multi-threaded applications (set to 0 to disable multi-threading)
     * @param config Temporarily set the value of an MRtrix config file entry
     * @param help Display help information and exit
     * @param version Display version information and exit
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ResponsemeanOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(RESPONSEMEAN_METADATA);
    const params = responsemean_params(input_response, output_response, legacy, nocleanup, scratch_dir, continue_scratch_dir, info, quiet, debug, force, nthreads, config, help, version)
    return responsemean_execute(params, execution);
}


export {
      RESPONSEMEAN_METADATA,
      ResponsemeanOutputs,
      ResponsemeanParameters,
      responsemean,
      responsemean_params,
};
