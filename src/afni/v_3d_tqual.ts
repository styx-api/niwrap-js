// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_TQUAL_METADATA: Metadata = {
    id: "b10cb749ab7883032d18c3d65d9aa72239852046.boutiques",
    name: "3dTqual",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dTqualParameters {
    "__STYXTYPE__": "3dTqual";
    "dataset": InputPathType;
    "spearman": boolean;
    "quadrant": boolean;
    "autoclip": boolean;
    "automask": boolean;
    "clip"?: number | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "range": boolean;
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
        "3dTqual": v_3d_tqual_cargs,
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
        "3dTqual": v_3d_tqual_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_tqual(...)`.
 *
 * @interface
 */
interface V3dTqualOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The 1D time series with the quality index for each sub-brick
     */
    time_series: OutputPathType;
}


function v_3d_tqual_params(
    dataset: InputPathType,
    spearman: boolean = false,
    quadrant: boolean = false,
    autoclip: boolean = false,
    automask: boolean = false,
    clip: number | null = null,
    mask: InputPathType | null = null,
    range: boolean = false,
): V3dTqualParameters {
    /**
     * Build parameters.
    
     * @param dataset Input 3D+time dataset
     * @param spearman Quality index is 1 minus the Spearman (rank) correlation coefficient of each sub-brick with the median sub-brick (default method).
     * @param quadrant Quality index is 1 minus the quadrant correlation coefficient as the quality index.
     * @param autoclip Clip off low-intensity regions in the median sub-brick, only compute correlation between high-intensity voxels.
     * @param automask Automatically mask and compute correlation only across high-intensity (presumably brain) voxels.
     * @param clip Clip off values below given threshold in the median sub-brick.
     * @param mask Compute correlation only across masked voxels from the given dataset.
     * @param range Print the median-3.5*MAD and median+3.5*MAD values with each quality index for plotting.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dTqual" as const,
        "dataset": dataset,
        "spearman": spearman,
        "quadrant": quadrant,
        "autoclip": autoclip,
        "automask": automask,
        "range": range,
    };
    if (clip !== null) {
        params["clip"] = clip;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    return params;
}


function v_3d_tqual_cargs(
    params: V3dTqualParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dTqual");
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    if ((params["spearman"] ?? null)) {
        cargs.push("-spearman");
    }
    if ((params["quadrant"] ?? null)) {
        cargs.push("-quadrant");
    }
    if ((params["autoclip"] ?? null)) {
        cargs.push("-autoclip");
    }
    if ((params["automask"] ?? null)) {
        cargs.push("-automask");
    }
    if ((params["clip"] ?? null) !== null) {
        cargs.push(
            "-clip",
            String((params["clip"] ?? null))
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["range"] ?? null)) {
        cargs.push("-range");
    }
    return cargs;
}


function v_3d_tqual_outputs(
    params: V3dTqualParameters,
    execution: Execution,
): V3dTqualOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dTqualOutputs = {
        root: execution.outputFile("."),
        time_series: execution.outputFile(["stdout"].join('')),
    };
    return ret;
}


function v_3d_tqual_execute(
    params: V3dTqualParameters,
    execution: Execution,
): V3dTqualOutputs {
    /**
     * Computes a quality index for each sub-brick in a 3D+time dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dTqualOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_tqual_cargs(params, execution)
    const ret = v_3d_tqual_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_tqual(
    dataset: InputPathType,
    spearman: boolean = false,
    quadrant: boolean = false,
    autoclip: boolean = false,
    automask: boolean = false,
    clip: number | null = null,
    mask: InputPathType | null = null,
    range: boolean = false,
    runner: Runner | null = null,
): V3dTqualOutputs {
    /**
     * Computes a quality index for each sub-brick in a 3D+time dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset Input 3D+time dataset
     * @param spearman Quality index is 1 minus the Spearman (rank) correlation coefficient of each sub-brick with the median sub-brick (default method).
     * @param quadrant Quality index is 1 minus the quadrant correlation coefficient as the quality index.
     * @param autoclip Clip off low-intensity regions in the median sub-brick, only compute correlation between high-intensity voxels.
     * @param automask Automatically mask and compute correlation only across high-intensity (presumably brain) voxels.
     * @param clip Clip off values below given threshold in the median sub-brick.
     * @param mask Compute correlation only across masked voxels from the given dataset.
     * @param range Print the median-3.5*MAD and median+3.5*MAD values with each quality index for plotting.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dTqualOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_TQUAL_METADATA);
    const params = v_3d_tqual_params(dataset, spearman, quadrant, autoclip, automask, clip, mask, range)
    return v_3d_tqual_execute(params, execution);
}


export {
      V3dTqualOutputs,
      V3dTqualParameters,
      V_3D_TQUAL_METADATA,
      v_3d_tqual,
      v_3d_tqual_params,
};
