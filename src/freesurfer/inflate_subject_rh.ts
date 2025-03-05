// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const INFLATE_SUBJECT_RH_METADATA: Metadata = {
    id: "c870a2dd4beffc1dccf8c6c63c1951a8bb440f30.boutiques",
    name: "inflate_subject-rh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface InflateSubjectRhParameters {
    "__STYXTYPE__": "inflate_subject-rh";
    "arguments"?: string | null | undefined;
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
        "inflate_subject-rh": inflate_subject_rh_cargs,
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
 * Output object returned when calling `inflate_subject_rh(...)`.
 *
 * @interface
 */
interface InflateSubjectRhOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function inflate_subject_rh_params(
    arguments_: string | null = null,
): InflateSubjectRhParameters {
    /**
     * Build parameters.
    
     * @param arguments_ Arguments for the command. Placeholder due to lack of detailed help text.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "inflate_subject-rh" as const,
    };
    if (arguments_ !== null) {
        params["arguments"] = arguments_;
    }
    return params;
}


function inflate_subject_rh_cargs(
    params: InflateSubjectRhParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    if ((params["arguments"] ?? null) !== null) {
        cargs.push(
            "-rh",
            ["inflate_subject", (params["arguments"] ?? null)].join('')
        );
    }
    return cargs;
}


function inflate_subject_rh_outputs(
    params: InflateSubjectRhParameters,
    execution: Execution,
): InflateSubjectRhOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: InflateSubjectRhOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function inflate_subject_rh_execute(
    params: InflateSubjectRhParameters,
    execution: Execution,
): InflateSubjectRhOutputs {
    /**
     * Freesurfer command to perform an operation on the right hemisphere of a subject's brain image data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `InflateSubjectRhOutputs`).
     */
    params = execution.params(params)
    const cargs = inflate_subject_rh_cargs(params, execution)
    const ret = inflate_subject_rh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function inflate_subject_rh(
    arguments_: string | null = null,
    runner: Runner | null = null,
): InflateSubjectRhOutputs {
    /**
     * Freesurfer command to perform an operation on the right hemisphere of a subject's brain image data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param arguments_ Arguments for the command. Placeholder due to lack of detailed help text.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `InflateSubjectRhOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(INFLATE_SUBJECT_RH_METADATA);
    const params = inflate_subject_rh_params(arguments_)
    return inflate_subject_rh_execute(params, execution);
}


export {
      INFLATE_SUBJECT_RH_METADATA,
      InflateSubjectRhOutputs,
      InflateSubjectRhParameters,
      inflate_subject_rh,
      inflate_subject_rh_params,
};
