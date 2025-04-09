// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_OVERLAP_METADATA: Metadata = {
    id: "93e1b7f69d98cd0c2b6369179b0a77d2fb5b72a4.boutiques",
    name: "3dOverlap",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dOverlapParameters {
    "__STYXTYPE__": "3dOverlap";
    "dataset1": InputPathType;
    "dataset2": Array<InputPathType>;
    "save_prefix"?: string | null | undefined;
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
        "3dOverlap": v_3d_overlap_cargs,
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
        "3dOverlap": v_3d_overlap_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_overlap(...)`.
 *
 * @interface
 */
interface V3dOverlapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * BRIK file with count of overlaps at each voxel (if -save is used)
     */
    output_brik: OutputPathType | null;
    /**
     * HEAD file with count of overlaps at each voxel (if -save is used)
     */
    output_head: OutputPathType | null;
}


function v_3d_overlap_params(
    dataset1: InputPathType,
    dataset2: Array<InputPathType>,
    save_prefix: string | null = null,
): V3dOverlapParameters {
    /**
     * Build parameters.
    
     * @param dataset1 First input dataset (e.g. dset1+orig)
     * @param dataset2 Second input dataset (e.g. dset2+orig)
     * @param save_prefix Save the count of overlaps at each voxel into a dataset with the given prefix
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dOverlap" as const,
        "dataset1": dataset1,
        "dataset2": dataset2,
    };
    if (save_prefix !== null) {
        params["save_prefix"] = save_prefix;
    }
    return params;
}


function v_3d_overlap_cargs(
    params: V3dOverlapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dOverlap");
    cargs.push(execution.inputFile((params["dataset1"] ?? null)));
    cargs.push(...(params["dataset2"] ?? null).map(f => execution.inputFile(f)));
    if ((params["save_prefix"] ?? null) !== null) {
        cargs.push(
            "-save",
            (params["save_prefix"] ?? null)
        );
    }
    return cargs;
}


function v_3d_overlap_outputs(
    params: V3dOverlapParameters,
    execution: Execution,
): V3dOverlapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dOverlapOutputs = {
        root: execution.outputFile("."),
        output_brik: ((params["save_prefix"] ?? null) !== null) ? execution.outputFile([(params["save_prefix"] ?? null), "+orig.BRIK"].join('')) : null,
        output_head: ((params["save_prefix"] ?? null) !== null) ? execution.outputFile([(params["save_prefix"] ?? null), "+orig.HEAD"].join('')) : null,
    };
    return ret;
}


function v_3d_overlap_execute(
    params: V3dOverlapParameters,
    execution: Execution,
): V3dOverlapOutputs {
    /**
     * Counts the number of voxels that are nonzero in all input datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dOverlapOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_overlap_cargs(params, execution)
    const ret = v_3d_overlap_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_overlap(
    dataset1: InputPathType,
    dataset2: Array<InputPathType>,
    save_prefix: string | null = null,
    runner: Runner | null = null,
): V3dOverlapOutputs {
    /**
     * Counts the number of voxels that are nonzero in all input datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset1 First input dataset (e.g. dset1+orig)
     * @param dataset2 Second input dataset (e.g. dset2+orig)
     * @param save_prefix Save the count of overlaps at each voxel into a dataset with the given prefix
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dOverlapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_OVERLAP_METADATA);
    const params = v_3d_overlap_params(dataset1, dataset2, save_prefix)
    return v_3d_overlap_execute(params, execution);
}


export {
      V3dOverlapOutputs,
      V3dOverlapParameters,
      V_3D_OVERLAP_METADATA,
      v_3d_overlap,
      v_3d_overlap_params,
};
