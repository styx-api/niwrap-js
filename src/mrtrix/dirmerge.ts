// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DIRMERGE_METADATA: Metadata = {
    id: "b2c0d4c611fef0c99c4fd927498667a5d14a0534.boutiques",
    name: "dirmerge",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface DirmergeConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface DirmergeParameters {
    "__STYXTYPE__": "dirmerge";
    "unipolar_weight"?: number | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<DirmergeConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "subsets": number;
    "bvalue_files": Array<string>;
    "out": string;
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
        "dirmerge": dirmerge_cargs,
        "config": dirmerge_config_cargs,
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
        "dirmerge": dirmerge_outputs,
    };
    return outputsFuncs[t];
}


function dirmerge_config_params(
    key: string,
    value: string,
): DirmergeConfigParameters {
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


function dirmerge_config_cargs(
    params: DirmergeConfigParameters,
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
 * Output object returned when calling `dirmerge(...)`.
 *
 * @interface
 */
interface DirmergeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output directions file, with each row listing the X Y Z gradient directions, the b-value, and an index representing the phase encode direction
     */
    out: OutputPathType;
}


function dirmerge_params(
    subsets: number,
    bvalue_files: Array<string>,
    out: string,
    unipolar_weight: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<DirmergeConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): DirmergeParameters {
    /**
     * Build parameters.
    
     * @param subsets the number of subsets (eg. phase encoding directions) per b-value
     * @param bvalue_files the b-value and sets of corresponding files, in order
     * @param out the output directions file, with each row listing the X Y Z gradient directions, the b-value, and an index representing the phase encode direction
     * @param unipolar_weight set the weight given to the unipolar electrostatic repulsion model compared to the bipolar model (default: 0.2).
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
        "__STYXTYPE__": "dirmerge" as const,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "subsets": subsets,
        "bvalue_files": bvalue_files,
        "out": out,
    };
    if (unipolar_weight !== null) {
        params["unipolar_weight"] = unipolar_weight;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function dirmerge_cargs(
    params: DirmergeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("dirmerge");
    if ((params["unipolar_weight"] ?? null) !== null) {
        cargs.push(
            "-unipolar_weight",
            String((params["unipolar_weight"] ?? null))
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
    cargs.push(String((params["subsets"] ?? null)));
    cargs.push(...(params["bvalue_files"] ?? null));
    cargs.push((params["out"] ?? null));
    return cargs;
}


function dirmerge_outputs(
    params: DirmergeParameters,
    execution: Execution,
): DirmergeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DirmergeOutputs = {
        root: execution.outputFile("."),
        out: execution.outputFile([(params["out"] ?? null)].join('')),
    };
    return ret;
}


function dirmerge_execute(
    params: DirmergeParameters,
    execution: Execution,
): DirmergeOutputs {
    /**
     * Splice / merge multiple sets of directions in such a way as to maintain near-optimality upon truncation.
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
    
     * @returns NamedTuple of outputs (described in `DirmergeOutputs`).
     */
    params = execution.params(params)
    const cargs = dirmerge_cargs(params, execution)
    const ret = dirmerge_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function dirmerge(
    subsets: number,
    bvalue_files: Array<string>,
    out: string,
    unipolar_weight: number | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<DirmergeConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): DirmergeOutputs {
    /**
     * Splice / merge multiple sets of directions in such a way as to maintain near-optimality upon truncation.
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
    
     * @param subsets the number of subsets (eg. phase encoding directions) per b-value
     * @param bvalue_files the b-value and sets of corresponding files, in order
     * @param out the output directions file, with each row listing the X Y Z gradient directions, the b-value, and an index representing the phase encode direction
     * @param unipolar_weight set the weight given to the unipolar electrostatic repulsion model compared to the bipolar model (default: 0.2).
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DirmergeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DIRMERGE_METADATA);
    const params = dirmerge_params(subsets, bvalue_files, out, unipolar_weight, info, quiet, debug, force, nthreads, config, help, version)
    return dirmerge_execute(params, execution);
}


export {
      DIRMERGE_METADATA,
      DirmergeConfigParameters,
      DirmergeOutputs,
      DirmergeParameters,
      dirmerge,
      dirmerge_config_params,
      dirmerge_params,
};
