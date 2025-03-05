// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_SURFACE_STATS_METADATA: Metadata = {
    id: "a615c38b1e647ea0789fa48d75a57ab954bd3b51.boutiques",
    name: "mris_surface_stats",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisSurfaceStatsParameters {
    "__STYXTYPE__": "mris_surface_stats";
    "nsmooth"?: number | null | undefined;
    "surf_name": InputPathType;
    "mask_name"?: InputPathType | null | undefined;
    "out_name": string;
    "mean"?: string | null | undefined;
    "absmean"?: string | null | undefined;
    "absstd"?: string | null | undefined;
    "zscore"?: string | null | undefined;
    "first_group_size"?: number | null | undefined;
    "src_type"?: string | null | undefined;
    "trg_type"?: string | null | undefined;
    "debug"?: number | null | undefined;
    "data_files": Array<InputPathType>;
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
        "mris_surface_stats": mris_surface_stats_cargs,
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
        "mris_surface_stats": mris_surface_stats_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_surface_stats(...)`.
 *
 * @interface
 */
interface MrisSurfaceStatsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Standard deviation map of the input thickness difference maps
     */
    std_output: OutputPathType;
    /**
     * Mean map of the input thickness difference maps
     */
    mean_output: OutputPathType | null;
    /**
     * Absolute mean map of the input thickness difference maps
     */
    absmean_output: OutputPathType | null;
    /**
     * Standard deviation map of the absolute differences
     */
    absstd_output: OutputPathType | null;
    /**
     * Z-score map of the input thickness difference maps
     */
    zscore_output: OutputPathType | null;
}


function mris_surface_stats_params(
    surf_name: InputPathType,
    out_name: string,
    data_files: Array<InputPathType>,
    nsmooth: number | null = null,
    mask_name: InputPathType | null = null,
    mean: string | null = null,
    absmean: string | null = null,
    absstd: string | null = null,
    zscore: string | null = null,
    first_group_size: number | null = null,
    src_type: string | null = null,
    trg_type: string | null = null,
    debug: number | null = null,
): MrisSurfaceStatsParameters {
    /**
     * Build parameters.
    
     * @param surf_name Set the surface filename
     * @param out_name Set the output filename (standard deviation of data)
     * @param data_files List of input data files for computation
     * @param nsmooth Specify number of smoothing steps
     * @param mask_name Set the filename for surface mask
     * @param mean Set the output filename for mean
     * @param absmean Set the output filename for absolute mean
     * @param absstd Set the output filename for standard deviation of absolute mean
     * @param zscore Set the output filename for z-score (only if first_group_size > 0)
     * @param first_group_size Specify how many subjects at the beginning belong to first group
     * @param src_type Input surface data format (default = paint)
     * @param trg_type Output format (default = paint)
     * @param debug Specify which surface vertex number to debug
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_surface_stats" as const,
        "surf_name": surf_name,
        "out_name": out_name,
        "data_files": data_files,
    };
    if (nsmooth !== null) {
        params["nsmooth"] = nsmooth;
    }
    if (mask_name !== null) {
        params["mask_name"] = mask_name;
    }
    if (mean !== null) {
        params["mean"] = mean;
    }
    if (absmean !== null) {
        params["absmean"] = absmean;
    }
    if (absstd !== null) {
        params["absstd"] = absstd;
    }
    if (zscore !== null) {
        params["zscore"] = zscore;
    }
    if (first_group_size !== null) {
        params["first_group_size"] = first_group_size;
    }
    if (src_type !== null) {
        params["src_type"] = src_type;
    }
    if (trg_type !== null) {
        params["trg_type"] = trg_type;
    }
    if (debug !== null) {
        params["debug"] = debug;
    }
    return params;
}


function mris_surface_stats_cargs(
    params: MrisSurfaceStatsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_surface_stats");
    if ((params["nsmooth"] ?? null) !== null) {
        cargs.push(
            "-nsmooth",
            String((params["nsmooth"] ?? null))
        );
    }
    cargs.push(
        "-surf_name",
        execution.inputFile((params["surf_name"] ?? null))
    );
    if ((params["mask_name"] ?? null) !== null) {
        cargs.push(
            "-mask_name",
            execution.inputFile((params["mask_name"] ?? null))
        );
    }
    cargs.push(
        "-out_name",
        (params["out_name"] ?? null)
    );
    if ((params["mean"] ?? null) !== null) {
        cargs.push(
            "-mean",
            (params["mean"] ?? null)
        );
    }
    if ((params["absmean"] ?? null) !== null) {
        cargs.push(
            "-absmean",
            (params["absmean"] ?? null)
        );
    }
    if ((params["absstd"] ?? null) !== null) {
        cargs.push(
            "-absstd",
            (params["absstd"] ?? null)
        );
    }
    if ((params["zscore"] ?? null) !== null) {
        cargs.push(
            "-zscore",
            (params["zscore"] ?? null)
        );
    }
    if ((params["first_group_size"] ?? null) !== null) {
        cargs.push(
            "-first_group_size",
            String((params["first_group_size"] ?? null))
        );
    }
    if ((params["src_type"] ?? null) !== null) {
        cargs.push(
            "-src_type",
            (params["src_type"] ?? null)
        );
    }
    if ((params["trg_type"] ?? null) !== null) {
        cargs.push(
            "-trg_type",
            (params["trg_type"] ?? null)
        );
    }
    if ((params["debug"] ?? null) !== null) {
        cargs.push(
            "-debug",
            String((params["debug"] ?? null))
        );
    }
    cargs.push(...(params["data_files"] ?? null).map(f => execution.inputFile(f)));
    return cargs;
}


function mris_surface_stats_outputs(
    params: MrisSurfaceStatsParameters,
    execution: Execution,
): MrisSurfaceStatsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisSurfaceStatsOutputs = {
        root: execution.outputFile("."),
        std_output: execution.outputFile([(params["out_name"] ?? null)].join('')),
        mean_output: ((params["mean"] ?? null) !== null) ? execution.outputFile([(params["mean"] ?? null)].join('')) : null,
        absmean_output: ((params["absmean"] ?? null) !== null) ? execution.outputFile([(params["absmean"] ?? null)].join('')) : null,
        absstd_output: ((params["absstd"] ?? null) !== null) ? execution.outputFile([(params["absstd"] ?? null)].join('')) : null,
        zscore_output: ((params["zscore"] ?? null) !== null) ? execution.outputFile([(params["zscore"] ?? null)].join('')) : null,
    };
    return ret;
}


function mris_surface_stats_execute(
    params: MrisSurfaceStatsParameters,
    execution: Execution,
): MrisSurfaceStatsOutputs {
    /**
     * Computes the group-wise mean and standard deviation of thickness differences at every vertex of the template surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisSurfaceStatsOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_surface_stats_cargs(params, execution)
    const ret = mris_surface_stats_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_surface_stats(
    surf_name: InputPathType,
    out_name: string,
    data_files: Array<InputPathType>,
    nsmooth: number | null = null,
    mask_name: InputPathType | null = null,
    mean: string | null = null,
    absmean: string | null = null,
    absstd: string | null = null,
    zscore: string | null = null,
    first_group_size: number | null = null,
    src_type: string | null = null,
    trg_type: string | null = null,
    debug: number | null = null,
    runner: Runner | null = null,
): MrisSurfaceStatsOutputs {
    /**
     * Computes the group-wise mean and standard deviation of thickness differences at every vertex of the template surface.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param surf_name Set the surface filename
     * @param out_name Set the output filename (standard deviation of data)
     * @param data_files List of input data files for computation
     * @param nsmooth Specify number of smoothing steps
     * @param mask_name Set the filename for surface mask
     * @param mean Set the output filename for mean
     * @param absmean Set the output filename for absolute mean
     * @param absstd Set the output filename for standard deviation of absolute mean
     * @param zscore Set the output filename for z-score (only if first_group_size > 0)
     * @param first_group_size Specify how many subjects at the beginning belong to first group
     * @param src_type Input surface data format (default = paint)
     * @param trg_type Output format (default = paint)
     * @param debug Specify which surface vertex number to debug
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisSurfaceStatsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_SURFACE_STATS_METADATA);
    const params = mris_surface_stats_params(surf_name, out_name, data_files, nsmooth, mask_name, mean, absmean, absstd, zscore, first_group_size, src_type, trg_type, debug)
    return mris_surface_stats_execute(params, execution);
}


export {
      MRIS_SURFACE_STATS_METADATA,
      MrisSurfaceStatsOutputs,
      MrisSurfaceStatsParameters,
      mris_surface_stats,
      mris_surface_stats_params,
};
