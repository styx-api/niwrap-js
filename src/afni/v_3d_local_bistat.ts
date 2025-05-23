// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_LOCAL_BISTAT_METADATA: Metadata = {
    id: "f2b736bc414186f493c90278602c279b6976ba7d.boutiques",
    name: "3dLocalBistat",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dLocalBistatParameters {
    "__STYXTYPE__": "3dLocalBistat";
    "nbhd": string;
    "stats": Array<string>;
    "mask"?: InputPathType | null | undefined;
    "automask": boolean;
    "weight"?: InputPathType | null | undefined;
    "prefix": string;
    "histpow"?: number | null | undefined;
    "histbin"?: number | null | undefined;
    "hclip1"?: Array<string> | null | undefined;
    "hclip2"?: Array<string> | null | undefined;
    "dataset1": InputPathType;
    "dataset2": InputPathType;
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
        "3dLocalBistat": v_3d_local_bistat_cargs,
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
        "3dLocalBistat": v_3d_local_bistat_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_local_bistat(...)`.
 *
 * @interface
 */
interface V3dLocalBistatOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output dataset header for AFNI format
     */
    output_head: OutputPathType;
    /**
     * Output dataset BRIK for AFNI format
     */
    output_brik: OutputPathType;
}


function v_3d_local_bistat_params(
    nbhd: string,
    stats: Array<string>,
    prefix: string,
    dataset1: InputPathType,
    dataset2: InputPathType,
    mask: InputPathType | null = null,
    automask: boolean = false,
    weight: InputPathType | null = null,
    histpow: number | null = null,
    histbin: number | null = null,
    hclip1: Array<string> | null = null,
    hclip2: Array<string> | null = null,
): V3dLocalBistatParameters {
    /**
     * Build parameters.
    
     * @param nbhd Specifies the neighborhood around each voxel for statistics calculation. Types include: SPHERE(r), RECT(a,b,c), RHDD(r), TOHD(r)
     * @param stats Statistic to compute in the region around each voxel. Multiple options allowed. Includes: pearson, spearman, quadrant, mutinfo, normuti, jointent, hellinger, crU, crM, crA, L2slope, L1slope, num, ALL.
     * @param prefix Prefix of the output dataset.
     * @param dataset1 The first input dataset (e.g. data1.nii)
     * @param dataset2 The second input dataset (e.g. data2.nii)
     * @param mask Read in a dataset to use as a mask. Non-zero voxels define the mask region.
     * @param automask Compute the mask as in program 3dAutomask. Mutually exclusive with -mask.
     * @param weight Use dataset as a weight (applies to pearson).
     * @param histpow Sets the exponent for the number of bins in the histogram used for Hellinger, Mutual Information, and Correlation Ratio statistics.
     * @param histbin Sets the number of bins directly in the histogram used for Hellinger, Mutual Information, and Correlation Ratio statistics.
     * @param hclip1 Clip dataset1 to lie between specified values.
     * @param hclip2 Clip dataset2 to lie between specified values.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dLocalBistat" as const,
        "nbhd": nbhd,
        "stats": stats,
        "automask": automask,
        "prefix": prefix,
        "dataset1": dataset1,
        "dataset2": dataset2,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (weight !== null) {
        params["weight"] = weight;
    }
    if (histpow !== null) {
        params["histpow"] = histpow;
    }
    if (histbin !== null) {
        params["histbin"] = histbin;
    }
    if (hclip1 !== null) {
        params["hclip1"] = hclip1;
    }
    if (hclip2 !== null) {
        params["hclip2"] = hclip2;
    }
    return params;
}


function v_3d_local_bistat_cargs(
    params: V3dLocalBistatParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dLocalBistat");
    cargs.push(
        "-nbhd",
        (params["nbhd"] ?? null)
    );
    cargs.push(
        "-stat",
        ...(params["stats"] ?? null)
    );
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["automask"] ?? null)) {
        cargs.push("-automask");
    }
    if ((params["weight"] ?? null) !== null) {
        cargs.push(
            "-weight",
            execution.inputFile((params["weight"] ?? null))
        );
    }
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["histpow"] ?? null) !== null) {
        cargs.push(
            "-histpow",
            String((params["histpow"] ?? null))
        );
    }
    if ((params["histbin"] ?? null) !== null) {
        cargs.push(
            "-histbin",
            String((params["histbin"] ?? null))
        );
    }
    if ((params["hclip1"] ?? null) !== null) {
        cargs.push(
            "-hclip1",
            ...(params["hclip1"] ?? null)
        );
    }
    if ((params["hclip2"] ?? null) !== null) {
        cargs.push(
            "-hclip2",
            ...(params["hclip2"] ?? null)
        );
    }
    cargs.push(execution.inputFile((params["dataset1"] ?? null)));
    cargs.push(execution.inputFile((params["dataset2"] ?? null)));
    return cargs;
}


function v_3d_local_bistat_outputs(
    params: V3dLocalBistatParameters,
    execution: Execution,
): V3dLocalBistatOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dLocalBistatOutputs = {
        root: execution.outputFile("."),
        output_head: execution.outputFile([(params["prefix"] ?? null), "+orig.HEAD"].join('')),
        output_brik: execution.outputFile([(params["prefix"] ?? null), "+orig.BRIK"].join('')),
    };
    return ret;
}


function v_3d_local_bistat_execute(
    params: V3dLocalBistatParameters,
    execution: Execution,
): V3dLocalBistatOutputs {
    /**
     * Compute statistics between 2 datasets at each voxel based on a local neighborhood.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dLocalBistatOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_local_bistat_cargs(params, execution)
    const ret = v_3d_local_bistat_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_local_bistat(
    nbhd: string,
    stats: Array<string>,
    prefix: string,
    dataset1: InputPathType,
    dataset2: InputPathType,
    mask: InputPathType | null = null,
    automask: boolean = false,
    weight: InputPathType | null = null,
    histpow: number | null = null,
    histbin: number | null = null,
    hclip1: Array<string> | null = null,
    hclip2: Array<string> | null = null,
    runner: Runner | null = null,
): V3dLocalBistatOutputs {
    /**
     * Compute statistics between 2 datasets at each voxel based on a local neighborhood.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param nbhd Specifies the neighborhood around each voxel for statistics calculation. Types include: SPHERE(r), RECT(a,b,c), RHDD(r), TOHD(r)
     * @param stats Statistic to compute in the region around each voxel. Multiple options allowed. Includes: pearson, spearman, quadrant, mutinfo, normuti, jointent, hellinger, crU, crM, crA, L2slope, L1slope, num, ALL.
     * @param prefix Prefix of the output dataset.
     * @param dataset1 The first input dataset (e.g. data1.nii)
     * @param dataset2 The second input dataset (e.g. data2.nii)
     * @param mask Read in a dataset to use as a mask. Non-zero voxels define the mask region.
     * @param automask Compute the mask as in program 3dAutomask. Mutually exclusive with -mask.
     * @param weight Use dataset as a weight (applies to pearson).
     * @param histpow Sets the exponent for the number of bins in the histogram used for Hellinger, Mutual Information, and Correlation Ratio statistics.
     * @param histbin Sets the number of bins directly in the histogram used for Hellinger, Mutual Information, and Correlation Ratio statistics.
     * @param hclip1 Clip dataset1 to lie between specified values.
     * @param hclip2 Clip dataset2 to lie between specified values.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dLocalBistatOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_LOCAL_BISTAT_METADATA);
    const params = v_3d_local_bistat_params(nbhd, stats, prefix, dataset1, dataset2, mask, automask, weight, histpow, histbin, hclip1, hclip2)
    return v_3d_local_bistat_execute(params, execution);
}


export {
      V3dLocalBistatOutputs,
      V3dLocalBistatParameters,
      V_3D_LOCAL_BISTAT_METADATA,
      v_3d_local_bistat,
      v_3d_local_bistat_params,
};
