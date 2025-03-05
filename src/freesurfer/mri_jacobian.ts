// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_JACOBIAN_METADATA: Metadata = {
    id: "261fa5191d385d242b16ec1808b1a5ac51b44bc2.boutiques",
    name: "mri_jacobian",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriJacobianParameters {
    "__STYXTYPE__": "mri_jacobian";
    "morph_file": InputPathType;
    "template_vol": InputPathType;
    "output_vol": string;
    "atlas_coord": boolean;
    "write_area_vols": boolean;
    "log_jacobian": boolean;
    "smooth_sigma"?: number | null | undefined;
    "zero_mean_log": boolean;
    "tm3d": boolean;
    "help2": boolean;
    "dt": boolean;
    "debug_voxel"?: Array<number> | null | undefined;
    "remove": boolean;
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
        "mri_jacobian": mri_jacobian_cargs,
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
        "mri_jacobian": mri_jacobian_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_jacobian(...)`.
 *
 * @interface
 */
interface MriJacobianOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Resulting volume file after Jacobian computation
     */
    result_vol: OutputPathType;
}


function mri_jacobian_params(
    morph_file: InputPathType,
    template_vol: InputPathType,
    output_vol: string,
    atlas_coord: boolean = false,
    write_area_vols: boolean = false,
    log_jacobian: boolean = false,
    smooth_sigma: number | null = null,
    zero_mean_log: boolean = false,
    tm3d: boolean = false,
    help2: boolean = false,
    dt: boolean = false,
    debug_voxel: Array<number> | null = null,
    remove: boolean = false,
): MriJacobianParameters {
    /**
     * Build parameters.
    
     * @param morph_file 3D morph input file
     * @param template_vol Template volume file
     * @param output_vol Output volume file
     * @param atlas_coord Output is written in atlas coordinate system
     * @param write_area_vols Writing area volumes
     * @param log_jacobian Taking log of Jacobian values before saving
     * @param smooth_sigma Smoothing Jacobian volume with sigma
     * @param zero_mean_log Make log Jacobian zero mean
     * @param tm3d The input morph (m3z) originated from tm3d (mri_cvs_register)
     * @param help2 Writing out help
     * @param dt DT option (description not provided in help text)
     * @param debug_voxel Debug voxel with specified Gx, Gy, Gz coordinates
     * @param remove Remove option (description not provided in help text)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_jacobian" as const,
        "morph_file": morph_file,
        "template_vol": template_vol,
        "output_vol": output_vol,
        "atlas_coord": atlas_coord,
        "write_area_vols": write_area_vols,
        "log_jacobian": log_jacobian,
        "zero_mean_log": zero_mean_log,
        "tm3d": tm3d,
        "help2": help2,
        "dt": dt,
        "remove": remove,
    };
    if (smooth_sigma !== null) {
        params["smooth_sigma"] = smooth_sigma;
    }
    if (debug_voxel !== null) {
        params["debug_voxel"] = debug_voxel;
    }
    return params;
}


function mri_jacobian_cargs(
    params: MriJacobianParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_jacobian");
    cargs.push(execution.inputFile((params["morph_file"] ?? null)));
    cargs.push(execution.inputFile((params["template_vol"] ?? null)));
    cargs.push((params["output_vol"] ?? null));
    if ((params["atlas_coord"] ?? null)) {
        cargs.push("-a");
    }
    if ((params["write_area_vols"] ?? null)) {
        cargs.push("-w");
    }
    if ((params["log_jacobian"] ?? null)) {
        cargs.push("-l");
    }
    if ((params["smooth_sigma"] ?? null) !== null) {
        cargs.push(
            "-s",
            String((params["smooth_sigma"] ?? null))
        );
    }
    if ((params["zero_mean_log"] ?? null)) {
        cargs.push("-z");
    }
    if ((params["tm3d"] ?? null)) {
        cargs.push("-tm3d");
    }
    if ((params["help2"] ?? null)) {
        cargs.push("-u");
    }
    if ((params["dt"] ?? null)) {
        cargs.push("-dt");
    }
    if ((params["debug_voxel"] ?? null) !== null) {
        cargs.push(
            "-debug_voxel",
            ...(params["debug_voxel"] ?? null).map(String)
        );
    }
    if ((params["remove"] ?? null)) {
        cargs.push("-remove");
    }
    return cargs;
}


function mri_jacobian_outputs(
    params: MriJacobianParameters,
    execution: Execution,
): MriJacobianOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriJacobianOutputs = {
        root: execution.outputFile("."),
        result_vol: execution.outputFile([(params["output_vol"] ?? null)].join('')),
    };
    return ret;
}


function mri_jacobian_execute(
    params: MriJacobianParameters,
    execution: Execution,
): MriJacobianOutputs {
    /**
     * Compute the Jacobian of a morph with FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriJacobianOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_jacobian_cargs(params, execution)
    const ret = mri_jacobian_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_jacobian(
    morph_file: InputPathType,
    template_vol: InputPathType,
    output_vol: string,
    atlas_coord: boolean = false,
    write_area_vols: boolean = false,
    log_jacobian: boolean = false,
    smooth_sigma: number | null = null,
    zero_mean_log: boolean = false,
    tm3d: boolean = false,
    help2: boolean = false,
    dt: boolean = false,
    debug_voxel: Array<number> | null = null,
    remove: boolean = false,
    runner: Runner | null = null,
): MriJacobianOutputs {
    /**
     * Compute the Jacobian of a morph with FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param morph_file 3D morph input file
     * @param template_vol Template volume file
     * @param output_vol Output volume file
     * @param atlas_coord Output is written in atlas coordinate system
     * @param write_area_vols Writing area volumes
     * @param log_jacobian Taking log of Jacobian values before saving
     * @param smooth_sigma Smoothing Jacobian volume with sigma
     * @param zero_mean_log Make log Jacobian zero mean
     * @param tm3d The input morph (m3z) originated from tm3d (mri_cvs_register)
     * @param help2 Writing out help
     * @param dt DT option (description not provided in help text)
     * @param debug_voxel Debug voxel with specified Gx, Gy, Gz coordinates
     * @param remove Remove option (description not provided in help text)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriJacobianOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_JACOBIAN_METADATA);
    const params = mri_jacobian_params(morph_file, template_vol, output_vol, atlas_coord, write_area_vols, log_jacobian, smooth_sigma, zero_mean_log, tm3d, help2, dt, debug_voxel, remove)
    return mri_jacobian_execute(params, execution);
}


export {
      MRI_JACOBIAN_METADATA,
      MriJacobianOutputs,
      MriJacobianParameters,
      mri_jacobian,
      mri_jacobian_params,
};
