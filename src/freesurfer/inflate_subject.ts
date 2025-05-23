// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const INFLATE_SUBJECT_METADATA: Metadata = {
    id: "ba316f47f940dcbc35fc9f6c2b7bf56afcc47cd8.boutiques",
    name: "inflate_subject",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface InflateSubjectParameters {
    "__STYXTYPE__": "inflate_subject";
    "args"?: string | null | undefined;
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
        "inflate_subject": inflate_subject_cargs,
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
        "inflate_subject": inflate_subject_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `inflate_subject(...)`.
 *
 * @interface
 */
interface InflateSubjectOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output of inflate_subject command
     */
    output_file: OutputPathType | null;
}


function inflate_subject_params(
    args: string | null = null,
): InflateSubjectParameters {
    /**
     * Build parameters.
    
     * @param args Arguments for the inflate_subject command
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "inflate_subject" as const,
    };
    if (args !== null) {
        params["args"] = args;
    }
    return params;
}


function inflate_subject_cargs(
    params: InflateSubjectParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("inflate_subject");
    if ((params["args"] ?? null) !== null) {
        cargs.push((params["args"] ?? null));
    }
    return cargs;
}


function inflate_subject_outputs(
    params: InflateSubjectParameters,
    execution: Execution,
): InflateSubjectOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: InflateSubjectOutputs = {
        root: execution.outputFile("."),
        output_file: ((params["args"] ?? null) !== null) ? execution.outputFile([(params["args"] ?? null), "_output.txt"].join('')) : null,
    };
    return ret;
}


function inflate_subject_execute(
    params: InflateSubjectParameters,
    execution: Execution,
): InflateSubjectOutputs {
    /**
     * Inflate subject script for FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `InflateSubjectOutputs`).
     */
    params = execution.params(params)
    const cargs = inflate_subject_cargs(params, execution)
    const ret = inflate_subject_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function inflate_subject(
    args: string | null = null,
    runner: Runner | null = null,
): InflateSubjectOutputs {
    /**
     * Inflate subject script for FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param args Arguments for the inflate_subject command
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `InflateSubjectOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(INFLATE_SUBJECT_METADATA);
    const params = inflate_subject_params(args)
    return inflate_subject_execute(params, execution);
}


export {
      INFLATE_SUBJECT_METADATA,
      InflateSubjectOutputs,
      InflateSubjectParameters,
      inflate_subject,
      inflate_subject_params,
};
