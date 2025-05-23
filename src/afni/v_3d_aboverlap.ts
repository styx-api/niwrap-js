// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_ABOVERLAP_METADATA: Metadata = {
    id: "da965209d42fc668bebfda9fab7d92b0cef8fd70.boutiques",
    name: "3dABoverlap",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dAboverlapParameters {
    "__STYXTYPE__": "3dABoverlap";
    "dataset_a": InputPathType;
    "dataset_b": InputPathType;
    "no_automask": boolean;
    "quiet": boolean;
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
        "3dABoverlap": v_3d_aboverlap_cargs,
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
 * Output object returned when calling `v_3d_aboverlap(...)`.
 *
 * @interface
 */
interface V3dAboverlapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3d_aboverlap_params(
    dataset_a: InputPathType,
    dataset_b: InputPathType,
    no_automask: boolean = false,
    quiet: boolean = false,
    verbose: boolean = false,
): V3dAboverlapParameters {
    /**
     * Build parameters.
    
     * @param dataset_a First input dataset
     * @param dataset_b Second input dataset
     * @param no_automask Consider input datasets as masks (automask does not work on mask datasets)
     * @param quiet Be as quiet as possible (without being entirely mute)
     * @param verbose Print out some progress reports (to stderr)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dABoverlap" as const,
        "dataset_a": dataset_a,
        "dataset_b": dataset_b,
        "no_automask": no_automask,
        "quiet": quiet,
        "verbose": verbose,
    };
    return params;
}


function v_3d_aboverlap_cargs(
    params: V3dAboverlapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dABoverlap");
    cargs.push(execution.inputFile((params["dataset_a"] ?? null)));
    cargs.push(execution.inputFile((params["dataset_b"] ?? null)));
    if ((params["no_automask"] ?? null)) {
        cargs.push("-no_automask");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-verb");
    }
    return cargs;
}


function v_3d_aboverlap_outputs(
    params: V3dAboverlapParameters,
    execution: Execution,
): V3dAboverlapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dAboverlapOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3d_aboverlap_execute(
    params: V3dAboverlapParameters,
    execution: Execution,
): V3dAboverlapOutputs {
    /**
     * Counts various metrics about how the automasks of datasets A and B overlap or don't overlap.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dAboverlapOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_aboverlap_cargs(params, execution)
    const ret = v_3d_aboverlap_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_aboverlap(
    dataset_a: InputPathType,
    dataset_b: InputPathType,
    no_automask: boolean = false,
    quiet: boolean = false,
    verbose: boolean = false,
    runner: Runner | null = null,
): V3dAboverlapOutputs {
    /**
     * Counts various metrics about how the automasks of datasets A and B overlap or don't overlap.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset_a First input dataset
     * @param dataset_b Second input dataset
     * @param no_automask Consider input datasets as masks (automask does not work on mask datasets)
     * @param quiet Be as quiet as possible (without being entirely mute)
     * @param verbose Print out some progress reports (to stderr)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dAboverlapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_ABOVERLAP_METADATA);
    const params = v_3d_aboverlap_params(dataset_a, dataset_b, no_automask, quiet, verbose)
    return v_3d_aboverlap_execute(params, execution);
}


export {
      V3dAboverlapOutputs,
      V3dAboverlapParameters,
      V_3D_ABOVERLAP_METADATA,
      v_3d_aboverlap,
      v_3d_aboverlap_params,
};
