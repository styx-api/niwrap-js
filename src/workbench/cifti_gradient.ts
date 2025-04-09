// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_GRADIENT_METADATA: Metadata = {
    id: "f39faf9e44389b76874a4aaef665f54cb7870989.boutiques",
    name: "cifti-gradient",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiGradientLeftSurfaceParameters {
    "__STYXTYPE__": "left_surface";
    "surface": InputPathType;
    "opt_left_corrected_areas_area_metric"?: InputPathType | null | undefined;
}


interface CiftiGradientRightSurfaceParameters {
    "__STYXTYPE__": "right_surface";
    "surface": InputPathType;
    "opt_right_corrected_areas_area_metric"?: InputPathType | null | undefined;
}


interface CiftiGradientCerebellumSurfaceParameters {
    "__STYXTYPE__": "cerebellum_surface";
    "surface": InputPathType;
    "opt_cerebellum_corrected_areas_area_metric"?: InputPathType | null | undefined;
}


interface CiftiGradientParameters {
    "__STYXTYPE__": "cifti-gradient";
    "cifti": InputPathType;
    "direction": string;
    "cifti_out": string;
    "left_surface"?: CiftiGradientLeftSurfaceParameters | null | undefined;
    "right_surface"?: CiftiGradientRightSurfaceParameters | null | undefined;
    "cerebellum_surface"?: CiftiGradientCerebellumSurfaceParameters | null | undefined;
    "opt_surface_presmooth_surface_kernel"?: number | null | undefined;
    "opt_volume_presmooth_volume_kernel"?: number | null | undefined;
    "opt_presmooth_fwhm": boolean;
    "opt_average_output": boolean;
    "opt_vectors_vectors_out"?: string | null | undefined;
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
        "cifti-gradient": cifti_gradient_cargs,
        "left_surface": cifti_gradient_left_surface_cargs,
        "right_surface": cifti_gradient_right_surface_cargs,
        "cerebellum_surface": cifti_gradient_cerebellum_surface_cargs,
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
        "cifti-gradient": cifti_gradient_outputs,
    };
    return outputsFuncs[t];
}


function cifti_gradient_left_surface_params(
    surface: InputPathType,
    opt_left_corrected_areas_area_metric: InputPathType | null = null,
): CiftiGradientLeftSurfaceParameters {
    /**
     * Build parameters.
    
     * @param surface the left surface file
     * @param opt_left_corrected_areas_area_metric vertex areas to use instead of computing them from the left surface: the corrected vertex areas, as a metric
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "left_surface" as const,
        "surface": surface,
    };
    if (opt_left_corrected_areas_area_metric !== null) {
        params["opt_left_corrected_areas_area_metric"] = opt_left_corrected_areas_area_metric;
    }
    return params;
}


function cifti_gradient_left_surface_cargs(
    params: CiftiGradientLeftSurfaceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-left-surface");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    if ((params["opt_left_corrected_areas_area_metric"] ?? null) !== null) {
        cargs.push(
            "-left-corrected-areas",
            execution.inputFile((params["opt_left_corrected_areas_area_metric"] ?? null))
        );
    }
    return cargs;
}


function cifti_gradient_right_surface_params(
    surface: InputPathType,
    opt_right_corrected_areas_area_metric: InputPathType | null = null,
): CiftiGradientRightSurfaceParameters {
    /**
     * Build parameters.
    
     * @param surface the right surface file
     * @param opt_right_corrected_areas_area_metric vertex areas to use instead of computing them from the right surface: the corrected vertex areas, as a metric
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "right_surface" as const,
        "surface": surface,
    };
    if (opt_right_corrected_areas_area_metric !== null) {
        params["opt_right_corrected_areas_area_metric"] = opt_right_corrected_areas_area_metric;
    }
    return params;
}


function cifti_gradient_right_surface_cargs(
    params: CiftiGradientRightSurfaceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-right-surface");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    if ((params["opt_right_corrected_areas_area_metric"] ?? null) !== null) {
        cargs.push(
            "-right-corrected-areas",
            execution.inputFile((params["opt_right_corrected_areas_area_metric"] ?? null))
        );
    }
    return cargs;
}


function cifti_gradient_cerebellum_surface_params(
    surface: InputPathType,
    opt_cerebellum_corrected_areas_area_metric: InputPathType | null = null,
): CiftiGradientCerebellumSurfaceParameters {
    /**
     * Build parameters.
    
     * @param surface the cerebellum surface file
     * @param opt_cerebellum_corrected_areas_area_metric vertex areas to use instead of computing them from the cerebellum surface: the corrected vertex areas, as a metric
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cerebellum_surface" as const,
        "surface": surface,
    };
    if (opt_cerebellum_corrected_areas_area_metric !== null) {
        params["opt_cerebellum_corrected_areas_area_metric"] = opt_cerebellum_corrected_areas_area_metric;
    }
    return params;
}


function cifti_gradient_cerebellum_surface_cargs(
    params: CiftiGradientCerebellumSurfaceParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-cerebellum-surface");
    cargs.push(execution.inputFile((params["surface"] ?? null)));
    if ((params["opt_cerebellum_corrected_areas_area_metric"] ?? null) !== null) {
        cargs.push(
            "-cerebellum-corrected-areas",
            execution.inputFile((params["opt_cerebellum_corrected_areas_area_metric"] ?? null))
        );
    }
    return cargs;
}


/**
 * Output object returned when calling `cifti_gradient(...)`.
 *
 * @interface
 */
interface CiftiGradientOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output cifti
     */
    cifti_out: OutputPathType;
    /**
     * output gradient vectors: the vectors, as a dscalar file
     */
    opt_vectors_vectors_out: OutputPathType | null;
}


function cifti_gradient_params(
    cifti: InputPathType,
    direction: string,
    cifti_out: string,
    left_surface: CiftiGradientLeftSurfaceParameters | null = null,
    right_surface: CiftiGradientRightSurfaceParameters | null = null,
    cerebellum_surface: CiftiGradientCerebellumSurfaceParameters | null = null,
    opt_surface_presmooth_surface_kernel: number | null = null,
    opt_volume_presmooth_volume_kernel: number | null = null,
    opt_presmooth_fwhm: boolean = false,
    opt_average_output: boolean = false,
    opt_vectors_vectors_out: string | null = null,
): CiftiGradientParameters {
    /**
     * Build parameters.
    
     * @param cifti the input cifti
     * @param direction which dimension to take the gradient along, ROW or COLUMN
     * @param cifti_out the output cifti
     * @param left_surface specify the left surface to use
     * @param right_surface specify the right surface to use
     * @param cerebellum_surface specify the cerebellum surface to use
     * @param opt_surface_presmooth_surface_kernel smooth on the surface before computing the gradient: the size of the gaussian surface smoothing kernel in mm, as sigma by default
     * @param opt_volume_presmooth_volume_kernel smooth on the surface before computing the gradient: the size of the gaussian volume smoothing kernel in mm, as sigma by default
     * @param opt_presmooth_fwhm smoothing kernel sizes are FWHM, not sigma
     * @param opt_average_output output the average of the gradient magnitude maps instead of each gradient map separately
     * @param opt_vectors_vectors_out output gradient vectors: the vectors, as a dscalar file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-gradient" as const,
        "cifti": cifti,
        "direction": direction,
        "cifti_out": cifti_out,
        "opt_presmooth_fwhm": opt_presmooth_fwhm,
        "opt_average_output": opt_average_output,
    };
    if (left_surface !== null) {
        params["left_surface"] = left_surface;
    }
    if (right_surface !== null) {
        params["right_surface"] = right_surface;
    }
    if (cerebellum_surface !== null) {
        params["cerebellum_surface"] = cerebellum_surface;
    }
    if (opt_surface_presmooth_surface_kernel !== null) {
        params["opt_surface_presmooth_surface_kernel"] = opt_surface_presmooth_surface_kernel;
    }
    if (opt_volume_presmooth_volume_kernel !== null) {
        params["opt_volume_presmooth_volume_kernel"] = opt_volume_presmooth_volume_kernel;
    }
    if (opt_vectors_vectors_out !== null) {
        params["opt_vectors_vectors_out"] = opt_vectors_vectors_out;
    }
    return params;
}


function cifti_gradient_cargs(
    params: CiftiGradientParameters,
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
    cargs.push("-cifti-gradient");
    cargs.push(execution.inputFile((params["cifti"] ?? null)));
    cargs.push((params["direction"] ?? null));
    cargs.push((params["cifti_out"] ?? null));
    if ((params["left_surface"] ?? null) !== null) {
        cargs.push(...dynCargs((params["left_surface"] ?? null).__STYXTYPE__)((params["left_surface"] ?? null), execution));
    }
    if ((params["right_surface"] ?? null) !== null) {
        cargs.push(...dynCargs((params["right_surface"] ?? null).__STYXTYPE__)((params["right_surface"] ?? null), execution));
    }
    if ((params["cerebellum_surface"] ?? null) !== null) {
        cargs.push(...dynCargs((params["cerebellum_surface"] ?? null).__STYXTYPE__)((params["cerebellum_surface"] ?? null), execution));
    }
    if ((params["opt_surface_presmooth_surface_kernel"] ?? null) !== null) {
        cargs.push(
            "-surface-presmooth",
            String((params["opt_surface_presmooth_surface_kernel"] ?? null))
        );
    }
    if ((params["opt_volume_presmooth_volume_kernel"] ?? null) !== null) {
        cargs.push(
            "-volume-presmooth",
            String((params["opt_volume_presmooth_volume_kernel"] ?? null))
        );
    }
    if ((params["opt_presmooth_fwhm"] ?? null)) {
        cargs.push("-presmooth-fwhm");
    }
    if ((params["opt_average_output"] ?? null)) {
        cargs.push("-average-output");
    }
    if ((params["opt_vectors_vectors_out"] ?? null) !== null) {
        cargs.push(
            "-vectors",
            (params["opt_vectors_vectors_out"] ?? null)
        );
    }
    return cargs;
}


function cifti_gradient_outputs(
    params: CiftiGradientParameters,
    execution: Execution,
): CiftiGradientOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiGradientOutputs = {
        root: execution.outputFile("."),
        cifti_out: execution.outputFile([(params["cifti_out"] ?? null)].join('')),
        opt_vectors_vectors_out: ((params["opt_vectors_vectors_out"] ?? null) !== null) ? execution.outputFile([(params["opt_vectors_vectors_out"] ?? null)].join('')) : null,
    };
    return ret;
}


function cifti_gradient_execute(
    params: CiftiGradientParameters,
    execution: Execution,
): CiftiGradientOutputs {
    /**
     * Take gradient of a cifti file.
     * 
     * Performs gradient calculation on each component of the cifti file, and optionally averages the resulting gradients.  The -vectors and -average-output options may not be used together.  You must specify a surface for each surface structure in the cifti file.  The COLUMN direction should be faster, and is the direction that works on dtseries.  For dconn, you probably want ROW, unless you are using -average-output.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiGradientOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_gradient_cargs(params, execution)
    const ret = cifti_gradient_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_gradient(
    cifti: InputPathType,
    direction: string,
    cifti_out: string,
    left_surface: CiftiGradientLeftSurfaceParameters | null = null,
    right_surface: CiftiGradientRightSurfaceParameters | null = null,
    cerebellum_surface: CiftiGradientCerebellumSurfaceParameters | null = null,
    opt_surface_presmooth_surface_kernel: number | null = null,
    opt_volume_presmooth_volume_kernel: number | null = null,
    opt_presmooth_fwhm: boolean = false,
    opt_average_output: boolean = false,
    opt_vectors_vectors_out: string | null = null,
    runner: Runner | null = null,
): CiftiGradientOutputs {
    /**
     * Take gradient of a cifti file.
     * 
     * Performs gradient calculation on each component of the cifti file, and optionally averages the resulting gradients.  The -vectors and -average-output options may not be used together.  You must specify a surface for each surface structure in the cifti file.  The COLUMN direction should be faster, and is the direction that works on dtseries.  For dconn, you probably want ROW, unless you are using -average-output.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param cifti the input cifti
     * @param direction which dimension to take the gradient along, ROW or COLUMN
     * @param cifti_out the output cifti
     * @param left_surface specify the left surface to use
     * @param right_surface specify the right surface to use
     * @param cerebellum_surface specify the cerebellum surface to use
     * @param opt_surface_presmooth_surface_kernel smooth on the surface before computing the gradient: the size of the gaussian surface smoothing kernel in mm, as sigma by default
     * @param opt_volume_presmooth_volume_kernel smooth on the surface before computing the gradient: the size of the gaussian volume smoothing kernel in mm, as sigma by default
     * @param opt_presmooth_fwhm smoothing kernel sizes are FWHM, not sigma
     * @param opt_average_output output the average of the gradient magnitude maps instead of each gradient map separately
     * @param opt_vectors_vectors_out output gradient vectors: the vectors, as a dscalar file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiGradientOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_GRADIENT_METADATA);
    const params = cifti_gradient_params(cifti, direction, cifti_out, left_surface, right_surface, cerebellum_surface, opt_surface_presmooth_surface_kernel, opt_volume_presmooth_volume_kernel, opt_presmooth_fwhm, opt_average_output, opt_vectors_vectors_out)
    return cifti_gradient_execute(params, execution);
}


export {
      CIFTI_GRADIENT_METADATA,
      CiftiGradientCerebellumSurfaceParameters,
      CiftiGradientLeftSurfaceParameters,
      CiftiGradientOutputs,
      CiftiGradientParameters,
      CiftiGradientRightSurfaceParameters,
      cifti_gradient,
      cifti_gradient_cerebellum_surface_params,
      cifti_gradient_left_surface_params,
      cifti_gradient_params,
      cifti_gradient_right_surface_params,
};
