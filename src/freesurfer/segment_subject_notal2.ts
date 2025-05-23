// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SEGMENT_SUBJECT_NOTAL2_METADATA: Metadata = {
    id: "e868882e2e6641277409761b25a2083cd6437b1c.boutiques",
    name: "segment_subject_notal2",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface SegmentSubjectNotal2Parameters {
    "__STYXTYPE__": "segment_subject_notal2";
    "license_file": InputPathType;
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
        "segment_subject_notal2": segment_subject_notal2_cargs,
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
        "segment_subject_notal2": segment_subject_notal2_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `segment_subject_notal2(...)`.
 *
 * @interface
 */
interface SegmentSubjectNotal2Outputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output directory containing the segmented results
     */
    output_dir: OutputPathType;
}


function segment_subject_notal2_params(
    license_file: InputPathType,
): SegmentSubjectNotal2Parameters {
    /**
     * Build parameters.
    
     * @param license_file FreeSurfer license file is required to run the application. Obtain from http://surfer.nmr.mgh.harvard.edu/registration.html.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "segment_subject_notal2" as const,
        "license_file": license_file,
    };
    return params;
}


function segment_subject_notal2_cargs(
    params: SegmentSubjectNotal2Parameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("segment_subject_notal2");
    cargs.push(
        "--fs-license-file",
        execution.inputFile((params["license_file"] ?? null))
    );
    return cargs;
}


function segment_subject_notal2_outputs(
    params: SegmentSubjectNotal2Parameters,
    execution: Execution,
): SegmentSubjectNotal2Outputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SegmentSubjectNotal2Outputs = {
        root: execution.outputFile("."),
        output_dir: execution.outputFile(["segmented_output"].join('')),
    };
    return ret;
}


function segment_subject_notal2_execute(
    params: SegmentSubjectNotal2Parameters,
    execution: Execution,
): SegmentSubjectNotal2Outputs {
    /**
     * FreeSurfer tool for segmenting subject data using notal2 algorithm.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SegmentSubjectNotal2Outputs`).
     */
    params = execution.params(params)
    const cargs = segment_subject_notal2_cargs(params, execution)
    const ret = segment_subject_notal2_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function segment_subject_notal2(
    license_file: InputPathType,
    runner: Runner | null = null,
): SegmentSubjectNotal2Outputs {
    /**
     * FreeSurfer tool for segmenting subject data using notal2 algorithm.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param license_file FreeSurfer license file is required to run the application. Obtain from http://surfer.nmr.mgh.harvard.edu/registration.html.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SegmentSubjectNotal2Outputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SEGMENT_SUBJECT_NOTAL2_METADATA);
    const params = segment_subject_notal2_params(license_file)
    return segment_subject_notal2_execute(params, execution);
}


export {
      SEGMENT_SUBJECT_NOTAL2_METADATA,
      SegmentSubjectNotal2Outputs,
      SegmentSubjectNotal2Parameters,
      segment_subject_notal2,
      segment_subject_notal2_params,
};
