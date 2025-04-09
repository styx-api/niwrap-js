// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FIXELCONNECTIVITY_METADATA: Metadata = {
    id: "a28812763f98c83cba5bf32daac94ae191c3ce0f.boutiques",
    name: "fixelconnectivity",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface FixelconnectivityConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface FixelconnectivityParameters {
    "__STYXTYPE__": "fixelconnectivity";
    "threshold"?: number | null | undefined;
    "angle"?: number | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<FixelconnectivityConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "fixel_directory": InputPathType;
    "tracks": InputPathType;
    "matrix": string;
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
        "fixelconnectivity": fixelconnectivity_cargs,
        "config": fixelconnectivity_config_cargs,
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
        "fixelconnectivity": fixelconnectivity_outputs,
    };
    return outputsFuncs[t];
}


function fixelconnectivity_config_params(
    key: string,
    value: string,
): FixelconnectivityConfigParameters {
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


function fixelconnectivity_config_cargs(
    params: FixelconnectivityConfigParameters,
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
 * Output object returned when calling `fixelconnectivity(...)`.
 *
 * @interface
 */
interface FixelconnectivityOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output fixel-fixel connectivity matrix directory path
     */
    matrix: OutputPathType;
}


function fixelconnectivity_params(
    fixel_directory: InputPathType,
    tracks: InputPathType,
    matrix: string,
    threshold: number | null = null,
    angle: number | null = null,
    mask: InputPathType | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<FixelconnectivityConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): FixelconnectivityParameters {
    /**
     * Build parameters.
    
     * @param fixel_directory the directory containing the fixels between which connectivity will be quantified
     * @param tracks the tracks used to determine fixel-fixel connectivity
     * @param matrix the output fixel-fixel connectivity matrix directory path
     * @param threshold a threshold to define the required fraction of shared connections to be included in the neighbourhood (default: 0.01)
     * @param angle the max angle threshold for assigning streamline tangents to fixels (Default: 45 degrees)
     * @param mask provide a fixel data file containing a mask of those fixels to be computed; fixels outside the mask will be empty in the output matrix
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
        "__STYXTYPE__": "fixelconnectivity" as const,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "fixel_directory": fixel_directory,
        "tracks": tracks,
        "matrix": matrix,
    };
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (angle !== null) {
        params["angle"] = angle;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function fixelconnectivity_cargs(
    params: FixelconnectivityParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fixelconnectivity");
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "-threshold",
            String((params["threshold"] ?? null))
        );
    }
    if ((params["angle"] ?? null) !== null) {
        cargs.push(
            "-angle",
            String((params["angle"] ?? null))
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
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
    cargs.push(execution.inputFile((params["fixel_directory"] ?? null)));
    cargs.push(execution.inputFile((params["tracks"] ?? null)));
    cargs.push((params["matrix"] ?? null));
    return cargs;
}


function fixelconnectivity_outputs(
    params: FixelconnectivityParameters,
    execution: Execution,
): FixelconnectivityOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FixelconnectivityOutputs = {
        root: execution.outputFile("."),
        matrix: execution.outputFile([(params["matrix"] ?? null)].join('')),
    };
    return ret;
}


function fixelconnectivity_execute(
    params: FixelconnectivityParameters,
    execution: Execution,
): FixelconnectivityOutputs {
    /**
     * Generate a fixel-fixel connectivity matrix.
     * 
     * This command will generate a directory containing three images, which encodes the fixel-fixel connectivity matrix. Documentation regarding this format and how to use it will come in the future.
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
    
     * @returns NamedTuple of outputs (described in `FixelconnectivityOutputs`).
     */
    params = execution.params(params)
    const cargs = fixelconnectivity_cargs(params, execution)
    const ret = fixelconnectivity_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fixelconnectivity(
    fixel_directory: InputPathType,
    tracks: InputPathType,
    matrix: string,
    threshold: number | null = null,
    angle: number | null = null,
    mask: InputPathType | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<FixelconnectivityConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): FixelconnectivityOutputs {
    /**
     * Generate a fixel-fixel connectivity matrix.
     * 
     * This command will generate a directory containing three images, which encodes the fixel-fixel connectivity matrix. Documentation regarding this format and how to use it will come in the future.
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param fixel_directory the directory containing the fixels between which connectivity will be quantified
     * @param tracks the tracks used to determine fixel-fixel connectivity
     * @param matrix the output fixel-fixel connectivity matrix directory path
     * @param threshold a threshold to define the required fraction of shared connections to be included in the neighbourhood (default: 0.01)
     * @param angle the max angle threshold for assigning streamline tangents to fixels (Default: 45 degrees)
     * @param mask provide a fixel data file containing a mask of those fixels to be computed; fixels outside the mask will be empty in the output matrix
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FixelconnectivityOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FIXELCONNECTIVITY_METADATA);
    const params = fixelconnectivity_params(fixel_directory, tracks, matrix, threshold, angle, mask, info, quiet, debug, force, nthreads, config, help, version)
    return fixelconnectivity_execute(params, execution);
}


export {
      FIXELCONNECTIVITY_METADATA,
      FixelconnectivityConfigParameters,
      FixelconnectivityOutputs,
      FixelconnectivityParameters,
      fixelconnectivity,
      fixelconnectivity_config_params,
      fixelconnectivity_params,
};
