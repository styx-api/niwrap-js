// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SEGMENT_SUBJECT_NOTAL_METADATA: Metadata = {
    id: "a7a96a3826fdc962ee75d09bc6629b89ee8c17d9.boutiques",
    name: "segment_subject_notal",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface SegmentSubjectNotalParameters {
    "__STYXTYPE__": "segment_subject_notal";
    "subject_path": string;
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
        "segment_subject_notal": segment_subject_notal_cargs,
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
 * Output object returned when calling `segment_subject_notal(...)`.
 *
 * @interface
 */
interface SegmentSubjectNotalOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function segment_subject_notal_params(
    subject_path: string,
): SegmentSubjectNotalParameters {
    /**
     * Build parameters.
    
     * @param subject_path Path to the subject's directory
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "segment_subject_notal" as const,
        "subject_path": subject_path,
    };
    return params;
}


function segment_subject_notal_cargs(
    params: SegmentSubjectNotalParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("segment_subject_notal");
    cargs.push((params["subject_path"] ?? null));
    return cargs;
}


function segment_subject_notal_outputs(
    params: SegmentSubjectNotalParameters,
    execution: Execution,
): SegmentSubjectNotalOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SegmentSubjectNotalOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function segment_subject_notal_execute(
    params: SegmentSubjectNotalParameters,
    execution: Execution,
): SegmentSubjectNotalOutputs {
    /**
     * A script to segment subjects (notal).
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SegmentSubjectNotalOutputs`).
     */
    params = execution.params(params)
    const cargs = segment_subject_notal_cargs(params, execution)
    const ret = segment_subject_notal_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function segment_subject_notal(
    subject_path: string,
    runner: Runner | null = null,
): SegmentSubjectNotalOutputs {
    /**
     * A script to segment subjects (notal).
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_path Path to the subject's directory
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SegmentSubjectNotalOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SEGMENT_SUBJECT_NOTAL_METADATA);
    const params = segment_subject_notal_params(subject_path)
    return segment_subject_notal_execute(params, execution);
}


export {
      SEGMENT_SUBJECT_NOTAL_METADATA,
      SegmentSubjectNotalOutputs,
      SegmentSubjectNotalParameters,
      segment_subject_notal,
      segment_subject_notal_params,
};
