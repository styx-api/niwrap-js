// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const REGISTER_ELDERLY_SUBJECT_METADATA: Metadata = {
    id: "6846052f6f1ffde9ddad0703126f73b72a6cd671.boutiques",
    name: "register_elderly_subject",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface RegisterElderlySubjectParameters {
    "__STYXTYPE__": "register_elderly_subject";
    "sampling_percentage"?: number | null | undefined;
    "output_fsamples": string;
    "output_norm": string;
    "input_volume": InputPathType;
    "gca_file": InputPathType;
    "transform_file": InputPathType;
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
        "register_elderly_subject": register_elderly_subject_cargs,
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
        "register_elderly_subject": register_elderly_subject_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `register_elderly_subject(...)`.
 *
 * @interface
 */
interface RegisterElderlySubjectOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Transformed control points output
     */
    transformed_fsamples_output: OutputPathType;
    /**
     * Intensity normalized volume
     */
    normalized_volume_output: OutputPathType;
}


function register_elderly_subject_params(
    output_fsamples: string,
    output_norm: string,
    input_volume: InputPathType,
    gca_file: InputPathType,
    transform_file: InputPathType,
    sampling_percentage: number | null = 0.5,
): RegisterElderlySubjectParameters {
    /**
     * Build parameters.
    
     * @param output_fsamples Output path for transformed control points
     * @param output_norm Output path for intensity normalized volume
     * @param input_volume Input MRI volume to register
     * @param gca_file GCA file for registration
     * @param transform_file Output transform file
     * @param sampling_percentage Percentage of white matter points to use as control points
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "register_elderly_subject" as const,
        "output_fsamples": output_fsamples,
        "output_norm": output_norm,
        "input_volume": input_volume,
        "gca_file": gca_file,
        "transform_file": transform_file,
    };
    if (sampling_percentage !== null) {
        params["sampling_percentage"] = sampling_percentage;
    }
    return params;
}


function register_elderly_subject_cargs(
    params: RegisterElderlySubjectParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("register_elderly_subject");
    if ((params["sampling_percentage"] ?? null) !== null) {
        cargs.push(
            "-p",
            String((params["sampling_percentage"] ?? null))
        );
    }
    cargs.push(
        "-fsamples",
        (params["output_fsamples"] ?? null)
    );
    cargs.push(
        "-norm",
        (params["output_norm"] ?? null)
    );
    cargs.push(execution.inputFile((params["input_volume"] ?? null)));
    cargs.push(execution.inputFile((params["gca_file"] ?? null)));
    cargs.push(execution.inputFile((params["transform_file"] ?? null)));
    return cargs;
}


function register_elderly_subject_outputs(
    params: RegisterElderlySubjectParameters,
    execution: Execution,
): RegisterElderlySubjectOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: RegisterElderlySubjectOutputs = {
        root: execution.outputFile("."),
        transformed_fsamples_output: execution.outputFile([(params["output_fsamples"] ?? null)].join('')),
        normalized_volume_output: execution.outputFile([(params["output_norm"] ?? null)].join('')),
    };
    return ret;
}


function register_elderly_subject_execute(
    params: RegisterElderlySubjectParameters,
    execution: Execution,
): RegisterElderlySubjectOutputs {
    /**
     * Tool for registering MRI images of elderly subjects using Freesurfer's mri_em_register.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `RegisterElderlySubjectOutputs`).
     */
    params = execution.params(params)
    const cargs = register_elderly_subject_cargs(params, execution)
    const ret = register_elderly_subject_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function register_elderly_subject(
    output_fsamples: string,
    output_norm: string,
    input_volume: InputPathType,
    gca_file: InputPathType,
    transform_file: InputPathType,
    sampling_percentage: number | null = 0.5,
    runner: Runner | null = null,
): RegisterElderlySubjectOutputs {
    /**
     * Tool for registering MRI images of elderly subjects using Freesurfer's mri_em_register.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param output_fsamples Output path for transformed control points
     * @param output_norm Output path for intensity normalized volume
     * @param input_volume Input MRI volume to register
     * @param gca_file GCA file for registration
     * @param transform_file Output transform file
     * @param sampling_percentage Percentage of white matter points to use as control points
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `RegisterElderlySubjectOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(REGISTER_ELDERLY_SUBJECT_METADATA);
    const params = register_elderly_subject_params(output_fsamples, output_norm, input_volume, gca_file, transform_file, sampling_percentage)
    return register_elderly_subject_execute(params, execution);
}


export {
      REGISTER_ELDERLY_SUBJECT_METADATA,
      RegisterElderlySubjectOutputs,
      RegisterElderlySubjectParameters,
      register_elderly_subject,
      register_elderly_subject_params,
};
