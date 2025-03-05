// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SPEC_FILE_RELOCATE_METADATA: Metadata = {
    id: "2d2973acdec95aaa23b607a3339fa38ce965c8dd.boutiques",
    name: "spec-file-relocate",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface SpecFileRelocateParameters {
    "__STYXTYPE__": "spec-file-relocate";
    "input_spec": string;
    "output_spec": string;
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
        "spec-file-relocate": spec_file_relocate_cargs,
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
 * Output object returned when calling `spec_file_relocate(...)`.
 *
 * @interface
 */
interface SpecFileRelocateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function spec_file_relocate_params(
    input_spec: string,
    output_spec: string,
): SpecFileRelocateParameters {
    /**
     * Build parameters.
    
     * @param input_spec the spec file to use
     * @param output_spec output - the new spec file to create
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "spec-file-relocate" as const,
        "input_spec": input_spec,
        "output_spec": output_spec,
    };
    return params;
}


function spec_file_relocate_cargs(
    params: SpecFileRelocateParameters,
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
    cargs.push("-spec-file-relocate");
    cargs.push((params["input_spec"] ?? null));
    cargs.push((params["output_spec"] ?? null));
    return cargs;
}


function spec_file_relocate_outputs(
    params: SpecFileRelocateParameters,
    execution: Execution,
): SpecFileRelocateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SpecFileRelocateOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function spec_file_relocate_execute(
    params: SpecFileRelocateParameters,
    execution: Execution,
): SpecFileRelocateOutputs {
    /**
     * Recreate spec file in new location.
     * 
     * Spec files contain internal relative paths, such that moving or copying a spec file will cause it to lose track of the files it refers to.  This command makes a modified copy of the spec file, changing the relative paths to refer to the new relative locations of the files.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SpecFileRelocateOutputs`).
     */
    params = execution.params(params)
    const cargs = spec_file_relocate_cargs(params, execution)
    const ret = spec_file_relocate_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function spec_file_relocate(
    input_spec: string,
    output_spec: string,
    runner: Runner | null = null,
): SpecFileRelocateOutputs {
    /**
     * Recreate spec file in new location.
     * 
     * Spec files contain internal relative paths, such that moving or copying a spec file will cause it to lose track of the files it refers to.  This command makes a modified copy of the spec file, changing the relative paths to refer to the new relative locations of the files.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param input_spec the spec file to use
     * @param output_spec output - the new spec file to create
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SpecFileRelocateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SPEC_FILE_RELOCATE_METADATA);
    const params = spec_file_relocate_params(input_spec, output_spec)
    return spec_file_relocate_execute(params, execution);
}


export {
      SPEC_FILE_RELOCATE_METADATA,
      SpecFileRelocateOutputs,
      SpecFileRelocateParameters,
      spec_file_relocate,
      spec_file_relocate_params,
};
