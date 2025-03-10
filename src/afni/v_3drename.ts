// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DRENAME_METADATA: Metadata = {
    id: "3c508d8f5e6d69689dd267857ef13efbf3693249.boutiques",
    name: "3drename",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3drenameParameters {
    "__STYXTYPE__": "3drename";
    "old_prefix": string;
    "new_prefix": string;
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
        "3drename": v_3drename_cargs,
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
 * Output object returned when calling `v_3drename(...)`.
 *
 * @interface
 */
interface V3drenameOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3drename_params(
    old_prefix: string,
    new_prefix: string,
): V3drenameParameters {
    /**
     * Build parameters.
    
     * @param old_prefix Old prefix of the datasets to rename.
     * @param new_prefix New prefix for the datasets.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3drename" as const,
        "old_prefix": old_prefix,
        "new_prefix": new_prefix,
    };
    return params;
}


function v_3drename_cargs(
    params: V3drenameParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3drename");
    cargs.push((params["old_prefix"] ?? null));
    cargs.push((params["new_prefix"] ?? null));
    return cargs;
}


function v_3drename_outputs(
    params: V3drenameParameters,
    execution: Execution,
): V3drenameOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3drenameOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3drename_execute(
    params: V3drenameParameters,
    execution: Execution,
): V3drenameOutputs {
    /**
     * Tool to rename AFNI datasets by changing the dataset prefix.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3drenameOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3drename_cargs(params, execution)
    const ret = v_3drename_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3drename(
    old_prefix: string,
    new_prefix: string,
    runner: Runner | null = null,
): V3drenameOutputs {
    /**
     * Tool to rename AFNI datasets by changing the dataset prefix.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param old_prefix Old prefix of the datasets to rename.
     * @param new_prefix New prefix for the datasets.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3drenameOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DRENAME_METADATA);
    const params = v_3drename_params(old_prefix, new_prefix)
    return v_3drename_execute(params, execution);
}


export {
      V3drenameOutputs,
      V3drenameParameters,
      V_3DRENAME_METADATA,
      v_3drename,
      v_3drename_params,
};
