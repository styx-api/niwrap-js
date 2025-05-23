// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TSFSMOOTH_METADATA: Metadata = {
    id: "661247ae56de33473ab1fe1198f8ec8b74b835b5.boutiques",
    name: "tsfsmooth",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface TsfsmoothConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface TsfsmoothParameters {
    "__STYXTYPE__": "tsfsmooth";
    "stdev"?: number | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<TsfsmoothConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "input": InputPathType;
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
        "tsfsmooth": tsfsmooth_cargs,
        "config": tsfsmooth_config_cargs,
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
        "tsfsmooth": tsfsmooth_outputs,
    };
    return outputsFuncs[t];
}


function tsfsmooth_config_params(
    key: string,
    value: string,
): TsfsmoothConfigParameters {
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


function tsfsmooth_config_cargs(
    params: TsfsmoothConfigParameters,
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
 * Output object returned when calling `tsfsmooth(...)`.
 *
 * @interface
 */
interface TsfsmoothOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output track scalar file
     */
    output: OutputPathType;
}


function tsfsmooth_params(
    input: InputPathType,
    output: string,
    stdev: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TsfsmoothConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): TsfsmoothParameters {
    /**
     * Build parameters.
    
     * @param input the input track scalar file.
     * @param output the output track scalar file
     * @param stdev apply Gaussian smoothing with the specified standard deviation. The standard deviation is defined in units of track points (default: 4)
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
        "__STYXTYPE__": "tsfsmooth" as const,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "input": input,
        "output": output,
    };
    if (stdev !== null) {
        params["stdev"] = stdev;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function tsfsmooth_cargs(
    params: TsfsmoothParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tsfsmooth");
    if ((params["stdev"] ?? null) !== null) {
        cargs.push(
            "-stdev",
            String((params["stdev"] ?? null))
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
        cargs.push(...(params["config"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    cargs.push(execution.inputFile((params["input"] ?? null)));
    cargs.push((params["output"] ?? null));
    return cargs;
}


function tsfsmooth_outputs(
    params: TsfsmoothParameters,
    execution: Execution,
): TsfsmoothOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TsfsmoothOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function tsfsmooth_execute(
    params: TsfsmoothParameters,
    execution: Execution,
): TsfsmoothOutputs {
    /**
     * Gaussian filter a track scalar file.
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
    
     * @returns NamedTuple of outputs (described in `TsfsmoothOutputs`).
     */
    params = execution.params(params)
    const cargs = tsfsmooth_cargs(params, execution)
    const ret = tsfsmooth_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tsfsmooth(
    input: InputPathType,
    output: string,
    stdev: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TsfsmoothConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): TsfsmoothOutputs {
    /**
     * Gaussian filter a track scalar file.
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
    
     * @param input the input track scalar file.
     * @param output the output track scalar file
     * @param stdev apply Gaussian smoothing with the specified standard deviation. The standard deviation is defined in units of track points (default: 4)
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TsfsmoothOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TSFSMOOTH_METADATA);
    const params = tsfsmooth_params(input, output, stdev, info, quiet, debug, force, nthreads, config, help, version)
    return tsfsmooth_execute(params, execution);
}


export {
      TSFSMOOTH_METADATA,
      TsfsmoothConfigParameters,
      TsfsmoothOutputs,
      TsfsmoothParameters,
      tsfsmooth,
      tsfsmooth_config_params,
      tsfsmooth_params,
};
