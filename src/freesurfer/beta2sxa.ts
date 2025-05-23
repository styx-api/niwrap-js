// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const BETA2SXA_METADATA: Metadata = {
    id: "f0f822c3fdfc6946f2efbf9d1eba0fc23f0154a3.boutiques",
    name: "beta2sxa",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface Beta2sxaParameters {
    "__STYXTYPE__": "beta2sxa";
    "beta_files": Array<InputPathType>;
    "number_of_conditions": number;
    "number_of_per_subjects": number;
    "sxa_output"?: string | null | undefined;
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
        "beta2sxa": beta2sxa_cargs,
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
        "beta2sxa": beta2sxa_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `beta2sxa(...)`.
 *
 * @interface
 */
interface Beta2sxaOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output file for tkmedit or tksurfer visualization.
     */
    sxa_output_file: OutputPathType;
}


function beta2sxa_params(
    beta_files: Array<InputPathType>,
    number_of_conditions: number,
    number_of_per_subjects: number,
    sxa_output: string | null = "h.beta",
): Beta2sxaParameters {
    /**
     * Build parameters.
    
     * @param beta_files Input beta files, e.g., data.nii
     * @param number_of_conditions Number of groups or conditions
     * @param number_of_per_subjects Number of subjects per group
     * @param sxa_output Output sxa file. Default is h.beta
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "beta2sxa" as const,
        "beta_files": beta_files,
        "number_of_conditions": number_of_conditions,
        "number_of_per_subjects": number_of_per_subjects,
    };
    if (sxa_output !== null) {
        params["sxa_output"] = sxa_output;
    }
    return params;
}


function beta2sxa_cargs(
    params: Beta2sxaParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("beta2sxa");
    cargs.push(
        "--b",
        ...(params["beta_files"] ?? null).map(f => execution.inputFile(f))
    );
    cargs.push(
        "--nc",
        String((params["number_of_conditions"] ?? null))
    );
    cargs.push(
        "--nper",
        String((params["number_of_per_subjects"] ?? null))
    );
    if ((params["sxa_output"] ?? null) !== null) {
        cargs.push(
            "--o",
            (params["sxa_output"] ?? null)
        );
    }
    return cargs;
}


function beta2sxa_outputs(
    params: Beta2sxaParameters,
    execution: Execution,
): Beta2sxaOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: Beta2sxaOutputs = {
        root: execution.outputFile("."),
        sxa_output_file: execution.outputFile(["h.[MASK].nii"].join('')),
    };
    return ret;
}


function beta2sxa_execute(
    params: Beta2sxaParameters,
    execution: Execution,
): Beta2sxaOutputs {
    /**
     * A script to create files for plotting in tkmedit or tksurfer based on tabular data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `Beta2sxaOutputs`).
     */
    params = execution.params(params)
    const cargs = beta2sxa_cargs(params, execution)
    const ret = beta2sxa_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function beta2sxa(
    beta_files: Array<InputPathType>,
    number_of_conditions: number,
    number_of_per_subjects: number,
    sxa_output: string | null = "h.beta",
    runner: Runner | null = null,
): Beta2sxaOutputs {
    /**
     * A script to create files for plotting in tkmedit or tksurfer based on tabular data.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param beta_files Input beta files, e.g., data.nii
     * @param number_of_conditions Number of groups or conditions
     * @param number_of_per_subjects Number of subjects per group
     * @param sxa_output Output sxa file. Default is h.beta
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `Beta2sxaOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(BETA2SXA_METADATA);
    const params = beta2sxa_params(beta_files, number_of_conditions, number_of_per_subjects, sxa_output)
    return beta2sxa_execute(params, execution);
}


export {
      BETA2SXA_METADATA,
      Beta2sxaOutputs,
      Beta2sxaParameters,
      beta2sxa,
      beta2sxa_params,
};
