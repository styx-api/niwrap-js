// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_SMOOTHING_METADATA: Metadata = {
    id: "18b7774d6b61989cbed2ac0fe254c99872534a2f.boutiques",
    name: "cifti-smoothing",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiSmoothingLeftSurfaceParameters {
    "__STYXTYPE__": "left_surface";
    "surface": InputPathType;
    "opt_left_corrected_areas_area_metric"?: InputPathType | null | undefined;
}


interface CiftiSmoothingRightSurfaceParameters {
    "__STYXTYPE__": "right_surface";
    "surface": InputPathType;
    "opt_right_corrected_areas_area_metric"?: InputPathType | null | undefined;
}


interface CiftiSmoothingCerebellumSurfaceParameters {
    "__STYXTYPE__": "cerebellum_surface";
    "surface": InputPathType;
    "opt_cerebellum_corrected_areas_area_metric"?: InputPathType | null | undefined;
}


interface CiftiSmoothingParameters {
    "__STYXTYPE__": "cifti-smoothing";
    "cifti": InputPathType;
    "surface_kernel": number;
    "volume_kernel": number;
    "direction": string;
    "cifti_out": string;
    "opt_fwhm": boolean;
    "left_surface"?: CiftiSmoothingLeftSurfaceParameters | null | undefined;
    "right_surface"?: CiftiSmoothingRightSurfaceParameters | null | undefined;
    "cerebellum_surface"?: CiftiSmoothingCerebellumSurfaceParameters | null | undefined;
    "opt_cifti_roi_roi_cifti"?: InputPathType | null | undefined;
    "opt_fix_zeros_volume": boolean;
    "opt_fix_zeros_surface": boolean;
    "opt_merged_volume": boolean;
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
        "cifti-smoothing": cifti_smoothing_cargs,
        "left_surface": cifti_smoothing_left_surface_cargs,
        "right_surface": cifti_smoothing_right_surface_cargs,
        "cerebellum_surface": cifti_smoothing_cerebellum_surface_cargs,
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
        "cifti-smoothing": cifti_smoothing_outputs,
    };
    return outputsFuncs[t];
}


function cifti_smoothing_left_surface_params(
    surface: InputPathType,
    opt_left_corrected_areas_area_metric: InputPathType | null = null,
): CiftiSmoothingLeftSurfaceParameters {
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


function cifti_smoothing_left_surface_cargs(
    params: CiftiSmoothingLeftSurfaceParameters,
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


function cifti_smoothing_right_surface_params(
    surface: InputPathType,
    opt_right_corrected_areas_area_metric: InputPathType | null = null,
): CiftiSmoothingRightSurfaceParameters {
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


function cifti_smoothing_right_surface_cargs(
    params: CiftiSmoothingRightSurfaceParameters,
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


function cifti_smoothing_cerebellum_surface_params(
    surface: InputPathType,
    opt_cerebellum_corrected_areas_area_metric: InputPathType | null = null,
): CiftiSmoothingCerebellumSurfaceParameters {
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


function cifti_smoothing_cerebellum_surface_cargs(
    params: CiftiSmoothingCerebellumSurfaceParameters,
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
 * Output object returned when calling `cifti_smoothing(...)`.
 *
 * @interface
 */
interface CiftiSmoothingOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output cifti
     */
    cifti_out: OutputPathType;
}


function cifti_smoothing_params(
    cifti: InputPathType,
    surface_kernel: number,
    volume_kernel: number,
    direction: string,
    cifti_out: string,
    opt_fwhm: boolean = false,
    left_surface: CiftiSmoothingLeftSurfaceParameters | null = null,
    right_surface: CiftiSmoothingRightSurfaceParameters | null = null,
    cerebellum_surface: CiftiSmoothingCerebellumSurfaceParameters | null = null,
    opt_cifti_roi_roi_cifti: InputPathType | null = null,
    opt_fix_zeros_volume: boolean = false,
    opt_fix_zeros_surface: boolean = false,
    opt_merged_volume: boolean = false,
): CiftiSmoothingParameters {
    /**
     * Build parameters.
    
     * @param cifti the input cifti
     * @param surface_kernel the size of the gaussian surface smoothing kernel in mm, as sigma by default
     * @param volume_kernel the size of the gaussian volume smoothing kernel in mm, as sigma by default
     * @param direction which dimension to smooth along, ROW or COLUMN
     * @param cifti_out the output cifti
     * @param opt_fwhm kernel sizes are FWHM, not sigma
     * @param left_surface specify the left surface to use
     * @param right_surface specify the right surface to use
     * @param cerebellum_surface specify the cerebellum surface to use
     * @param opt_cifti_roi_roi_cifti smooth only within regions of interest: the regions to smooth within, as a cifti file
     * @param opt_fix_zeros_volume treat values of zero in the volume as missing data
     * @param opt_fix_zeros_surface treat values of zero on the surface as missing data
     * @param opt_merged_volume smooth across subcortical structure boundaries
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-smoothing" as const,
        "cifti": cifti,
        "surface_kernel": surface_kernel,
        "volume_kernel": volume_kernel,
        "direction": direction,
        "cifti_out": cifti_out,
        "opt_fwhm": opt_fwhm,
        "opt_fix_zeros_volume": opt_fix_zeros_volume,
        "opt_fix_zeros_surface": opt_fix_zeros_surface,
        "opt_merged_volume": opt_merged_volume,
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
    if (opt_cifti_roi_roi_cifti !== null) {
        params["opt_cifti_roi_roi_cifti"] = opt_cifti_roi_roi_cifti;
    }
    return params;
}


function cifti_smoothing_cargs(
    params: CiftiSmoothingParameters,
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
    cargs.push("-cifti-smoothing");
    cargs.push(execution.inputFile((params["cifti"] ?? null)));
    cargs.push(String((params["surface_kernel"] ?? null)));
    cargs.push(String((params["volume_kernel"] ?? null)));
    cargs.push((params["direction"] ?? null));
    cargs.push((params["cifti_out"] ?? null));
    if ((params["opt_fwhm"] ?? null)) {
        cargs.push("-fwhm");
    }
    if ((params["left_surface"] ?? null) !== null) {
        cargs.push(...dynCargs((params["left_surface"] ?? null).__STYXTYPE__)((params["left_surface"] ?? null), execution));
    }
    if ((params["right_surface"] ?? null) !== null) {
        cargs.push(...dynCargs((params["right_surface"] ?? null).__STYXTYPE__)((params["right_surface"] ?? null), execution));
    }
    if ((params["cerebellum_surface"] ?? null) !== null) {
        cargs.push(...dynCargs((params["cerebellum_surface"] ?? null).__STYXTYPE__)((params["cerebellum_surface"] ?? null), execution));
    }
    if ((params["opt_cifti_roi_roi_cifti"] ?? null) !== null) {
        cargs.push(
            "-cifti-roi",
            execution.inputFile((params["opt_cifti_roi_roi_cifti"] ?? null))
        );
    }
    if ((params["opt_fix_zeros_volume"] ?? null)) {
        cargs.push("-fix-zeros-volume");
    }
    if ((params["opt_fix_zeros_surface"] ?? null)) {
        cargs.push("-fix-zeros-surface");
    }
    if ((params["opt_merged_volume"] ?? null)) {
        cargs.push("-merged-volume");
    }
    return cargs;
}


function cifti_smoothing_outputs(
    params: CiftiSmoothingParameters,
    execution: Execution,
): CiftiSmoothingOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiSmoothingOutputs = {
        root: execution.outputFile("."),
        cifti_out: execution.outputFile([(params["cifti_out"] ?? null)].join('')),
    };
    return ret;
}


function cifti_smoothing_execute(
    params: CiftiSmoothingParameters,
    execution: Execution,
): CiftiSmoothingOutputs {
    /**
     * Smooth a cifti file.
     * 
     * The input cifti file must have a brain models mapping on the chosen dimension, columns for .dtseries, and either for .dconn.  By default, data in different structures is smoothed independently (i.e., "parcel constrained" smoothing), so volume structures that touch do not smooth across this boundary.  Specify -merged-volume to ignore these boundaries.  Surface smoothing uses the GEO_GAUSS_AREA smoothing method.
     * 
     * The -*-corrected-areas options are intended for when it is unavoidable to smooth on group average surfaces, it is only an approximate correction for the reduction of structure in a group average surface.  It is better to smooth the data on individuals before averaging, when feasible.
     * 
     * The -fix-zeros-* options will treat values of zero as lack of data, and not use that value when generating the smoothed values, but will fill zeros with extrapolated values.  The ROI should have a brain models mapping along columns, exactly matching the mapping of the chosen direction in the input file.  Data outside the ROI is ignored.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiSmoothingOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_smoothing_cargs(params, execution)
    const ret = cifti_smoothing_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_smoothing(
    cifti: InputPathType,
    surface_kernel: number,
    volume_kernel: number,
    direction: string,
    cifti_out: string,
    opt_fwhm: boolean = false,
    left_surface: CiftiSmoothingLeftSurfaceParameters | null = null,
    right_surface: CiftiSmoothingRightSurfaceParameters | null = null,
    cerebellum_surface: CiftiSmoothingCerebellumSurfaceParameters | null = null,
    opt_cifti_roi_roi_cifti: InputPathType | null = null,
    opt_fix_zeros_volume: boolean = false,
    opt_fix_zeros_surface: boolean = false,
    opt_merged_volume: boolean = false,
    runner: Runner | null = null,
): CiftiSmoothingOutputs {
    /**
     * Smooth a cifti file.
     * 
     * The input cifti file must have a brain models mapping on the chosen dimension, columns for .dtseries, and either for .dconn.  By default, data in different structures is smoothed independently (i.e., "parcel constrained" smoothing), so volume structures that touch do not smooth across this boundary.  Specify -merged-volume to ignore these boundaries.  Surface smoothing uses the GEO_GAUSS_AREA smoothing method.
     * 
     * The -*-corrected-areas options are intended for when it is unavoidable to smooth on group average surfaces, it is only an approximate correction for the reduction of structure in a group average surface.  It is better to smooth the data on individuals before averaging, when feasible.
     * 
     * The -fix-zeros-* options will treat values of zero as lack of data, and not use that value when generating the smoothed values, but will fill zeros with extrapolated values.  The ROI should have a brain models mapping along columns, exactly matching the mapping of the chosen direction in the input file.  Data outside the ROI is ignored.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param cifti the input cifti
     * @param surface_kernel the size of the gaussian surface smoothing kernel in mm, as sigma by default
     * @param volume_kernel the size of the gaussian volume smoothing kernel in mm, as sigma by default
     * @param direction which dimension to smooth along, ROW or COLUMN
     * @param cifti_out the output cifti
     * @param opt_fwhm kernel sizes are FWHM, not sigma
     * @param left_surface specify the left surface to use
     * @param right_surface specify the right surface to use
     * @param cerebellum_surface specify the cerebellum surface to use
     * @param opt_cifti_roi_roi_cifti smooth only within regions of interest: the regions to smooth within, as a cifti file
     * @param opt_fix_zeros_volume treat values of zero in the volume as missing data
     * @param opt_fix_zeros_surface treat values of zero on the surface as missing data
     * @param opt_merged_volume smooth across subcortical structure boundaries
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiSmoothingOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_SMOOTHING_METADATA);
    const params = cifti_smoothing_params(cifti, surface_kernel, volume_kernel, direction, cifti_out, opt_fwhm, left_surface, right_surface, cerebellum_surface, opt_cifti_roi_roi_cifti, opt_fix_zeros_volume, opt_fix_zeros_surface, opt_merged_volume)
    return cifti_smoothing_execute(params, execution);
}


export {
      CIFTI_SMOOTHING_METADATA,
      CiftiSmoothingCerebellumSurfaceParameters,
      CiftiSmoothingLeftSurfaceParameters,
      CiftiSmoothingOutputs,
      CiftiSmoothingParameters,
      CiftiSmoothingRightSurfaceParameters,
      cifti_smoothing,
      cifti_smoothing_cerebellum_surface_params,
      cifti_smoothing_left_surface_params,
      cifti_smoothing_params,
      cifti_smoothing_right_surface_params,
};
