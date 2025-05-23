// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_SMOOTH_INTRACORTICAL_METADATA: Metadata = {
    id: "40a15a33b82c63e11e7ab868f6bbf4b236de01b3.boutiques",
    name: "mris_smooth_intracortical",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisSmoothIntracorticalParameters {
    "__STYXTYPE__": "mris_smooth_intracortical";
    "surf_dir": string;
    "surf_name": string;
    "overlay_dir": string;
    "overlay_name": string;
    "output_dir"?: string | null | undefined;
    "output_name"?: string | null | undefined;
    "tan_size"?: number | null | undefined;
    "rad_size"?: number | null | undefined;
    "rad_start"?: number | null | undefined;
    "tan_weights"?: string | null | undefined;
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
        "mris_smooth_intracortical": mris_smooth_intracortical_cargs,
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
        "mris_smooth_intracortical": mris_smooth_intracortical_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_smooth_intracortical(...)`.
 *
 * @interface
 */
interface MrisSmoothIntracorticalOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output overlay file.
     */
    output_overlay: OutputPathType | null;
}


function mris_smooth_intracortical_params(
    surf_dir: string,
    surf_name: string,
    overlay_dir: string,
    overlay_name: string,
    output_dir: string | null = "[OVERLAY_DIR]",
    output_name: string | null = null,
    tan_size: number | null = null,
    rad_size: number | null = null,
    rad_start: number | null = null,
    tan_weights: string | null = null,
): MrisSmoothIntracorticalParameters {
    /**
     * Build parameters.
    
     * @param surf_dir Directory with surface meshes.
     * @param surf_name Name of a surface file(s). Use * and ? to pass multiple names (max 20).
     * @param overlay_dir Directory with surface mesh overlays.
     * @param overlay_name Name of an overlay file(s). Use * and ? to pass multiple names (max 20).
     * @param output_dir Path to the output directory. Default is same as overlay directory.
     * @param output_name Name of the output overlay file.
     * @param tan_size Tangential extent of the smoothing kernel. Default = 0, Max = 6.
     * @param rad_size Radial extent of the intracortical smoothing kernel.
     * @param rad_start Starting surface mesh of the intracortical smoothing kernel in the radial direction.
     * @param tan_weights Weighting function for tangential smoothing. 'gauss' or 'distance'.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_smooth_intracortical" as const,
        "surf_dir": surf_dir,
        "surf_name": surf_name,
        "overlay_dir": overlay_dir,
        "overlay_name": overlay_name,
    };
    if (output_dir !== null) {
        params["output_dir"] = output_dir;
    }
    if (output_name !== null) {
        params["output_name"] = output_name;
    }
    if (tan_size !== null) {
        params["tan_size"] = tan_size;
    }
    if (rad_size !== null) {
        params["rad_size"] = rad_size;
    }
    if (rad_start !== null) {
        params["rad_start"] = rad_start;
    }
    if (tan_weights !== null) {
        params["tan_weights"] = tan_weights;
    }
    return params;
}


function mris_smooth_intracortical_cargs(
    params: MrisSmoothIntracorticalParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_smooth_intracortical");
    cargs.push(
        "--surf_dir",
        (params["surf_dir"] ?? null)
    );
    cargs.push(
        "--surf_name",
        (params["surf_name"] ?? null)
    );
    cargs.push(
        "--overlay_dir",
        (params["overlay_dir"] ?? null)
    );
    cargs.push(
        "--overlay_name",
        (params["overlay_name"] ?? null)
    );
    if ((params["output_dir"] ?? null) !== null) {
        cargs.push(
            "--output_dir",
            ["[", (params["output_dir"] ?? null), "]"].join('')
        );
    }
    if ((params["output_name"] ?? null) !== null) {
        cargs.push(
            "--output_name",
            ["[", (params["output_name"] ?? null), "]"].join('')
        );
    }
    if ((params["tan_size"] ?? null) !== null) {
        cargs.push(
            "--tan-size",
            ["[", String((params["tan_size"] ?? null)), "]"].join('')
        );
    }
    if ((params["rad_size"] ?? null) !== null) {
        cargs.push(
            "--rad-size",
            ["[", String((params["rad_size"] ?? null)), "]"].join('')
        );
    }
    if ((params["rad_start"] ?? null) !== null) {
        cargs.push(
            "--rad-start",
            ["[", String((params["rad_start"] ?? null)), "]"].join('')
        );
    }
    if ((params["tan_weights"] ?? null) !== null) {
        cargs.push(
            "--tan-weights",
            ["[", (params["tan_weights"] ?? null), "]"].join('')
        );
    }
    return cargs;
}


function mris_smooth_intracortical_outputs(
    params: MrisSmoothIntracorticalParameters,
    execution: Execution,
): MrisSmoothIntracorticalOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisSmoothIntracorticalOutputs = {
        root: execution.outputFile("."),
        output_overlay: ((params["output_dir"] ?? null) !== null && (params["output_name"] ?? null) !== null) ? execution.outputFile([(params["output_dir"] ?? null), "/", (params["output_name"] ?? null)].join('')) : null,
    };
    return ret;
}


function mris_smooth_intracortical_execute(
    params: MrisSmoothIntracorticalParameters,
    execution: Execution,
): MrisSmoothIntracorticalOutputs {
    /**
     * Smooths data overlaid onto cortical surface meshes using specified tangential and radial extents.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisSmoothIntracorticalOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_smooth_intracortical_cargs(params, execution)
    const ret = mris_smooth_intracortical_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_smooth_intracortical(
    surf_dir: string,
    surf_name: string,
    overlay_dir: string,
    overlay_name: string,
    output_dir: string | null = "[OVERLAY_DIR]",
    output_name: string | null = null,
    tan_size: number | null = null,
    rad_size: number | null = null,
    rad_start: number | null = null,
    tan_weights: string | null = null,
    runner: Runner | null = null,
): MrisSmoothIntracorticalOutputs {
    /**
     * Smooths data overlaid onto cortical surface meshes using specified tangential and radial extents.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param surf_dir Directory with surface meshes.
     * @param surf_name Name of a surface file(s). Use * and ? to pass multiple names (max 20).
     * @param overlay_dir Directory with surface mesh overlays.
     * @param overlay_name Name of an overlay file(s). Use * and ? to pass multiple names (max 20).
     * @param output_dir Path to the output directory. Default is same as overlay directory.
     * @param output_name Name of the output overlay file.
     * @param tan_size Tangential extent of the smoothing kernel. Default = 0, Max = 6.
     * @param rad_size Radial extent of the intracortical smoothing kernel.
     * @param rad_start Starting surface mesh of the intracortical smoothing kernel in the radial direction.
     * @param tan_weights Weighting function for tangential smoothing. 'gauss' or 'distance'.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisSmoothIntracorticalOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_SMOOTH_INTRACORTICAL_METADATA);
    const params = mris_smooth_intracortical_params(surf_dir, surf_name, overlay_dir, overlay_name, output_dir, output_name, tan_size, rad_size, rad_start, tan_weights)
    return mris_smooth_intracortical_execute(params, execution);
}


export {
      MRIS_SMOOTH_INTRACORTICAL_METADATA,
      MrisSmoothIntracorticalOutputs,
      MrisSmoothIntracorticalParameters,
      mris_smooth_intracortical,
      mris_smooth_intracortical_params,
};
