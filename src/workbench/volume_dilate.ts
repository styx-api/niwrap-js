// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_DILATE_METADATA: Metadata = {
    id: "63d76d4325923100bd809d3097bc408b2bd53e95.boutiques",
    name: "volume-dilate",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeDilatePresmoothParameters {
    "__STYXTYPE__": "presmooth";
    "kernel": number;
    "opt_fwhm": boolean;
}


interface VolumeDilateGradExtrapolateParameters {
    "__STYXTYPE__": "grad_extrapolate";
    "presmooth"?: VolumeDilatePresmoothParameters | null | undefined;
}


interface VolumeDilateParameters {
    "__STYXTYPE__": "volume-dilate";
    "volume": InputPathType;
    "distance": number;
    "method": string;
    "volume_out": string;
    "opt_exponent_exponent"?: number | null | undefined;
    "opt_bad_voxel_roi_roi_volume"?: InputPathType | null | undefined;
    "opt_data_roi_roi_volume"?: InputPathType | null | undefined;
    "opt_subvolume_subvol"?: string | null | undefined;
    "opt_legacy_cutoff": boolean;
    "grad_extrapolate"?: VolumeDilateGradExtrapolateParameters | null | undefined;
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
        "volume-dilate": volume_dilate_cargs,
        "grad_extrapolate": volume_dilate_grad_extrapolate_cargs,
        "presmooth": volume_dilate_presmooth_cargs,
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
        "volume-dilate": volume_dilate_outputs,
    };
    return outputsFuncs[t];
}


function volume_dilate_presmooth_params(
    kernel: number,
    opt_fwhm: boolean = false,
): VolumeDilatePresmoothParameters {
    /**
     * Build parameters.
    
     * @param kernel the size of gaussian smoothing kernel in mm, as sigma by default
     * @param opt_fwhm kernel size is FWHM, not sigma
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "presmooth" as const,
        "kernel": kernel,
        "opt_fwhm": opt_fwhm,
    };
    return params;
}


function volume_dilate_presmooth_cargs(
    params: VolumeDilatePresmoothParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-presmooth");
    cargs.push(String((params["kernel"] ?? null)));
    if ((params["opt_fwhm"] ?? null)) {
        cargs.push("-fwhm");
    }
    return cargs;
}


function volume_dilate_grad_extrapolate_params(
    presmooth: VolumeDilatePresmoothParameters | null = null,
): VolumeDilateGradExtrapolateParameters {
    /**
     * Build parameters.
    
     * @param presmooth apply presmoothing before computing gradient vectors, not recommended
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "grad_extrapolate" as const,
    };
    if (presmooth !== null) {
        params["presmooth"] = presmooth;
    }
    return params;
}


function volume_dilate_grad_extrapolate_cargs(
    params: VolumeDilateGradExtrapolateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-grad-extrapolate");
    if ((params["presmooth"] ?? null) !== null) {
        cargs.push(...dynCargs((params["presmooth"] ?? null).__STYXTYPE__)((params["presmooth"] ?? null), execution));
    }
    return cargs;
}


/**
 * Output object returned when calling `volume_dilate(...)`.
 *
 * @interface
 */
interface VolumeDilateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output volume
     */
    volume_out: OutputPathType;
}


function volume_dilate_params(
    volume: InputPathType,
    distance: number,
    method: string,
    volume_out: string,
    opt_exponent_exponent: number | null = null,
    opt_bad_voxel_roi_roi_volume: InputPathType | null = null,
    opt_data_roi_roi_volume: InputPathType | null = null,
    opt_subvolume_subvol: string | null = null,
    opt_legacy_cutoff: boolean = false,
    grad_extrapolate: VolumeDilateGradExtrapolateParameters | null = null,
): VolumeDilateParameters {
    /**
     * Build parameters.
    
     * @param volume the volume to dilate
     * @param distance distance in mm to dilate
     * @param method dilation method to use
     * @param volume_out the output volume
     * @param opt_exponent_exponent use a different exponent in the weighting function: exponent 'n' to use in (1 / (distance ^ n)) as the weighting function (default 7)
     * @param opt_bad_voxel_roi_roi_volume specify an roi of voxels to overwrite, rather than voxels with value zero: volume file, positive values denote voxels to have their values replaced
     * @param opt_data_roi_roi_volume specify an roi of where there is data: volume file, positive values denote voxels that have data
     * @param opt_subvolume_subvol select a single subvolume to dilate: the subvolume number or name
     * @param opt_legacy_cutoff use the v1.3.2 method of excluding voxels further than the dilation distance when calculating the dilated value
     * @param grad_extrapolate additionally use the gradient to extrapolate, intended to be used with WEIGHTED
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-dilate" as const,
        "volume": volume,
        "distance": distance,
        "method": method,
        "volume_out": volume_out,
        "opt_legacy_cutoff": opt_legacy_cutoff,
    };
    if (opt_exponent_exponent !== null) {
        params["opt_exponent_exponent"] = opt_exponent_exponent;
    }
    if (opt_bad_voxel_roi_roi_volume !== null) {
        params["opt_bad_voxel_roi_roi_volume"] = opt_bad_voxel_roi_roi_volume;
    }
    if (opt_data_roi_roi_volume !== null) {
        params["opt_data_roi_roi_volume"] = opt_data_roi_roi_volume;
    }
    if (opt_subvolume_subvol !== null) {
        params["opt_subvolume_subvol"] = opt_subvolume_subvol;
    }
    if (grad_extrapolate !== null) {
        params["grad_extrapolate"] = grad_extrapolate;
    }
    return params;
}


function volume_dilate_cargs(
    params: VolumeDilateParameters,
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
    cargs.push("-volume-dilate");
    cargs.push(execution.inputFile((params["volume"] ?? null)));
    cargs.push(String((params["distance"] ?? null)));
    cargs.push((params["method"] ?? null));
    cargs.push((params["volume_out"] ?? null));
    if ((params["opt_exponent_exponent"] ?? null) !== null) {
        cargs.push(
            "-exponent",
            String((params["opt_exponent_exponent"] ?? null))
        );
    }
    if ((params["opt_bad_voxel_roi_roi_volume"] ?? null) !== null) {
        cargs.push(
            "-bad-voxel-roi",
            execution.inputFile((params["opt_bad_voxel_roi_roi_volume"] ?? null))
        );
    }
    if ((params["opt_data_roi_roi_volume"] ?? null) !== null) {
        cargs.push(
            "-data-roi",
            execution.inputFile((params["opt_data_roi_roi_volume"] ?? null))
        );
    }
    if ((params["opt_subvolume_subvol"] ?? null) !== null) {
        cargs.push(
            "-subvolume",
            (params["opt_subvolume_subvol"] ?? null)
        );
    }
    if ((params["opt_legacy_cutoff"] ?? null)) {
        cargs.push("-legacy-cutoff");
    }
    if ((params["grad_extrapolate"] ?? null) !== null) {
        cargs.push(...dynCargs((params["grad_extrapolate"] ?? null).__STYXTYPE__)((params["grad_extrapolate"] ?? null), execution));
    }
    return cargs;
}


function volume_dilate_outputs(
    params: VolumeDilateParameters,
    execution: Execution,
): VolumeDilateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeDilateOutputs = {
        root: execution.outputFile("."),
        volume_out: execution.outputFile([(params["volume_out"] ?? null)].join('')),
    };
    return ret;
}


function volume_dilate_execute(
    params: VolumeDilateParameters,
    execution: Execution,
): VolumeDilateOutputs {
    /**
     * Dilate a volume file.
     * 
     * For all voxels that are designated as bad, if they neighbor a non-bad voxel with data or are within the specified distance of such a voxel, replace the value in the bad voxel with a value calculated from nearby non-bad voxels that have data, otherwise set the value to zero.  No matter how small <distance> is, dilation will always use at least the face neighbor voxels.
     * 
     * By default, voxels that have data with the value 0 are bad, specify -bad-voxel-roi to only count voxels as bad if they are selected by the roi.  If -data-roi is not specified, all voxels are assumed to have data.
     * 
     * To get the behavior of version 1.3.2 or earlier, use '-legacy-cutoff -exponent 2'.
     * 
     * Valid values for <method> are:
     * 
     * NEAREST - use the value from the nearest good voxel
     * WEIGHTED - use a weighted average based on distance.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VolumeDilateOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_dilate_cargs(params, execution)
    const ret = volume_dilate_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_dilate(
    volume: InputPathType,
    distance: number,
    method: string,
    volume_out: string,
    opt_exponent_exponent: number | null = null,
    opt_bad_voxel_roi_roi_volume: InputPathType | null = null,
    opt_data_roi_roi_volume: InputPathType | null = null,
    opt_subvolume_subvol: string | null = null,
    opt_legacy_cutoff: boolean = false,
    grad_extrapolate: VolumeDilateGradExtrapolateParameters | null = null,
    runner: Runner | null = null,
): VolumeDilateOutputs {
    /**
     * Dilate a volume file.
     * 
     * For all voxels that are designated as bad, if they neighbor a non-bad voxel with data or are within the specified distance of such a voxel, replace the value in the bad voxel with a value calculated from nearby non-bad voxels that have data, otherwise set the value to zero.  No matter how small <distance> is, dilation will always use at least the face neighbor voxels.
     * 
     * By default, voxels that have data with the value 0 are bad, specify -bad-voxel-roi to only count voxels as bad if they are selected by the roi.  If -data-roi is not specified, all voxels are assumed to have data.
     * 
     * To get the behavior of version 1.3.2 or earlier, use '-legacy-cutoff -exponent 2'.
     * 
     * Valid values for <method> are:
     * 
     * NEAREST - use the value from the nearest good voxel
     * WEIGHTED - use a weighted average based on distance.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param volume the volume to dilate
     * @param distance distance in mm to dilate
     * @param method dilation method to use
     * @param volume_out the output volume
     * @param opt_exponent_exponent use a different exponent in the weighting function: exponent 'n' to use in (1 / (distance ^ n)) as the weighting function (default 7)
     * @param opt_bad_voxel_roi_roi_volume specify an roi of voxels to overwrite, rather than voxels with value zero: volume file, positive values denote voxels to have their values replaced
     * @param opt_data_roi_roi_volume specify an roi of where there is data: volume file, positive values denote voxels that have data
     * @param opt_subvolume_subvol select a single subvolume to dilate: the subvolume number or name
     * @param opt_legacy_cutoff use the v1.3.2 method of excluding voxels further than the dilation distance when calculating the dilated value
     * @param grad_extrapolate additionally use the gradient to extrapolate, intended to be used with WEIGHTED
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeDilateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_DILATE_METADATA);
    const params = volume_dilate_params(volume, distance, method, volume_out, opt_exponent_exponent, opt_bad_voxel_roi_roi_volume, opt_data_roi_roi_volume, opt_subvolume_subvol, opt_legacy_cutoff, grad_extrapolate)
    return volume_dilate_execute(params, execution);
}


export {
      VOLUME_DILATE_METADATA,
      VolumeDilateGradExtrapolateParameters,
      VolumeDilateOutputs,
      VolumeDilateParameters,
      VolumeDilatePresmoothParameters,
      volume_dilate,
      volume_dilate_grad_extrapolate_params,
      volume_dilate_params,
      volume_dilate_presmooth_params,
};
