// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FS_TEMP_FILE_METADATA: Metadata = {
    id: "0af9f914376b0b96f8401ddfbac1babb938c4e65.boutiques",
    name: "fs_temp_file",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FsTempFileParameters {
    "__STYXTYPE__": "fs_temp_file";
    "base_dir"?: string | null | undefined;
    "base_dir_alt"?: string | null | undefined;
    "suffix"?: string | null | undefined;
    "suffix_alt"?: string | null | undefined;
    "scratch": boolean;
    "help": boolean;
    "help_alt": boolean;
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
        "fs_temp_file": fs_temp_file_cargs,
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
 * Output object returned when calling `fs_temp_file(...)`.
 *
 * @interface
 */
interface FsTempFileOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fs_temp_file_params(
    base_dir: string | null = null,
    base_dir_alt: string | null = null,
    suffix: string | null = null,
    suffix_alt: string | null = null,
    scratch: boolean = false,
    help: boolean = false,
    help_alt: boolean = false,
): FsTempFileParameters {
    /**
     * Build parameters.
    
     * @param base_dir Manually specify base temporary directory.
     * @param base_dir_alt Manually specify base temporary directory.
     * @param suffix Optional file suffix.
     * @param suffix_alt Optional file suffix.
     * @param scratch Use /scratch directory if available, but FS_TMPDIR takes priority.
     * @param help Print help text and exit.
     * @param help_alt Print help text and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fs_temp_file" as const,
        "scratch": scratch,
        "help": help,
        "help_alt": help_alt,
    };
    if (base_dir !== null) {
        params["base_dir"] = base_dir;
    }
    if (base_dir_alt !== null) {
        params["base_dir_alt"] = base_dir_alt;
    }
    if (suffix !== null) {
        params["suffix"] = suffix;
    }
    if (suffix_alt !== null) {
        params["suffix_alt"] = suffix_alt;
    }
    return params;
}


function fs_temp_file_cargs(
    params: FsTempFileParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fs_temp_file");
    if ((params["base_dir"] ?? null) !== null) {
        cargs.push(
            "-b",
            (params["base_dir"] ?? null)
        );
    }
    if ((params["base_dir_alt"] ?? null) !== null) {
        cargs.push(
            "--base",
            (params["base_dir_alt"] ?? null)
        );
    }
    if ((params["suffix"] ?? null) !== null) {
        cargs.push(
            "-s",
            (params["suffix"] ?? null)
        );
    }
    if ((params["suffix_alt"] ?? null) !== null) {
        cargs.push(
            "--suffix",
            (params["suffix_alt"] ?? null)
        );
    }
    if ((params["scratch"] ?? null)) {
        cargs.push("--scratch");
    }
    if ((params["help"] ?? null)) {
        cargs.push("-h");
    }
    if ((params["help_alt"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function fs_temp_file_outputs(
    params: FsTempFileParameters,
    execution: Execution,
): FsTempFileOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FsTempFileOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fs_temp_file_execute(
    params: FsTempFileParameters,
    execution: Execution,
): FsTempFileOutputs {
    /**
     * Generates and creates an empty temporary file, printing the resulting path to stdout.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FsTempFileOutputs`).
     */
    params = execution.params(params)
    const cargs = fs_temp_file_cargs(params, execution)
    const ret = fs_temp_file_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fs_temp_file(
    base_dir: string | null = null,
    base_dir_alt: string | null = null,
    suffix: string | null = null,
    suffix_alt: string | null = null,
    scratch: boolean = false,
    help: boolean = false,
    help_alt: boolean = false,
    runner: Runner | null = null,
): FsTempFileOutputs {
    /**
     * Generates and creates an empty temporary file, printing the resulting path to stdout.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param base_dir Manually specify base temporary directory.
     * @param base_dir_alt Manually specify base temporary directory.
     * @param suffix Optional file suffix.
     * @param suffix_alt Optional file suffix.
     * @param scratch Use /scratch directory if available, but FS_TMPDIR takes priority.
     * @param help Print help text and exit.
     * @param help_alt Print help text and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FsTempFileOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FS_TEMP_FILE_METADATA);
    const params = fs_temp_file_params(base_dir, base_dir_alt, suffix, suffix_alt, scratch, help, help_alt)
    return fs_temp_file_execute(params, execution);
}


export {
      FS_TEMP_FILE_METADATA,
      FsTempFileOutputs,
      FsTempFileParameters,
      fs_temp_file,
      fs_temp_file_params,
};
