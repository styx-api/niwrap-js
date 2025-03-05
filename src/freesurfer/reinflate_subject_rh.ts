// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const REINFLATE_SUBJECT_RH_METADATA: Metadata = {
    id: "46c17d80d09536f705ed323c939acc704434405c.boutiques",
    name: "reinflate_subject-rh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface ReinflateSubjectRhParameters {
    "__STYXTYPE__": "reinflate_subject-rh";
    "subject_dir": string;
    "additional_options"?: string | null | undefined;
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
        "reinflate_subject-rh": reinflate_subject_rh_cargs,
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
 * Output object returned when calling `reinflate_subject_rh(...)`.
 *
 * @interface
 */
interface ReinflateSubjectRhOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function reinflate_subject_rh_params(
    subject_dir: string,
    additional_options: string | null = null,
): ReinflateSubjectRhParameters {
    /**
     * Build parameters.
    
     * @param subject_dir Directory of the subject within FreeSurfer environment
     * @param additional_options Additional options for the reinflate_subject-rh command
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "reinflate_subject-rh" as const,
        "subject_dir": subject_dir,
    };
    if (additional_options !== null) {
        params["additional_options"] = additional_options;
    }
    return params;
}


function reinflate_subject_rh_cargs(
    params: ReinflateSubjectRhParameters,
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
        "-rh",
        ["reinflate_subject", (params["subject_dir"] ?? null)].join('')
    );
    if ((params["additional_options"] ?? null) !== null) {
        cargs.push((params["additional_options"] ?? null));
    }
    return cargs;
}


function reinflate_subject_rh_outputs(
    params: ReinflateSubjectRhParameters,
    execution: Execution,
): ReinflateSubjectRhOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ReinflateSubjectRhOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function reinflate_subject_rh_execute(
    params: ReinflateSubjectRhParameters,
    execution: Execution,
): ReinflateSubjectRhOutputs {
    /**
     * A tool for reinflating the cortical surfaces for a given subject in FreeSurfer, specifically for the right hemisphere.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ReinflateSubjectRhOutputs`).
     */
    params = execution.params(params)
    const cargs = reinflate_subject_rh_cargs(params, execution)
    const ret = reinflate_subject_rh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function reinflate_subject_rh(
    subject_dir: string,
    additional_options: string | null = null,
    runner: Runner | null = null,
): ReinflateSubjectRhOutputs {
    /**
     * A tool for reinflating the cortical surfaces for a given subject in FreeSurfer, specifically for the right hemisphere.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_dir Directory of the subject within FreeSurfer environment
     * @param additional_options Additional options for the reinflate_subject-rh command
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ReinflateSubjectRhOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(REINFLATE_SUBJECT_RH_METADATA);
    const params = reinflate_subject_rh_params(subject_dir, additional_options)
    return reinflate_subject_rh_execute(params, execution);
}


export {
      REINFLATE_SUBJECT_RH_METADATA,
      ReinflateSubjectRhOutputs,
      ReinflateSubjectRhParameters,
      reinflate_subject_rh,
      reinflate_subject_rh_params,
};
