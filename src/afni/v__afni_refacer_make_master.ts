// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__AFNI_REFACER_MAKE_MASTER_METADATA: Metadata = {
    id: "5d171c695cab39d1411b8652cb05c15ab1caaa20.boutiques",
    name: "@afni_refacer_make_master",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VAfniRefacerMakeMasterParameters {
    "__STYXTYPE__": "@afni_refacer_make_master";
    "input_datasets": Array<InputPathType>;
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
        "@afni_refacer_make_master": v__afni_refacer_make_master_cargs,
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
        "@afni_refacer_make_master": v__afni_refacer_make_master_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__afni_refacer_make_master(...)`.
 *
 * @interface
 */
interface VAfniRefacerMakeMasterOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset containing the average 'face' (non-brain tissue).
     */
    output_shell_dataset: OutputPathType;
}


function v__afni_refacer_make_master_params(
    input_datasets: Array<InputPathType>,
): VAfniRefacerMakeMasterParameters {
    /**
     * Build parameters.
    
     * @param input_datasets List of T1-weighted datasets that have NOT been skull-stripped, defaced, or refaced.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@afni_refacer_make_master" as const,
        "input_datasets": input_datasets,
    };
    return params;
}


function v__afni_refacer_make_master_cargs(
    params: VAfniRefacerMakeMasterParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@afni_refacer_make_master");
    cargs.push(...(params["input_datasets"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function v__afni_refacer_make_master_outputs(
    params: VAfniRefacerMakeMasterParameters,
    execution: Execution,
): VAfniRefacerMakeMasterOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VAfniRefacerMakeMasterOutputs = {
        root: execution.outputFile("."),
        output_shell_dataset: execution.outputFile(["afni_refacer_shell.nii.gz"].join('')),
    };
    return ret;
}


function v__afni_refacer_make_master_execute(
    params: VAfniRefacerMakeMasterParameters,
    execution: Execution,
): VAfniRefacerMakeMasterOutputs {
    /**
     * This script makes a new mask/shell dataset for use with @afni_refacer_run by averaging 'faces' (non-brain tissue) from input datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VAfniRefacerMakeMasterOutputs`).
     */
    params = execution.params(params)
    const cargs = v__afni_refacer_make_master_cargs(params, execution)
    const ret = v__afni_refacer_make_master_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__afni_refacer_make_master(
    input_datasets: Array<InputPathType>,
    runner: Runner | null = null,
): VAfniRefacerMakeMasterOutputs {
    /**
     * This script makes a new mask/shell dataset for use with @afni_refacer_run by averaging 'faces' (non-brain tissue) from input datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_datasets List of T1-weighted datasets that have NOT been skull-stripped, defaced, or refaced.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VAfniRefacerMakeMasterOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__AFNI_REFACER_MAKE_MASTER_METADATA);
    const params = v__afni_refacer_make_master_params(input_datasets)
    return v__afni_refacer_make_master_execute(params, execution);
}


export {
      VAfniRefacerMakeMasterOutputs,
      VAfniRefacerMakeMasterParameters,
      V__AFNI_REFACER_MAKE_MASTER_METADATA,
      v__afni_refacer_make_master,
      v__afni_refacer_make_master_params,
};
