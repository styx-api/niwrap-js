// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_ROISTATS_METADATA: Metadata = {
    id: "61e00f88ea8f22144368d1110fd8be64f08617a3.boutiques",
    name: "3dROIstats",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dRoistatsParameters {
    "__STYXTYPE__": "3dROIstats";
    "in_file": InputPathType;
    "mask"?: InputPathType | null | undefined;
    "debug": boolean;
    "format1D": boolean;
    "format1DR": boolean;
    "mask_f2short": boolean;
    "mask_file"?: InputPathType | null | undefined;
    "nobriklab": boolean;
    "nomeanout": boolean;
    "num_roi"?: number | null | undefined;
    "quiet": boolean;
    "roisel"?: InputPathType | null | undefined;
    "stat"?: Array<InputPathType> | null | undefined;
    "zerofill"?: string | null | undefined;
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
        "3dROIstats": v_3d_roistats_cargs,
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
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_roistats(...)`.
 *
 * @interface
 */
interface V3dRoistatsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * There will be one line of output for every sub-brick of every input dataset. Across each line will be every statistic for every mask value. For instance, if there 3 mask values (1,2,3), then the columns Mean_1, Mean_2 and Mean_3 will refer to the means across each mask value, respectively. If 4 statistics are requested, then there will be 12 stats displayed on each line (4 for each mask region), besides the file and sub-brick number.
     */
    stats: string[];
}


function v_3d_roistats_params(
    in_file: InputPathType,
    mask: InputPathType | null = null,
    debug: boolean = false,
    format1_d: boolean = false,
    format1_dr: boolean = false,
    mask_f2short: boolean = false,
    mask_file: InputPathType | null = null,
    nobriklab: boolean = false,
    nomeanout: boolean = false,
    num_roi: number | null = null,
    quiet: boolean = false,
    roisel: InputPathType | null = null,
    stat: Array<InputPathType> | null = null,
    zerofill: string | null = null,
): V3dRoistatsParameters {
    /**
     * Build parameters.
    
     * @param in_file Input dataset.
     * @param mask Input mask.
     * @param debug Print debug information.
     * @param format1_d Output results in a 1d format that includes commented labels.
     * @param format1_dr Output results in a 1d format that includes uncommented labels. may not work optimally with typical 1d functions, but is useful for r functions.
     * @param mask_f2short Tells the program to convert a float mask to short integers, by simple rounding.
     * @param mask_file Input mask.
     * @param nobriklab Do not print the sub-brick label next to its index.
     * @param nomeanout Do not include the (zero-inclusive) mean among computed stats.
     * @param num_roi Forces the assumption that the mask dataset's rois are denoted by 1 to n inclusive.  normally, the program figures out the rois on its own.  this option is useful if a) you are certain that the mask dataset has no values outside the range [0 n], b) there may be some rois missing between [1 n] in the mask data-set and c) you want those columns in the output any-way so the output lines up with the output from other invocations of 3droistats.
     * @param quiet Execute quietly.
     * @param roisel Only considers rois denoted by values found in the specified file. note that the order of the rois as specified in the file is not preserved. so an sel.1d of '2 8 20' produces the same output as '8 20 2'.
     * @param stat A list of items which are 'mean' or 'sum' or 'voxels' or 'minmax' or 'sigma' or 'median' or 'mode' or 'summary' or 'zerominmax' or 'zerosigma' or 'zeromedian' or 'zeromode'. Statistics to compute. options include: * mean       =   compute the mean using only non_zero voxels.                  implies the opposite for the mean computed                  by default. * median     =   compute the median of nonzero voxels * mode       =   compute the mode of nonzero voxels.                  (integral valued sets only) * minmax     =   compute the min/max of nonzero voxels * sum        =   compute the sum using only nonzero voxels. * voxels     =   compute the number of nonzero voxels * sigma      =   compute the standard deviation of nonzero                  voxelsstatistics that include zero-valued voxels: * zerominmax =   compute the min/max of all voxels. * zerosigma  =   compute the standard deviation of all                  voxels. * zeromedian =   compute the median of all voxels. * zeromode   =   compute the mode of all voxels. * summary    =   only output a summary line with the grand                  mean across all briks in the input dataset.                  this option cannot be used with nomeanout.more that one option can be specified.
     * @param zerofill For roi labels not found, use the provided string instead of a '0' in the output file. only active if `num_roi` is enabled.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dROIstats" as const,
        "in_file": in_file,
        "debug": debug,
        "format1D": format1_d,
        "format1DR": format1_dr,
        "mask_f2short": mask_f2short,
        "nobriklab": nobriklab,
        "nomeanout": nomeanout,
        "quiet": quiet,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (mask_file !== null) {
        params["mask_file"] = mask_file;
    }
    if (num_roi !== null) {
        params["num_roi"] = num_roi;
    }
    if (roisel !== null) {
        params["roisel"] = roisel;
    }
    if (stat !== null) {
        params["stat"] = stat;
    }
    if (zerofill !== null) {
        params["zerofill"] = zerofill;
    }
    return params;
}


function v_3d_roistats_cargs(
    params: V3dRoistatsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dROIstats");
    cargs.push(execution.inputFile((params["in_file"] ?? null)));
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["format1D"] ?? null)) {
        cargs.push("-1Dformat");
    }
    if ((params["format1DR"] ?? null)) {
        cargs.push("-1DRformat");
    }
    if ((params["mask_f2short"] ?? null)) {
        cargs.push("-mask_f2short");
    }
    if ((params["mask_file"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask_file"] ?? null))
        );
    }
    if ((params["nobriklab"] ?? null)) {
        cargs.push("-nobriklab");
    }
    if ((params["nomeanout"] ?? null)) {
        cargs.push("-nomeanout");
    }
    if ((params["num_roi"] ?? null) !== null) {
        cargs.push(
            "-numroi",
            String((params["num_roi"] ?? null))
        );
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["roisel"] ?? null) !== null) {
        cargs.push(
            "-roisel",
            execution.inputFile((params["roisel"] ?? null))
        );
    }
    if ((params["stat"] ?? null) !== null) {
        cargs.push(...(params["stat"] ?? null).map(f => execution.inputFile(f)));
    }
    if ((params["zerofill"] ?? null) !== null) {
        cargs.push(
            "-zerofill",
            (params["zerofill"] ?? null)
        );
    }
    return cargs;
}


function v_3d_roistats_outputs(
    params: V3dRoistatsParameters,
    execution: Execution,
): V3dRoistatsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dRoistatsOutputs = {
        root: execution.outputFile("."),
        stats: [],
    };
    return ret;
}


function v_3d_roistats_execute(
    params: V3dRoistatsParameters,
    execution: Execution,
): V3dRoistatsOutputs {
    /**
     * Display statistics over masked regions.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dRoistatsOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_roistats_cargs(params, execution)
    const ret = v_3d_roistats_outputs(params, execution)
    execution.run(cargs, s => ret.stats.push(s));
    return ret;
}


function v_3d_roistats(
    in_file: InputPathType,
    mask: InputPathType | null = null,
    debug: boolean = false,
    format1_d: boolean = false,
    format1_dr: boolean = false,
    mask_f2short: boolean = false,
    mask_file: InputPathType | null = null,
    nobriklab: boolean = false,
    nomeanout: boolean = false,
    num_roi: number | null = null,
    quiet: boolean = false,
    roisel: InputPathType | null = null,
    stat: Array<InputPathType> | null = null,
    zerofill: string | null = null,
    runner: Runner | null = null,
): V3dRoistatsOutputs {
    /**
     * Display statistics over masked regions.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param in_file Input dataset.
     * @param mask Input mask.
     * @param debug Print debug information.
     * @param format1_d Output results in a 1d format that includes commented labels.
     * @param format1_dr Output results in a 1d format that includes uncommented labels. may not work optimally with typical 1d functions, but is useful for r functions.
     * @param mask_f2short Tells the program to convert a float mask to short integers, by simple rounding.
     * @param mask_file Input mask.
     * @param nobriklab Do not print the sub-brick label next to its index.
     * @param nomeanout Do not include the (zero-inclusive) mean among computed stats.
     * @param num_roi Forces the assumption that the mask dataset's rois are denoted by 1 to n inclusive.  normally, the program figures out the rois on its own.  this option is useful if a) you are certain that the mask dataset has no values outside the range [0 n], b) there may be some rois missing between [1 n] in the mask data-set and c) you want those columns in the output any-way so the output lines up with the output from other invocations of 3droistats.
     * @param quiet Execute quietly.
     * @param roisel Only considers rois denoted by values found in the specified file. note that the order of the rois as specified in the file is not preserved. so an sel.1d of '2 8 20' produces the same output as '8 20 2'.
     * @param stat A list of items which are 'mean' or 'sum' or 'voxels' or 'minmax' or 'sigma' or 'median' or 'mode' or 'summary' or 'zerominmax' or 'zerosigma' or 'zeromedian' or 'zeromode'. Statistics to compute. options include: * mean       =   compute the mean using only non_zero voxels.                  implies the opposite for the mean computed                  by default. * median     =   compute the median of nonzero voxels * mode       =   compute the mode of nonzero voxels.                  (integral valued sets only) * minmax     =   compute the min/max of nonzero voxels * sum        =   compute the sum using only nonzero voxels. * voxels     =   compute the number of nonzero voxels * sigma      =   compute the standard deviation of nonzero                  voxelsstatistics that include zero-valued voxels: * zerominmax =   compute the min/max of all voxels. * zerosigma  =   compute the standard deviation of all                  voxels. * zeromedian =   compute the median of all voxels. * zeromode   =   compute the mode of all voxels. * summary    =   only output a summary line with the grand                  mean across all briks in the input dataset.                  this option cannot be used with nomeanout.more that one option can be specified.
     * @param zerofill For roi labels not found, use the provided string instead of a '0' in the output file. only active if `num_roi` is enabled.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dRoistatsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_ROISTATS_METADATA);
    const params = v_3d_roistats_params(in_file, mask, debug, format1_d, format1_dr, mask_f2short, mask_file, nobriklab, nomeanout, num_roi, quiet, roisel, stat, zerofill)
    return v_3d_roistats_execute(params, execution);
}


export {
      V3dRoistatsOutputs,
      V3dRoistatsParameters,
      V_3D_ROISTATS_METADATA,
      v_3d_roistats,
      v_3d_roistats_params,
};
