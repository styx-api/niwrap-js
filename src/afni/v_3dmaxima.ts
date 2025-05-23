// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DMAXIMA_METADATA: Metadata = {
    id: "0315ff99294041a685b14686e0066820acd7ec57.boutiques",
    name: "3dmaxima",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dmaximaParameters {
    "__STYXTYPE__": "3dmaxima";
    "input_dataset": InputPathType;
    "output_prefix"?: string | null | undefined;
    "threshold"?: number | null | undefined;
    "min_dist"?: number | null | undefined;
    "out_rad"?: number | null | undefined;
    "input_flag": boolean;
    "spheres_1_flag": boolean;
    "spheres_1toN_flag": boolean;
    "spheres_Nto1_flag": boolean;
    "neg_ext_flag": boolean;
    "true_max_flag": boolean;
    "dset_coords_flag": boolean;
    "no_text_flag": boolean;
    "coords_only_flag": boolean;
    "n_style_sort_flag": boolean;
    "n_style_weight_ave_flag": boolean;
    "debug_level"?: number | null | undefined;
    "help_flag": boolean;
    "hist_flag": boolean;
    "ver_flag": boolean;
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
        "3dmaxima": v_3dmaxima_cargs,
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
        "3dmaxima": v_3dmaxima_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3dmaxima(...)`.
 *
 * @interface
 */
interface V3dmaximaOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output mask dataset with extrema locations
     */
    output_mask: OutputPathType | null;
}


function v_3dmaxima_params(
    input_dataset: InputPathType,
    output_prefix: string | null = null,
    threshold: number | null = null,
    min_dist: number | null = null,
    out_rad: number | null = null,
    input_flag: boolean = false,
    spheres_1_flag: boolean = false,
    spheres_1to_n_flag: boolean = false,
    spheres_nto1_flag: boolean = false,
    neg_ext_flag: boolean = false,
    true_max_flag: boolean = false,
    dset_coords_flag: boolean = false,
    no_text_flag: boolean = false,
    coords_only_flag: boolean = false,
    n_style_sort_flag: boolean = false,
    n_style_weight_ave_flag: boolean = false,
    debug_level: number | null = null,
    help_flag: boolean = false,
    hist_flag: boolean = false,
    ver_flag: boolean = false,
): V3dmaximaParameters {
    /**
     * Build parameters.
    
     * @param input_dataset Specify input dataset (e.g. func+orig'[7]')
     * @param output_prefix Prefix for an output mask dataset (e.g. -prefix maskNto1)
     * @param threshold Provides a cutoff value for extrema (e.g. -thresh 17.4)
     * @param min_dist Minimum acceptable distance between extrema in voxels (e.g. -min_dist 4)
     * @param out_rad Set the output radius around extrema voxels in voxel units (e.g. -out_rad 9)
     * @param input_flag Specify input dataset (e.g. -input func+orig'[7]')
     * @param spheres_1_flag Set all output values to 1
     * @param spheres_1to_n_flag Output values will range from 1 to N
     * @param spheres_nto1_flag Output values will range from N to 1
     * @param neg_ext_flag Search for negative extrema (minima)
     * @param true_max_flag Extrema may not have equal neighbors
     * @param dset_coords_flag Display output in the dataset orientation
     * @param no_text_flag Do not display the extrema points as text
     * @param coords_only_flag Only output coordinates (no text or values)
     * @param n_style_sort_flag Use 'Sort-n-Remove' style (default)
     * @param n_style_weight_ave_flag Use 'Weighted-Average' style
     * @param debug_level Output extra information to the terminal (e.g. -debug 2)
     * @param help_flag Display help information
     * @param hist_flag Display module history
     * @param ver_flag Display version number
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dmaxima" as const,
        "input_dataset": input_dataset,
        "input_flag": input_flag,
        "spheres_1_flag": spheres_1_flag,
        "spheres_1toN_flag": spheres_1to_n_flag,
        "spheres_Nto1_flag": spheres_nto1_flag,
        "neg_ext_flag": neg_ext_flag,
        "true_max_flag": true_max_flag,
        "dset_coords_flag": dset_coords_flag,
        "no_text_flag": no_text_flag,
        "coords_only_flag": coords_only_flag,
        "n_style_sort_flag": n_style_sort_flag,
        "n_style_weight_ave_flag": n_style_weight_ave_flag,
        "help_flag": help_flag,
        "hist_flag": hist_flag,
        "ver_flag": ver_flag,
    };
    if (output_prefix !== null) {
        params["output_prefix"] = output_prefix;
    }
    if (threshold !== null) {
        params["threshold"] = threshold;
    }
    if (min_dist !== null) {
        params["min_dist"] = min_dist;
    }
    if (out_rad !== null) {
        params["out_rad"] = out_rad;
    }
    if (debug_level !== null) {
        params["debug_level"] = debug_level;
    }
    return params;
}


function v_3dmaxima_cargs(
    params: V3dmaximaParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dmaxima");
    cargs.push(execution.inputFile((params["input_dataset"] ?? null)));
    if ((params["output_prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["output_prefix"] ?? null)
        );
    }
    if ((params["threshold"] ?? null) !== null) {
        cargs.push(
            "-thresh",
            String((params["threshold"] ?? null))
        );
    }
    if ((params["min_dist"] ?? null) !== null) {
        cargs.push(
            "-min_dist",
            String((params["min_dist"] ?? null))
        );
    }
    if ((params["out_rad"] ?? null) !== null) {
        cargs.push(
            "-out_rad",
            String((params["out_rad"] ?? null))
        );
    }
    if ((params["input_flag"] ?? null)) {
        cargs.push("-input");
    }
    if ((params["spheres_1_flag"] ?? null)) {
        cargs.push("-spheres_1");
    }
    if ((params["spheres_1toN_flag"] ?? null)) {
        cargs.push("-spheres_1toN");
    }
    if ((params["spheres_Nto1_flag"] ?? null)) {
        cargs.push("-spheres_Nto1");
    }
    if ((params["neg_ext_flag"] ?? null)) {
        cargs.push("-neg_ext");
    }
    if ((params["true_max_flag"] ?? null)) {
        cargs.push("-true_max");
    }
    if ((params["dset_coords_flag"] ?? null)) {
        cargs.push("-dset_coords");
    }
    if ((params["no_text_flag"] ?? null)) {
        cargs.push("-no_text");
    }
    if ((params["coords_only_flag"] ?? null)) {
        cargs.push("-coords_only");
    }
    if ((params["n_style_sort_flag"] ?? null)) {
        cargs.push("-n_style_sort");
    }
    if ((params["n_style_weight_ave_flag"] ?? null)) {
        cargs.push("-n_style_weight_ave");
    }
    if ((params["debug_level"] ?? null) !== null) {
        cargs.push(
            "-debug",
            String((params["debug_level"] ?? null))
        );
    }
    if ((params["help_flag"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["hist_flag"] ?? null)) {
        cargs.push("-hist");
    }
    if ((params["ver_flag"] ?? null)) {
        cargs.push("-ver");
    }
    return cargs;
}


function v_3dmaxima_outputs(
    params: V3dmaximaParameters,
    execution: Execution,
): V3dmaximaOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dmaximaOutputs = {
        root: execution.outputFile("."),
        output_mask: ((params["output_prefix"] ?? null) !== null) ? execution.outputFile([(params["output_prefix"] ?? null), "_mask+orig.[HEAD | BRIK]"].join('')) : null,
    };
    return ret;
}


function v_3dmaxima_execute(
    params: V3dmaximaParameters,
    execution: Execution,
): V3dmaximaOutputs {
    /**
     * Locate extrema in a functional dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dmaximaOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dmaxima_cargs(params, execution)
    const ret = v_3dmaxima_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dmaxima(
    input_dataset: InputPathType,
    output_prefix: string | null = null,
    threshold: number | null = null,
    min_dist: number | null = null,
    out_rad: number | null = null,
    input_flag: boolean = false,
    spheres_1_flag: boolean = false,
    spheres_1to_n_flag: boolean = false,
    spheres_nto1_flag: boolean = false,
    neg_ext_flag: boolean = false,
    true_max_flag: boolean = false,
    dset_coords_flag: boolean = false,
    no_text_flag: boolean = false,
    coords_only_flag: boolean = false,
    n_style_sort_flag: boolean = false,
    n_style_weight_ave_flag: boolean = false,
    debug_level: number | null = null,
    help_flag: boolean = false,
    hist_flag: boolean = false,
    ver_flag: boolean = false,
    runner: Runner | null = null,
): V3dmaximaOutputs {
    /**
     * Locate extrema in a functional dataset.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_dataset Specify input dataset (e.g. func+orig'[7]')
     * @param output_prefix Prefix for an output mask dataset (e.g. -prefix maskNto1)
     * @param threshold Provides a cutoff value for extrema (e.g. -thresh 17.4)
     * @param min_dist Minimum acceptable distance between extrema in voxels (e.g. -min_dist 4)
     * @param out_rad Set the output radius around extrema voxels in voxel units (e.g. -out_rad 9)
     * @param input_flag Specify input dataset (e.g. -input func+orig'[7]')
     * @param spheres_1_flag Set all output values to 1
     * @param spheres_1to_n_flag Output values will range from 1 to N
     * @param spheres_nto1_flag Output values will range from N to 1
     * @param neg_ext_flag Search for negative extrema (minima)
     * @param true_max_flag Extrema may not have equal neighbors
     * @param dset_coords_flag Display output in the dataset orientation
     * @param no_text_flag Do not display the extrema points as text
     * @param coords_only_flag Only output coordinates (no text or values)
     * @param n_style_sort_flag Use 'Sort-n-Remove' style (default)
     * @param n_style_weight_ave_flag Use 'Weighted-Average' style
     * @param debug_level Output extra information to the terminal (e.g. -debug 2)
     * @param help_flag Display help information
     * @param hist_flag Display module history
     * @param ver_flag Display version number
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dmaximaOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DMAXIMA_METADATA);
    const params = v_3dmaxima_params(input_dataset, output_prefix, threshold, min_dist, out_rad, input_flag, spheres_1_flag, spheres_1to_n_flag, spheres_nto1_flag, neg_ext_flag, true_max_flag, dset_coords_flag, no_text_flag, coords_only_flag, n_style_sort_flag, n_style_weight_ave_flag, debug_level, help_flag, hist_flag, ver_flag)
    return v_3dmaxima_execute(params, execution);
}


export {
      V3dmaximaOutputs,
      V3dmaximaParameters,
      V_3DMAXIMA_METADATA,
      v_3dmaxima,
      v_3dmaxima_params,
};
