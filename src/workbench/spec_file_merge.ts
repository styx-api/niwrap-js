// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SPEC_FILE_MERGE_METADATA: Metadata = {
    id: "2c5e3a5c053998c2a574a6f035a5993430771a18.boutiques",
    name: "spec-file-merge",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface SpecFileMergeParameters {
    "__STYXTYPE__": "spec-file-merge";
    "spec_1": string;
    "spec_2": string;
    "out_spec": string;
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
        "spec-file-merge": spec_file_merge_cargs,
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
 * Output object returned when calling `spec_file_merge(...)`.
 *
 * @interface
 */
interface SpecFileMergeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function spec_file_merge_params(
    spec_1: string,
    spec_2: string,
    out_spec: string,
): SpecFileMergeParameters {
    /**
     * Build parameters.
    
     * @param spec_1 first spec file to merge
     * @param spec_2 second spec file to merge
     * @param out_spec output - output spec file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "spec-file-merge" as const,
        "spec_1": spec_1,
        "spec_2": spec_2,
        "out_spec": out_spec,
    };
    return params;
}


function spec_file_merge_cargs(
    params: SpecFileMergeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-spec-file-merge");
    cargs.push((params["spec_1"] ?? null));
    cargs.push((params["spec_2"] ?? null));
    cargs.push((params["out_spec"] ?? null));
    return cargs;
}


function spec_file_merge_outputs(
    params: SpecFileMergeParameters,
    execution: Execution,
): SpecFileMergeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SpecFileMergeOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function spec_file_merge_execute(
    params: SpecFileMergeParameters,
    execution: Execution,
): SpecFileMergeOutputs {
    /**
     * Merge two spec files into one.
     * 
     * The output spec file contains every file that is in either of the input spec files.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SpecFileMergeOutputs`).
     */
    params = execution.params(params)
    const cargs = spec_file_merge_cargs(params, execution)
    const ret = spec_file_merge_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function spec_file_merge(
    spec_1: string,
    spec_2: string,
    out_spec: string,
    runner: Runner | null = null,
): SpecFileMergeOutputs {
    /**
     * Merge two spec files into one.
     * 
     * The output spec file contains every file that is in either of the input spec files.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param spec_1 first spec file to merge
     * @param spec_2 second spec file to merge
     * @param out_spec output - output spec file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SpecFileMergeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SPEC_FILE_MERGE_METADATA);
    const params = spec_file_merge_params(spec_1, spec_2, out_spec)
    return spec_file_merge_execute(params, execution);
}


export {
      SPEC_FILE_MERGE_METADATA,
      SpecFileMergeOutputs,
      SpecFileMergeParameters,
      spec_file_merge,
      spec_file_merge_params,
};
