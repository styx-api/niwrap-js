// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_MATCH_METADATA: Metadata = {
    id: "5a9b48cc507b88f6620f1b745b682a96b9bb92f5.boutiques",
    name: "3dMatch",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dMatchParameters {
    "__STYXTYPE__": "3dMatch";
    "inset": InputPathType;
    "refset": InputPathType;
    "mask"?: InputPathType | null | undefined;
    "in_min"?: number | null | undefined;
    "in_max"?: number | null | undefined;
    "ref_min"?: number | null | undefined;
    "ref_max"?: number | null | undefined;
    "prefix": string;
    "only_dice_thr": boolean;
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
        "3dMatch": v_3d_match_cargs,
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
        "3dMatch": v_3d_match_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_match(...)`.
 *
 * @interface
 */
interface V3dMatchOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * AFNI BRIK file with the same number of subbricks as the refset file, with highest weighted correlation.
     */
    ref_brik: OutputPathType;
    /**
     * Text file recording original indices and coefficients.
     */
    ref_coeff_vals: OutputPathType;
    /**
     * AFNI BRIK file with the same number of subbricks as the inset file, with highest weighted correlation.
     */
    in_brik: OutputPathType;
    /**
     * Text file recording original indices and coefficients.
     */
    in_coeff_vals: OutputPathType;
}


function v_3d_match_params(
    inset: InputPathType,
    refset: InputPathType,
    prefix: string,
    mask: InputPathType | null = null,
    in_min: number | null = null,
    in_max: number | null = null,
    ref_min: number | null = null,
    ref_max: number | null = null,
    only_dice_thr: boolean = false,
): V3dMatchParameters {
    /**
     * Build parameters.
    
     * @param inset File with M subbricks of data to match against another file.
     * @param refset File with N subbricks, serving as a reference for INPUT_FILE.
     * @param prefix Prefix for output name for BRIK/HEAD files and *_coeff.vals text files.
     * @param mask A mask of regions to include in the correlation of datasets.
     * @param in_min Threshold below which values in INPUT_FILE will be zeroed during analysis.
     * @param in_max Threshold above which values in INPUT_FILE will be zeroed during analysis.
     * @param ref_min Threshold below which values in REF_FILE will be zeroed during analysis.
     * @param ref_max Threshold above which values in REF_FILE will be zeroed during analysis.
     * @param only_dice_thr Apply thresholding only during Dice evaluation, not during spatial correlation.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dMatch" as const,
        "inset": inset,
        "refset": refset,
        "prefix": prefix,
        "only_dice_thr": only_dice_thr,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (in_min !== null) {
        params["in_min"] = in_min;
    }
    if (in_max !== null) {
        params["in_max"] = in_max;
    }
    if (ref_min !== null) {
        params["ref_min"] = ref_min;
    }
    if (ref_max !== null) {
        params["ref_max"] = ref_max;
    }
    return params;
}


function v_3d_match_cargs(
    params: V3dMatchParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dMatch");
    cargs.push(
        "-inset",
        execution.inputFile((params["inset"] ?? null))
    );
    cargs.push(
        "-refset",
        execution.inputFile((params["refset"] ?? null))
    );
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["in_min"] ?? null) !== null) {
        cargs.push(
            "-in_min",
            String((params["in_min"] ?? null))
        );
    }
    if ((params["in_max"] ?? null) !== null) {
        cargs.push(
            "-in_max",
            String((params["in_max"] ?? null))
        );
    }
    if ((params["ref_min"] ?? null) !== null) {
        cargs.push(
            "-ref_min",
            String((params["ref_min"] ?? null))
        );
    }
    if ((params["ref_max"] ?? null) !== null) {
        cargs.push(
            "-ref_max",
            String((params["ref_max"] ?? null))
        );
    }
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["only_dice_thr"] ?? null)) {
        cargs.push("-only_dice_thr");
    }
    return cargs;
}


function v_3d_match_outputs(
    params: V3dMatchParameters,
    execution: Execution,
): V3dMatchOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dMatchOutputs = {
        root: execution.outputFile("."),
        ref_brik: execution.outputFile([(params["prefix"] ?? null), "_REF+orig.BRIK"].join('')),
        ref_coeff_vals: execution.outputFile([(params["prefix"] ?? null), "_REF_coeff.vals"].join('')),
        in_brik: execution.outputFile([(params["prefix"] ?? null), "_IN+orig.BRIK"].join('')),
        in_coeff_vals: execution.outputFile([(params["prefix"] ?? null), "_IN_coeff.vals"].join('')),
    };
    return ret;
}


function v_3d_match_execute(
    params: V3dMatchParameters,
    execution: Execution,
): V3dMatchOutputs {
    /**
     * Find similar subbricks and rearrange order to ease comparison. Part of FATCAT in AFNI.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dMatchOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_match_cargs(params, execution)
    const ret = v_3d_match_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_match(
    inset: InputPathType,
    refset: InputPathType,
    prefix: string,
    mask: InputPathType | null = null,
    in_min: number | null = null,
    in_max: number | null = null,
    ref_min: number | null = null,
    ref_max: number | null = null,
    only_dice_thr: boolean = false,
    runner: Runner | null = null,
): V3dMatchOutputs {
    /**
     * Find similar subbricks and rearrange order to ease comparison. Part of FATCAT in AFNI.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param inset File with M subbricks of data to match against another file.
     * @param refset File with N subbricks, serving as a reference for INPUT_FILE.
     * @param prefix Prefix for output name for BRIK/HEAD files and *_coeff.vals text files.
     * @param mask A mask of regions to include in the correlation of datasets.
     * @param in_min Threshold below which values in INPUT_FILE will be zeroed during analysis.
     * @param in_max Threshold above which values in INPUT_FILE will be zeroed during analysis.
     * @param ref_min Threshold below which values in REF_FILE will be zeroed during analysis.
     * @param ref_max Threshold above which values in REF_FILE will be zeroed during analysis.
     * @param only_dice_thr Apply thresholding only during Dice evaluation, not during spatial correlation.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dMatchOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_MATCH_METADATA);
    const params = v_3d_match_params(inset, refset, prefix, mask, in_min, in_max, ref_min, ref_max, only_dice_thr)
    return v_3d_match_execute(params, execution);
}


export {
      V3dMatchOutputs,
      V3dMatchParameters,
      V_3D_MATCH_METADATA,
      v_3d_match,
      v_3d_match_params,
};
