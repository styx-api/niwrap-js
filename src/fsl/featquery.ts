// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FEATQUERY_METADATA: Metadata = {
    id: "3af5fd773a3c2794d8d8e2d956b51362bc61d219.boutiques",
    name: "featquery",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FeatqueryParameters {
    "__STYXTYPE__": "featquery";
    "n_featdirs": number;
    "featdirs": Array<string>;
    "n_stats": number;
    "stats": Array<string>;
    "output_rootname": string;
    "atlas_flag"?: string | null | undefined;
    "percent_convert_flag": boolean;
    "thresh_flag": boolean;
    "interp_thresh"?: number | null | undefined;
    "timeseries_flag": boolean;
    "weight_flag": boolean;
    "browser_flag": boolean;
    "mask_file": InputPathType;
    "coords"?: Array<number> | null | undefined;
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
        "featquery": featquery_cargs,
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
        "featquery": featquery_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `featquery(...)`.
 *
 * @interface
 */
interface FeatqueryOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated query report file
     */
    query_report: OutputPathType;
}


function featquery_params(
    n_featdirs: number,
    featdirs: Array<string>,
    n_stats: number,
    stats: Array<string>,
    output_rootname: string,
    mask_file: InputPathType,
    atlas_flag: string | null = null,
    percent_convert_flag: boolean = false,
    thresh_flag: boolean = false,
    interp_thresh: number | null = 0.5,
    timeseries_flag: boolean = false,
    weight_flag: boolean = false,
    browser_flag: boolean = false,
    coords: Array<number> | null = null,
): FeatqueryParameters {
    /**
     * Build parameters.
    
     * @param n_featdirs Number of feat directories
     * @param featdirs List of feat directories
     * @param n_stats Number of stats to query
     * @param stats List of stats
     * @param output_rootname Root name for output files
     * @param mask_file Mask file used as a reference for coordinates; if relative, searched within each FEAT directory
     * @param atlas_flag Use selected atlas to generate label (etc.) information
     * @param percent_convert_flag Convert PE / COPE values into percentages
     * @param thresh_flag Threshold stats images
     * @param interp_thresh Affect size of resampled masks by changing post-interpolation thresholding (default 0.5)
     * @param timeseries_flag Create time-series plots
     * @param weight_flag Do not binarise mask (allow weighting)
     * @param browser_flag Popup results in browser when finished
     * @param coords Coordinates specified in voxels (X Y Z)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "featquery" as const,
        "n_featdirs": n_featdirs,
        "featdirs": featdirs,
        "n_stats": n_stats,
        "stats": stats,
        "output_rootname": output_rootname,
        "percent_convert_flag": percent_convert_flag,
        "thresh_flag": thresh_flag,
        "timeseries_flag": timeseries_flag,
        "weight_flag": weight_flag,
        "browser_flag": browser_flag,
        "mask_file": mask_file,
    };
    if (atlas_flag !== null) {
        params["atlas_flag"] = atlas_flag;
    }
    if (interp_thresh !== null) {
        params["interp_thresh"] = interp_thresh;
    }
    if (coords !== null) {
        params["coords"] = coords;
    }
    return params;
}


function featquery_cargs(
    params: FeatqueryParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("featquery");
    cargs.push(String((params["n_featdirs"] ?? null)));
    cargs.push(...(params["featdirs"] ?? null));
    cargs.push(String((params["n_stats"] ?? null)));
    cargs.push(...(params["stats"] ?? null));
    cargs.push((params["output_rootname"] ?? null));
    if ((params["atlas_flag"] ?? null) !== null) {
        cargs.push(
            "-a",
            (params["atlas_flag"] ?? null)
        );
    }
    if ((params["percent_convert_flag"] ?? null)) {
        cargs.push("-p");
    }
    if ((params["thresh_flag"] ?? null)) {
        cargs.push("-t");
    }
    if ((params["interp_thresh"] ?? null) !== null) {
        cargs.push(
            "-i",
            String((params["interp_thresh"] ?? null))
        );
    }
    if ((params["timeseries_flag"] ?? null)) {
        cargs.push("-s");
    }
    if ((params["weight_flag"] ?? null)) {
        cargs.push("-w");
    }
    if ((params["browser_flag"] ?? null)) {
        cargs.push("-b");
    }
    cargs.push(execution.inputFile((params["mask_file"] ?? null)));
    if ((params["coords"] ?? null) !== null) {
        cargs.push(
            "-vox",
            ...(params["coords"] ?? null).map(String)
        );
    }
    return cargs;
}


function featquery_outputs(
    params: FeatqueryParameters,
    execution: Execution,
): FeatqueryOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FeatqueryOutputs = {
        root: execution.outputFile("."),
        query_report: execution.outputFile([(params["output_rootname"] ?? null), "_queryreport.txt"].join('')),
    };
    return ret;
}


function featquery_execute(
    params: FeatqueryParameters,
    execution: Execution,
): FeatqueryOutputs {
    /**
     * Tool to extract statistics and/or time series from FEAT directories.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FeatqueryOutputs`).
     */
    params = execution.params(params)
    const cargs = featquery_cargs(params, execution)
    const ret = featquery_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function featquery(
    n_featdirs: number,
    featdirs: Array<string>,
    n_stats: number,
    stats: Array<string>,
    output_rootname: string,
    mask_file: InputPathType,
    atlas_flag: string | null = null,
    percent_convert_flag: boolean = false,
    thresh_flag: boolean = false,
    interp_thresh: number | null = 0.5,
    timeseries_flag: boolean = false,
    weight_flag: boolean = false,
    browser_flag: boolean = false,
    coords: Array<number> | null = null,
    runner: Runner | null = null,
): FeatqueryOutputs {
    /**
     * Tool to extract statistics and/or time series from FEAT directories.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param n_featdirs Number of feat directories
     * @param featdirs List of feat directories
     * @param n_stats Number of stats to query
     * @param stats List of stats
     * @param output_rootname Root name for output files
     * @param mask_file Mask file used as a reference for coordinates; if relative, searched within each FEAT directory
     * @param atlas_flag Use selected atlas to generate label (etc.) information
     * @param percent_convert_flag Convert PE / COPE values into percentages
     * @param thresh_flag Threshold stats images
     * @param interp_thresh Affect size of resampled masks by changing post-interpolation thresholding (default 0.5)
     * @param timeseries_flag Create time-series plots
     * @param weight_flag Do not binarise mask (allow weighting)
     * @param browser_flag Popup results in browser when finished
     * @param coords Coordinates specified in voxels (X Y Z)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FeatqueryOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FEATQUERY_METADATA);
    const params = featquery_params(n_featdirs, featdirs, n_stats, stats, output_rootname, mask_file, atlas_flag, percent_convert_flag, thresh_flag, interp_thresh, timeseries_flag, weight_flag, browser_flag, coords)
    return featquery_execute(params, execution);
}


export {
      FEATQUERY_METADATA,
      FeatqueryOutputs,
      FeatqueryParameters,
      featquery,
      featquery_params,
};
