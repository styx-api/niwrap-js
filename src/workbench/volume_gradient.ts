// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const VOLUME_GRADIENT_METADATA: Metadata = {
    id: "8af5e6bf60b53a0f383725072c1fa1ba36511752.boutiques",
    name: "volume-gradient",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface VolumeGradientPresmoothParameters {
    "__STYXTYPE__": "presmooth";
    "kernel": number;
    "opt_fwhm": boolean;
}


interface VolumeGradientParameters {
    "__STYXTYPE__": "volume-gradient";
    "volume_in": InputPathType;
    "volume_out": string;
    "presmooth"?: VolumeGradientPresmoothParameters | null | undefined;
    "opt_roi_roi_volume"?: InputPathType | null | undefined;
    "opt_vectors_vector_volume_out"?: string | null | undefined;
    "opt_subvolume_subvol"?: string | null | undefined;
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
        "volume-gradient": volume_gradient_cargs,
        "presmooth": volume_gradient_presmooth_cargs,
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
        "volume-gradient": volume_gradient_outputs,
    };
    return outputsFuncs[t];
}


function volume_gradient_presmooth_params(
    kernel: number,
    opt_fwhm: boolean = false,
): VolumeGradientPresmoothParameters {
    /**
     * Build parameters.
    
     * @param kernel the size of the gaussian smoothing kernel in mm, as sigma by default
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


function volume_gradient_presmooth_cargs(
    params: VolumeGradientPresmoothParameters,
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


/**
 * Output object returned when calling `volume_gradient(...)`.
 *
 * @interface
 */
interface VolumeGradientOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output gradient magnitude volume
     */
    volume_out: OutputPathType;
    /**
     * output vectors: the vectors as a volume file
     */
    opt_vectors_vector_volume_out: OutputPathType | null;
}


function volume_gradient_params(
    volume_in: InputPathType,
    volume_out: string,
    presmooth: VolumeGradientPresmoothParameters | null = null,
    opt_roi_roi_volume: InputPathType | null = null,
    opt_vectors_vector_volume_out: string | null = null,
    opt_subvolume_subvol: string | null = null,
): VolumeGradientParameters {
    /**
     * Build parameters.
    
     * @param volume_in the input volume
     * @param volume_out the output gradient magnitude volume
     * @param presmooth smooth the volume before computing the gradient
     * @param opt_roi_roi_volume select a region of interest to take the gradient of: the region to take the gradient within
     * @param opt_vectors_vector_volume_out output vectors: the vectors as a volume file
     * @param opt_subvolume_subvol select a single subvolume to take the gradient of: the subvolume number or name
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "volume-gradient" as const,
        "volume_in": volume_in,
        "volume_out": volume_out,
    };
    if (presmooth !== null) {
        params["presmooth"] = presmooth;
    }
    if (opt_roi_roi_volume !== null) {
        params["opt_roi_roi_volume"] = opt_roi_roi_volume;
    }
    if (opt_vectors_vector_volume_out !== null) {
        params["opt_vectors_vector_volume_out"] = opt_vectors_vector_volume_out;
    }
    if (opt_subvolume_subvol !== null) {
        params["opt_subvolume_subvol"] = opt_subvolume_subvol;
    }
    return params;
}


function volume_gradient_cargs(
    params: VolumeGradientParameters,
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
    cargs.push("-volume-gradient");
    cargs.push(execution.inputFile((params["volume_in"] ?? null)));
    cargs.push((params["volume_out"] ?? null));
    if ((params["presmooth"] ?? null) !== null) {
        cargs.push(...dynCargs((params["presmooth"] ?? null).__STYXTYPE__)((params["presmooth"] ?? null), execution));
    }
    if ((params["opt_roi_roi_volume"] ?? null) !== null) {
        cargs.push(
            "-roi",
            execution.inputFile((params["opt_roi_roi_volume"] ?? null))
        );
    }
    if ((params["opt_vectors_vector_volume_out"] ?? null) !== null) {
        cargs.push(
            "-vectors",
            (params["opt_vectors_vector_volume_out"] ?? null)
        );
    }
    if ((params["opt_subvolume_subvol"] ?? null) !== null) {
        cargs.push(
            "-subvolume",
            (params["opt_subvolume_subvol"] ?? null)
        );
    }
    return cargs;
}


function volume_gradient_outputs(
    params: VolumeGradientParameters,
    execution: Execution,
): VolumeGradientOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VolumeGradientOutputs = {
        root: execution.outputFile("."),
        volume_out: execution.outputFile([(params["volume_out"] ?? null)].join('')),
        opt_vectors_vector_volume_out: ((params["opt_vectors_vector_volume_out"] ?? null) !== null) ? execution.outputFile([(params["opt_vectors_vector_volume_out"] ?? null)].join('')) : null,
    };
    return ret;
}


function volume_gradient_execute(
    params: VolumeGradientParameters,
    execution: Execution,
): VolumeGradientOutputs {
    /**
     * Gradient of a volume file.
     * 
     * Computes the gradient of the volume by doing linear regressions for each voxel, considering only its face neighbors unless too few face neighbors exist.  The gradient vector is constructed from the partial derivatives of the resulting linear function, and the magnitude of this vector is the output.  If specified, the volume vector output is arranged with the x, y, and z components from a subvolume as consecutive subvolumes.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VolumeGradientOutputs`).
     */
    params = execution.params(params)
    const cargs = volume_gradient_cargs(params, execution)
    const ret = volume_gradient_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function volume_gradient(
    volume_in: InputPathType,
    volume_out: string,
    presmooth: VolumeGradientPresmoothParameters | null = null,
    opt_roi_roi_volume: InputPathType | null = null,
    opt_vectors_vector_volume_out: string | null = null,
    opt_subvolume_subvol: string | null = null,
    runner: Runner | null = null,
): VolumeGradientOutputs {
    /**
     * Gradient of a volume file.
     * 
     * Computes the gradient of the volume by doing linear regressions for each voxel, considering only its face neighbors unless too few face neighbors exist.  The gradient vector is constructed from the partial derivatives of the resulting linear function, and the magnitude of this vector is the output.  If specified, the volume vector output is arranged with the x, y, and z components from a subvolume as consecutive subvolumes.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param volume_in the input volume
     * @param volume_out the output gradient magnitude volume
     * @param presmooth smooth the volume before computing the gradient
     * @param opt_roi_roi_volume select a region of interest to take the gradient of: the region to take the gradient within
     * @param opt_vectors_vector_volume_out output vectors: the vectors as a volume file
     * @param opt_subvolume_subvol select a single subvolume to take the gradient of: the subvolume number or name
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VolumeGradientOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(VOLUME_GRADIENT_METADATA);
    const params = volume_gradient_params(volume_in, volume_out, presmooth, opt_roi_roi_volume, opt_vectors_vector_volume_out, opt_subvolume_subvol)
    return volume_gradient_execute(params, execution);
}


export {
      VOLUME_GRADIENT_METADATA,
      VolumeGradientOutputs,
      VolumeGradientParameters,
      VolumeGradientPresmoothParameters,
      volume_gradient,
      volume_gradient_params,
      volume_gradient_presmooth_params,
};
