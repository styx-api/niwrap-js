// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FS_TUTORIAL_DATA_METADATA: Metadata = {
    id: "bd2bd293ebd9f33142807aa996b1099448b46897.boutiques",
    name: "fs_tutorial_data",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FsTutorialDataParameters {
    "__STYXTYPE__": "fs_tutorial_data";
    "rsync_options"?: Array<string> | null | undefined;
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
        "fs_tutorial_data": fs_tutorial_data_cargs,
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
        "fs_tutorial_data": fs_tutorial_data_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fs_tutorial_data(...)`.
 *
 * @interface
 */
interface FsTutorialDataOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Directory where tutorial data will be downloaded and installed.
     */
    tutorial_data_dir: OutputPathType;
}


function fs_tutorial_data_params(
    rsync_options: Array<string> | null = null,
): FsTutorialDataParameters {
    /**
     * Build parameters.
    
     * @param rsync_options Additional rsync options for downloading tutorial data.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fs_tutorial_data" as const,
    };
    if (rsync_options !== null) {
        params["rsync_options"] = rsync_options;
    }
    return params;
}


function fs_tutorial_data_cargs(
    params: FsTutorialDataParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fs_tutorial_data");
    if ((params["rsync_options"] ?? null) !== null) {
        cargs.push(...(params["rsync_options"] ?? null));
    }
    return cargs;
}


function fs_tutorial_data_outputs(
    params: FsTutorialDataParameters,
    execution: Execution,
): FsTutorialDataOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FsTutorialDataOutputs = {
        root: execution.outputFile("."),
        tutorial_data_dir: execution.outputFile(["/usr/local/freesurfer/subjects/tutorial_data"].join('')),
    };
    return ret;
}


function fs_tutorial_data_execute(
    params: FsTutorialDataParameters,
    execution: Execution,
): FsTutorialDataOutputs {
    /**
     * Tool to download and install FreeSurfer tutorial data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FsTutorialDataOutputs`).
     */
    params = execution.params(params)
    const cargs = fs_tutorial_data_cargs(params, execution)
    const ret = fs_tutorial_data_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fs_tutorial_data(
    rsync_options: Array<string> | null = null,
    runner: Runner | null = null,
): FsTutorialDataOutputs {
    /**
     * Tool to download and install FreeSurfer tutorial data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param rsync_options Additional rsync options for downloading tutorial data.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FsTutorialDataOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FS_TUTORIAL_DATA_METADATA);
    const params = fs_tutorial_data_params(rsync_options)
    return fs_tutorial_data_execute(params, execution);
}


export {
      FS_TUTORIAL_DATA_METADATA,
      FsTutorialDataOutputs,
      FsTutorialDataParameters,
      fs_tutorial_data,
      fs_tutorial_data_params,
};
