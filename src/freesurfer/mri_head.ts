// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_HEAD_METADATA: Metadata = {
    id: "f71c8c4f81d133948a66cd2d08a048fd40c58c30.boutiques",
    name: "mri_head",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriHeadParameters {
    "__STYXTYPE__": "mri_head";
    "identify": boolean;
    "read": boolean;
    "filename"?: string | null | undefined;
    "help": boolean;
    "usage": boolean;
    "question_mark_help": boolean;
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
        "mri_head": mri_head_cargs,
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
 * Output object returned when calling `mri_head(...)`.
 *
 * @interface
 */
interface MriHeadOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mri_head_params(
    identify: boolean = false,
    read: boolean = false,
    filename: string | null = null,
    help: boolean = false,
    usage: boolean = false,
    question_mark_help: boolean = false,
): MriHeadParameters {
    /**
     * Build parameters.
    
     * @param identify Identify the MRI file
     * @param read Read the MRI file
     * @param filename Filename for identification or reading
     * @param help Display help information
     * @param usage Display usage information
     * @param question_mark_help Display help or usage information
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_head" as const,
        "identify": identify,
        "read": read,
        "help": help,
        "usage": usage,
        "question_mark_help": question_mark_help,
    };
    if (filename !== null) {
        params["filename"] = filename;
    }
    return params;
}


function mri_head_cargs(
    params: MriHeadParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_head");
    if ((params["identify"] ?? null)) {
        cargs.push("-identify");
    }
    if ((params["read"] ?? null)) {
        cargs.push("-read");
    }
    if ((params["filename"] ?? null) !== null) {
        cargs.push((params["filename"] ?? null));
    }
    if ((params["help"] ?? null)) {
        cargs.push("-h");
    }
    if ((params["usage"] ?? null)) {
        cargs.push("-u");
    }
    if ((params["question_mark_help"] ?? null)) {
        cargs.push("-?");
    }
    return cargs;
}


function mri_head_outputs(
    params: MriHeadParameters,
    execution: Execution,
): MriHeadOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriHeadOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mri_head_execute(
    params: MriHeadParameters,
    execution: Execution,
): MriHeadOutputs {
    /**
     * No description.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriHeadOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_head_cargs(params, execution)
    const ret = mri_head_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_head(
    identify: boolean = false,
    read: boolean = false,
    filename: string | null = null,
    help: boolean = false,
    usage: boolean = false,
    question_mark_help: boolean = false,
    runner: Runner | null = null,
): MriHeadOutputs {
    /**
     * No description.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param identify Identify the MRI file
     * @param read Read the MRI file
     * @param filename Filename for identification or reading
     * @param help Display help information
     * @param usage Display usage information
     * @param question_mark_help Display help or usage information
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriHeadOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_HEAD_METADATA);
    const params = mri_head_params(identify, read, filename, help, usage, question_mark_help)
    return mri_head_execute(params, execution);
}


export {
      MRI_HEAD_METADATA,
      MriHeadOutputs,
      MriHeadParameters,
      mri_head,
      mri_head_params,
};
