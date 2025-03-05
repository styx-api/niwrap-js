// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const REINFLATE_SUBJECT_LH_METADATA: Metadata = {
    id: "3a29a9cc35621246bc04494a51e4c6898d34911c.boutiques",
    name: "reinflate_subject-lh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface ReinflateSubjectLhParameters {
    "__STYXTYPE__": "reinflate_subject-lh";
    "subject_id": string;
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
        "reinflate_subject-lh": reinflate_subject_lh_cargs,
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
        "reinflate_subject-lh": reinflate_subject_lh_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `reinflate_subject_lh(...)`.
 *
 * @interface
 */
interface ReinflateSubjectLhOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Reinflated left hemisphere cortical surface
     */
    inflated_surface: OutputPathType;
}


function reinflate_subject_lh_params(
    subject_id: string,
): ReinflateSubjectLhParameters {
    /**
     * Build parameters.
    
     * @param subject_id Subject identifier
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "reinflate_subject-lh" as const,
        "subject_id": subject_id,
    };
    return params;
}


function reinflate_subject_lh_cargs(
    params: ReinflateSubjectLhParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push(
        "-lh",
        ["reinflate_subject", (params["subject_id"] ?? null)].join('')
    );
    return cargs;
}


function reinflate_subject_lh_outputs(
    params: ReinflateSubjectLhParameters,
    execution: Execution,
): ReinflateSubjectLhOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ReinflateSubjectLhOutputs = {
        root: execution.outputFile("."),
        inflated_surface: execution.outputFile([(params["subject_id"] ?? null), "/surf/lh.inflated"].join('')),
    };
    return ret;
}


function reinflate_subject_lh_execute(
    params: ReinflateSubjectLhParameters,
    execution: Execution,
): ReinflateSubjectLhOutputs {
    /**
     * Utility to reinflate cortical surfaces for left hemisphere in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ReinflateSubjectLhOutputs`).
     */
    params = execution.params(params)
    const cargs = reinflate_subject_lh_cargs(params, execution)
    const ret = reinflate_subject_lh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function reinflate_subject_lh(
    subject_id: string,
    runner: Runner | null = null,
): ReinflateSubjectLhOutputs {
    /**
     * Utility to reinflate cortical surfaces for left hemisphere in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_id Subject identifier
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ReinflateSubjectLhOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(REINFLATE_SUBJECT_LH_METADATA);
    const params = reinflate_subject_lh_params(subject_id)
    return reinflate_subject_lh_execute(params, execution);
}


export {
      REINFLATE_SUBJECT_LH_METADATA,
      ReinflateSubjectLhOutputs,
      ReinflateSubjectLhParameters,
      reinflate_subject_lh,
      reinflate_subject_lh_params,
};
