// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FIXELREORIENT_METADATA: Metadata = {
    id: "131439582b6a79c991d4bdc5b5ebe9896e2ee937.boutiques",
    name: "fixelreorient",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface FixelreorientConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface FixelreorientParameters {
    "__STYXTYPE__": "fixelreorient";
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<FixelreorientConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "fixel_in": InputPathType;
    "warp": InputPathType;
    "fixel_out": string;
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
        "fixelreorient": fixelreorient_cargs,
        "config": fixelreorient_config_cargs,
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
        "fixelreorient": fixelreorient_outputs,
    };
    return outputsFuncs[t];
}


function fixelreorient_config_params(
    key: string,
    value: string,
): FixelreorientConfigParameters {
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


function fixelreorient_config_cargs(
    params: FixelreorientConfigParameters,
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
 * Output object returned when calling `fixelreorient(...)`.
 *
 * @interface
 */
interface FixelreorientOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output fixel directory. If the the input and output directories are the same, the existing directions file will be replaced (providing the -force option is supplied). If a new directory is supplied then the fixel directions and all other fixel data will be copied to the new directory.
     */
    fixel_out: OutputPathType;
}


function fixelreorient_params(
    fixel_in: InputPathType,
    warp: InputPathType,
    fixel_out: string,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<FixelreorientConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): FixelreorientParameters {
    /**
     * Build parameters.
    
     * @param fixel_in the input fixel directory
     * @param warp a 4D deformation field used to perform reorientation. Reorientation is performed by applying the Jacobian affine transform in each voxel in the warp, then re-normalising the vector representing the fixel direction
     * @param fixel_out the output fixel directory. If the the input and output directories are the same, the existing directions file will be replaced (providing the -force option is supplied). If a new directory is supplied then the fixel directions and all other fixel data will be copied to the new directory.
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
        "__STYXTYPE__": "fixelreorient" as const,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "fixel_in": fixel_in,
        "warp": warp,
        "fixel_out": fixel_out,
    };
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function fixelreorient_cargs(
    params: FixelreorientParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fixelreorient");
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
    cargs.push(execution.inputFile((params["fixel_in"] ?? null)));
    cargs.push(execution.inputFile((params["warp"] ?? null)));
    cargs.push((params["fixel_out"] ?? null));
    return cargs;
}


function fixelreorient_outputs(
    params: FixelreorientParameters,
    execution: Execution,
): FixelreorientOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FixelreorientOutputs = {
        root: execution.outputFile("."),
        fixel_out: execution.outputFile([(params["fixel_out"] ?? null)].join('')),
    };
    return ret;
}


function fixelreorient_execute(
    params: FixelreorientParameters,
    execution: Execution,
): FixelreorientOutputs {
    /**
     * Reorient fixel directions.
     * 
     * Reorientation is performed by transforming the vector representing the fixel direction with the Jacobian (local affine transform) computed at each voxel in the warp, then re-normalising the vector.
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
    
     * @returns NamedTuple of outputs (described in `FixelreorientOutputs`).
     */
    params = execution.params(params)
    const cargs = fixelreorient_cargs(params, execution)
    const ret = fixelreorient_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fixelreorient(
    fixel_in: InputPathType,
    warp: InputPathType,
    fixel_out: string,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<FixelreorientConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): FixelreorientOutputs {
    /**
     * Reorient fixel directions.
     * 
     * Reorientation is performed by transforming the vector representing the fixel direction with the Jacobian (local affine transform) computed at each voxel in the warp, then re-normalising the vector.
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param fixel_in the input fixel directory
     * @param warp a 4D deformation field used to perform reorientation. Reorientation is performed by applying the Jacobian affine transform in each voxel in the warp, then re-normalising the vector representing the fixel direction
     * @param fixel_out the output fixel directory. If the the input and output directories are the same, the existing directions file will be replaced (providing the -force option is supplied). If a new directory is supplied then the fixel directions and all other fixel data will be copied to the new directory.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FixelreorientOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FIXELREORIENT_METADATA);
    const params = fixelreorient_params(fixel_in, warp, fixel_out, info, quiet, debug, force, nthreads, config, help, version)
    return fixelreorient_execute(params, execution);
}


export {
      FIXELREORIENT_METADATA,
      FixelreorientConfigParameters,
      FixelreorientOutputs,
      FixelreorientParameters,
      fixelreorient,
      fixelreorient_config_params,
      fixelreorient_params,
};
