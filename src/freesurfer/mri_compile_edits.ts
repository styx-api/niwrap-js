// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_COMPILE_EDITS_METADATA: Metadata = {
    id: "b746923a3f58164c4779c06642364dcd1adf6e9f.boutiques",
    name: "mri_compile_edits",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriCompileEditsParameters {
    "__STYXTYPE__": "mri_compile_edits";
    "subject_name": string;
    "output_volume": string;
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
        "mri_compile_edits": mri_compile_edits_cargs,
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
        "mri_compile_edits": mri_compile_edits_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_compile_edits(...)`.
 *
 * @interface
 */
interface MriCompileEditsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Compiled volume showing all the edits
     */
    compiled_edit_volume: OutputPathType;
}


function mri_compile_edits_params(
    subject_name: string,
    output_volume: string,
): MriCompileEditsParameters {
    /**
     * Build parameters.
    
     * @param subject_name Subject name whose edits are to be compiled into a volume
     * @param output_volume Output volume file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_compile_edits" as const,
        "subject_name": subject_name,
        "output_volume": output_volume,
    };
    return params;
}


function mri_compile_edits_cargs(
    params: MriCompileEditsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_compile_edits");
    cargs.push((params["subject_name"] ?? null));
    cargs.push((params["output_volume"] ?? null));
    return cargs;
}


function mri_compile_edits_outputs(
    params: MriCompileEditsParameters,
    execution: Execution,
): MriCompileEditsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriCompileEditsOutputs = {
        root: execution.outputFile("."),
        compiled_edit_volume: execution.outputFile([(params["output_volume"] ?? null)].join('')),
    };
    return ret;
}


function mri_compile_edits_execute(
    params: MriCompileEditsParameters,
    execution: Execution,
): MriCompileEditsOutputs {
    /**
     * Program to create a single volume showing all the volumetric edits made to a subject.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriCompileEditsOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_compile_edits_cargs(params, execution)
    const ret = mri_compile_edits_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_compile_edits(
    subject_name: string,
    output_volume: string,
    runner: Runner | null = null,
): MriCompileEditsOutputs {
    /**
     * Program to create a single volume showing all the volumetric edits made to a subject.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject_name Subject name whose edits are to be compiled into a volume
     * @param output_volume Output volume file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriCompileEditsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_COMPILE_EDITS_METADATA);
    const params = mri_compile_edits_params(subject_name, output_volume)
    return mri_compile_edits_execute(params, execution);
}


export {
      MRI_COMPILE_EDITS_METADATA,
      MriCompileEditsOutputs,
      MriCompileEditsParameters,
      mri_compile_edits,
      mri_compile_edits_params,
};
