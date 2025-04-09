// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_CLIP_LEVEL_METADATA: Metadata = {
    id: "88bdbec4ad5f8ad542e0aad8dde4036aca9e4e12.boutiques",
    name: "3dClipLevel",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dClipLevelParameters {
    "__STYXTYPE__": "3dClipLevel";
    "dataset": InputPathType;
    "mfrac"?: number | null | undefined;
    "doall": boolean;
    "grad"?: string | null | undefined;
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
        "3dClipLevel": v_3d_clip_level_cargs,
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
 * Output object returned when calling `v_3d_clip_level(...)`.
 *
 * @interface
 */
interface V3dClipLevelOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3d_clip_level_params(
    dataset: InputPathType,
    mfrac: number | null = null,
    doall: boolean = false,
    grad: string | null = null,
): V3dClipLevelParameters {
    /**
     * Build parameters.
    
     * @param dataset Input dataset (e.g. dataset.nii.gz)
     * @param mfrac Use the number ff instead of 0.50 in the algorithm.
     * @param doall Apply the algorithm to each sub-brick separately.
     * @param grad Compute a 'gradual' clip level as a function of voxel position and output to a dataset with the given prefix.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dClipLevel" as const,
        "dataset": dataset,
        "doall": doall,
    };
    if (mfrac !== null) {
        params["mfrac"] = mfrac;
    }
    if (grad !== null) {
        params["grad"] = grad;
    }
    return params;
}


function v_3d_clip_level_cargs(
    params: V3dClipLevelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dClipLevel");
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    if ((params["mfrac"] ?? null) !== null) {
        cargs.push(
            "-mfrac",
            String((params["mfrac"] ?? null))
        );
    }
    if ((params["doall"] ?? null)) {
        cargs.push("-doall");
    }
    if ((params["grad"] ?? null) !== null) {
        cargs.push(
            "-grad",
            (params["grad"] ?? null)
        );
    }
    return cargs;
}


function v_3d_clip_level_outputs(
    params: V3dClipLevelParameters,
    execution: Execution,
): V3dClipLevelOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dClipLevelOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3d_clip_level_execute(
    params: V3dClipLevelParameters,
    execution: Execution,
): V3dClipLevelOutputs {
    /**
     * Estimates the value at which to clip the anatomical dataset so that background regions are set to zero.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dClipLevelOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_clip_level_cargs(params, execution)
    const ret = v_3d_clip_level_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_clip_level(
    dataset: InputPathType,
    mfrac: number | null = null,
    doall: boolean = false,
    grad: string | null = null,
    runner: Runner | null = null,
): V3dClipLevelOutputs {
    /**
     * Estimates the value at which to clip the anatomical dataset so that background regions are set to zero.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset Input dataset (e.g. dataset.nii.gz)
     * @param mfrac Use the number ff instead of 0.50 in the algorithm.
     * @param doall Apply the algorithm to each sub-brick separately.
     * @param grad Compute a 'gradual' clip level as a function of voxel position and output to a dataset with the given prefix.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dClipLevelOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_CLIP_LEVEL_METADATA);
    const params = v_3d_clip_level_params(dataset, mfrac, doall, grad)
    return v_3d_clip_level_execute(params, execution);
}


export {
      V3dClipLevelOutputs,
      V3dClipLevelParameters,
      V_3D_CLIP_LEVEL_METADATA,
      v_3d_clip_level,
      v_3d_clip_level_params,
};
