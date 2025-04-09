// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VSM_SMOOTH_METADATA: Metadata = {
    id: "620a6bccb466424ba83ef7108c99f0114a863d88.boutiques",
    name: "vsm-smooth",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface VsmSmoothParameters {
    "__STYXTYPE__": "vsm-smooth";
    "input_file": InputPathType;
    "output_file": string;
    "fwhm_value": number;
    "temp_dir": string;
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
        "vsm-smooth": vsm_smooth_cargs,
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
        "vsm-smooth": vsm_smooth_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `vsm_smooth(...)`.
 *
 * @interface
 */
interface VsmSmoothOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The resulting smoothed voxel shift map.
     */
    output_vsm: OutputPathType;
}


function vsm_smooth_params(
    input_file: InputPathType,
    output_file: string,
    fwhm_value: number,
    temp_dir: string,
): VsmSmoothParameters {
    /**
     * Build parameters.
    
     * @param input_file Input voxel shift map (vsm).
     * @param output_file Output smoothed voxel shift map.
     * @param fwhm_value Full width at half maximum for smoothing.
     * @param temp_dir Directory for temporary files.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "vsm-smooth" as const,
        "input_file": input_file,
        "output_file": output_file,
        "fwhm_value": fwhm_value,
        "temp_dir": temp_dir,
    };
    return params;
}


function vsm_smooth_cargs(
    params: VsmSmoothParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("vsm-smooth");
    cargs.push(
        "--i",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "--o",
        (params["output_file"] ?? null)
    );
    cargs.push(
        "--fwhm",
        String((params["fwhm_value"] ?? null))
    );
    cargs.push(
        "--tmpdir",
        (params["temp_dir"] ?? null)
    );
    return cargs;
}


function vsm_smooth_outputs(
    params: VsmSmoothParameters,
    execution: Execution,
): VsmSmoothOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VsmSmoothOutputs = {
        root: execution.outputFile("."),
        output_vsm: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function vsm_smooth_execute(
    params: VsmSmoothParameters,
    execution: Execution,
): VsmSmoothOutputs {
    /**
     * Implements a masked smoothing in which the input (vsm) is unchanged in voxels that have a non-zero value. In voxels with a zero value, the value is replaced with vsm smoothed by the given amount. This will likely only change the voxels that are near the edge of the non-zero voxels. This is a simple way to extrapolate the non-zero voxels beyond their range. This works well for a B0 distortion correction voxel shift map (vsm), but it can be applied to other maps.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VsmSmoothOutputs`).
     */
    params = execution.params(params)
    const cargs = vsm_smooth_cargs(params, execution)
    const ret = vsm_smooth_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function vsm_smooth(
    input_file: InputPathType,
    output_file: string,
    fwhm_value: number,
    temp_dir: string,
    runner: Runner | null = null,
): VsmSmoothOutputs {
    /**
     * Implements a masked smoothing in which the input (vsm) is unchanged in voxels that have a non-zero value. In voxels with a zero value, the value is replaced with vsm smoothed by the given amount. This will likely only change the voxels that are near the edge of the non-zero voxels. This is a simple way to extrapolate the non-zero voxels beyond their range. This works well for a B0 distortion correction voxel shift map (vsm), but it can be applied to other maps.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param input_file Input voxel shift map (vsm).
     * @param output_file Output smoothed voxel shift map.
     * @param fwhm_value Full width at half maximum for smoothing.
     * @param temp_dir Directory for temporary files.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VsmSmoothOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VSM_SMOOTH_METADATA);
    const params = vsm_smooth_params(input_file, output_file, fwhm_value, temp_dir)
    return vsm_smooth_execute(params, execution);
}


export {
      VSM_SMOOTH_METADATA,
      VsmSmoothOutputs,
      VsmSmoothParameters,
      vsm_smooth,
      vsm_smooth_params,
};
