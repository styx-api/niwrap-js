// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TSFDIVIDE_METADATA: Metadata = {
    id: "73b4285cd16d7ecd5b79ccc7ed4dd1e67b62377d.boutiques",
    name: "tsfdivide",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface TsfdivideConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface TsfdivideParameters {
    "__STYXTYPE__": "tsfdivide";
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<TsfdivideConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "input1": InputPathType;
    "input2": InputPathType;
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
        "tsfdivide": tsfdivide_cargs,
        "config": tsfdivide_config_cargs,
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
        "tsfdivide": tsfdivide_outputs,
    };
    return outputsFuncs[t];
}


function tsfdivide_config_params(
    key: string,
    value: string,
): TsfdivideConfigParameters {
    /**
     * Build parameters.
    
     * @param key temporarily set the value of an MRtrix config file entry.
     * @param value temporarily set the value of an MRtrix config file entry.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "config" as const,
        "key": key,
        "value": value,
    };
    return params;
}


function tsfdivide_config_cargs(
    params: TsfdivideConfigParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-config");
    cargs.push((params["key"] ?? null));
    cargs.push((params["value"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `tsfdivide(...)`.
 *
 * @interface
 */
interface TsfdivideOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output track scalar file
     */
    output: OutputPathType;
}


function tsfdivide_params(
    input1: InputPathType,
    input2: InputPathType,
    output: string,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TsfdivideConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): TsfdivideParameters {
    /**
     * Build parameters.
    
     * @param input1 the first input track scalar file.
     * @param input2 the second input track scalar file.
     * @param output the output track scalar file
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tsfdivide" as const,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "input1": input1,
        "input2": input2,
        "output": output,
    };
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function tsfdivide_cargs(
    params: TsfdivideParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tsfdivide");
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
        cargs.push(...(params["config"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    cargs.push(execution.inputFile((params["input1"] ?? null)));
    cargs.push(execution.inputFile((params["input2"] ?? null)));
    cargs.push((params["output"] ?? null));
    return cargs;
}


function tsfdivide_outputs(
    params: TsfdivideParameters,
    execution: Execution,
): TsfdivideOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TsfdivideOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function tsfdivide_execute(
    params: TsfdivideParameters,
    execution: Execution,
): TsfdivideOutputs {
    /**
     * Divide corresponding values in track scalar files.
     * 
     * 
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TsfdivideOutputs`).
     */
    params = execution.params(params)
    const cargs = tsfdivide_cargs(params, execution)
    const ret = tsfdivide_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tsfdivide(
    input1: InputPathType,
    input2: InputPathType,
    output: string,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TsfdivideConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): TsfdivideOutputs {
    /**
     * Divide corresponding values in track scalar files.
     * 
     * 
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param input1 the first input track scalar file.
     * @param input2 the second input track scalar file.
     * @param output the output track scalar file
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TsfdivideOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TSFDIVIDE_METADATA);
    const params = tsfdivide_params(input1, input2, output, info, quiet, debug, force, nthreads, config, help, version)
    return tsfdivide_execute(params, execution);
}


export {
      TSFDIVIDE_METADATA,
      TsfdivideConfigParameters,
      TsfdivideOutputs,
      TsfdivideParameters,
      tsfdivide,
      tsfdivide_config_params,
      tsfdivide_params,
};
