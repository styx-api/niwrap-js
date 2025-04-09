// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_RESAMPLE_METADATA: Metadata = {
    id: "54fa0ff9bf98d2471467676c65856fa2ed5e4b88.boutiques",
    name: "volume-resample",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeResampleFlirtParameters {
    "__STYXTYPE__": "flirt";
    "source_volume": string;
    "target_volume": string;
}


interface VolumeResampleAffineParameters {
    "__STYXTYPE__": "affine";
    "affine": string;
    "flirt"?: VolumeResampleFlirtParameters | null | undefined;
}


interface VolumeResampleFlirt1Parameters {
    "__STYXTYPE__": "flirt_1";
    "source_volume": string;
    "target_volume": string;
}


interface VolumeResampleAffineSeriesParameters {
    "__STYXTYPE__": "affine_series";
    "affine_series": string;
    "flirt"?: VolumeResampleFlirt1Parameters | null | undefined;
}


interface VolumeResampleWarpParameters {
    "__STYXTYPE__": "warp";
    "warpfield": string;
    "opt_fnirt_source_volume"?: string | null | undefined;
}


interface VolumeResampleParameters {
    "__STYXTYPE__": "volume-resample";
    "volume_in": InputPathType;
    "volume_space": string;
    "method": string;
    "volume_out": string;
    "affine"?: Array<VolumeResampleAffineParameters> | null | undefined;
    "affine_series"?: Array<VolumeResampleAffineSeriesParameters> | null | undefined;
    "warp"?: Array<VolumeResampleWarpParameters> | null | undefined;
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
        "volume-resample": volume_resample_cargs,
        "affine": volume_resample_affine_cargs,
        "flirt": volume_resample_flirt_cargs,
        "affine_series": volume_resample_affine_series_cargs,
        "flirt_1": volume_resample_flirt_1_cargs,
        "warp": volume_resample_warp_cargs,
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
        "volume-resample": volume_resample_outputs,
    };
    return outputsFuncs[t];
}


function volume_resample_flirt_params(
    source_volume: string,
    target_volume: string,
): VolumeResampleFlirtParameters {
    /**
     * Build parameters.
    
     * @param source_volume the source volume used when generating the affine
     * @param target_volume the target volume used when generating the affine
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "flirt" as const,
        "source_volume": source_volume,
        "target_volume": target_volume,
    };
    return params;
}


function volume_resample_flirt_cargs(
    params: VolumeResampleFlirtParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-flirt");
    cargs.push((params["source_volume"] ?? null));
    cargs.push((params["target_volume"] ?? null));
    return cargs;
}


function volume_resample_affine_params(
    affine: string,
    flirt: VolumeResampleFlirtParameters | null = null,
): VolumeResampleAffineParameters {
    /**
     * Build parameters.
    
     * @param affine the affine file to use
     * @param flirt MUST be used if affine is a flirt affine
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "affine" as const,
        "affine": affine,
    };
    if (flirt !== null) {
        params["flirt"] = flirt;
    }
    return params;
}


function volume_resample_affine_cargs(
    params: VolumeResampleAffineParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-affine");
    cargs.push((params["affine"] ?? null));
    if ((params["flirt"] ?? null) !== null) {
        cargs.push(...dynCargs((params["flirt"] ?? null).__STYXTYPE__)((params["flirt"] ?? null), execution));
    }
    return cargs;
}


function volume_resample_flirt_1_params(
    source_volume: string,
    target_volume: string,
): VolumeResampleFlirt1Parameters {
    /**
     * Build parameters.
    
     * @param source_volume the source volume used when generating the affine
     * @param target_volume the target volume used when generating the affine
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "flirt_1" as const,
        "source_volume": source_volume,
        "target_volume": target_volume,
    };
    return params;
}


function volume_resample_flirt_1_cargs(
    params: VolumeResampleFlirt1Parameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-flirt");
    cargs.push((params["source_volume"] ?? null));
    cargs.push((params["target_volume"] ?? null));
    return cargs;
}


function volume_resample_affine_series_params(
    affine_series: string,
    flirt: VolumeResampleFlirt1Parameters | null = null,
): VolumeResampleAffineSeriesParameters {
    /**
     * Build parameters.
    
     * @param affine_series text file containing 12 or 16 numbers per line, each being a row-major flattened affine
     * @param flirt MUST be used if the affines are flirt affines
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "affine_series" as const,
        "affine_series": affine_series,
    };
    if (flirt !== null) {
        params["flirt"] = flirt;
    }
    return params;
}


function volume_resample_affine_series_cargs(
    params: VolumeResampleAffineSeriesParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-affine-series");
    cargs.push((params["affine_series"] ?? null));
    if ((params["flirt"] ?? null) !== null) {
        cargs.push(...dynCargs((params["flirt"] ?? null).__STYXTYPE__)((params["flirt"] ?? null), execution));
    }
    return cargs;
}


function volume_resample_warp_params(
    warpfield: string,
    opt_fnirt_source_volume: string | null = null,
): VolumeResampleWarpParameters {
    /**
     * Build parameters.
    
     * @param warpfield the warpfield file
     * @param opt_fnirt_source_volume MUST be used if using a fnirt warpfield: the source volume used when generating the warpfield
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "warp" as const,
        "warpfield": warpfield,
    };
    if (opt_fnirt_source_volume !== null) {
        params["opt_fnirt_source_volume"] = opt_fnirt_source_volume;
    }
    return params;
}


function volume_resample_warp_cargs(
    params: VolumeResampleWarpParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-warp");
    cargs.push((params["warpfield"] ?? null));
    if ((params["opt_fnirt_source_volume"] ?? null) !== null) {
        cargs.push(
            "-fnirt",
            (params["opt_fnirt_source_volume"] ?? null)
        );
    }
    return cargs;
}


/**
 * Output object returned when calling `volume_resample(...)`.
 *
 * @interface
 */
interface VolumeResampleOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output volume
     */
    volume_out: OutputPathType;
}


function volume_resample_params(
    volume_in: InputPathType,
    volume_space: string,
    method: string,
    volume_out: string,
    affine: Array<VolumeResampleAffineParameters> | null = null,
    affine_series: Array<VolumeResampleAffineSeriesParameters> | null = null,
    warp: Array<VolumeResampleWarpParameters> | null = null,
): VolumeResampleParameters {
    /**
     * Build parameters.
    
     * @param volume_in volume to resample
     * @param volume_space a volume file in the volume space you want for the output
     * @param method the resampling method
     * @param volume_out the output volume
     * @param affine add an affine transform
     * @param affine_series add an independent affine per-frame
     * @param warp add a nonlinear warpfield transform
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-resample" as const,
        "volume_in": volume_in,
        "volume_space": volume_space,
        "method": method,
        "volume_out": volume_out,
    };
    if (affine !== null) {
        params["affine"] = affine;
    }
    if (affine_series !== null) {
        params["affine_series"] = affine_series;
    }
    if (warp !== null) {
        params["warp"] = warp;
    }
    return params;
}


function volume_resample_cargs(
    params: VolumeResampleParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-volume-resample");
    cargs.push(execution.inputFile((params["volume_in"] ?? null)));
    cargs.push((params["volume_space"] ?? null));
    cargs.push((params["method"] ?? null));
    cargs.push((params["volume_out"] ?? null));
    if ((params["affine"] ?? null) !== null) {
        cargs.push(...(params["affine"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["affine_series"] ?? null) !== null) {
        cargs.push(...(params["affine_series"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["warp"] ?? null) !== null) {
        cargs.push(...(params["warp"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function volume_resample_outputs(
    params: VolumeResampleParameters,
    execution: Execution,
): VolumeResampleOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeResampleOutputs = {
        root: execution.outputFile("."),
        volume_out: execution.outputFile([(params["volume_out"] ?? null)].join('')),
    };
    return ret;
}


function volume_resample_execute(
    params: VolumeResampleParameters,
    execution: Execution,
): VolumeResampleOutputs {
    /**
     * Transform and resample a volume file.
     * 
     * Resample a volume file with an arbitrary list of transformations.  You may specify -affine, -warp, and -affine-series multiple times each, and they will be used in the order specified.  For instance, for rigid motion correction followed by nonlinear atlas registration, specify -affine-series first, then -warp.  The recommended methods are CUBIC (cubic spline) for most data, and ENCLOSING_VOXEL for label data.  The parameter <method> must be one of:
     * 
     * CUBIC
     * ENCLOSING_VOXEL
     * TRILINEAR.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VolumeResampleOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_resample_cargs(params, execution)
    const ret = volume_resample_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_resample(
    volume_in: InputPathType,
    volume_space: string,
    method: string,
    volume_out: string,
    affine: Array<VolumeResampleAffineParameters> | null = null,
    affine_series: Array<VolumeResampleAffineSeriesParameters> | null = null,
    warp: Array<VolumeResampleWarpParameters> | null = null,
    runner: Runner | null = null,
): VolumeResampleOutputs {
    /**
     * Transform and resample a volume file.
     * 
     * Resample a volume file with an arbitrary list of transformations.  You may specify -affine, -warp, and -affine-series multiple times each, and they will be used in the order specified.  For instance, for rigid motion correction followed by nonlinear atlas registration, specify -affine-series first, then -warp.  The recommended methods are CUBIC (cubic spline) for most data, and ENCLOSING_VOXEL for label data.  The parameter <method> must be one of:
     * 
     * CUBIC
     * ENCLOSING_VOXEL
     * TRILINEAR.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param volume_in volume to resample
     * @param volume_space a volume file in the volume space you want for the output
     * @param method the resampling method
     * @param volume_out the output volume
     * @param affine add an affine transform
     * @param affine_series add an independent affine per-frame
     * @param warp add a nonlinear warpfield transform
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeResampleOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_RESAMPLE_METADATA);
    const params = volume_resample_params(volume_in, volume_space, method, volume_out, affine, affine_series, warp)
    return volume_resample_execute(params, execution);
}


export {
      VOLUME_RESAMPLE_METADATA,
      VolumeResampleAffineParameters,
      VolumeResampleAffineSeriesParameters,
      VolumeResampleFlirt1Parameters,
      VolumeResampleFlirtParameters,
      VolumeResampleOutputs,
      VolumeResampleParameters,
      VolumeResampleWarpParameters,
      volume_resample,
      volume_resample_affine_params,
      volume_resample_affine_series_params,
      volume_resample_flirt_1_params,
      volume_resample_flirt_params,
      volume_resample_params,
      volume_resample_warp_params,
};
