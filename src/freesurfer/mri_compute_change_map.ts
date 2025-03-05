// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_COMPUTE_CHANGE_MAP_METADATA: Metadata = {
    id: "4cf0713520dd67c2b0f360d78cb6a13011d05e50.boutiques",
    name: "mri_compute_change_map",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriComputeChangeMapParameters {
    "__STYXTYPE__": "mri_compute_change_map";
    "mean_filter": boolean;
    "gaussian_sigma"?: number | null | undefined;
    "volume1": InputPathType;
    "volume2": InputPathType;
    "transform": InputPathType;
    "outvolume": string;
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
        "mri_compute_change_map": mri_compute_change_map_cargs,
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
        "mri_compute_change_map": mri_compute_change_map_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_compute_change_map(...)`.
 *
 * @interface
 */
interface MriComputeChangeMapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output change map registered with Volume 1
     */
    out_change_map: OutputPathType;
}


function mri_compute_change_map_params(
    volume1: InputPathType,
    volume2: InputPathType,
    transform: InputPathType,
    outvolume: string,
    mean_filter: boolean = false,
    gaussian_sigma: number | null = null,
): MriComputeChangeMapParameters {
    /**
     * Build parameters.
    
     * @param volume1 First volume (e.g. volume1.mgz)
     * @param volume2 Second volume, transformed into the space of Volume 1 (e.g. volume2.mgz)
     * @param transform Transform that takes Volume 2 coordinates into Volume 1 space
     * @param outvolume Output change map volume (e.g. change_map.mgz)
     * @param mean_filter Apply mean filter to the output before writing
     * @param gaussian_sigma Smooth with Gaussian filter of specified sigma before writing
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_compute_change_map" as const,
        "mean_filter": mean_filter,
        "volume1": volume1,
        "volume2": volume2,
        "transform": transform,
        "outvolume": outvolume,
    };
    if (gaussian_sigma !== null) {
        params["gaussian_sigma"] = gaussian_sigma;
    }
    return params;
}


function mri_compute_change_map_cargs(
    params: MriComputeChangeMapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_compute_change_map");
    if ((params["mean_filter"] ?? null)) {
        cargs.push("-m");
    }
    if ((params["gaussian_sigma"] ?? null) !== null) {
        cargs.push(
            "-s",
            String((params["gaussian_sigma"] ?? null))
        );
    }
    cargs.push(execution.inputFile((params["volume1"] ?? null)));
    cargs.push(execution.inputFile((params["volume2"] ?? null)));
    cargs.push(execution.inputFile((params["transform"] ?? null)));
    cargs.push((params["outvolume"] ?? null));
    return cargs;
}


function mri_compute_change_map_outputs(
    params: MriComputeChangeMapParameters,
    execution: Execution,
): MriComputeChangeMapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriComputeChangeMapOutputs = {
        root: execution.outputFile("."),
        out_change_map: execution.outputFile([(params["outvolume"] ?? null)].join('')),
    };
    return ret;
}


function mri_compute_change_map_execute(
    params: MriComputeChangeMapParameters,
    execution: Execution,
): MriComputeChangeMapOutputs {
    /**
     * Compute the change map between two MRI volumes.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriComputeChangeMapOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_compute_change_map_cargs(params, execution)
    const ret = mri_compute_change_map_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_compute_change_map(
    volume1: InputPathType,
    volume2: InputPathType,
    transform: InputPathType,
    outvolume: string,
    mean_filter: boolean = false,
    gaussian_sigma: number | null = null,
    runner: Runner | null = null,
): MriComputeChangeMapOutputs {
    /**
     * Compute the change map between two MRI volumes.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param volume1 First volume (e.g. volume1.mgz)
     * @param volume2 Second volume, transformed into the space of Volume 1 (e.g. volume2.mgz)
     * @param transform Transform that takes Volume 2 coordinates into Volume 1 space
     * @param outvolume Output change map volume (e.g. change_map.mgz)
     * @param mean_filter Apply mean filter to the output before writing
     * @param gaussian_sigma Smooth with Gaussian filter of specified sigma before writing
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriComputeChangeMapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_COMPUTE_CHANGE_MAP_METADATA);
    const params = mri_compute_change_map_params(volume1, volume2, transform, outvolume, mean_filter, gaussian_sigma)
    return mri_compute_change_map_execute(params, execution);
}


export {
      MRI_COMPUTE_CHANGE_MAP_METADATA,
      MriComputeChangeMapOutputs,
      MriComputeChangeMapParameters,
      mri_compute_change_map,
      mri_compute_change_map_params,
};
