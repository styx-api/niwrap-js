// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const IS_LTA_METADATA: Metadata = {
    id: "a9d22638bdece2ba3d66169a55affcf047517108.boutiques",
    name: "IsLTA",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface IsLtaParameters {
    "__STYXTYPE__": "IsLTA";
    "candidate_file": InputPathType;
    "outfile": string;
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
        "IsLTA": is_lta_cargs,
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
        "IsLTA": is_lta_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `is_lta(...)`.
 *
 * @interface
 */
interface IsLtaOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * File containing 1 if the candidate file is an LTA, otherwise 0
     */
    output_file: OutputPathType;
}


function is_lta_params(
    candidate_file: InputPathType,
    outfile: string,
): IsLtaParameters {
    /**
     * Build parameters.
    
     * @param candidate_file Candidate file to check if it is an LTA
     * @param outfile Output file to write the result
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "IsLTA" as const,
        "candidate_file": candidate_file,
        "outfile": outfile,
    };
    return params;
}


function is_lta_cargs(
    params: IsLtaParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("IsLTA");
    cargs.push(
        "--r",
        execution.inputFile((params["candidate_file"] ?? null))
    );
    cargs.push(
        "--o",
        (params["outfile"] ?? null)
    );
    return cargs;
}


function is_lta_outputs(
    params: IsLtaParameters,
    execution: Execution,
): IsLtaOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: IsLtaOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["outfile"] ?? null)].join('')),
    };
    return ret;
}


function is_lta_execute(
    params: IsLtaParameters,
    execution: Execution,
): IsLtaOutputs {
    /**
     * Determines if a given file is an LTA (Linear Transform Array) file. Outputs 1 if true, otherwise outputs 0.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `IsLtaOutputs`).
     */
    params = execution.params(params)
    const cargs = is_lta_cargs(params, execution)
    const ret = is_lta_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function is_lta(
    candidate_file: InputPathType,
    outfile: string,
    runner: Runner | null = null,
): IsLtaOutputs {
    /**
     * Determines if a given file is an LTA (Linear Transform Array) file. Outputs 1 if true, otherwise outputs 0.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param candidate_file Candidate file to check if it is an LTA
     * @param outfile Output file to write the result
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `IsLtaOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(IS_LTA_METADATA);
    const params = is_lta_params(candidate_file, outfile)
    return is_lta_execute(params, execution);
}


export {
      IS_LTA_METADATA,
      IsLtaOutputs,
      IsLtaParameters,
      is_lta,
      is_lta_params,
};
