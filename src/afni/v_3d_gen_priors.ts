// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_GEN_PRIORS_METADATA: Metadata = {
    id: "91092ee429c6a7122831a6a12f5cca172e9717de.boutiques",
    name: "3dGenPriors",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dGenPriorsParameters {
    "__STYXTYPE__": "3dGenPriors";
    "sigs": InputPathType;
    "tdist": InputPathType;
    "cprefix": string;
    "pprefix": string;
    "labeltable": InputPathType;
    "do": string;
    "prefix"?: string | null | undefined;
    "cmask"?: string | null | undefined;
    "mask"?: string | null | undefined;
    "mrange"?: Array<number> | null | undefined;
    "debug"?: number | null | undefined;
    "vox_debug"?: string | null | undefined;
    "vox_debug_file"?: string | null | undefined;
    "uid"?: string | null | undefined;
    "use_tmp": boolean;
    "no_tmp": boolean;
    "pset"?: string | null | undefined;
    "cset"?: string | null | undefined;
    "regroup_classes"?: string | null | undefined;
    "classes"?: string | null | undefined;
    "features"?: string | null | undefined;
    "strict_feature_match": boolean;
    "featgroups"?: string | null | undefined;
    "show_this_dist"?: string | null | undefined;
    "fast": boolean;
    "slow": boolean;
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
        "3dGenPriors": v_3d_gen_priors_cargs,
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
        "3dGenPriors": v_3d_gen_priors_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_gen_priors(...)`.
 *
 * @interface
 */
interface V3dGenPriorsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Main classification output
     */
    out_cprefix: OutputPathType;
    /**
     * Main probability output
     */
    out_pprefix: OutputPathType;
}


function v_3d_gen_priors_params(
    sigs: InputPathType,
    tdist: InputPathType,
    cprefix: string,
    pprefix: string,
    labeltable: InputPathType,
    do_: string,
    prefix: string | null = null,
    cmask: string | null = null,
    mask: string | null = null,
    mrange: Array<number> | null = null,
    debug: number | null = null,
    vox_debug: string | null = null,
    vox_debug_file: string | null = null,
    uid: string | null = null,
    use_tmp: boolean = false,
    no_tmp: boolean = false,
    pset: string | null = null,
    cset: string | null = null,
    regroup_classes: string | null = null,
    classes: string | null = null,
    features: string | null = null,
    strict_feature_match: boolean = false,
    featgroups: string | null = null,
    show_this_dist: string | null = null,
    fast: boolean = false,
    slow: boolean = false,
): V3dGenPriorsParameters {
    /**
     * Build parameters.
    
     * @param sigs Signatures dataset. A dataset with F features per voxel.
     * @param tdist Training results. This file is generated by 3dSignatures.
     * @param cprefix Prefix for class dataset
     * @param pprefix Prefix for probability dataset
     * @param labeltable Labeltable to attach to output dataset
     * @param do_ Specify the output that this program should create.
     * @param prefix Specify root prefix for output volumes.
     * @param cmask Provide cmask expression. Voxels where expression is 0 are excluded from computations.
     * @param mask Provide mask dataset
     * @param mrange Consider MASK only for values between M0 and M1, inclusive.
     * @param debug Set debug level
     * @param vox_debug 1D index or 3D indices (I J K) of voxel to debug.
     * @param vox_debug_file File in which debug information is output
     * @param uid User identifier string. Used to generate names for temporary files.
     * @param use_tmp Use temporary storage to speed up the program
     * @param no_tmp Do not use temporary storage
     * @param pset Reuse probability output from an earlier run.
     * @param cset Reuse classification output from an earlier run.
     * @param regroup_classes Regroup classes into parent classes. Requires naming the original classes as C1.*, C2.*, etc.
     * @param classes Classify into these classes only.
     * @param features Use these features only. Otherwise, all features in the signature file will be used.
     * @param strict_feature_match Use strict feature name matching.
     * @param featgroups Feature groups.
     * @param show_this_dist Show information obtained from the training data about the distribution of DIST. Set DIST to ALL to see all distributions.
     * @param fast Use OpenMPized routines for faster performance.
     * @param slow Do not use OpenMPized routines.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dGenPriors" as const,
        "sigs": sigs,
        "tdist": tdist,
        "cprefix": cprefix,
        "pprefix": pprefix,
        "labeltable": labeltable,
        "do": do_,
        "use_tmp": use_tmp,
        "no_tmp": no_tmp,
        "strict_feature_match": strict_feature_match,
        "fast": fast,
        "slow": slow,
    };
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (cmask !== null) {
        params["cmask"] = cmask;
    }
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (mrange !== null) {
        params["mrange"] = mrange;
    }
    if (debug !== null) {
        params["debug"] = debug;
    }
    if (vox_debug !== null) {
        params["vox_debug"] = vox_debug;
    }
    if (vox_debug_file !== null) {
        params["vox_debug_file"] = vox_debug_file;
    }
    if (uid !== null) {
        params["uid"] = uid;
    }
    if (pset !== null) {
        params["pset"] = pset;
    }
    if (cset !== null) {
        params["cset"] = cset;
    }
    if (regroup_classes !== null) {
        params["regroup_classes"] = regroup_classes;
    }
    if (classes !== null) {
        params["classes"] = classes;
    }
    if (features !== null) {
        params["features"] = features;
    }
    if (featgroups !== null) {
        params["featgroups"] = featgroups;
    }
    if (show_this_dist !== null) {
        params["show_this_dist"] = show_this_dist;
    }
    return params;
}


function v_3d_gen_priors_cargs(
    params: V3dGenPriorsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dGenPriors");
    cargs.push(
        "-sig",
        execution.inputFile((params["sigs"] ?? null))
    );
    cargs.push(
        "-tdist",
        execution.inputFile((params["tdist"] ?? null))
    );
    cargs.push(
        "-cprefix",
        (params["cprefix"] ?? null)
    );
    cargs.push(
        "-pprefix",
        (params["pprefix"] ?? null)
    );
    cargs.push(
        "-labeltable",
        execution.inputFile((params["labeltable"] ?? null))
    );
    cargs.push(
        "-do",
        (params["do"] ?? null)
    );
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["cmask"] ?? null) !== null) {
        cargs.push(
            "-cmask",
            (params["cmask"] ?? null)
        );
    }
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            (params["mask"] ?? null)
        );
    }
    if ((params["mrange"] ?? null) !== null) {
        cargs.push(
            "-mrange",
            ...(params["mrange"] ?? null).map(String)
        );
    }
    if ((params["debug"] ?? null) !== null) {
        cargs.push(
            "-debug",
            String((params["debug"] ?? null))
        );
    }
    if ((params["vox_debug"] ?? null) !== null) {
        cargs.push(
            "-vox_debug",
            (params["vox_debug"] ?? null)
        );
    }
    if ((params["vox_debug_file"] ?? null) !== null) {
        cargs.push(
            "-vox_debug_file",
            (params["vox_debug_file"] ?? null)
        );
    }
    if ((params["uid"] ?? null) !== null) {
        cargs.push(
            "-uid",
            (params["uid"] ?? null)
        );
    }
    if ((params["use_tmp"] ?? null)) {
        cargs.push("-use_tmp");
    }
    if ((params["no_tmp"] ?? null)) {
        cargs.push("-no_tmp");
    }
    if ((params["pset"] ?? null) !== null) {
        cargs.push(
            "-pset",
            (params["pset"] ?? null)
        );
    }
    if ((params["cset"] ?? null) !== null) {
        cargs.push(
            "-cset",
            (params["cset"] ?? null)
        );
    }
    if ((params["regroup_classes"] ?? null) !== null) {
        cargs.push(
            "-regroup_classes",
            (params["regroup_classes"] ?? null)
        );
    }
    if ((params["classes"] ?? null) !== null) {
        cargs.push(
            "-classes",
            (params["classes"] ?? null)
        );
    }
    if ((params["features"] ?? null) !== null) {
        cargs.push(
            "-features",
            (params["features"] ?? null)
        );
    }
    if ((params["strict_feature_match"] ?? null)) {
        cargs.push("-strict_feature_match");
    }
    if ((params["featgroups"] ?? null) !== null) {
        cargs.push(
            "-featgroups",
            (params["featgroups"] ?? null)
        );
    }
    if ((params["show_this_dist"] ?? null) !== null) {
        cargs.push(
            "-ShowThisDist",
            (params["show_this_dist"] ?? null)
        );
    }
    if ((params["fast"] ?? null)) {
        cargs.push("-fast");
    }
    if ((params["slow"] ?? null)) {
        cargs.push("-slow");
    }
    return cargs;
}


function v_3d_gen_priors_outputs(
    params: V3dGenPriorsParameters,
    execution: Execution,
): V3dGenPriorsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dGenPriorsOutputs = {
        root: execution.outputFile("."),
        out_cprefix: execution.outputFile([(params["cprefix"] ?? null), ".nii.gz"].join('')),
        out_pprefix: execution.outputFile([(params["pprefix"] ?? null), ".nii.gz"].join('')),
    };
    return ret;
}


function v_3d_gen_priors_execute(
    params: V3dGenPriorsParameters,
    execution: Execution,
): V3dGenPriorsOutputs {
    /**
     * Produces classification priors based on voxel signatures.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dGenPriorsOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_gen_priors_cargs(params, execution)
    const ret = v_3d_gen_priors_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_gen_priors(
    sigs: InputPathType,
    tdist: InputPathType,
    cprefix: string,
    pprefix: string,
    labeltable: InputPathType,
    do_: string,
    prefix: string | null = null,
    cmask: string | null = null,
    mask: string | null = null,
    mrange: Array<number> | null = null,
    debug: number | null = null,
    vox_debug: string | null = null,
    vox_debug_file: string | null = null,
    uid: string | null = null,
    use_tmp: boolean = false,
    no_tmp: boolean = false,
    pset: string | null = null,
    cset: string | null = null,
    regroup_classes: string | null = null,
    classes: string | null = null,
    features: string | null = null,
    strict_feature_match: boolean = false,
    featgroups: string | null = null,
    show_this_dist: string | null = null,
    fast: boolean = false,
    slow: boolean = false,
    runner: Runner | null = null,
): V3dGenPriorsOutputs {
    /**
     * Produces classification priors based on voxel signatures.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param sigs Signatures dataset. A dataset with F features per voxel.
     * @param tdist Training results. This file is generated by 3dSignatures.
     * @param cprefix Prefix for class dataset
     * @param pprefix Prefix for probability dataset
     * @param labeltable Labeltable to attach to output dataset
     * @param do_ Specify the output that this program should create.
     * @param prefix Specify root prefix for output volumes.
     * @param cmask Provide cmask expression. Voxels where expression is 0 are excluded from computations.
     * @param mask Provide mask dataset
     * @param mrange Consider MASK only for values between M0 and M1, inclusive.
     * @param debug Set debug level
     * @param vox_debug 1D index or 3D indices (I J K) of voxel to debug.
     * @param vox_debug_file File in which debug information is output
     * @param uid User identifier string. Used to generate names for temporary files.
     * @param use_tmp Use temporary storage to speed up the program
     * @param no_tmp Do not use temporary storage
     * @param pset Reuse probability output from an earlier run.
     * @param cset Reuse classification output from an earlier run.
     * @param regroup_classes Regroup classes into parent classes. Requires naming the original classes as C1.*, C2.*, etc.
     * @param classes Classify into these classes only.
     * @param features Use these features only. Otherwise, all features in the signature file will be used.
     * @param strict_feature_match Use strict feature name matching.
     * @param featgroups Feature groups.
     * @param show_this_dist Show information obtained from the training data about the distribution of DIST. Set DIST to ALL to see all distributions.
     * @param fast Use OpenMPized routines for faster performance.
     * @param slow Do not use OpenMPized routines.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dGenPriorsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_GEN_PRIORS_METADATA);
    const params = v_3d_gen_priors_params(sigs, tdist, cprefix, pprefix, labeltable, do_, prefix, cmask, mask, mrange, debug, vox_debug, vox_debug_file, uid, use_tmp, no_tmp, pset, cset, regroup_classes, classes, features, strict_feature_match, featgroups, show_this_dist, fast, slow)
    return v_3d_gen_priors_execute(params, execution);
}


export {
      V3dGenPriorsOutputs,
      V3dGenPriorsParameters,
      V_3D_GEN_PRIORS_METADATA,
      v_3d_gen_priors,
      v_3d_gen_priors_params,
};
