// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DCOPY_METADATA: Metadata = {
    id: "e98a1c9847dec3677d06d7e807d877bc22078336.boutiques",
    name: "3dcopy",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dcopyParameters {
    "__STYXTYPE__": "3dcopy";
    "verbose": boolean;
    "denote": boolean;
    "old_prefix": string;
    "view"?: string | null | undefined;
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
        "3dcopy": v_3dcopy_cargs,
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
 * Output object returned when calling `v_3dcopy(...)`.
 *
 * @interface
 */
interface V3dcopyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3dcopy_params(
    old_prefix: string,
    new_prefix: string,
    verbose: boolean = false,
    denote: boolean = false,
    view: string | null = null,
): V3dcopyParameters {
    /**
     * Build parameters.
    
     * @param old_prefix Old dataset prefix (and view if specific dataset view is to be copied).
     * @param new_prefix New dataset prefix or directory path.
     * @param verbose Print progress reports.
     * @param denote Remove any Notes from the file.
     * @param view Specified view (orig, acpc, tlrc).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dcopy" as const,
        "verbose": verbose,
        "denote": denote,
        "old_prefix": old_prefix,
        "new_prefix": new_prefix,
    };
    if (view !== null) {
        params["view"] = view;
    }
    return params;
}


function v_3dcopy_cargs(
    params: V3dcopyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dcopy");
    if ((params["verbose"] ?? null)) {
        cargs.push("-verb");
    }
    if ((params["denote"] ?? null)) {
        cargs.push("-denote");
    }
    if ((params["view"] ?? null) !== null) {
        cargs.push(
            "+",
            [(params["old_prefix"] ?? null), (params["view"] ?? null)].join('')
        );
    }
    cargs.push((params["new_prefix"] ?? null));
    return cargs;
}


function v_3dcopy_outputs(
    params: V3dcopyParameters,
    execution: Execution,
): V3dcopyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dcopyOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3dcopy_execute(
    params: V3dcopyParameters,
    execution: Execution,
): V3dcopyOutputs {
    /**
     * 3dcopy copies datasets with or without altering prefixes and converting formats.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dcopyOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dcopy_cargs(params, execution)
    const ret = v_3dcopy_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dcopy(
    old_prefix: string,
    new_prefix: string,
    verbose: boolean = false,
    denote: boolean = false,
    view: string | null = null,
    runner: Runner | null = null,
): V3dcopyOutputs {
    /**
     * 3dcopy copies datasets with or without altering prefixes and converting formats.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param old_prefix Old dataset prefix (and view if specific dataset view is to be copied).
     * @param new_prefix New dataset prefix or directory path.
     * @param verbose Print progress reports.
     * @param denote Remove any Notes from the file.
     * @param view Specified view (orig, acpc, tlrc).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dcopyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DCOPY_METADATA);
    const params = v_3dcopy_params(old_prefix, new_prefix, verbose, denote, view)
    return v_3dcopy_execute(params, execution);
}


export {
      V3dcopyOutputs,
      V3dcopyParameters,
      V_3DCOPY_METADATA,
      v_3dcopy,
      v_3dcopy_params,
};
