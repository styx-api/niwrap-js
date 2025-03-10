// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const REINFLATE_SUBJECT_METADATA: Metadata = {
    id: "1e08a83747d403bdb6fd509a84d2ca27a452f873.boutiques",
    name: "reinflate_subject",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface ReinflateSubjectParameters {
    "__STYXTYPE__": "reinflate_subject";
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
        "reinflate_subject": reinflate_subject_cargs,
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
 * Output object returned when calling `reinflate_subject(...)`.
 *
 * @interface
 */
interface ReinflateSubjectOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function reinflate_subject_params(
    args: string | null = null,
): ReinflateSubjectParameters {
    /**
     * Build parameters.
    
     * @param args Arguments for reinflate_subject
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "reinflate_subject" as const,
    };
    if (args !== null) {
        params["args"] = args;
    }
    return params;
}


function reinflate_subject_cargs(
    params: ReinflateSubjectParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("reinflate_subject");
    if ((params["args"] ?? null) !== null) {
        cargs.push((params["args"] ?? null));
    }
    return cargs;
}


function reinflate_subject_outputs(
    params: ReinflateSubjectParameters,
    execution: Execution,
): ReinflateSubjectOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ReinflateSubjectOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function reinflate_subject_execute(
    params: ReinflateSubjectParameters,
    execution: Execution,
): ReinflateSubjectOutputs {
    /**
     * Tool for reinflating brain surfaces.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ReinflateSubjectOutputs`).
     */
    params = execution.params(params)
    const cargs = reinflate_subject_cargs(params, execution)
    const ret = reinflate_subject_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function reinflate_subject(
    args: string | null = null,
    runner: Runner | null = null,
): ReinflateSubjectOutputs {
    /**
     * Tool for reinflating brain surfaces.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param args Arguments for reinflate_subject
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ReinflateSubjectOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(REINFLATE_SUBJECT_METADATA);
    const params = reinflate_subject_params(args)
    return reinflate_subject_execute(params, execution);
}


export {
      REINFLATE_SUBJECT_METADATA,
      ReinflateSubjectOutputs,
      ReinflateSubjectParameters,
      reinflate_subject,
      reinflate_subject_params,
};
