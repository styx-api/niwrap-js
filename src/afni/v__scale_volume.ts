// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__SCALE_VOLUME_METADATA: Metadata = {
    id: "6987f91c483f861633afc3be82cefdcfd48e7a50.boutiques",
    name: "@ScaleVolume",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VScaleVolumeParameters {
    "__STYXTYPE__": "@ScaleVolume";
    "input_dset": InputPathType;
    "prefix": string;
    "val_clip"?: Array<number> | null | undefined;
    "perc_clip"?: Array<number> | null | undefined;
    "scale_by_mean": boolean;
    "scale_by_median": boolean;
    "norm": boolean;
    "mask"?: InputPathType | null | undefined;
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
        "@ScaleVolume": v__scale_volume_cargs,
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
        "@ScaleVolume": v__scale_volume_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__scale_volume(...)`.
 *
 * @interface
 */
interface VScaleVolumeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output scaled dataset
     */
    output_file: OutputPathType;
}


function v__scale_volume_params(
    input_dset: InputPathType,
    prefix: string,
    val_clip: Array<number> | null = null,
    perc_clip: Array<number> | null = null,
    scale_by_mean: boolean = false,
    scale_by_median: boolean = false,
    norm: boolean = false,
    mask: InputPathType | null = null,
): VScaleVolumeParameters {
    /**
     * Build parameters.
    
     * @param input_dset Dataset to scale
     * @param prefix Prefix of output
     * @param val_clip Min and Max of output dataset. Default V0 = 0 and V1 = 255
     * @param perc_clip Set lowest P0 percentile to Min and highest P1 percentile to Max. Default P0 = 2 and P1 = 98
     * @param scale_by_mean Divide each sub-brick by mean of non-zero voxels
     * @param scale_by_median Divide each sub-brick by median of non-zero voxels
     * @param norm For each time series T, Tnorm = (T - mean(T)) / stdev(T)
     * @param mask Restrict to non-zero values of given mask dataset
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@ScaleVolume" as const,
        "input_dset": input_dset,
        "prefix": prefix,
        "scale_by_mean": scale_by_mean,
        "scale_by_median": scale_by_median,
        "norm": norm,
    };
    if (val_clip !== null) {
        params["val_clip"] = val_clip;
    }
    if (perc_clip !== null) {
        params["perc_clip"] = perc_clip;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    return params;
}


function v__scale_volume_cargs(
    params: VScaleVolumeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@ScaleVolume");
    cargs.push(execution.inputFile((params["input_dset"] ?? null)));
    cargs.push((params["prefix"] ?? null));
    if ((params["val_clip"] ?? null) !== null) {
        cargs.push(
            "-val_clip",
            ...(params["val_clip"] ?? null).map(String)
        );
    }
    if ((params["perc_clip"] ?? null) !== null) {
        cargs.push(
            "-perc_clip",
            ...(params["perc_clip"] ?? null).map(String)
        );
    }
    if ((params["scale_by_mean"] ?? null)) {
        cargs.push("-scale_by_mean");
    }
    if ((params["scale_by_median"] ?? null)) {
        cargs.push("-scale_by_median");
    }
    if ((params["norm"] ?? null)) {
        cargs.push("-norm");
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    return cargs;
}


function v__scale_volume_outputs(
    params: VScaleVolumeParameters,
    execution: Execution,
): VScaleVolumeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VScaleVolumeOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile(["<-prefix PREFIX>_scaled"].join('')),
    };
    return ret;
}


function v__scale_volume_execute(
    params: VScaleVolumeParameters,
    execution: Execution,
): VScaleVolumeOutputs {
    /**
     * A tool to scale the volume of datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VScaleVolumeOutputs`).
     */
    params = execution.params(params)
    const cargs = v__scale_volume_cargs(params, execution)
    const ret = v__scale_volume_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__scale_volume(
    input_dset: InputPathType,
    prefix: string,
    val_clip: Array<number> | null = null,
    perc_clip: Array<number> | null = null,
    scale_by_mean: boolean = false,
    scale_by_median: boolean = false,
    norm: boolean = false,
    mask: InputPathType | null = null,
    runner: Runner | null = null,
): VScaleVolumeOutputs {
    /**
     * A tool to scale the volume of datasets.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_dset Dataset to scale
     * @param prefix Prefix of output
     * @param val_clip Min and Max of output dataset. Default V0 = 0 and V1 = 255
     * @param perc_clip Set lowest P0 percentile to Min and highest P1 percentile to Max. Default P0 = 2 and P1 = 98
     * @param scale_by_mean Divide each sub-brick by mean of non-zero voxels
     * @param scale_by_median Divide each sub-brick by median of non-zero voxels
     * @param norm For each time series T, Tnorm = (T - mean(T)) / stdev(T)
     * @param mask Restrict to non-zero values of given mask dataset
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VScaleVolumeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__SCALE_VOLUME_METADATA);
    const params = v__scale_volume_params(input_dset, prefix, val_clip, perc_clip, scale_by_mean, scale_by_median, norm, mask)
    return v__scale_volume_execute(params, execution);
}


export {
      VScaleVolumeOutputs,
      VScaleVolumeParameters,
      V__SCALE_VOLUME_METADATA,
      v__scale_volume,
      v__scale_volume_params,
};
