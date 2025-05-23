// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__GET_AFNI_VIEW_METADATA: Metadata = {
    id: "697dd7318bcca131bdbfbdb54166fd3accb9e01b.boutiques",
    name: "@GetAfniView",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VGetAfniViewParameters {
    "__STYXTYPE__": "@GetAfniView";
    "dataset_name": string;
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
        "@GetAfniView": v__get_afni_view_cargs,
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
        "@GetAfniView": v__get_afni_view_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__get_afni_view(...)`.
 *
 * @interface
 */
interface VGetAfniViewOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The AFNI view extension retrieved from the dataset name
     */
    afni_view: OutputPathType;
}


function v__get_afni_view_params(
    dataset_name: string,
): VGetAfniViewParameters {
    /**
     * Build parameters.
    
     * @param dataset_name Name of the dataset (including path) from which to retrieve the AFNI view (+orig, +acpc, etc.)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@GetAfniView" as const,
        "dataset_name": dataset_name,
    };
    return params;
}


function v__get_afni_view_cargs(
    params: VGetAfniViewParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@GetAfniView");
    cargs.push((params["dataset_name"] ?? null));
    return cargs;
}


function v__get_afni_view_outputs(
    params: VGetAfniViewParameters,
    execution: Execution,
): VGetAfniViewOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VGetAfniViewOutputs = {
        root: execution.outputFile("."),
        afni_view: execution.outputFile(["view_extension.txt"].join('')),
    };
    return ret;
}


function v__get_afni_view_execute(
    params: VGetAfniViewParameters,
    execution: Execution,
): VGetAfniViewOutputs {
    /**
     * A tool to retrieve the AFNI view of a given dataset name.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VGetAfniViewOutputs`).
     */
    params = execution.params(params)
    const cargs = v__get_afni_view_cargs(params, execution)
    const ret = v__get_afni_view_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__get_afni_view(
    dataset_name: string,
    runner: Runner | null = null,
): VGetAfniViewOutputs {
    /**
     * A tool to retrieve the AFNI view of a given dataset name.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset_name Name of the dataset (including path) from which to retrieve the AFNI view (+orig, +acpc, etc.)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VGetAfniViewOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__GET_AFNI_VIEW_METADATA);
    const params = v__get_afni_view_params(dataset_name)
    return v__get_afni_view_execute(params, execution);
}


export {
      VGetAfniViewOutputs,
      VGetAfniViewParameters,
      V__GET_AFNI_VIEW_METADATA,
      v__get_afni_view,
      v__get_afni_view_params,
};
