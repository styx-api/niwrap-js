// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TAL_COMPARE_METADATA: Metadata = {
    id: "bd1f3a28d4c8c84481961fd651bc3318b4c7368c.boutiques",
    name: "tal_compare",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface TalCompareParameters {
    "__STYXTYPE__": "tal_compare";
    "ref_file": InputPathType;
    "moving_file": InputPathType;
    "output_file": string;
    "verbose": boolean;
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
        "tal_compare": tal_compare_cargs,
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
        "tal_compare": tal_compare_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `tal_compare(...)`.
 *
 * @interface
 */
interface TalCompareOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Comparison results output file.
     */
    comparison_results: OutputPathType;
}


function tal_compare_params(
    ref_file: InputPathType,
    moving_file: InputPathType,
    output_file: string,
    verbose: boolean = false,
): TalCompareParameters {
    /**
     * Build parameters.
    
     * @param ref_file Reference TAL database file.
     * @param moving_file Moving TAL database file to compare against the reference.
     * @param output_file Output file to store comparison results.
     * @param verbose Enable verbose output.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tal_compare" as const,
        "ref_file": ref_file,
        "moving_file": moving_file,
        "output_file": output_file,
        "verbose": verbose,
    };
    return params;
}


function tal_compare_cargs(
    params: TalCompareParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tal_compare");
    cargs.push(execution.inputFile((params["ref_file"] ?? null)));
    cargs.push(execution.inputFile((params["moving_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    if ((params["verbose"] ?? null)) {
        cargs.push("-v");
    }
    return cargs;
}


function tal_compare_outputs(
    params: TalCompareParameters,
    execution: Execution,
): TalCompareOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TalCompareOutputs = {
        root: execution.outputFile("."),
        comparison_results: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function tal_compare_execute(
    params: TalCompareParameters,
    execution: Execution,
): TalCompareOutputs {
    /**
     * Tool for comparing TAL databases.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TalCompareOutputs`).
     */
    params = execution.params(params)
    const cargs = tal_compare_cargs(params, execution)
    const ret = tal_compare_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tal_compare(
    ref_file: InputPathType,
    moving_file: InputPathType,
    output_file: string,
    verbose: boolean = false,
    runner: Runner | null = null,
): TalCompareOutputs {
    /**
     * Tool for comparing TAL databases.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param ref_file Reference TAL database file.
     * @param moving_file Moving TAL database file to compare against the reference.
     * @param output_file Output file to store comparison results.
     * @param verbose Enable verbose output.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TalCompareOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TAL_COMPARE_METADATA);
    const params = tal_compare_params(ref_file, moving_file, output_file, verbose)
    return tal_compare_execute(params, execution);
}


export {
      TAL_COMPARE_METADATA,
      TalCompareOutputs,
      TalCompareParameters,
      tal_compare,
      tal_compare_params,
};
