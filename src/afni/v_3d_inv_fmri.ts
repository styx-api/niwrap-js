// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_INV_FMRI_METADATA: Metadata = {
    id: "0e98d6cd57d0addd162bfa97a9fce6949e7b4f85.boutiques",
    name: "3dInvFMRI",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dInvFmriParameters {
    "__STYXTYPE__": "3dInvFMRI";
    "input_file": InputPathType;
    "activation_map": InputPathType;
    "map_weight"?: InputPathType | null | undefined;
    "mask"?: InputPathType | null | undefined;
    "baseline_file"?: Array<InputPathType> | null | undefined;
    "polynom_order"?: number | null | undefined;
    "output_file"?: string | null | undefined;
    "method"?: string | null | undefined;
    "alpha"?: number | null | undefined;
    "smooth_fir": boolean;
    "smooth_median": boolean;
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
        "3dInvFMRI": v_3d_inv_fmri_cargs,
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
        "3dInvFMRI": v_3d_inv_fmri_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_inv_fmri(...)`.
 *
 * @interface
 */
interface V3dInvFmriOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output 1D file.
     */
    outfile: OutputPathType | null;
}


function v_3d_inv_fmri_params(
    input_file: InputPathType,
    activation_map: InputPathType,
    map_weight: InputPathType | null = null,
    mask: InputPathType | null = null,
    baseline_file: Array<InputPathType> | null = null,
    polynom_order: number | null = null,
    output_file: string | null = null,
    method: string | null = null,
    alpha: number | null = null,
    smooth_fir: boolean = false,
    smooth_median: boolean = false,
): V3dInvFmriParameters {
    /**
     * Build parameters.
    
     * @param input_file Input 3D+time dataset.
     * @param activation_map Defines activation map; should be a bucket dataset where each sub-brick defines the beta weight map for an unknown stimulus time series.
     * @param map_weight Defines a weighting factor for the map. Dataset can have either 1 sub-brick or the same number as in the -map dataset.
     * @param mask Defines a mask dataset to restrict input voxels from -data and -map.
     * @param baseline_file Baseline time series file. Each column of the file defines a baseline time series.
     * @param polynom_order Adds polynomials of specified order to the baseline collection.
     * @param output_file Name of the 1D output file.
     * @param method Determines the method to use: C for least squares fit to data matrix (default) or K for least squares fit to activation matrix.
     * @param alpha Set the alpha factor to penalize large values of the output vectors.
     * @param smooth_fir Smooth the results with a 5 point lowpass FIR filter.
     * @param smooth_median Smooth the results with a 5 point median filter.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dInvFMRI" as const,
        "input_file": input_file,
        "activation_map": activation_map,
        "smooth_fir": smooth_fir,
        "smooth_median": smooth_median,
    };
    if (map_weight !== null) {
        params["map_weight"] = map_weight;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (baseline_file !== null) {
        params["baseline_file"] = baseline_file;
    }
    if (polynom_order !== null) {
        params["polynom_order"] = polynom_order;
    }
    if (output_file !== null) {
        params["output_file"] = output_file;
    }
    if (method !== null) {
        params["method"] = method;
    }
    if (alpha !== null) {
        params["alpha"] = alpha;
    }
    return params;
}


function v_3d_inv_fmri_cargs(
    params: V3dInvFmriParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dInvFMRI");
    cargs.push(
        "-data",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push(
        "-map",
        execution.inputFile((params["activation_map"] ?? null))
    );
    if ((params["map_weight"] ?? null) !== null) {
        cargs.push(
            "-mapwt",
            execution.inputFile((params["map_weight"] ?? null))
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["baseline_file"] ?? null) !== null) {
        cargs.push(
            "-base",
            ...(params["baseline_file"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["polynom_order"] ?? null) !== null) {
        cargs.push(
            "-polort",
            String((params["polynom_order"] ?? null))
        );
    }
    if ((params["output_file"] ?? null) !== null) {
        cargs.push(
            "-out",
            (params["output_file"] ?? null)
        );
    }
    if ((params["method"] ?? null) !== null) {
        cargs.push(
            "-method",
            (params["method"] ?? null)
        );
    }
    if ((params["alpha"] ?? null) !== null) {
        cargs.push(
            "-alpha",
            String((params["alpha"] ?? null))
        );
    }
    if ((params["smooth_fir"] ?? null)) {
        cargs.push("-fir5");
    }
    if ((params["smooth_median"] ?? null)) {
        cargs.push("-median5");
    }
    return cargs;
}


function v_3d_inv_fmri_outputs(
    params: V3dInvFmriParameters,
    execution: Execution,
): V3dInvFmriOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dInvFmriOutputs = {
        root: execution.outputFile("."),
        outfile: ((params["output_file"] ?? null) !== null) ? execution.outputFile([(params["output_file"] ?? null)].join('')) : null,
    };
    return ret;
}


function v_3d_inv_fmri_execute(
    params: V3dInvFmriParameters,
    execution: Execution,
): V3dInvFmriOutputs {
    /**
     * Program to compute stimulus time series, given a 3D+time dataset and an activation map (the inverse of the usual FMRI analysis problem).
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dInvFmriOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_inv_fmri_cargs(params, execution)
    const ret = v_3d_inv_fmri_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_inv_fmri(
    input_file: InputPathType,
    activation_map: InputPathType,
    map_weight: InputPathType | null = null,
    mask: InputPathType | null = null,
    baseline_file: Array<InputPathType> | null = null,
    polynom_order: number | null = null,
    output_file: string | null = null,
    method: string | null = null,
    alpha: number | null = null,
    smooth_fir: boolean = false,
    smooth_median: boolean = false,
    runner: Runner | null = null,
): V3dInvFmriOutputs {
    /**
     * Program to compute stimulus time series, given a 3D+time dataset and an activation map (the inverse of the usual FMRI analysis problem).
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Input 3D+time dataset.
     * @param activation_map Defines activation map; should be a bucket dataset where each sub-brick defines the beta weight map for an unknown stimulus time series.
     * @param map_weight Defines a weighting factor for the map. Dataset can have either 1 sub-brick or the same number as in the -map dataset.
     * @param mask Defines a mask dataset to restrict input voxels from -data and -map.
     * @param baseline_file Baseline time series file. Each column of the file defines a baseline time series.
     * @param polynom_order Adds polynomials of specified order to the baseline collection.
     * @param output_file Name of the 1D output file.
     * @param method Determines the method to use: C for least squares fit to data matrix (default) or K for least squares fit to activation matrix.
     * @param alpha Set the alpha factor to penalize large values of the output vectors.
     * @param smooth_fir Smooth the results with a 5 point lowpass FIR filter.
     * @param smooth_median Smooth the results with a 5 point median filter.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dInvFmriOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_INV_FMRI_METADATA);
    const params = v_3d_inv_fmri_params(input_file, activation_map, map_weight, mask, baseline_file, polynom_order, output_file, method, alpha, smooth_fir, smooth_median)
    return v_3d_inv_fmri_execute(params, execution);
}


export {
      V3dInvFmriOutputs,
      V3dInvFmriParameters,
      V_3D_INV_FMRI_METADATA,
      v_3d_inv_fmri,
      v_3d_inv_fmri_params,
};
