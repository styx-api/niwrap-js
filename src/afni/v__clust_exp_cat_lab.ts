// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__CLUST_EXP_CAT_LAB_METADATA: Metadata = {
    id: "a8c640445d8474e65d913f1c890529556dbc2470.boutiques",
    name: "@ClustExp_CatLab",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VClustExpCatLabParameters {
    "__STYXTYPE__": "@ClustExp_CatLab";
    "prefix": string;
    "input_file": InputPathType;
    "help": boolean;
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
        "@ClustExp_CatLab": v__clust_exp_cat_lab_cargs,
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
        "@ClustExp_CatLab": v__clust_exp_cat_lab_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__clust_exp_cat_lab(...)`.
 *
 * @interface
 */
interface VClustExpCatLabOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output data set concatenating labeled subbriks
     */
    output_file: OutputPathType;
}


function v__clust_exp_cat_lab_params(
    prefix: string,
    input_file: InputPathType,
    help: boolean = false,
): VClustExpCatLabParameters {
    /**
     * Build parameters.
    
     * @param prefix Output file name
     * @param input_file Name of file containing the labels and data sets table (e.g. subjects.csv)
     * @param help Show help information
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@ClustExp_CatLab" as const,
        "prefix": prefix,
        "input_file": input_file,
        "help": help,
    };
    return params;
}


function v__clust_exp_cat_lab_cargs(
    params: VClustExpCatLabParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@ClustExp_CatLab");
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    cargs.push(
        "-input",
        execution.inputFile((params["input_file"] ?? null))
    );
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    return cargs;
}


function v__clust_exp_cat_lab_outputs(
    params: VClustExpCatLabParameters,
    execution: Execution,
): VClustExpCatLabOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VClustExpCatLabOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["prefix"] ?? null), ".nii.gz"].join('')),
    };
    return ret;
}


function v__clust_exp_cat_lab_execute(
    params: VClustExpCatLabParameters,
    execution: Execution,
): VClustExpCatLabOutputs {
    /**
     * Helper script to concatenate and label a group of data sets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VClustExpCatLabOutputs`).
     */
    params = execution.params(params)
    const cargs = v__clust_exp_cat_lab_cargs(params, execution)
    const ret = v__clust_exp_cat_lab_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__clust_exp_cat_lab(
    prefix: string,
    input_file: InputPathType,
    help: boolean = false,
    runner: Runner | null = null,
): VClustExpCatLabOutputs {
    /**
     * Helper script to concatenate and label a group of data sets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param prefix Output file name
     * @param input_file Name of file containing the labels and data sets table (e.g. subjects.csv)
     * @param help Show help information
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VClustExpCatLabOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__CLUST_EXP_CAT_LAB_METADATA);
    const params = v__clust_exp_cat_lab_params(prefix, input_file, help)
    return v__clust_exp_cat_lab_execute(params, execution);
}


export {
      VClustExpCatLabOutputs,
      VClustExpCatLabParameters,
      V__CLUST_EXP_CAT_LAB_METADATA,
      v__clust_exp_cat_lab,
      v__clust_exp_cat_lab_params,
};
