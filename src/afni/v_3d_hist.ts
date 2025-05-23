// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_HIST_METADATA: Metadata = {
    id: "9e96048d8d417ad0c0b2cb1ebd17194a1c90d3b8.boutiques",
    name: "3dHist",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dHistParameters {
    "__STYXTYPE__": "3dHist";
    "input": InputPathType;
    "dind_subbrick"?: number | null | undefined;
    "mask_dset"?: InputPathType | null | undefined;
    "mask_range"?: Array<number> | null | undefined;
    "cmask"?: string | null | undefined;
    "hist_file"?: InputPathType | null | undefined;
    "prefix"?: string | null | undefined;
    "equalized"?: string | null | undefined;
    "nbin"?: number | null | undefined;
    "min"?: number | null | undefined;
    "max"?: number | null | undefined;
    "binwidth"?: number | null | undefined;
    "ignore_out": boolean;
    "range_hist"?: InputPathType | null | undefined;
    "showhist": boolean;
    "at_val"?: number | null | undefined;
    "get_params"?: string | null | undefined;
    "voxvol"?: number | null | undefined;
    "val_at"?: string | null | undefined;
    "quiet": boolean;
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
        "3dHist": v_3d_hist_cargs,
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
 * Output object returned when calling `v_3d_hist(...)`.
 *
 * @interface
 */
interface V3dHistOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3d_hist_params(
    input: InputPathType,
    dind_subbrick: number | null = null,
    mask_dset: InputPathType | null = null,
    mask_range: Array<number> | null = null,
    cmask: string | null = null,
    hist_file: InputPathType | null = null,
    prefix: string | null = null,
    equalized: string | null = null,
    nbin: number | null = null,
    min: number | null = null,
    max: number | null = null,
    binwidth: number | null = null,
    ignore_out: boolean = false,
    range_hist: InputPathType | null = null,
    showhist: boolean = false,
    at_val: number | null = null,
    get_params: string | null = null,
    voxvol: number | null = null,
    val_at: string | null = null,
    quiet: boolean = false,
): V3dHistParameters {
    /**
     * Build parameters.
    
     * @param input Dataset providing values for histogram.
     * @param dind_subbrick Use sub-brick SB from the input rather than 0
     * @param mask_dset Provide mask dataset to select subset of input.
     * @param mask_range Specify the range of values to consider from MSET. Default is anything non-zero
     * @param cmask Provide cmask expression. Voxels where expression is 0 are excluded from computations.
     * @param hist_file Read this previously created histogram instead of forming one from DSET.
     * @param prefix Write histogram to niml file called PREF.niml.hist
     * @param equalized Write a histogram equalized version of the input dataset.
     * @param nbin Use K bins.
     * @param min Minimum intensity.
     * @param max Maximum intensity.
     * @param binwidth Bin width.
     * @param ignore_out Do not count samples outside the user specified range.
     * @param range_hist Use previously created histogram to set range and binwidth parameters.
     * @param showhist Display histogram to stdout.
     * @param at_val Set the value at which you want histogram values.
     * @param get_params Return the desired properties at a given value. You can select multiple properties.
     * @param voxvol Specify voxel volume in mm^3. To be used with upvol.
     * @param val_at Return the value where histogram property PAR is equal to PARVAL. PAR can be: cdf, rcdf, ncdf, nrcdf, upvol.
     * @param quiet Return a concise output to simplify parsing.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dHist" as const,
        "input": input,
        "ignore_out": ignore_out,
        "showhist": showhist,
        "quiet": quiet,
    };
    if (dind_subbrick !== null) {
        params["dind_subbrick"] = dind_subbrick;
    }
    if (mask_dset !== null) {
        params["mask_dset"] = mask_dset;
    }
    if (mask_range !== null) {
        params["mask_range"] = mask_range;
    }
    if (cmask !== null) {
        params["cmask"] = cmask;
    }
    if (hist_file !== null) {
        params["hist_file"] = hist_file;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (equalized !== null) {
        params["equalized"] = equalized;
    }
    if (nbin !== null) {
        params["nbin"] = nbin;
    }
    if (min !== null) {
        params["min"] = min;
    }
    if (max !== null) {
        params["max"] = max;
    }
    if (binwidth !== null) {
        params["binwidth"] = binwidth;
    }
    if (range_hist !== null) {
        params["range_hist"] = range_hist;
    }
    if (at_val !== null) {
        params["at_val"] = at_val;
    }
    if (get_params !== null) {
        params["get_params"] = get_params;
    }
    if (voxvol !== null) {
        params["voxvol"] = voxvol;
    }
    if (val_at !== null) {
        params["val_at"] = val_at;
    }
    return params;
}


function v_3d_hist_cargs(
    params: V3dHistParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dHist");
    cargs.push(execution.inputFile((params["input"] ?? null)));
    if ((params["dind_subbrick"] ?? null) !== null) {
        cargs.push(
            "-dind",
            String((params["dind_subbrick"] ?? null))
        );
    }
    if ((params["mask_dset"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask_dset"] ?? null))
        );
    }
    if ((params["mask_range"] ?? null) !== null) {
        cargs.push(
            "-mask_range",
            ...(params["mask_range"] ?? null).map(String)
        );
    }
    if ((params["cmask"] ?? null) !== null) {
        cargs.push(
            "-cmask",
            (params["cmask"] ?? null)
        );
    }
    if ((params["hist_file"] ?? null) !== null) {
        cargs.push(
            "-thishist",
            execution.inputFile((params["hist_file"] ?? null))
        );
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["equalized"] ?? null) !== null) {
        cargs.push(
            "-equalized",
            (params["equalized"] ?? null)
        );
    }
    if ((params["nbin"] ?? null) !== null) {
        cargs.push(
            "-nbin",
            String((params["nbin"] ?? null))
        );
    }
    if ((params["min"] ?? null) !== null) {
        cargs.push(
            "-min",
            String((params["min"] ?? null))
        );
    }
    if ((params["max"] ?? null) !== null) {
        cargs.push(
            "-max",
            String((params["max"] ?? null))
        );
    }
    if ((params["binwidth"] ?? null) !== null) {
        cargs.push(
            "-binwidth",
            String((params["binwidth"] ?? null))
        );
    }
    if ((params["ignore_out"] ?? null)) {
        cargs.push("-ignore_out");
    }
    if ((params["range_hist"] ?? null) !== null) {
        cargs.push(
            "-rhist",
            execution.inputFile((params["range_hist"] ?? null))
        );
    }
    if ((params["showhist"] ?? null)) {
        cargs.push("-showhist");
    }
    if ((params["at_val"] ?? null) !== null) {
        cargs.push(
            "-at",
            String((params["at_val"] ?? null))
        );
    }
    if ((params["get_params"] ?? null) !== null) {
        cargs.push(
            "-get",
            (params["get_params"] ?? null)
        );
    }
    if ((params["voxvol"] ?? null) !== null) {
        cargs.push(
            "-voxvol",
            String((params["voxvol"] ?? null))
        );
    }
    if ((params["val_at"] ?? null) !== null) {
        cargs.push(
            "-val_at",
            (params["val_at"] ?? null)
        );
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    return cargs;
}


function v_3d_hist_outputs(
    params: V3dHistParameters,
    execution: Execution,
): V3dHistOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dHistOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3d_hist_execute(
    params: V3dHistParameters,
    execution: Execution,
): V3dHistOutputs {
    /**
     * Computes histograms using functions for generating priors.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dHistOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_hist_cargs(params, execution)
    const ret = v_3d_hist_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_hist(
    input: InputPathType,
    dind_subbrick: number | null = null,
    mask_dset: InputPathType | null = null,
    mask_range: Array<number> | null = null,
    cmask: string | null = null,
    hist_file: InputPathType | null = null,
    prefix: string | null = null,
    equalized: string | null = null,
    nbin: number | null = null,
    min: number | null = null,
    max: number | null = null,
    binwidth: number | null = null,
    ignore_out: boolean = false,
    range_hist: InputPathType | null = null,
    showhist: boolean = false,
    at_val: number | null = null,
    get_params: string | null = null,
    voxvol: number | null = null,
    val_at: string | null = null,
    quiet: boolean = false,
    runner: Runner | null = null,
): V3dHistOutputs {
    /**
     * Computes histograms using functions for generating priors.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input Dataset providing values for histogram.
     * @param dind_subbrick Use sub-brick SB from the input rather than 0
     * @param mask_dset Provide mask dataset to select subset of input.
     * @param mask_range Specify the range of values to consider from MSET. Default is anything non-zero
     * @param cmask Provide cmask expression. Voxels where expression is 0 are excluded from computations.
     * @param hist_file Read this previously created histogram instead of forming one from DSET.
     * @param prefix Write histogram to niml file called PREF.niml.hist
     * @param equalized Write a histogram equalized version of the input dataset.
     * @param nbin Use K bins.
     * @param min Minimum intensity.
     * @param max Maximum intensity.
     * @param binwidth Bin width.
     * @param ignore_out Do not count samples outside the user specified range.
     * @param range_hist Use previously created histogram to set range and binwidth parameters.
     * @param showhist Display histogram to stdout.
     * @param at_val Set the value at which you want histogram values.
     * @param get_params Return the desired properties at a given value. You can select multiple properties.
     * @param voxvol Specify voxel volume in mm^3. To be used with upvol.
     * @param val_at Return the value where histogram property PAR is equal to PARVAL. PAR can be: cdf, rcdf, ncdf, nrcdf, upvol.
     * @param quiet Return a concise output to simplify parsing.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dHistOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_HIST_METADATA);
    const params = v_3d_hist_params(input, dind_subbrick, mask_dset, mask_range, cmask, hist_file, prefix, equalized, nbin, min, max, binwidth, ignore_out, range_hist, showhist, at_val, get_params, voxvol, val_at, quiet)
    return v_3d_hist_execute(params, execution);
}


export {
      V3dHistOutputs,
      V3dHistParameters,
      V_3D_HIST_METADATA,
      v_3d_hist,
      v_3d_hist_params,
};
