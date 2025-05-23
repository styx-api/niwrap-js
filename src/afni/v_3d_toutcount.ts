// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_TOUTCOUNT_METADATA: Metadata = {
    id: "76920b41e924975789eef980078cb1ea35d8f364.boutiques",
    name: "3dToutcount",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dToutcountParameters {
    "__STYXTYPE__": "3dToutcount";
    "input_dataset": string;
    "output_prefix"?: string | null | undefined;
    "mask_dataset"?: string | null | undefined;
    "q_threshold"?: number | null | undefined;
    "autoclip": boolean;
    "automask": boolean;
    "fraction": boolean;
    "range": boolean;
    "polort_order"?: number | null | undefined;
    "legendre": boolean;
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
        "3dToutcount": v_3d_toutcount_cargs,
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
        "3dToutcount": v_3d_toutcount_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_toutcount(...)`.
 *
 * @interface
 */
interface V3dToutcountOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset in AFNI format (HEAD file).
     */
    output_afni_head: OutputPathType | null;
    /**
     * Output dataset in AFNI format (BRIK file).
     */
    output_afni_brik: OutputPathType | null;
}


function v_3d_toutcount_params(
    input_dataset: string,
    output_prefix: string | null = null,
    mask_dataset: string | null = null,
    q_threshold: number | null = null,
    autoclip: boolean = false,
    automask: boolean = false,
    fraction: boolean = false,
    range: boolean = false,
    polort_order: number | null = null,
    legendre: boolean = false,
): V3dToutcountParameters {
    /**
     * Build parameters.
    
     * @param input_dataset Input 3D+time dataset (e.g. dataset+orig)
     * @param output_prefix Prefix of the new dataset saved with the outlier Q values, applicable with the -save option
     * @param mask_dataset Only count voxels in the provided mask dataset
     * @param q_threshold Use 'q' instead of 0.001 in the calculation of alpha. Must be within range 0 < q < 1.
     * @param autoclip Clip off 'small' voxels (as in 3dClipLevel). Cannot use with -mask.
     * @param automask Automatically mask the dataset. Cannot use with -mask.
     * @param fraction Output the fraction of (masked) voxels which are outliers at each time point, instead of the count.
     * @param range Print out median+3.5*MAD of outlier count with each time point.
     * @param polort_order Detrend each voxel time series with polynomials of order 'nn'. Default value is 0, which removes the median.
     * @param legendre Use Legendre polynomials for detrending (also allows -polort > 3).
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dToutcount" as const,
        "input_dataset": input_dataset,
        "autoclip": autoclip,
        "automask": automask,
        "fraction": fraction,
        "range": range,
        "legendre": legendre,
    };
    if (output_prefix !== null) {
        params["output_prefix"] = output_prefix;
    }
    if (mask_dataset !== null) {
        params["mask_dataset"] = mask_dataset;
    }
    if (q_threshold !== null) {
        params["q_threshold"] = q_threshold;
    }
    if (polort_order !== null) {
        params["polort_order"] = polort_order;
    }
    return params;
}


function v_3d_toutcount_cargs(
    params: V3dToutcountParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dToutcount");
    cargs.push((params["input_dataset"] ?? null));
    if ((params["output_prefix"] ?? null) !== null) {
        cargs.push((params["output_prefix"] ?? null));
    }
    if ((params["mask_dataset"] ?? null) !== null) {
        cargs.push(
            "-mask",
            (params["mask_dataset"] ?? null)
        );
    }
    if ((params["q_threshold"] ?? null) !== null) {
        cargs.push(
            "-qthr",
            String((params["q_threshold"] ?? null))
        );
    }
    if ((params["autoclip"] ?? null)) {
        cargs.push("-autoclip");
    }
    if ((params["automask"] ?? null)) {
        cargs.push("-automask");
    }
    if ((params["fraction"] ?? null)) {
        cargs.push("-fraction");
    }
    if ((params["range"] ?? null)) {
        cargs.push("-range");
    }
    if ((params["polort_order"] ?? null) !== null) {
        cargs.push(
            "-polort",
            String((params["polort_order"] ?? null))
        );
    }
    if ((params["legendre"] ?? null)) {
        cargs.push("-legendre");
    }
    return cargs;
}


function v_3d_toutcount_outputs(
    params: V3dToutcountParameters,
    execution: Execution,
): V3dToutcountOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dToutcountOutputs = {
        root: execution.outputFile("."),
        output_afni_head: ((params["output_prefix"] ?? null) !== null) ? execution.outputFile([(params["output_prefix"] ?? null), ".HEAD"].join('')) : null,
        output_afni_brik: ((params["output_prefix"] ?? null) !== null) ? execution.outputFile([(params["output_prefix"] ?? null), ".BRIK"].join('')) : null,
    };
    return ret;
}


function v_3d_toutcount_execute(
    params: V3dToutcountParameters,
    execution: Execution,
): V3dToutcountOutputs {
    /**
     * Calculates the number of 'outliers' in a 3D+time dataset at each time point.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dToutcountOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_toutcount_cargs(params, execution)
    const ret = v_3d_toutcount_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_toutcount(
    input_dataset: string,
    output_prefix: string | null = null,
    mask_dataset: string | null = null,
    q_threshold: number | null = null,
    autoclip: boolean = false,
    automask: boolean = false,
    fraction: boolean = false,
    range: boolean = false,
    polort_order: number | null = null,
    legendre: boolean = false,
    runner: Runner | null = null,
): V3dToutcountOutputs {
    /**
     * Calculates the number of 'outliers' in a 3D+time dataset at each time point.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_dataset Input 3D+time dataset (e.g. dataset+orig)
     * @param output_prefix Prefix of the new dataset saved with the outlier Q values, applicable with the -save option
     * @param mask_dataset Only count voxels in the provided mask dataset
     * @param q_threshold Use 'q' instead of 0.001 in the calculation of alpha. Must be within range 0 < q < 1.
     * @param autoclip Clip off 'small' voxels (as in 3dClipLevel). Cannot use with -mask.
     * @param automask Automatically mask the dataset. Cannot use with -mask.
     * @param fraction Output the fraction of (masked) voxels which are outliers at each time point, instead of the count.
     * @param range Print out median+3.5*MAD of outlier count with each time point.
     * @param polort_order Detrend each voxel time series with polynomials of order 'nn'. Default value is 0, which removes the median.
     * @param legendre Use Legendre polynomials for detrending (also allows -polort > 3).
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dToutcountOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_TOUTCOUNT_METADATA);
    const params = v_3d_toutcount_params(input_dataset, output_prefix, mask_dataset, q_threshold, autoclip, automask, fraction, range, polort_order, legendre)
    return v_3d_toutcount_execute(params, execution);
}


export {
      V3dToutcountOutputs,
      V3dToutcountParameters,
      V_3D_TOUTCOUNT_METADATA,
      v_3d_toutcount,
      v_3d_toutcount_params,
};
