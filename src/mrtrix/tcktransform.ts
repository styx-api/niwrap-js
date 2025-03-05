// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TCKTRANSFORM_METADATA: Metadata = {
    id: "d38d01b169eafd9a714d3a74f684943531dcd044.boutiques",
    name: "tcktransform",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface TcktransformConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface TcktransformParameters {
    "__STYXTYPE__": "tcktransform";
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<TcktransformConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "tracks": InputPathType;
    "transform": InputPathType;
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
        "tcktransform": tcktransform_cargs,
        "config": tcktransform_config_cargs,
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
        "tcktransform": tcktransform_outputs,
    };
    return outputsFuncs[t];
}


function tcktransform_config_params(
    key: string,
    value: string,
): TcktransformConfigParameters {
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


function tcktransform_config_cargs(
    params: TcktransformConfigParameters,
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
 * Output object returned when calling `tcktransform(...)`.
 *
 * @interface
 */
interface TcktransformOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output track file
     */
    output: OutputPathType;
}


function tcktransform_params(
    tracks: InputPathType,
    transform: InputPathType,
    output: string,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TcktransformConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): TcktransformParameters {
    /**
     * Build parameters.
    
     * @param tracks the input track file.
     * @param transform the image containing the transform.
     * @param output the output track file
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
        "__STYXTYPE__": "tcktransform" as const,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "tracks": tracks,
        "transform": transform,
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


function tcktransform_cargs(
    params: TcktransformParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tcktransform");
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
    cargs.push(execution.inputFile((params["tracks"] ?? null)));
    cargs.push(execution.inputFile((params["transform"] ?? null)));
    cargs.push((params["output"] ?? null));
    return cargs;
}


function tcktransform_outputs(
    params: TcktransformParameters,
    execution: Execution,
): TcktransformOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TcktransformOutputs = {
        root: execution.outputFile("."),
        output: execution.outputFile([(params["output"] ?? null)].join('')),
    };
    return ret;
}


function tcktransform_execute(
    params: TcktransformParameters,
    execution: Execution,
): TcktransformOutputs {
    /**
     * Apply a spatial transformation to a tracks file.
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
    
     * @returns NamedTuple of outputs (described in `TcktransformOutputs`).
     */
    params = execution.params(params)
    const cargs = tcktransform_cargs(params, execution)
    const ret = tcktransform_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tcktransform(
    tracks: InputPathType,
    transform: InputPathType,
    output: string,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<TcktransformConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): TcktransformOutputs {
    /**
     * Apply a spatial transformation to a tracks file.
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
    
     * @param tracks the input track file.
     * @param transform the image containing the transform.
     * @param output the output track file
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TcktransformOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TCKTRANSFORM_METADATA);
    const params = tcktransform_params(tracks, transform, output, info, quiet, debug, force, nthreads, config, help, version)
    return tcktransform_execute(params, execution);
}


export {
      TCKTRANSFORM_METADATA,
      TcktransformConfigParameters,
      TcktransformOutputs,
      TcktransformParameters,
      tcktransform,
      tcktransform_config_params,
      tcktransform_params,
};
