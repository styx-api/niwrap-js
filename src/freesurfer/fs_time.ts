// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FS_TIME_METADATA: Metadata = {
    id: "897824286c7098dc9c88cb3bcaf0654aece28325.boutiques",
    name: "fs_time",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FsTimeParameters {
    "__STYXTYPE__": "fs_time";
    "output_file"?: string | null | undefined;
    "key"?: string | null | undefined;
    "load_avg": boolean;
    "command": string;
    "args"?: Array<string> | null | undefined;
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
        "fs_time": fs_time_cargs,
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
        "fs_time": fs_time_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fs_time(...)`.
 *
 * @interface
 */
interface FsTimeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File containing resource usage information.
     */
    resource_output: OutputPathType | null;
}


function fs_time_params(
    command: string,
    output_file: string | null = null,
    key: string | null = null,
    load_avg: boolean = false,
    args: Array<string> | null = null,
): FsTimeParameters {
    /**
     * Build parameters.
    
     * @param command The command to be timed with fs_time.
     * @param output_file Save resource info into output file.
     * @param key Specify a key for the resource information.
     * @param load_avg Report on load averages as from uptime.
     * @param args Arguments for the command.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fs_time" as const,
        "load_avg": load_avg,
        "command": command,
    };
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    if (key !== null) {
        params["key"] = key;
    }
    if (args !== null) {
        params["args"] = args;
    }
    return params;
}


function fs_time_cargs(
    params: FsTimeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fs_time");
    if ((params["output_file"] ?? null) !== null) {
        cargs.push(
            "-o",
            (params["output_file"] ?? null)
        );
    }
    if ((params["key"] ?? null) !== null) {
        cargs.push(
            "-k",
            (params["key"] ?? null)
        );
    }
    if ((params["load_avg"] ?? null)) {
        cargs.push("-l");
    }
    cargs.push((params["command"] ?? null));
    if ((params["args"] ?? null) !== null) {
        cargs.push(...(params["args"] ?? null));
    }
    return cargs;
}


function fs_time_outputs(
    params: FsTimeParameters,
    execution: Execution,
): FsTimeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FsTimeOutputs = {
        root: execution.outputFile("."),
        resource_output: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function fs_time_execute(
    params: FsTimeParameters,
    execution: Execution,
): FsTimeOutputs {
    /**
     * A frontend for the unix /usr/bin/time program to track resource usage by a process.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FsTimeOutputs`).
     */
    params = execution.params(params)
    const cargs = fs_time_cargs(params, execution)
    const ret = fs_time_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fs_time(
    command: string,
    output_file: string | null = null,
    key: string | null = null,
    load_avg: boolean = false,
    args: Array<string> | null = null,
    runner: Runner | null = null,
): FsTimeOutputs {
    /**
     * A frontend for the unix /usr/bin/time program to track resource usage by a process.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param command The command to be timed with fs_time.
     * @param output_file Save resource info into output file.
     * @param key Specify a key for the resource information.
     * @param load_avg Report on load averages as from uptime.
     * @param args Arguments for the command.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FsTimeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FS_TIME_METADATA);
    const params = fs_time_params(command, output_file, key, load_avg, args)
    return fs_time_execute(params, execution);
}


export {
      FS_TIME_METADATA,
      FsTimeOutputs,
      FsTimeParameters,
      fs_time,
      fs_time_params,
};
