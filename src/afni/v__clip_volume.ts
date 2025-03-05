// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__CLIP_VOLUME_METADATA: Metadata = {
    id: "7bfb440cf4d5cd2d5ca3418b3dc2ad19927c0963.boutiques",
    name: "@clip_volume",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VClipVolumeParameters {
    "__STYXTYPE__": "@clip_volume";
    "input_volume": InputPathType;
    "below_zmm"?: number | null | undefined;
    "above_zmm"?: number | null | undefined;
    "left_xmm"?: number | null | undefined;
    "right_xmm"?: number | null | undefined;
    "anterior_ymm"?: number | null | undefined;
    "posterior_ymm"?: number | null | undefined;
    "box"?: Array<number> | null | undefined;
    "mask_box"?: Array<number> | null | undefined;
    "and_logic": boolean;
    "or_logic": boolean;
    "verbosity": boolean;
    "crop_allzero": boolean;
    "crop_greedy": boolean;
    "crop": boolean;
    "crop_npad"?: number | null | undefined;
    "output_prefix"?: string | null | undefined;
    "followers"?: Array<InputPathType> | null | undefined;
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
        "@clip_volume": v__clip_volume_cargs,
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
        "@clip_volume": v__clip_volume_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__clip_volume(...)`.
 *
 * @interface
 */
interface VClipVolumeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output clipped or cropped volume
     */
    output_clipped_volume: OutputPathType | null;
    /**
     * Output for follower datasets after clipping/cropping
     */
    output_followers: OutputPathType | null;
}


function v__clip_volume_params(
    input_volume: InputPathType,
    below_zmm: number | null = null,
    above_zmm: number | null = null,
    left_xmm: number | null = null,
    right_xmm: number | null = null,
    anterior_ymm: number | null = null,
    posterior_ymm: number | null = null,
    box: Array<number> | null = null,
    mask_box: Array<number> | null = null,
    and_logic: boolean = false,
    or_logic: boolean = false,
    verbosity: boolean = false,
    crop_allzero: boolean = false,
    crop_greedy: boolean = false,
    crop: boolean = false,
    crop_npad: number | null = null,
    output_prefix: string | null = null,
    followers: Array<InputPathType> | null = null,
): VClipVolumeParameters {
    /**
     * Build parameters.
    
     * @param input_volume Volume to clip
     * @param below_zmm Set to 0 slices below Zmm
     * @param above_zmm Set to 0 slices above Zmm
     * @param left_xmm Set to 0 slices left of Xmm
     * @param right_xmm Set to 0 slices right of Xmm
     * @param anterior_ymm Set to 0 slices anterior to Ymm
     * @param posterior_ymm Set to 0 slices posterior to Ymm
     * @param box Clip the volume to a box centered at Cx, Cy, Cz (RAI mm), and of dimensions Dx Dy Dz (RAI mm).
     * @param mask_box Set all values inside the box to 1. Box centered at Cx, Cy, Cz (RAI mm), and of dimensions Dx Dy Dz (RAI mm).
     * @param and_logic Combine with next clipping planes using 'and'.
     * @param or_logic Combine with next clipping planes using 'or'.
     * @param verbosity Show command details (verbose output).
     * @param crop_allzero Crop the output volume with 3dAutobox -noclust.
     * @param crop_greedy Crop the output volume with 3dAutobox.
     * @param crop Same as -crop_greedy, kept for backward compatibility.
     * @param crop_npad Set 3dAutobox's -npad option to NPAD. NPAD fattens the volume a little after cropping.
     * @param output_prefix Output prefix for the resultant volume. Default is the input prefix with _clp suffixed to it.
     * @param followers Apply the same clipping or cropping treatment to the follower datasets.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@clip_volume" as const,
        "input_volume": input_volume,
        "and_logic": and_logic,
        "or_logic": or_logic,
        "verbosity": verbosity,
        "crop_allzero": crop_allzero,
        "crop_greedy": crop_greedy,
        "crop": crop,
    };
    if (below_zmm !== null) {
        params["below_zmm"] = below_zmm;
    }
    if (above_zmm !== null) {
        params["above_zmm"] = above_zmm;
    }
    if (left_xmm !== null) {
        params["left_xmm"] = left_xmm;
    }
    if (right_xmm !== null) {
        params["right_xmm"] = right_xmm;
    }
    if (anterior_ymm !== null) {
        params["anterior_ymm"] = anterior_ymm;
    }
    if (posterior_ymm !== null) {
        params["posterior_ymm"] = posterior_ymm;
    }
    if (box !== null) {
        params["box"] = box;
    }
    if (mask_box !== null) {
        params["mask_box"] = mask_box;
    }
    if (crop_npad !== null) {
        params["crop_npad"] = crop_npad;
    }
    if (output_prefix !== null) {
        params["output_prefix"] = output_prefix;
    }
    if (followers !== null) {
        params["followers"] = followers;
    }
    return params;
}


function v__clip_volume_cargs(
    params: VClipVolumeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@clip_volume");
    cargs.push(execution.inputFile((params["input_volume"] ?? null)));
    if ((params["below_zmm"] ?? null) !== null) {
        cargs.push(
            "-below",
            String((params["below_zmm"] ?? null))
        );
    }
    if ((params["above_zmm"] ?? null) !== null) {
        cargs.push(
            "-above",
            String((params["above_zmm"] ?? null))
        );
    }
    if ((params["left_xmm"] ?? null) !== null) {
        cargs.push(
            "-left",
            String((params["left_xmm"] ?? null))
        );
    }
    if ((params["right_xmm"] ?? null) !== null) {
        cargs.push(
            "-right",
            String((params["right_xmm"] ?? null))
        );
    }
    if ((params["anterior_ymm"] ?? null) !== null) {
        cargs.push(
            "-anterior",
            String((params["anterior_ymm"] ?? null))
        );
    }
    if ((params["posterior_ymm"] ?? null) !== null) {
        cargs.push(
            "-posterior",
            String((params["posterior_ymm"] ?? null))
        );
    }
    if ((params["box"] ?? null) !== null) {
        cargs.push(
            "-box",
            ...(params["box"] ?? null).map(String)
        );
    }
    if ((params["mask_box"] ?? null) !== null) {
        cargs.push(
            "-mask_box",
            ...(params["mask_box"] ?? null).map(String)
        );
    }
    if ((params["and_logic"] ?? null)) {
        cargs.push("-and");
    }
    if ((params["or_logic"] ?? null)) {
        cargs.push("-or");
    }
    if ((params["verbosity"] ?? null)) {
        cargs.push("-verb");
    }
    if ((params["crop_allzero"] ?? null)) {
        cargs.push("-crop_allzero");
    }
    if ((params["crop_greedy"] ?? null)) {
        cargs.push("-crop_greedy");
    }
    if ((params["crop"] ?? null)) {
        cargs.push("-crop");
    }
    if ((params["crop_npad"] ?? null) !== null) {
        cargs.push(
            "-crop_npad",
            String((params["crop_npad"] ?? null))
        );
    }
    if ((params["output_prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["output_prefix"] ?? null)
        );
    }
    if ((params["followers"] ?? null) !== null) {
        cargs.push(
            "-followers",
            ...(params["followers"] ?? null).map(f => execution.inputFile(f))
        );
    }
    return cargs;
}


function v__clip_volume_outputs(
    params: VClipVolumeParameters,
    execution: Execution,
): VClipVolumeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VClipVolumeOutputs = {
        root: execution.outputFile("."),
        output_clipped_volume: ((params["output_prefix"] ?? null) !== null) ? execution.outputFile([(params["output_prefix"] ?? null), "_clp.nii.gz"].join('')) : null,
        output_followers: ((params["output_prefix"] ?? null) !== null) ? execution.outputFile([(params["output_prefix"] ?? null), "_follow_clp.nii.gz"].join('')) : null,
    };
    return ret;
}


function v__clip_volume_execute(
    params: VClipVolumeParameters,
    execution: Execution,
): VClipVolumeOutputs {
    /**
     * A tool to clip regions of a volume in various ways, such as above/below certain coordinates or within a specified box.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VClipVolumeOutputs`).
     */
    params = execution.params(params)
    const cargs = v__clip_volume_cargs(params, execution)
    const ret = v__clip_volume_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__clip_volume(
    input_volume: InputPathType,
    below_zmm: number | null = null,
    above_zmm: number | null = null,
    left_xmm: number | null = null,
    right_xmm: number | null = null,
    anterior_ymm: number | null = null,
    posterior_ymm: number | null = null,
    box: Array<number> | null = null,
    mask_box: Array<number> | null = null,
    and_logic: boolean = false,
    or_logic: boolean = false,
    verbosity: boolean = false,
    crop_allzero: boolean = false,
    crop_greedy: boolean = false,
    crop: boolean = false,
    crop_npad: number | null = null,
    output_prefix: string | null = null,
    followers: Array<InputPathType> | null = null,
    runner: Runner | null = null,
): VClipVolumeOutputs {
    /**
     * A tool to clip regions of a volume in various ways, such as above/below certain coordinates or within a specified box.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_volume Volume to clip
     * @param below_zmm Set to 0 slices below Zmm
     * @param above_zmm Set to 0 slices above Zmm
     * @param left_xmm Set to 0 slices left of Xmm
     * @param right_xmm Set to 0 slices right of Xmm
     * @param anterior_ymm Set to 0 slices anterior to Ymm
     * @param posterior_ymm Set to 0 slices posterior to Ymm
     * @param box Clip the volume to a box centered at Cx, Cy, Cz (RAI mm), and of dimensions Dx Dy Dz (RAI mm).
     * @param mask_box Set all values inside the box to 1. Box centered at Cx, Cy, Cz (RAI mm), and of dimensions Dx Dy Dz (RAI mm).
     * @param and_logic Combine with next clipping planes using 'and'.
     * @param or_logic Combine with next clipping planes using 'or'.
     * @param verbosity Show command details (verbose output).
     * @param crop_allzero Crop the output volume with 3dAutobox -noclust.
     * @param crop_greedy Crop the output volume with 3dAutobox.
     * @param crop Same as -crop_greedy, kept for backward compatibility.
     * @param crop_npad Set 3dAutobox's -npad option to NPAD. NPAD fattens the volume a little after cropping.
     * @param output_prefix Output prefix for the resultant volume. Default is the input prefix with _clp suffixed to it.
     * @param followers Apply the same clipping or cropping treatment to the follower datasets.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VClipVolumeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__CLIP_VOLUME_METADATA);
    const params = v__clip_volume_params(input_volume, below_zmm, above_zmm, left_xmm, right_xmm, anterior_ymm, posterior_ymm, box, mask_box, and_logic, or_logic, verbosity, crop_allzero, crop_greedy, crop, crop_npad, output_prefix, followers)
    return v__clip_volume_execute(params, execution);
}


export {
      VClipVolumeOutputs,
      VClipVolumeParameters,
      V__CLIP_VOLUME_METADATA,
      v__clip_volume,
      v__clip_volume_params,
};
