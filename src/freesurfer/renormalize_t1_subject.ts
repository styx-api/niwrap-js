// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const RENORMALIZE_T1_SUBJECT_METADATA: Metadata = {
    id: "fd1b560cfb5855fbdac004ecaa45cd6e0aa37abf.boutiques",
    name: "renormalize_T1_subject",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface RenormalizeT1SubjectParameters {
    "__STYXTYPE__": "renormalize_T1_subject";
    "subject_dir": string;
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
        "renormalize_T1_subject": renormalize_t1_subject_cargs,
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
 * Output object returned when calling `renormalize_t1_subject(...)`.
 *
 * @interface
 */
interface RenormalizeT1SubjectOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function renormalize_t1_subject_params(
    subject_dir: string,
): RenormalizeT1SubjectParameters {
    /**
     * Build parameters.
    
     * @param subject_dir Directory of the subject containing T1 images to renormalize
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "renormalize_T1_subject" as const,
        "subject_dir": subject_dir,
    };
    return params;
}


function renormalize_t1_subject_cargs(
    params: RenormalizeT1SubjectParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("renormalize_T1_subject");
    cargs.push((params["subject_dir"] ?? null));
    return cargs;
}


function renormalize_t1_subject_outputs(
    params: RenormalizeT1SubjectParameters,
    execution: Execution,
): RenormalizeT1SubjectOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: RenormalizeT1SubjectOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function renormalize_t1_subject_execute(
    params: RenormalizeT1SubjectParameters,
    execution: Execution,
): RenormalizeT1SubjectOutputs {
    /**
     * Renormalize T1 subject images using FreeSurfer scripts.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `RenormalizeT1SubjectOutputs`).
     */
    params = execution.params(params)
    const cargs = renormalize_t1_subject_cargs(params, execution)
    const ret = renormalize_t1_subject_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function renormalize_t1_subject(
    subject_dir: string,
    runner: Runner | null = null,
): RenormalizeT1SubjectOutputs {
    /**
     * Renormalize T1 subject images using FreeSurfer scripts.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_dir Directory of the subject containing T1 images to renormalize
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `RenormalizeT1SubjectOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(RENORMALIZE_T1_SUBJECT_METADATA);
    const params = renormalize_t1_subject_params(subject_dir)
    return renormalize_t1_subject_execute(params, execution);
}


export {
      RENORMALIZE_T1_SUBJECT_METADATA,
      RenormalizeT1SubjectOutputs,
      RenormalizeT1SubjectParameters,
      renormalize_t1_subject,
      renormalize_t1_subject_params,
};
