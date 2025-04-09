// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FIX_SUBJECT_RH_METADATA: Metadata = {
    id: "d6f9654d878ef28530ea8f9531c3a06325244e6b.boutiques",
    name: "fix_subject-rh",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FixSubjectRhParameters {
    "__STYXTYPE__": "fix_subject-rh";
    "input_directory": string;
    "help_flag": boolean;
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
        "fix_subject-rh": fix_subject_rh_cargs,
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
 * Output object returned when calling `fix_subject_rh(...)`.
 *
 * @interface
 */
interface FixSubjectRhOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function fix_subject_rh_params(
    input_directory: string,
    help_flag: boolean = false,
): FixSubjectRhParameters {
    /**
     * Build parameters.
    
     * @param input_directory Directory where the subject's right hemisphere data is located.
     * @param help_flag Displays help information for fix_subject-rh.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fix_subject-rh" as const,
        "input_directory": input_directory,
        "help_flag": help_flag,
    };
    return params;
}


function fix_subject_rh_cargs(
    params: FixSubjectRhParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fix_subject-rh");
    cargs.push(
        "-rh",
        (params["input_directory"] ?? null)
    );
    if ((params["help_flag"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function fix_subject_rh_outputs(
    params: FixSubjectRhParameters,
    execution: Execution,
): FixSubjectRhOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FixSubjectRhOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function fix_subject_rh_execute(
    params: FixSubjectRhParameters,
    execution: Execution,
): FixSubjectRhOutputs {
    /**
     * A tool from FreeSurfer that performs operations on the right hemisphere data within a specified directory.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FixSubjectRhOutputs`).
     */
    params = execution.params(params)
    const cargs = fix_subject_rh_cargs(params, execution)
    const ret = fix_subject_rh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fix_subject_rh(
    input_directory: string,
    help_flag: boolean = false,
    runner: Runner | null = null,
): FixSubjectRhOutputs {
    /**
     * A tool from FreeSurfer that performs operations on the right hemisphere data within a specified directory.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_directory Directory where the subject's right hemisphere data is located.
     * @param help_flag Displays help information for fix_subject-rh.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FixSubjectRhOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FIX_SUBJECT_RH_METADATA);
    const params = fix_subject_rh_params(input_directory, help_flag)
    return fix_subject_rh_execute(params, execution);
}


export {
      FIX_SUBJECT_RH_METADATA,
      FixSubjectRhOutputs,
      FixSubjectRhParameters,
      fix_subject_rh,
      fix_subject_rh_params,
};
